import { useState } from "react";
import countryCodeList from "country-codes-list";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [name, setName] = useState("");
    const [countryCode, setCountryCode] = useState("+91"); 
    const [mobile, setMobile] = useState("");

    const navigate = useNavigate()

    const fullMobile = `${countryCode}${mobile}`

    async function loginHandler() {
        try {
            const response =  await axios.post("http://localhost:3000/api/v1/auth/login", {
                name: name, 
                mobile: fullMobile
            })
            console.log(response.data)
            localStorage.setItem("mobile", response.data.mobile)
            navigate("/verify")
        } catch (error) {
            console.log(error)
        }
    }

    const customList = countryCodeList.customList('countryCode', '{countryCode} +{countryCallingCode}');
    
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
                        <div className="text-4xl font-bold text-gray-800 mb-6">Login</div>
                        <div className="w-full max-w-xs space-y-6">
                            <div className="flex flex-col text-left w-full max-w-xs space-y-3">
                                <div className="text-sm font-semibold text-gray-600 ">Mobile Number</div>
                                
                                <div className="flex space-x-2">
                                    {/* Country Code Dropdown */}
                                    <select 
                                        id="countryCode"
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className="w-[22%] border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                    >
                                        {Object.values(customList).map((code, index) => (
                                            <option key={index} value={code.split(" ")[1]}>{code}</option>
                                        ))}
                                    </select>
                                    
                                    {/* Mobile Number Input */}
                                    <input 
                                        id="mobile"
                                        type="number"
                                        placeholder="Enter your mobile number"
                                        className="w-3/4 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
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
                        <div className="text-green-700 underline mt-2 ml-32 cursor-pointer" onClick={() => navigate("/signup")}>Register a new account !</div>
                    </div>
                </div>
            </div>
        </>
    );
}
