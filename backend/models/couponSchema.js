const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true, 
    },
    companyName: {
      type: String,
      required: true,
    },
    greenCredits: {
      type: Number,
      required: true 
    },
    redeemed: {
      type: Boolean,
      default: false,  
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
