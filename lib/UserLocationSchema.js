const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserLocationSchema = new Schema ({

  userLocationid : {Schema.Types.ObjectId},

  userid : {},

  location :
  [
    {
      timestamp : { type : Date, required : true },
      lat : { type : String, required : true },
      long : { type : String, required : true }
    }
  ],

  locationEndTimestamp : { type : Date, required : true }

});

const UserLocation = mongoose.model('user_locations', UserLocationSchema);

module.exports = UserLocation;
