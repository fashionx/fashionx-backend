const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductScema = new Schema ({

  productid : {Schema.Types.ObjectId},

  productCode : { type : String, required : true },

  customerid : {},

  productTypeid : {},

  discountid : {},

  stock : { type : Number, required : true },

  productDetails :
    {
      brand : { type : String, default: '' },
      name : { type : String, default: '' },
      color :
      {
        multi: { type : Boolean },
        green : { type : Boolean },
        orange : { type : Boolean },
        purple : { type : Boolean },
        red : { type : Boolean },
        blue : { type : Boolean },
        grey : { type : Boolean },
        white : { type : Boolean },
        navy : { type : Boolean },
        black : { type : Boolean },
        pink : { type : Boolean },
        brown : { type : Boolean },
        metalic : { type : Boolean },
        aqua : { type : Boolean },
        yellow : { type : Boolean }
      },
      productInfo : { type: String, min: 5, max: 100, required : true} //type: String, min: 5, max: 15
    },

  productSex :
  {
    female : { type : Boolean},
    male : { type : Boolean },
    unisex : { type : Boolean }
  },

  productpic :
  [
    {
      picName : { type : String, default: '' },
      picPath : { type : String, default: '' }
    }
  ],

  status :
  {
    soldOut: { type : Boolean },
    reservation : { type : Boolean },
    discount : { type : Boolean }
  },

  isActive : { type : Boolean, default : true },

  productPrice : { type : Number },

  salesPrice : { type : Number, default : true }

});

const Product = mongoose.model('products', ProductScema);

module.exports = Product;
