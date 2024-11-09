import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center p-4 bg-white ">
                {/* Logo */}
                <div className="font-semibold text-2xl">
                    EcoEarn
                </div>

                {/* Navigation Links for Desktop */}
                <div className="hidden md:flex gap-8 font-medium">
                    <div className="flex items-center space-x-2">
                        <span>Home</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>Blogs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>About us</span>
                    </div>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        className="text-2xl"
                    >
                        {isMobileMenuOpen ? '☰' : '☰'}
                    </button>
                </div>

                {/* Register Button */}
                <div>
                    <button className="border-2 border-white rounded-lg px-6 py-2 bg-green-500 text-white font-semibold flex items-center space-x-2">
                        <FaUserCircle /> {/* Add icon to the button */}
                        <span>Register</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden p-4 flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-2">
                        <span>Home</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>Blogs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>About us</span>
                    </div>
                </div>
            )}
        </>
    );
}
