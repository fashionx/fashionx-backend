const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WardrobSchema = new Schema({

  wardrobid : {Schema.Types.ObjectId},

  wardrop_productid :
  [
    {
      productid : {},
      status :
      {
        soldout : { type : Boolean },
        reservation : { type : Boolean },
        discount : { type : Boolean}
      }
    }
  ],

  createDate : { type : Date, default : Date.now },

  userid : {},

  isActive : { type : Boolean },

  soldActive : { type : Boolean }

});

const Wardrop = mongoose.model('wardrops', WardrobSchema);

module.exports = Wardrop;
