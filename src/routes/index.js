const express = require('express'),
  Router = express.Router(),
  path = require('path'),
  dataStore = require('../DataStore')

Router.get('/', (req, res) => {
  res.render('index')
})

module.exports = Router