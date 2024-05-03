// models/User.js
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  // Array to store IDs of friends
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const User = model('User', userSchema);

module.exports = User;
