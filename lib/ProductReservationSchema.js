const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductReservationSchema = new Schema ({

  reservationid : {},

  userid : {},

  storeid : {},

  productDetails :
  {

    product :
    [
      {
        productid : {},
        count : {}
      }
    ],
//Eklenmesi gereken başka elemanlar var mı bak.
  },

  reservationTime : {}, //Statik olarak 3 saat atanıcak.

  startDate : {},

  endDate : {},

  isActive : {},

  status : {}

});

const ProductReservation = mongoose.model('product_reservations', ProductReservationSchema);

module.exports = ProductReservation;
