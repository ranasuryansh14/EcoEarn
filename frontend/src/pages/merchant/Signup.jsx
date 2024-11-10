import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MerchantSignup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function signupHandler() {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/merchant-signup", {
                name,
                email,
                password
            });
            console.log(response.data);
            localStorage.setItem("merchantToken", response.data.token);
            navigate("/merchant/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-green-800 to-green-600 flex justify-center items-center">
            <div className="h-[90%] w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden">
                {/* Eco Earn Section - Reversed for mobile */}
                <div className="bg-green-700 w-full md:w-[50%] flex flex-col justify-center items-center p-6 md:p-10 order-1 md:order-1">
                <div className="flex font-semibold text-4xl">
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

                {/* Merchant Signup Form Section - Reversed for mobile, and moved to right on desktop */}
                <div className="bg-white w-full md:w-[50%] flex flex-col justify-center items-center p-6 md:p-10 order-2 md:order-2">
                    <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Merchant Signup</div>
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
                        <div className="flex flex-col text-left">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-1">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <label htmlFor="password" className="text-sm font-semibold text-gray-600 mb-1">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="text-green-700 underline cursor-pointer" onClick={() => navigate("/merchant/login")}>Already have an account?</div>
                        <button
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600"
                            onClick={signupHandler}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
