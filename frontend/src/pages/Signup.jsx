import { useState } from "react";
import countryCodeList from "country-codes-list";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [name, setName] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [mobile, setMobile] = useState("");

    const navigate = useNavigate();

    const fullMobile = `${countryCode}${mobile}`;

    // Custom function to handle the signup process
    async function loginHandler() {
        if (!name || !mobile) {
            toast.error("Please fill in all fields");
            return;
        }

        // Show loading toast
        const toastId = toast.loading("Generating OTP... Please wait!");

        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/signup", {
                name: name,
                mobile: fullMobile
            });
            console.log(response.data);
            localStorage.setItem("mobile", response.data.mobile);
            navigate("/verify");

            // Update toast with success message
            toast.update(toastId, {
                render: "OTP sent successfully",
                type: "success",
                isLoading: false,
                autoClose: 2000, // Auto close after 2 seconds
            });
        } catch (error) {
            console.error(error);

            // Update toast with error message
            toast.update(toastId, {
                render: "OTP generation failed. Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 2000,
            });
        }
    }

    const customList = countryCodeList.customList('countryCode', '{countryCode} +{countryCallingCode}');

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-green-800 to-green-600 flex justify-center items-center">
            <div className="h-[90%] w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden">
                <div className="bg-green-700 w-full md:w-[50%] flex flex-col justify-center items-center p-6 md:p-10 order-1 md:order-1">
                    <div className="flex font-semibold text-4xl">
                        <img
                            src="Earnwbg.png"
                            alt="Description"
                            className="w-10 h-10 object-cover"
                        />
                        EcoEarn
                    </div>
                    <p className="text-white text-lg text-center max-w-md leading-relaxed">
                        Earn rewards for your sustainable choices and help make the planet greener, one step at a time.
                    </p>
                </div>

                <div className="bg-white w-full md:w-[50%] flex flex-col justify-center items-center p-6 md:p-10 order-2 md:order-2">
                    <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Signup</div>
                    <div className="w-full max-w-xs space-y-6">
                        <div className="flex flex-col text-left">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-1">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col text-left w-full max-w-xs space-y-6">
                            <div className="text-sm font-semibold text-gray-600 mb-1">Mobile Number</div>
                            <div className="flex space-x-2">
                                <select
                                    id="countryCode"
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    className="w-[30%] sm:w-[22%] border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                >
                                    {Object.values(customList).map((code, index) => (
                                        <option key={index} value={code.split(" ")[1]}>{code}</option>
                                    ))}
                                </select>

                                <input
                                    id="mobile"
                                    type="number"
                                    placeholder="Enter your mobile number"
                                    className="w-[65%] sm:w-[72%] border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600"
                            onClick={loginHandler}
                        >
                            Send OTP
                        </button>
                    </div>
                    <div className="text-green-700 underline mt-2 cursor-pointer" onClick={() => navigate("/login")}>Already have an account?</div>
                </div>
            </div>
        </div>
    );
}
