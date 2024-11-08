const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  otp: { type: String, required: false }, // make otp optional
  otpExpires: { type: Date, required: false }, // make otpExpires optional
  isVerified: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
