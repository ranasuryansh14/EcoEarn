import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white">
        {/* Logo */}
        <div className="flex font-semibold text-2xl">
          <img
            src="Earnwbg.png"
            alt="Description"
            className="w-8 h-8 object-cover"
          />
          EcoEarn
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex gap-8 font-medium">
          <div
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>Home</span>
          </div>
          <div
            onClick={() => navigate("/Blog")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>Blogs</span>
          </div>
          <div
            onClick={() => navigate("/about")}
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

        {/* Register Button */}
        <div>
          <button
            onClick={handleRegisterClick}
            className="border-2 border-white rounded-lg px-6 py-2 bg-green-500 text-white font-semibold flex items-center space-x-2"
          >
            <FaUserCircle />
            <span>Register</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 flex flex-col items-center space-y-4">
          <div
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>Home</span>
          </div>
          <div
            onClick={() => navigate("/Blog")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>Blogs</span>
          </div>
          <div
            onClick={() => navigate("/about")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span>About us</span>
          </div>
        </div>
      )}

      {/* Register Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <h3 className="text-lg font-semibold mb-4">Register as:</h3>
            <div className="flex justify-around">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
                onClick={() => {
                  closeDialog();
                  navigate("/signup");
                }}
              >
                User
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
                onClick={() => {
                  closeDialog();
                  navigate("/merchant/signup");
                }}
              >
                Merchant
              </button>
            </div>
            <button
              onClick={closeDialog}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
