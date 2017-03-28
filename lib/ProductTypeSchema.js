//out off
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductTypeSchema = Schema ({

  productTypeid : {Schema.Types.ObjectId},

  tshirt :
  {
    xsmall : { type : Boolean },
    small : { type : Boolean },
    medium : { type : Boolean },
    large : { type : Boolean },
    xlarge : { type : Boolean },
    xxlarge : { type : Boolean },
    xxxlarge : { type : Boolean }
  },

  jeans : //24,50
  [
    {
      size: { type : Number } //seçilen numaralar buraya atılıyor olacak.
    }
  ],

  suit_jacket :
  [
    {
      size: { type : Number } //seçilen numaralar buraya atılıyor olacak.
    }
  ], //36,66

  accessories :
  {
    small : { type : Boolean },
    medium : { type : Boolean },
    large : { type : Boolean }
  },

  shoes :
  [
    {
      size: { type : Number } //seçilen numaralar buraya atılıyor olacak.
    }
  ], //34,46

  shirt :
  [
    {
      size: { type : Number } //seçilen numaralar buraya atılıyor olacak.
    }
  ], //36,50

  reqular :
  {
    xsmall : { type : Boolean },
    small : { type : Boolean },
    medium : { type : Boolean },
    large : { type : Boolean },
    xlarge : { type : Boolean },
    xxlarge : { type : Boolean }
  }

});

const ProductType = mongoose.model('product_types', ProductTypeSchema);

module.exports = ProductType;
