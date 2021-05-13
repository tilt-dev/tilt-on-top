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

  function sendSessionData() {
    let config = client.newTiltConfig()
    let context = config.getCurrentContext()
    if (!context && config.getContexts().length) {
      config.setCurrentContext(config.getContexts()[0])
    }

    let tiltClient = config.makeApiClient(TiltApi)
    let watcher = new k8s.Watch(config)
    watcher.watch(
      '/apis/tilt.dev/v1alpha1/sessions', {},
      (phase, obj) => {
        console.error('send phase', phase)
        try {
          mb.window.webContents.send('session', {phase, obj})
        } catch (err) {
          console.error('send error', err)
        }
      },
      (err) => {
        console.error('done', err)
      })
  }

  function renderMenu() {
    let config = client.newTiltConfig()
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
            label: context.name
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

  mb.on('after-create-window', sendSessionData)
})
