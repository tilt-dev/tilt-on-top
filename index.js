const { menubar } = require('menubar');
const path = require('path')
const { app, Menu, Tray } = require('electron')
const client = require('./src/lib/client')

app.whenReady().then(() => {
  const tray = new Tray(path.join(__dirname, 'favicon.png'))
  let config = client.newTiltConfig()

  var mb = null
  let menuItems = [{label: 'No tilt running'}]
  if (config.getContexts().length) {
    menuItems = config.getContexts().map((context) => {
      return {
        label: context.name,
        click: () => {
          console.log('xxx', mb)
          mb.showWindow(null)
        }
      }
    })
  }

  const contextMenu = Menu.buildFromTemplate(menuItems)
  tray.setToolTip('Tilt On Top')
  tray.setContextMenu(contextMenu)

  mb = menubar({tray: tray});
  mb.on('ready', () => {
    console.log('app is ready');
    // your app code here
  });
})
