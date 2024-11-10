const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const z = require("zod");
const Merchant = require('../models/merchantSchema');

const merchantSignupSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6)
});

const merchantSignupController = async (req, res) => {
    const parseResult = merchantSignupSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ errors: parseResult.error.errors });
    }
    
    const { name, email, password } = parseResult.data;

    try {
        const existingMerchant = await Merchant.findOne({ email });
        if (existingMerchant) {
            return res.status(400).json({ message: 'Merchant already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const merchant = new Merchant({ name, email, password: hashedPassword });
        await merchant.save();

        const token = jwt.sign({ id: merchant._id }, process.env.SECRET_KEY);

        res.status(201).json({ message: 'Merchant registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const merchantLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

const merchantLoginController = async (req, res) => {
    const parseResult = merchantLoginSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ errors: parseResult.error.errors });
    }

    const { email, password } = parseResult.data;

    try {
        const merchant = await Merchant.findOne({ email });
        if (!merchant) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, merchant.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: merchant._id, email: merchant.email }, process.env.SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { merchantSignupController, merchantLoginController };
