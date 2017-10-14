let app = require('electron').app,
  Window = require('electron').BrowserWindow,
  mainWindow = null,
  server = require('./server')

global.electron = {}

app.on('Window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  mainWindow = new Window({
    width: 900,
    height: 600
  })

  mainWindow.loadURL('http://localhost:' + server.config.port)

  global.electron.started = true

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})