var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var index = require('./api/v1/index');
var bluebird = require('bluebird');
var bodyParser = require('body-parser');
var http = require('http');
var session = require('express-session');
var request = require('request');
var cookieParser = require('cookie-parser');

var PORT = process.env.PORT || 3000;
var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
// views lerin olduğu path yolunu gösteriyor. buradan views leri çekerek ilerliyor.
app.use(express.static(__dirname + "/views")); //Kullanım amacı nedir ?
app.use(cookieParser());
app.use(session({secret : 'gem1$3oh(+pak8hlyfj-b*s$g6p9i$x(7a)2+9(_7%j+l)c(r@',resave: false, saveUninitialized: true}));
app.use('/',index);

module.exports = app;
app.listen(PORT, function () {
  console.log('App Listening on port: '+ PORT);
});
