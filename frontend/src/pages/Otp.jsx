import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Otp() {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const navigate = useNavigate();

    const fullMobile = localStorage.getItem("mobile");
    const fullMobile = localStorage.getItem("mobile");

    const handleOtpChange = (element, index) => {
        const newOtp = [...otp];
        newOtp[index] = element.target.value;
        setOtp(newOtp);

        if (element.target.nextSibling) {
            element.target.nextSibling.focus();
        }
    };

    const verifyOtpHandler = async () => {
        const otpCode = otp.join(""); 

        if (otpCode.length < 6) {
            toast.error("Please enter a valid OTP.");
            return;
        }

        // Show loading toast
        const toastId = toast.loading("Verifying OTP... Please wait!");

        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/verify", {
                mobile: fullMobile,
                otp: otpCode
            });

            // If verification is successful, show success toast
            toast.update(toastId, {
                render: "OTP Verified Successfully!",
                type: "success",
                isLoading: false,
                autoClose: 2000, // Auto close after 2 seconds
            });

            localStorage.setItem("userId", response.data.user._id);
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem("credits", response.data.user.greenCredits);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);

            // If verification fails, show error toast
            toast.update(toastId, {
                render: "OTP Verification Failed! Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 2000,
            });
        }
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-green-800 to-green-600 flex justify-center items-center">
            <div className="h-[90%] w-[80%] flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden">
                {/* Left side content (Logo and description) */}
                <div className="bg-green-700 w-full md:w-[50%] flex flex-col justify-center items-center p-10 order-1 md:order-none">
                    <div className="flex font-semibold text-4xl mb-4">
                        <img
                            src="../Earnwbg.png"
                            alt="Description"
                            className="w-10 h-10 object-cover"
                        />
                        EcoEarn
                    </div>
                    <p className="text-white text-lg text-center max-w-md leading-relaxed">
                        Earn rewards for your sustainable choices and help make the planet greener, one step at a time.
                    </p>
                </div>

                {/* Right side OTP verification */}
                <div className="bg-white w-full md:w-[50%] flex flex-col justify-center items-center p-10 order-2 md:order-none">
                    <div className="text-4xl font-bold text-gray-800 mb-6">Verify OTP</div>
                    <div className="w-full max-w-xs space-y-6">
                        <div className="text-sm font-semibold text-gray-600 mb-1">Enter OTP</div>

                        {/* OTP Input Boxes */}
                        <div className="flex justify-center space-x-2 mb-4">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(e, index)}
                                    className="w-12 h-12 border border-gray-300 rounded-md text-center text-gray-700 text-xl focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            ))}
                        </div>

                        <button
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600"
                            onClick={verifyOtpHandler}
                        >
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
