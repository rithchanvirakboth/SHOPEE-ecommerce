const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your first name'],
    trim: true,
    min: 3,
    max: 20
  },
  lastName: {
    type: String,
    required: [true, 'Please enter your last name'],
    trim: true,
    min: 3,
    max: 20
  },
  userName: {
    type: String,
    required: [true, 'Please enter your username'],
    trim: true,
    min: 3,
    max: 20
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    trim: true,
    unique: true
  },
  bio: {
    type: String,
    max: 200
  },
  phoneNumber: {
    type: String,
    max: 11
  },
  address: {
    type: String,
    max: 50
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    min: 6,
    max: 20
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    min: 6,
    max: 20
  },
  role: {
    type: Number,
    default: 0 // 0 = user, 1 = admin
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/dweitfbey/image/upload/v1678790751/avatar/profile-pic_fnx36a.jpg',
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Users', userSchema);
