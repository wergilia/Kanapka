const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true, match: /\S+@\S+\.\S+/, trim: true},
  imgName: {type: String, default: 'default-avatar.jpeg'},
  imgPath: {type: String, default: '/images/default-avatar.jpeg'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

