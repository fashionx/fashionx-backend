const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductTypeSchema = Schema ({

  productTypeid : {},

  tshirt :
  {
    xsmall : {},
    small : {},
    medium : {},
    large : {},
    xlarge : {},
    xxlarge : {},
    xxxlarge : {}
  },

  jeans : //24,50
  [
    {
      size: {} //seçilen numaralar buraya atılıyor olacak.
    }
  ],

  suit_jacket :
  [
    {
      size: {} //seçilen numaralar buraya atılıyor olacak.
    }
  ], //36,66

  accessories :
  {
    small : {},
    medium : {},
    large : {}
  },

  shoes :
  [
    {
      size: {} //seçilen numaralar buraya atılıyor olacak.
    }
  ], //34,46

  shirt :
  [
    {
      size: {} //seçilen numaralar buraya atılıyor olacak.
    }
  ], //36,50

  reqular :
  {
    xsmall : {},
    small : {},
    medium : {},
    large : {},
    xlarge : {},
    xxlarge : {}
  }

});

const ProductType = mongoose.model('productTypes', ProductTypeSchema);

module.exports = ProductType;
