const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({

  storeid : {},

  storename : {},

  storephone :
    {
      mobil : {},
      office : {}
    },

  storepic :
  [
    {
        _id : {},
        url : {}
    }
  ],

  location :
  {
    lat : {},
    long : {}
  },

  address :
  {
    country : {},
    city : {},
    district : {},
    zone : {},
    openaddress : {}
  },

  isActive : {},

  role : //array olma olasılığı ? bi bak derim!
  {
    instaCustomer : {},
    boutiqueCustomer : {},
    storeCustomer : {}
  },

});

//Auth yazılacak. importent!;
//how to use look bcrypt!  importent!;

const Customer = mongoose.model('customers',CustomerSchema);

module.exports = Customer;
