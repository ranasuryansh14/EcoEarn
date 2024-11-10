const QRCode = require("../models/qrCodeSchema");
const qrcode = require("qrcode");

const company_id = "COMP12345";
const bag_ids = ["BAG001", "BAG002", "BAG003", "BAG004", "BAG005"];

async function generateAndStoreQRCodes(req, res) {
  try {
    for (const bag_id of bag_ids) {
      const qrData = JSON.stringify({ company_id, bag_id });

      const qrCodeData = await qrcode.toBuffer(qrData);

      const qrCodeDocument = new QRCode({
        company_id,
        bag_id,
        qr_code_data: qrCodeData,
      });

      await qrCodeDocument.save();
      console.log(`QR code saved for ${bag_id}`);
    }
  } catch (error) {
    console.error("Error generating or saving QR codes:", error);
  } finally {
    return;
  }
}


module.exports = { generateAndStoreQRCodes };
