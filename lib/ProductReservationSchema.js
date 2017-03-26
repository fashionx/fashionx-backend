rsconst mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductReservationSchema = new Schema ({

  reservationid : {Schema.Types.ObjectId},

  reservationUniqeid : { type : String }, //generate

  userid : {},

  storeid : {},

  productDetails :
  {

    product :
    [
      {
        productid : {},
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

const ProductReservation = mongoose.model('product_reservations', ProductReservationSchema);

module.exports = ProductReservation;
