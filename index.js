const { menubar } = require('menubar');
const path = require('path')
const { app, Menu, MenuItem, Tray } = require('electron')
const client = require('./src/lib/client')
var k8s = require("@kubernetes/client-node");
const TiltApi = require("./src/gen/api").TiltDevV1alpha1Api;

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

    let context = config.getCurrentContext()
    if (!context && config.getContexts().length) {
      config.setCurrentContext(config.getContexts()[0].name)
    }
    console.log('context', config.getCurrentContext())
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
          label: 'Status',
          click: () => {
            mb.showWindow(null)
          }
        }
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
