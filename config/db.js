var mongoose = require ('mongoose');
var connectionUri = 'mongodb://root:root@ds135680.mlab.com:35680/nodejs-jwt';
var log = require('../utilities/log');
var consoleLog = new log.console();

mongoose.connect(connectionUri, (err) => {
    var message = 'DB Connection status: ' + !err;
    if (!err) {
        consoleLog.success(message);
    }else {
        consoleLog.error(message);
    }
});






/*mongoose.connect('mongodb://root:root@ds135680.mlab.com:35680/nodejs-jwt');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log("Connection with database succeeded.");
});

exports.db = db; */
