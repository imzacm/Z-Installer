const express = require('express'),
  router = express.Router(),
  path = require('path'),
  dataStore = require('../DataStore')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router