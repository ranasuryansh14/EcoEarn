const { z } = require('zod');
const User = require('../models/userSchema');
const generateOTP = require('../utils/otpGenerator');
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


const signupSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  mobile: z.string().regex(/^\+\d{1,3}\d{9,12}$/, { message: 'Invalid mobile number format' }),
});

async function generateOtpController(req, res) {
  const parsedData = signupSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json({ errors: parsedData.error.errors });
  }

  const { name, mobile } = parsedData.data;
  const otp = generateOTP();
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes

  try {
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this mobile number already exists' });
    }
    await client.messages.create({
      body: `Your OTP code is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: mobile,
    });

    const user = new User({ name, mobile, otp, otpExpires });
    await user.save();

    res.status(200).json({ message: 'OTP sent to your mobile number' , mobile: user.mobile});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send OTP. Please try again later.' });
  }
}


const otpVerificationSchema = z.object({
    mobile: z.string().regex(/^\+\d{1,3}\d{9,12}$/, { message: 'Invalid mobile number format' }),
    otp: z.string().length(6, { message: 'OTP must be 6 digits' }), // Assuming OTP is 6 digits
  });
  
  async function verifyOtpController(req, res) {
    const parsedData = otpVerificationSchema.safeParse(req.body);
  
    if (!parsedData.success) {
      return res.status(400).json({ errors: parsedData.error.errors });
    }
  
    const { mobile, otp } = parsedData.data;
  
    try {
      // Find the user by mobile number
      const user = await User.findOne({ mobile });
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if OTP matches and is still valid
      if (user.otp !== otp) {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
  
      if (new Date() > user.otpExpires) {
        return res.status(400).json({ message: 'OTP has expired' });
      }

      user.otp = null;
      user.otpExpires = null;
      user.isVerified = true;
      await user.save();
  
      res.status(200).json({ message: 'OTP verified successfully', user: user.name, userId: user._id});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to verify OTP. Please try again later.' });
    }
  }


module.exports = { generateOtpController, verifyOtpController };
