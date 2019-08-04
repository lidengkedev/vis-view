var express = require('express')
var router = express.Router()

var data = {
  code: 1,
  msg: 'success'
}

router.get('/', function(req, res, next) {
  data.data = { query: req.query, method: 'get', path: '/' }
  res.json(data)
})

module.exports = router