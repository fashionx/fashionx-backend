const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationSchema = new Schema ({

  locationid : {},

  storeLocationid : {},

  userLocationid : {},

  distance : {},

  kmInfo : {}

});

const Location = mongoose.model('locations', LocationSchema);

module.exports = Location;
