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

UserLocationSchema.statics = {

    /**
     findOneUserLocation return the one UserLocation object.
     @param id: get id to find one userLocation by id.
     @param callback: callback of this form.
   */
   get: function(query, callback) {
       this.findOne(query, callback);
   },
   /**
     findUserLocation. return the userLocation objects.
     @param callback: callback of this form.
   */
   getAll: function(query, callback) {
       this.find(query, callback);
   },

   /**
     updateUserlocation. return the create userLocation object result.
     @param updateData: updateData is use to update userLocation w.r.t id.
     @param callback: callback of this form.
   */
   updateById: function(id, updateData, callback) {
       this.update(id, {$set: updateData}, callback);
   },
   removeById: function(removeData, callback) {
       this.remove(removeData, callback);
   },
   create: function(data, callback) {
       var user_location = new this(data);
       user_location.save(callback);
   }
}

const UserLocation = mongoose.model('user_locations', UserLocationSchema);

module.exports = UserLocation;
