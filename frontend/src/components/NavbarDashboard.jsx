import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function NavbarDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white ">
        {/* Logo */}
        <div className="flex font-semibold text-2xl">
          <img
            src="Earn.png"
            alt="Description"
            className="w-8 h-8 object-cover"
          />
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
            {isMobileMenuOpen ? "☰" : "☰"}
          </button>
        </div>

        {/* Profile Button */}
        <div>
          <button
            onClick={() => setIsLogoutModalOpen(true)}
            className="border-2 border-white rounded-lg px-6 py-2 bg-green-500 text-white font-semibold flex items-center space-x-2"
          >
            <FaUserCircle />
            <span>Profile</span>
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

      {/* Logout Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold mb-4">Log Out</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-300 text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded bg-red-500 text-white"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
