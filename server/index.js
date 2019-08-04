var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var logger = require('morgan')
var IndexRouter = require('./routes/index')
var userRouter = require('./routes/user')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/', IndexRouter)
app.use('/user', userRouter)

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

module.exports = app