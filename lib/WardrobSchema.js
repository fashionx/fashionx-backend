const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WardrobSchema = new Schema({

  wardrobid : {},

  wardrop_productid :
  [
    {
      productid : {}
    }
  ],

  createDate : {},

  customerid : {},

  isActive : {},

  soldActive : {}

});

const Wardrop = mongoose.model('wardrops', WardrobSchema);

module.exports = Wardrop;
