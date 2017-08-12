'use strict';

var express = require('express'),
    app = express(),
    db = require('./config/db'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    routes = require('./api/v1/index'),

    CustomerController = require('./controller/customers'),
    DiscountsController = require('./controller/discounts'),
    LocaitonsController = require('./controller/locations'),
    ProductReservationsController = require('./controller/product_reservations'),
    ProductsController = require('./controller/products'),
    UserLocationsController = require('./controller/user_locations'),
    UserController = require('./controller/users'),
    WardropsController = require('./controller/wardrops');

const router = express.Router();

// index based routing hata fixed
/*
var index = require('./routes/index');
app.use('/', index);
*/

app.use(router);
router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

require('./api/v1/customers')(router);
require('./api/v1/discounts')(router);
require('./api/v1/locations')(router);
require('./api/v1/product_reservations')(router);
require('./api/v1/products')(router);
require('./api/v1/user_locations')(router);
require('./api/v1/users')(router);
require('./api/v1/wardrops')(router);

/*app.use('/customers', CustomerController);
app.use('/discounts', DiscountsController);
app.use('/locations', LocationsController);
app.use('/product_reservations', ProductReservationsController);
app.use('/products', ProductsController);
app.use('/user_locations', UserLocationsController);
app.use('/users', UserController);
app.use('/wardrops', WardropsController);
*/

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
