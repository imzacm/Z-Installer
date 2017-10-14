const config = {
    port: 3009
  },
  path = require('path'),
  fs = require('fs'),
  express = require('express'),
  app = express(),
  dataStore = require('./src/DataStore'),
  updateCat = require('./src/getCat')

dataStore.add({locals: {}})
updateCat.update()

dataStore.get().updateCat.then(() => {
  console.log('promise resolved')
})

app.set('view engine', 'pug')
app.set('views', path.resolve('.', 'src/views'))

app.use(express.static('./node_modules/daemonite-material/css'))
app.use(express.static('./node_modules/daemonite-material/js'))
app.use(express.static('./node_modules/jquery'))
app.use(express.static('./node_modules/tether'))
app.use(express.static('./node_modules/bootstrap'))
app.use(express.static('./node_modules/popper.js'))

app.use((req, res, next) => {
  Object.assign(res.locals, dataStore.get().locals)
  next()
})

app.use('/', require(path.resolve('.', 'src/routes/index')))

app.listen(config.port, () => {
  console.log('Listening on ' + config.port)
})

module.exports.config = config
module.exports.app = app