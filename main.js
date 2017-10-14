let app = require('electron').app,
  window = require('electron').BrowserWindow,
  mainWindow = null,
  server = require('./server')

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  mainWindow = new window({
    width: 900,
    height: 600
  })

  mainWindow.loadURL('http://localhost:' + server.config.port)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})