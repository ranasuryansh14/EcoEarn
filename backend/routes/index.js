const express = require("express")
const authRouter = require("./authRoute")
const transactionRoute = require("./transactionRoute")
const qrRoute = require("./qrCodeRoute")
const couponRoute = require("./couponRoute")

const router = express.Router()

router.use("/auth",authRouter)
router.use("/transaction",transactionRoute)
router.use("/qr", qrRoute)
router.use("/coupon", couponRoute)

module.exports = router