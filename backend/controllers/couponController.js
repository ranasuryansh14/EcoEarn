const Coupon = require('../models/couponSchema');

const generateCouponCode = (companyName) => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    const formattedCompanyName = companyName.replace(/\s+/g, '').toUpperCase();
    return `ECO${formattedCompanyName}${randomNumber}`;
};

const generateCoupon = async (req, res) => {
    const { companyName, greenCredits } = req.body;

    if (!companyName || !greenCredits) {
        return res.status(400).json({ message: "Company name and green credits are required." });
    }

    try {
        const couponCode = generateCouponCode(companyName);

        const newCoupon = new Coupon({
            code: couponCode,
            companyName,
            greenCredits,
            redeemed: false,
            createdAt: new Date(),
        });

        await newCoupon.save();

        res.status(200).json({
            message: "Coupon generated successfully",
            couponCode
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Unable to generate coupon." });
    }
};

module.exports = { generateCoupon };
