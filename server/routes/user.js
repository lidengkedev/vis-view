var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var data = {
  code: 1,
  msg: 'success'
}

router.get('/', function(req, res, next) {
  res.json(data)
})

module.exports = router