const QRCode = require("../models/qrCodeSchema");
const User = require('../models/userSchema');
const Transaction = require('../models/transactionSchema'); // Import Transaction model

const transactionController = async (req, res) => {
    const { qrCode, mobile, amount } = req.body;

    try {
        // Verify the QR code
        const QRCodeVerified = await QRCode.findOne({ company_id: qrCode.company_id });
        if (!QRCodeVerified) {
            return res.status(400).json({ message: 'Invalid QR code' });
        }

        // Find the user by mobile number
        const user = await User.findOne({ mobile: mobile });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        let greenCredits;
        
        if (amount === 500) {
            greenCredits = 30;
        } else if (amount > 500 && amount <= 1000) {
            greenCredits = 50;
        } else if (amount > 1000) {
            greenCredits = 70;
        } else {
            return res.status(400).json({
                message: 'Transaction amount must be at least $500 to receive green credits',
            });
        }

        // Add green credits to the user's account
        user.greenCredits += greenCredits;
        await user.save();

        // Create a new transaction record
        const transaction = new Transaction({
            user: user._id,          // Reference to the user
            amount: amount,          // Transaction amount
            greenCredits: greenCredits, // Green credits awarded
            transactionId: `TXN-${Date.now()}`, // Generate a unique transaction ID (you can change this logic)
        });

        // Save the transaction log
        await transaction.save();

        return res.status(200).json({
            message: 'Transaction successful. Green credits awarded.',
            greenCredits: user.greenCredits,
            transaction: transaction,  // Return the transaction details
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getUserTransactions = async (req, res) => {
    const { userId } = req.params; // Get userId from the URL params

    try {
        // Find the user by ID to ensure the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Fetch all transactions for the user from the Transaction model
        const transactions = await Transaction.find({ user: userId }).sort({ transactionDate: -1 }); // Sort by latest transaction

        // Return the transactions
        return res.status(200).json({
            message: 'Transactions fetched successfully.',
            transactions: transactions,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { transactionController, getUserTransactions };
