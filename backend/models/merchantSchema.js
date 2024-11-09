const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Merchant = mongoose.model('Merchant', merchantSchema);

module.exports = Merchant;
