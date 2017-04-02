//İndirim document
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DiscountSchema = new Schema ({

  discountid : {Schema.Types.ObjectId},

  discountUniqeid : { type : String } //generate

  productid : {},

  storeid : {},

  discountDetails :
  {
    discountPercent : { type : String, default: null },
    salesPrice : { type : String, default: null }
  },

  campaignDate :
  {
    createDate : { type : Date, required : true },
    endDate : { type : Date, required : true },
  },

  isActive : { type : Boolean } //status

});

const Discount = mongoose.model('discounts', DiscountSchema);

module.exports = Discount;
