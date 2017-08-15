'use strict';

var express = require('express'),
    app = express(),
    db = require('./config/db'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    routes = require('./api/v1/index'),
    router = express.Router(),

    CustomerController = require('./controller/customers.controller'),
    DiscountsController = require('./controller/discounts.controller'),
    LocaitonsController = require('./controller/locations.controller'),
    ProductReservationsController = require('./controller/product_reservations.controller'),
    ProductsController = require('./controller/products.controller'),
    UserLocationsController = require('./controller/user_locations.controller'),
    UserController = require('./controller/users.controller'),
    WardropsController = require('./controller/wardrops.controller');



// index based routing hata fixed
/*
var index = require('./routes/index');
app.use('/', index);
*/



// Header Access Control Context
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Type', 'application/json');
    res.header('Content-Type', 'text/plain');
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
//view Engine
router.use(express.static(path.join(__dirname, 'public')));

require('./api/v1/customers')(router);
require('./api/v1/discounts')(router);
require('./api/v1/locations')(router);
require('./api/v1/product_reservations')(router);
require('./api/v1/products')(router);
require('./api/v1/user_locations')(router);
require('./api/v1/users')(router);
require('./api/v1/wardrops')(router);

// Router.use() Error Fixed.

/*app.use('/customers', CustomerController);
app.use('/discounts', DiscountsController);
app.use('/locations', LocationsController);
app.use('/product_reservations', ProductReservationsController);
app.use('/products', ProductsController);
app.use('/user_locations', UserLocationsController);
app.use('/users', UserController);
app.use('/wardrops', WardropsController);*/

app.use(router);

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
