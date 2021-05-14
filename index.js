const { menubar } = require('menubar');
const path = require('path')
const { app, Menu, MenuItem, Tray } = require('electron')
const client = require('./src/lib/client')
var k8s = require("@kubernetes/client-node");
const TiltApi = require("./src/gen/api").TiltDevV1alpha1Api;
const shell = require('electron').shell;

app.whenReady().then(() => {
  const tray = new Tray(path.join(__dirname, 'favicon.png'))
  tray.setToolTip('Tilt On Top')

  let mb = menubar({
    tray: tray,
    browserWindow: {
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      }
    }
  });

  let contextOverride = ""

  function getConfig() {
    let config = client.newTiltConfig()
    config.getContexts().forEach((c) => {
      if (c.name == contextOverride) {
        config.setCurrentContext(c.name)
      }
    })

    if (!config.getCurrentContext()) {
      config.getContexts().forEach((c) => {
        if (c.name == 'tilt-default') {
          config.setCurrentContext(c.name)
        }
      })
    }

    if (!config.getCurrentContext() && config.getContexts().length) {
      config.setCurrentContext(config.getContexts()[0].name)
    }
    return config
  }

  function safeSend(session) {
    try {
      mb.window.webContents.send('session', session)
    } catch (err) {
      console.error('send error', err)
    }
  }

  let informer

  function startInformer() {
    const config = getConfig()
    const api = config.makeApiClient(TiltApi);
    const listFn = () => api.listSession();
    listFn().then(() => {
      informer = k8s.makeInformer(config, '/apis/tilt.dev/v1alpha1/sessions', listFn)
      informer.on('add', safeSend)
      informer.on('update', safeSend)
      informer.on('error', (err) => {
        console.error('Informer error: ' + err)
        console.error('Backing off (5s)')
        // Restart informer after 5sec
        setTimeout(() => {
          informer.start()
        }, 5000)
      })
      informer.start()
    }).catch((err) => {
      console.error('Cannot connect to Tilt: ' + err)
    })
  }

  function stopInformer() {
    if (informer) {
      informer.stop()
      informer = null
    }
  }

  function renderMenu() {
    let config = getConfig()
    let menuConfig = [{label: 'No tilt running'}]
    if (config.getContexts().length) {
      menuConfig = [
        {
          label: 'Service Chart',
          click: () => {
            mb.showWindow(null)
          }
        },
        {
          label: 'Dashboard',
          click: () => {
            let name = config.getCurrentContext()
            let port = 10350
            if (name != 'tilt-default') {
              port = parseInt(name.substring(5), 10)
            }
            shell.openExternal(`http://localhost:${port}/`)
          }
        },
      ]
      menuConfig.push({
        label: 'Tilt Sessions',
        submenu: config.getContexts().map((context) => {
          return {
            type: "radio",
            label: context.name,
            checked: context.name == config.getCurrentContext(),
            click: () => {
              contextOverride = context.name
              renderMenu()
              if (informer) {
                stopInformer()
                startInformer()
              }
            }
          }
        })
      })
    }
    let menu = Menu.buildFromTemplate(menuConfig)
    tray.setContextMenu(menu)
  }
  renderMenu()

  mb.on('ready', () => {
    console.log('app is ready');
    // your app code here
  });

  mb.on('after-show', startInformer)
  mb.on('after-hide', stopInformer)
})
