import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MerchantLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Loading state to show a loading indicator

    const navigate = useNavigate();

    async function loginHandler() {
        setLoading(true); // Set loading to true when the request starts
        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/merchant-login", {
                email,
                password
            });
            console.log(response.data);
            localStorage.setItem("merchantToken", response.data.token);

            // Show success toast
            toast.success("Logged in successfully! Redirecting to dashboard...");

            // Redirect after a short delay
            setTimeout(() => {
                navigate("/merchant/dashboard");
            }, 2000); // 2 seconds delay to let the user read the success message
        } catch (error) {
            console.log(error);

            // Show error toast
            toast.error("Login failed. Please check your credentials.");
        } finally {
            setLoading(false); // Set loading to false after the request completes
        }
    }

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-green-800 to-green-600 flex justify-center items-center">
            <div className="h-[90%] w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden">
                {/* Eco Earn Section */}
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

                {/* Merchant Login Form Section */}
                <div className="bg-white w-full md:w-[50%] flex flex-col justify-center items-center p-6 md:p-10 order-2 md:order-2">
                    <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Merchant Login</div>
                    <div className="w-full max-w-xs space-y-6">
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
                        <div className="text-green-700 underline cursor-pointer" onClick={() => navigate("/merchant/signup")}>Don't have an account?</div>
                        <button
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600"
                            onClick={loginHandler}
                            disabled={loading} // Disable button when loading
                        >
                            {loading ? "Logging In..." : "Log In"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
