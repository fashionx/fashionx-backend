//İndirim document
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DiscountSchema = new Schema ({

  discountid : {},

  productid : {},

  storeid : {},

  discountDetails :
  {
    discountPersent : {},
    salesPrice : {}
  },

  createDate : {},

  endDate : {},

  isActive : {}

});

const Discount = mongoose.model('discounts', DiscountSchema);

module.exports = Discount;
