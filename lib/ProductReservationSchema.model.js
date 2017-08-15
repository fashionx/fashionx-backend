const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId,
      constants = require('../resources/constants');

const ProductReservationSchema = new Schema ({

  reservationid : ObjectId,

  reservationUniqeid : { type : String }, //generate

  userid : [ObjectId],

  storeid : [ObjectId],

  productDetails :
  {

    product :
    [
      {
        productid : [ObjectId],
        count : { type : Number}
      }
    ],
//Eklenmesi gereken başka elemanlar var mı bak.
  },

  reservationTime : { type : Date, required : true }, //Statik olarak 3 saat atanıcak.

  startDate : { type : Date, required : true },

  endDate : { type : Date, required : true },

  isActive : { type : Boolean },

  status : { type : Boolean }

});

ProductReservationSchema.statics = {

    /**
     findOneproductReservation. return the one ProductReervation object.
     @param id: get id to find one ProductReservation by id.
     @param callback: callback of this form.
   */
   get: function(query, callback) {
       this.findOne(query, callback);
   },
   /**
     findProductReservation. return the ProductReservation objects.
     @param callback: callback of this form.
   */
   getAll: function(query, callback) {
       this.find(query, callback);
   },

   /**
     updateProductReservation. return the create ProductReervation object result.
     @param updateData: updateData is use to update ProductReservation w.r.t id.
     @param callback: callback of this form.
   */
   updateById: function(id, updateData, callback) {
       this.update(id, {$set: updateData}, callback);
   },
   removeById: function(removeData, callback) {
       this.remove(removeData, callback);
   },
   create: function(data, callback) {
       var product_reservation = new this(data);
       product_reservation.save(callback);
   }
}

const ProductReservation = mongoose.model('product_reservations', ProductReservationSchema);

module.exports = ProductReservation;
