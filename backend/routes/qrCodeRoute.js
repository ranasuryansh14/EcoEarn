const express = require("express")
const { generateAndStoreQRCodes } = require("../controllers/qrCodeGeneratorController")

const router = express.Router()

router.post("/generateqr", generateAndStoreQRCodes)


module.exports = router