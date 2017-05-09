const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

/**
 * User
 */
const User = mongoose.model('User', new Schema({
  nickname: String,
  age: Number
}, {
  collection: 'User'
}));

module.exports = {
  User
}
