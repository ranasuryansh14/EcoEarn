const express = require("express")
const { generateOtpController, verifyOtpController } = require("../controllers/authController")
const { merchantSignupController, merchantLoginController } = require("../controllers/merchantAuthController")

const router = express.Router()

router.post("/login", generateOtpController);
router.post("/verify", verifyOtpController);

router.post("/merchant-signup", merchantSignupController);
router.post("/merchant-login", merchantLoginController);

module.exports = router