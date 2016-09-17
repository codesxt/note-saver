var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
require('./api/config/passport');

var apiRouter = require('./api/routes/router')

var app = express();
app.use(passport.initialize());
app.use(bodyParser.json());
app.use('/', require('./api/controllers/static'));
app.use('/api', apiRouter);
/*
app.get('*', function(req, res){
  res.sendfile('layouts/app.html');
  //res.send('Not found. Redirecting...', 404);
});*/

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

var server = app.listen(3000, function(){
	console.log('Server listening on', 3000);
});
