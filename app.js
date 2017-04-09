'use strict';

var express = require('express'),
    app = express(),
    db = require('./config/db'),
    CustomerController = require('./controller/customers'),
    DiscountsController = require('./controller/discounts'),
    LocaitonsController = require('./controller/locations'),
    ProductReservationsController = require('./controller/product_reservations'),
    ProductsController = require('./controller/products'),
    UserLocationsController = require('./controller/user_locations'),
    UserController = require('./controller/users'),
    WardropsController = require('./controller/wardrops');

app.use('/customers', CustomerController);
app.use('/discounts', DiscountsController);
app.use('/locations', LocaitonsController);
app.use('/product_reservations', ProductReservationsController);
app.use('/products', ProductsController);
app.use('/user_locations', UserLocationsController);
app.use('/users', UserController);
app.use('/wardrops', WardropsController);


module.exports = app;
