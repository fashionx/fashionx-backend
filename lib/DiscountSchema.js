//İndirim document
const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId,
      constants = require('../resources/constants');


const DiscountSchema = new Schema ({

  discountid : ObjectId,

  discountUniqeid : { type : String }, //generate

  productid : [ObjectId],

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

DiscountSchema.statics = {

    /**
     findOneDiscount. return the one discount object.
     @param id: get id to find one discount by id.
     @param callback: callback of this form.
   */
   get: function(query, callback) {
       this.findOne(query, callback);
   },

   /**
     findDiscounts. return the discount objects.
     @param callback: callback of this form.
   */
   getAll: function(query, callback) {
       this.find(query, callback);
   },

   /**
     updateDiscount. return the create discount object result.
     @param updateData: updateData is use to update discount w.r.t id.
     @param callback: callback of this form.
   */
   updateById: function(id, updateData, callback) {
       this.update(id, {$set: updateData}, callback);
   },
   removeById: function(removeData, callback) {
       this.remove(removeData, callback);
   },
   create: function(data, callback) {
       var discount = new this(data);
       discount.save(callback);
   }
}

const Discount = mongoose.model('discounts', DiscountSchema);

/* Export Schema */
module.exports = Discount;
