const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductScema = new Schema ({

  productid : {},

  productCode : {},

  customerid : {},

  productTypeid : {},
  
  stock : {},

  productDetails :
    {
      brand : {},
      name : {},
      color :
      {
        multi: {},
        green : {},
        orange : {},
        purple : {},
        red : {},
        blue : {},
        grey : {},
        white : {},
        navy : {},
        black : {},
        pink : {},
        brown : {},
        metalic : {},
        aqua : {},
        yellow : {}
      },
      productInfo : {} //type: String, min: 5, max: 15
    },

  productSex :
  {
    female : {},
    male : {},
    unisex : {}
  },

  productpic :
  [
    {
      picName : {},
      picPath : {}
    }
  ],

  status :
  {
    soldOut: {},
    reservation : {},
    discount : {}
  },

  isActive : {},

  productPrice : {},

  salesPrice : {},

  discountid : {}

});

const Product = mongoose.model('products', ProductScema);

module.exports = Product;
