const mongoose = require("mongoose")

async function connnectDB() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected")
    } catch (error) {
        console.log("error in connecting database: ", error)
    }
}
module.exports = connnectDB;