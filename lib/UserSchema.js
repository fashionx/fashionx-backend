const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
//const bcrypt = require('bcrypt');
//const SALT_WORK_FACTOR = 10;

mongoose.Promise = require('bluebird');

const UserSchema = new Schema({

  userid : ObjectId,

  username : { type : String, required : true, trim : true },

  lastname : { type : String, required : true, trim : true },

  email : { type : String, required : true, trim : true },

  phone : { type : String, default: null },

  age : { type: Number, min: 0 },

  birtdate : { type : String, default: null },

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

UserSchema.statics = {

  /**
   findOneUser. return the one User object.
   @param id: get id to find one user by id.
   @param callback: callback of this form.
 */
 get: function(query, callback) {
     this.findOne(query, callback);
 },
 /**
   findUser. return the User objects.
   @param callback: callback of this form.
 */
 getAll: function(query, callback) {
     this.find(query, callback);
 },

 /**
   updateUser. return the create user object result.
   @param updateData: updateData is use to update user w.r.t id.
   @param callback: callback of this form.
 */
 updateById: function(id, updateData, callback) {
     this.update(id, {$set: updateData}, callback);
 },
 removeById: function(removeData, callback) {
     this.remove(removeData, callback);
 },
 create: function(data, callback) {
     var user = new this(data);
     user.save(callback);
 }
}

const User = mongoose.model('users', UserSchema);

module.exports = User;
