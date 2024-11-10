const express = require("express")
const { transactionController, getUserTransactions } = require("../controllers/transactionController")
const authenticateMerchant = require("../middlewares/merchantMiddleware")

const router = express.Router()

router.post("/payment", authenticateMerchant, transactionController)
router.get("/logs/:userId", getUserTransactions)


module.exports = router

