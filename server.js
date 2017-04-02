var express = require('express');
var path = require('path');
var logger = require('morgan');
var config = require('./config');
var index = require('./api/v1/index');
var bluebird = require('bluebird');
var bodyParser = require('body-parser');
var http = require('http');
var session = require('express-session');
var request = require('request');
var cookieParser = require('cookie-parser');

var routes = require('./api/v1/index');

// API Defines
var users = require('./api/v1/users');
var customers = require('./api/v1/customers');
var discounts = require('./api/v1/discounts');
var locations = require('./api/v1/locations');
var product_reservations = require('./api/v1/product_reservations');
var products = require('./api/v1/products');
var user_locations = require('./api/v1/user_locations');
var wardrops = require('./api/v1/wardrops');

var app = express();

var router = express.Router();

// start db
var db = require('./config/db');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Accept, Accept-Version, Connection, Content-Type, Authorization, Date, Content-Length, X-Requested-With');
    //headers için * da kullanabilirsin.
    next();
});

app.use(router);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({secret : 'gem1$3oh(+pak8hlyfj-b*s$g6p9i$x(7a)2+9(_7%j+l)c(r@',resave: false, saveUninitialized: true}));
//app.use('/',index);


// app.use('/', routes);
// app.use('/users', users);
require('./api/v1/customers')(router);
require('./api/v1/discounts')(router);
require('./api/v1/locations')(router);
require('./api/v1/product_reservations')(router);
require('./api/v1/products')(router);
require('./api/v1/user_locations')(router);
require('./api/v1/users')(router);
require('./api/v1/wardrops')(router);


/* Middlewares basically intercepts incoming http request and as such you
 can use them to perform several operations ranging from authentication to
 validations etc.*/
// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
router.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
