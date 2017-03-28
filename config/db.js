var mongoose = require ('mongoose'); // get our config file
//var config = require('./config');

//mongoose.connect(config.database);

mongoose.connect('mongodb://root:root@ds135680.mlab.com:35680/nodejs-jwt');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

exports.db = db;
