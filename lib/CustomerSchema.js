'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

/**
 * @module customers
 * @description contain the details of company information, conditions and actions.
 */

const CustomerSchema = new Schema({

  storeid : {Schema.Types.ObjectId},

  uniqeStoreid : { type : String, default: '' }, //generate

  storename : { type : String, required = true },

  email : { type : String, index: {unique: true}, required = true },

  password : { type String, required : true, unique: true },

  oldpassword1 : { type : String, default: '' },

  oldpassword2 : { type : String, default: '' },

  forgetPasswordDate : { type : String, default: '' },

  createDate : { type : Date, default : Date.now },

  endDate : { type : Date },

  lastLogin : { type : Date },

  brandname :{ type : String, required = true },

  storephone :
    {
      mobil : { type : String, required = true },
      office : { type : String, required = true }
    },

  storepic :
  [
    {
        _id : {},
        url : { type : String, default: '' }
    }
  ],

  location :
  {
    lat : { type : String, required = true },
    long : { type : String, required = true }
  },

  address :
  {
    country : { type : String, default: '' },
    city : { type : String, default: '' },
    district : { type : String, default: '' },
    zone : { type : String, default: '' },
    openaddress : { type : String, default: '' }
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

//Auth yazılacak. importent!;
//how to use look bcrypt!  importent!;

const Customer = mongoose.model('customers',CustomerSchema);

module.exports = Customer;
