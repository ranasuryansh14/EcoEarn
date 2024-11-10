const express = require("express")
const { generateCoupon } = require("../controllers/couponController")

const router = express.Router()

router.post("/generate", generateCoupon)

module.exports = router