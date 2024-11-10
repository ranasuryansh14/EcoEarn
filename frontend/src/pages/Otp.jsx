import { useState } from "react";
import countryCodeList from "country-codes-list";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Otp() {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const navigate = useNavigate();

    const fullMobile = localStorage.getItem("mobile")

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
        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/verify", {
                mobile: fullMobile,
                otp: otpCode
            });
            console.log(response.data);
            localStorage.setItem("userId", response.data.user._id)
            localStorage.setItem("name", response.data.user.name)
            localStorage.setItem("credits", response.data.user.greenCredits)
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="h-screen w-screen bg-gradient-to-br from-green-800 to-green-600 flex justify-center items-center">
                <div className="h-[90%] w-[80%] flex shadow-2xl rounded-lg overflow-hidden">
                    <div className="bg-green-700 w-[50%] flex flex-col justify-center items-center p-10">
                        <div className="text-white text-5xl font-extrabold mb-4 drop-shadow-lg">Eco Earn</div>
                        <p className="text-white text-lg text-center max-w-md leading-relaxed">
                            Earn rewards for your sustainable choices and help make the planet greener, one step at a time.
                        </p>
                    </div>
                    <div className="bg-white w-[50%] flex flex-col justify-center items-center p-10">
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
                                Verify OTP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
