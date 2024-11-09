const jwt = require('jsonwebtoken');

const authenticateMerchant = (req, res, next) => {
    const authToken = req.header('Authorization')

    if (!authToken || !authToken.startsWith("Bearer ")) {
        return res.status(401).json({ message: 'Authorization token missing' });
    }
    const token = authToken.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded)
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authenticateMerchant;
