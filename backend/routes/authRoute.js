const express = require("express")
const { generateOtpController, verifyOtpController, generateOtpControllerLogin } = require("../controllers/authController")
const { merchantSignupController, merchantLoginController } = require("../controllers/merchantAuthController")

const router = express.Router()

router.post("/signup", generateOtpController);
router.post("/login", generateOtpControllerLogin);
router.post("/verify", verifyOtpController);

router.post("/merchant-signup", merchantSignupController);
router.post("/merchant-login", merchantLoginController);

module.exports = router