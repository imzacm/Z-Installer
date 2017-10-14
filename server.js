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
app.set('views', __dirname + '/src/views')

app.use((req, res, next) => {
  Object.assign(res.locals, dataStore.get().locals)
})

app.use('/', require(__dirname + '/src/routes/index'))

app.listen(config.port, () => {
  console.log('Listening on ' + config.port)
})

module.exports.config = config
module.exports.app = app