const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationSchema = new Schema ({

  locationid : {Schema.Types.ObjectId},

  storeid : {},

  userLocationid : {},

  distance : { type : String, required : true},

  kmInfo : { type : String, required : true }

});

const Location = mongoose.model('locations', LocationSchema);

module.exports = Location;
