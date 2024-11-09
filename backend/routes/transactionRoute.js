const express = require("express")
const { transactionController } = require("../controllers/transactionController")
const authenticateMerchant = require("../middlewares/merchantMiddleware")

const router = express.Router()

router.post("/transaction", authenticateMerchant, transactionController)


module.exports = router

