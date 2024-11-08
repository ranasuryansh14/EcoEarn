const express = require("express")
const { generateOtpController, verifyOtpController } = require("../controllers/authController")

const router = express.Router()

router.post("/login", generateOtpController);
router.post("/verify", verifyOtpController);


module.exports = router