const mongoose = require("mongoose");

const qrCodeSchema = new mongoose.Schema({
  company_id: { type: String, required: true },
  bag_id: { type: String, required: true },
  qr_code_data: { type: Buffer, required: true },
});

module.exports = mongoose.model("QRCode", qrCodeSchema);
