const QRCode = require("../models/qrCodeSchema");
const User = require('../models/userSchema');

const transactionController = async (req, res) => {
    const { qrCode, mobile, amount } = req.body;

    try {
        const QRCodeVerified = await QRCode.findOne({ company_id: qrCode.company_id });
        if (!QRCodeVerified) {
            return res.status(400).json({ message: 'Invalid QR code' });
        }
        
        const user = await User.findOne({ mobile: mobile });

        if (amount === 500) {
            const greenCredits = 30;
            user.greenCredits += greenCredits;
            await user.save();
        
            return res.status(200).json({
                message: 'Transaction successful. Green credits awarded.',
                greenCredits: user.greenCredits,
            });
        } else if (amount > 500 && amount <= 1000) {
            const greenCredits = 50;
            user.greenCredits += greenCredits;
            await user.save();
        
            return res.status(200).json({
                message: 'Transaction successful. Green credits awarded.',
                greenCredits: user.greenCredits,
            });
        } else if (amount > 1000) {
            const greenCredits = 70;
            user.greenCredits += greenCredits;
            await user.save();
        
            return res.status(200).json({
                message: 'Transaction successful. Green credits awarded.',
                greenCredits: user.greenCredits,
            });
        } else {
            return res.status(400).json({
                message: 'Transaction amount must be at least $500 to receive green credits',
            });        
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { transactionController };