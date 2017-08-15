const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId,
      constants = require('../resources/constants');


const LocationSchema = new Schema ({

  locationid : ObjectId,

  storeid :[ObjectId],

  userLocationid : [ObjectId],

  distance : { type : String, required : true},

  kmInfo : { type : String, required : true }

});

LocationSchema.statics = {
  /**
   findOneLocation. return the one location object.
   @param id: get id to find one location by id.
   @param callback: callback of this form.
 */
 get: function(query, callback) {
     this.findOne(query, callback);
 },

 /**
   findLocation. return the location objects.
   @param callback: callback of this form.
 */
 getAll: function(query, callback) {
     this.find(query, callback);
 },

 /**
   updateLocation. return the create location object result.
   @param updateData: updateData is use to update location w.r.t id.
   @param callback: callback of this form.
 */
 updateById: function(id, updateData, callback) {
     this.update(id, {$set: updateData}, callback);
 },
 removeById: function(removeData, callback) {
     this.remove(removeData, callback);
 },
 create: function(data, callback) {
     var location = new this(data);
     location.save(callback);
 }

}

const Location = mongoose.model('locations', LocationSchema);

/** export schema */
module.exports = Location;
