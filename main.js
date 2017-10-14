global.app = require('electron').app

let Window = require('electron').BrowserWindow,
  mainWindow = null,
  server = require('./server')

let self = this
self.startedPromise = () => {
  return new Promise((resolve, reject) => {
    self.startedRes = resolve
  })
}
self.closedPromise = () => {
  return new Promise((resolve, reject) => {
    self.closedRes = resolve
  })
}

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

  self.startedRes()

  mainWindow.on('closed', () => {
    mainWindow = null
    self.closedRes()
  })
})

module.exports = {
  started: self.startedPromise().then(() => {return true}),
  closed: self.closedPromise().then(() => {
    return true
  })
}