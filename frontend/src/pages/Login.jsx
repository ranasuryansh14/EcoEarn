import { useState } from "react";
import countryCodeList from "country-codes-list";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [name, setName] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [mobile, setMobile] = useState("");

    const navigate = useNavigate();

    const fullMobile = `${countryCode}${mobile}`;

    async function loginHandler() {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/login", {
                name: name,
                mobile: fullMobile
            });
            console.log(response.data);
            localStorage.setItem("mobile", response.data.mobile);
            navigate("/verify");
        } catch (error) {
            console.log(error);
        }
    }

    // Extract the custom list from country-codes-list
    const customList = countryCodeList.customList('countryCode', '{countryCode} +{countryCallingCode}');

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-green-800 to-green-600 flex justify-center items-center">
            <div className="h-[90%] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] flex shadow-2xl rounded-lg overflow-hidden">
                {/* Eco Earn Section */}
                <div className="bg-green-700 w-full sm:w-[50%] flex flex-col justify-center items-center p-10">
                    <div className="flex font-semibold text-4xl">
                        <img
                            src="Earnwbg.png"
                            alt="Description"
                            className="w-10 h-10 object-cover"
                        />
                        EcoEarn
                    </div>
                    <p className="text-white text-lg text-center max-w-md leading-relaxed mt-4 sm:mt-6">
                        Earn rewards for your sustainable choices and help make the planet greener, one step at a time.
                    </p>
                </div>

                {/* Login Form Section */}
                <div className="bg-white w-full sm:w-[50%] flex flex-col justify-center items-center p-10">
                    <div className="text-4xl font-bold text-gray-800 mb-6">Login</div>
                    <div className="w-full max-w-xs space-y-6">
                        {/* Mobile Number Section */}
                        <div className="flex flex-col text-left w-full max-w-xs space-y-3">
                            <div className="text-sm font-semibold text-gray-600">Mobile Number</div>

                            {/* Country Code and Mobile Number Input */}
                            <div className="flex space-x-2">
                                <select
                                    id="countryCode"
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    className="w-[30%] sm:w-[20%] border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                >
                                    {Object.values(customList).map((code, index) => (
                                        <option key={index} value={code.split(" ")[1]}>
                                            {code}
                                        </option>
                                    ))}
                                </select>

                                <input
                                    id="mobile"
                                    type="number"
                                    placeholder="Enter your mobile number"
                                    className="w-[70%] sm:w-[80%] border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Send OTP Button */}
                        <button
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600"
                            onClick={loginHandler}
                        >
                            Send OTP
                        </button>
                    </div>

                    {/* Register Link */}
                    <div className="text-green-700 underline mt-2 cursor-pointer" onClick={() => navigate("/signup")}>
                        Register a new account!
                    </div>
                </div>
            </div>
        </div>
    );
}
