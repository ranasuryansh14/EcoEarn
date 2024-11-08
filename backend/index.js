const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./config/db")

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

connectDB();
app.use("/api/v1",require("./routes/index"))

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})