const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    greenCredits: { type: Number, required: true },
    transactionDate: { type: Date, default: Date.now },
    transactionId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Transaction', transactionSchema);
