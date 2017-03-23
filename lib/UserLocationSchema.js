const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserLocationSchema = new Schema ({

  userLocationid : {},

  userid : {},

  location :
  [
    {
      timestamp : {},
      lat : {},
      long : {}
    }
  ],

  locationEndTimestamp : {}

});

const UserLocation = mongoose.model('user_locations', UserLocationSchema);

module.exports = UserLocation;
