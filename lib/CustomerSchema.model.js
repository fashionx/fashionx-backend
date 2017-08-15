'use strict';

const mongoose = require('mongoose'),
//const bcrypt = require('bcrypt');
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId,
      constants = require('../resources/constants');

/**
 * @module customers
 * @description contain the details of customer information, conditions and actions.
 */

const CustomerSchema = new Schema({

  storeid : ObjectId,

  uniqeStoreid : { type : String, default: null }, //generate

  storename : { type : String, required : true },

  email : { type : String, index: {unique: true}, required : true },

  password : { type : String, required : true, unique: true },

  oldpassword1 : { type : String, default: null },

  oldpassword2 : { type : String, default: null },

  forgetPasswordDate : { type : String, default: null },

  createDate : { type : Date, default : Date.now },

  endDate : { type : Date },

  lastLogin : { type : Date },

  brandname :{ type : String, required : true },

  storephone :
    {
      mobil : { type : String, required : true, default : null },
      office : { type : String, required : true, default : null }
    },

  storepic :
  [
    {
        _id : {},
        url : { type : String, default: null }
    }
  ],

  location :
  {
    lat : { type : String, required : true },
    long : { type : String, required : true }
  },

  address :
  {
    country : { type : String, default: null },
    city : { type : String, default: null },
    district : { type : String, default: null },
    zone : { type : String, default: null },
    openaddress : { type : String, default: null }
  },

  isActive : { type : Boolean, default : true },

  role : //array olma olasılığı ? bi bak derim!
  {
    instaCustomer : { type : Boolean},
    boutiqueCustomer : { type : Boolean },
    storeCustomer : { type : Boolean },
    admin : { type : Boolean }
  },

});

/********************/
/* DB Query Callback Methods */
/********************/
CustomerSchema.statics = {

      /**
       findOneCustomer. return the one customers object.
       @param id: get id to find one customers by id.
       @param callback: callback of this form.
     */
     get: function (query, callback) {
        this.findOne(query, callback);
     },

     /**
       findCustomer. return the Customer objects.
       @param callback: callback of this form.
     */
    getAll: function (query, callback) {
        this.find(query, callback);
    },

    /**
      updateCustomer. return the create customer object result.
      @param updateData: updateData is use to update customer w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function (id, updateData, callback) {
        this.update(id, {$set: updateData}, callback);
    },

    removeById: function (removeData, callback) {
        this.remove(removeData, callback);
    },

    create: function(data, callback){
        var customer = new this(data);
        customer.save(callback);
    }
}



//Auth yazılacak. importent!;
//how to use look bcrypt!  importent!;

const Customer = mongoose.model('customers', CustomerSchema);

module.exports = Customer;
