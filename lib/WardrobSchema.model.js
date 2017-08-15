const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId,
      constants = require('../resources/constants');

const WardrobSchema = new Schema({

  wardrobid : ObjectId,

  wardrop_productid :
  [
    {
      productid : [ObjectId],
      status :
      {
        soldout : { type : Boolean },
        reservation : { type : Boolean },
        discount : { type : Boolean}
      }
    }
  ],

  createDate : { type : Date, default : Date.now },

  userid : [ObjectId],

  isActive : { type : Boolean },

  soldActive : { type : Boolean }

});

WardrobSchema.statics = {

    /**
     findOneWardrop. return the one wardrop object.
     @param id: get id to find one wardrop by id.
     @param callback: callback of this form.
   */
   get: function(query, callback) {
       this.findOne(query, callback);
   },
   /**
     findWardrop. return the wardrop objects.
     @param callback: callback of this form.
   */
   getAll: function(query, callback) {
       this.find(query, callback);
   },

   /**
     updatewardrop. return the create wardrop object result.
     @param updateData: updateData is use to update wardrop w.r.t id.
     @param callback: callback of this form.
   */
   updateById: function(id, updateData, callback) {
       this.update(id, {$set: updateData}, callback);
   },
   removeById: function(removeData, callback) {
       this.remove(removeData, callback);
   },
   create: function(data, callback) {
       var wardrop = new this(data);
       wardrop.save(callback);
   }
}

const Wardrop = mongoose.model('wardrops', WardrobSchema);

module.exports = Wardrop;
