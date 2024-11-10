import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  // Importing useNavigate

export default function NavbarDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();  // Initialize navigate function

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white">
        {/* Logo */}
        <div className="flex font-semibold text-2xl">
          <img
            src="Earn.png"
            alt="Description"
            className="w-8 h-8 md object-cover"
          />
          EcoEarn
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex gap-8 font-medium">
          <div
            onClick={() => navigate("/")}  // Navigate to Home
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>Home</span>
          </div>
          <div
            onClick={() => navigate("/Blog")}  // Navigate to Blogs
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>Blogs</span>
          </div>
          <div
            onClick={() => navigate("/about")}  // Navigate to About us
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>About us</span>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl"
          >
            {isMobileMenuOpen ? "☰" : "☰"}
          </button>
        </div>

        {/* Profile Button */}
        <div>
          <button className="border-2 border-white rounded-lg px-6 py-2 bg-green-500 text-white font-semibold flex items-center space-x-2">
            <FaUserCircle /> {/* Profile icon */}
            <span>Profile</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 flex flex-col items-center space-y-4">
          <div
            onClick={() => navigate("/")}  // Navigate to Home
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>Home</span>
          </div>
          <div
            onClick={() => navigate("/Blog")}  // Navigate to Blogs
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>Blogs</span>
          </div>
          <div
            onClick={() => navigate("/about")}  // Navigate to About us
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>About us</span>
          </div>
        </div>
      )}
    </>
  );
}
