//İndirim document
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DiscountSchema = new Schema ({

  discountid : {},

  discountUniqeid : {} //generate

  productid : {},

  storeid : {},

  discountDetails :
  {
    discountPercent : {},
    salesPrice : {}
  },

  campaignDate :
  {
    createDate : {},
    endDate : {},
  },

  isActive : {} //status

});

const Discount = mongoose.model('discounts', DiscountSchema);

module.exports = Discount;
