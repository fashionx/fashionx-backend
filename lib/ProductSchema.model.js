const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId,
      constants = require('../resources/constants');

const ProductSchema = new Schema ({

  productid : ObjectId,

  productCode : { type : String, required : true },

  customerid : [ObjectId],

  productTypeid : [ObjectId], //out off

  discountid : [ObjectId],

  stock : { type : Number, required : true },

  productDetails :
    {
      brand : { type : String, default: null },
      name : { type : String, default: null },
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

      product_size:
      {
        xsmall : { type : Boolean },
        small : { type : Boolean },
        medium : { type : Boolean },
        large : { type : Boolean },
        xlarge : { type : Boolean },
        xxlarge : { type : Boolean },
        xxxlarge : { type : Boolean },

        sizeNo:
        [
          {
            size: { type : Number }
          }
        ]
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
      picName : { type : String, default: null },
      picPath : { type : String, default: null }
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


ProductSchema.statics = {

    /**
     findOneProduct. return the one product object.
     @param id: get id to find one product by id.
     @param callback: callback of this form.
   */
   get: function(query, callback) {
       this.findOne(query, callback);
   },
   /**
     findProduct. return the product objects.
     @param callback: callback of this form.
   */
   getAll: function(query, callback) {
       this.find(query, callback);
   },

   /**
     updateProduct. return the create product object result.
     @param updateData: updateData is use to update product w.r.t id.
     @param callback: callback of this form.
   */
   updateById: function(id, updateData, callback) {
       this.update(id, {$set: updateData}, callback);
   },
   removeById: function(removeData, callback) {
       this.remove(removeData, callback);
   },
   create: function(data, callback) {
       var product = new this(data);
       product.save(callback);
   }
}

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
