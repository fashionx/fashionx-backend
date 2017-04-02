const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({

  userid : {Schema.Types.ObjectId},

  username : { type : String, required = true, trim : true },

  lastname : { type : String, required = true, trim : true },

  email : { type : String, required : true, trim : true },

  phone : { type : String, default: null },

  age : { type: Number, min: 0 },

  birtdate : { type : String, default: null }

  usersex :
    {
      male : { type : Boolean },
      female : { type : Boolean }
    },

  pic : [
    {
      _id : {},
      url : { type : String, default: null }
    }
  ],

  isActive : { type : Boolean },

  isOnline : { type : Boolean },

  locationid : {},

  role :
  {
    default : { type : Boolean },
    admin : { type : Boolean }
  },

});

//Auth yazılacak. importent!;
//how to use look bcrypt!  importent!;


const User = mongoose.model('users', UserSchema);

module.exports = User;
