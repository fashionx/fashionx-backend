const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({

  username : {},

  lastname : {},

  email : {},

  phone : {},

  age : {},

  birtdate : {}

  usersex :
    {
      male : {},
      female : {}
    },

  pic : [
    {
      _id : {},
      url : {}
    }
  ],

  isActive : {},

  isOnline : {},

  locationid : {},

  role :
  {
    defaultUser : {},
    admin : {}
  },

});

//Auth yazılacak. importent!;
//how to use look bcrypt!  importent!;


const User = mongoose.model('users', UserSchema);

module.exports = User;
