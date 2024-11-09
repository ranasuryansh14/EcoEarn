const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  otp: { type: String, required: false },
  otpExpires: { type: Date, required: false },
  isVerified: { type: Boolean, default: false },
  greenCredits: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
