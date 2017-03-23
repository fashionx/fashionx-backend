const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductScema = new Schema ({

  productid : {},

  productCode : {},

  customerid : {},

  productDetails :
    {
      name : {},
      title : {},
      brand : {},
      productInfo : {}, //type: String, min: 5, max: 15
    },

  productSex :
  {
    female : {},
    male : {},
    unisex : {}
  },

  productSize :
  {
    xsmall : {},
    small : {},
    medium : {},
    large : {},
    xlarge : {},
    xxlarge : {},
    xxxlarge : {}
  },

  productpic :
  [
    {
      picName : {},
      picPath : {}
    }
  ],

  isActive : {},

  productPrice : {},

  salesPrice : {},

  productTypeid : {},

  discountid : {}

});

const Product = mongoose.model('products', ProductScema);

module.exports = Product;
