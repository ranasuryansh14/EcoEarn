const express = require("express")
const authRouter = require("./authRoute")
const transactionRoute = require("./transactionRoute")
const qrRoute = require("./qrCodeRoute")

const router = express.Router()

router.use("/auth",authRouter)
router.use("/transaction",transactionRoute)
router.use("/qr", qrRoute)

module.exports = router