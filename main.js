let app = require('electron').app,
  window = require('electron').BrowserWindow,
  MainWindow = null,
  server = require('./server')

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  MainWindow = new window({
    width: 900,
    height: 600
  })

  MainWindow.loadURL('http://localhost:' + server.config.port)

  MainWindow.on('closed', () => {
    MainWindow = null
  })
})