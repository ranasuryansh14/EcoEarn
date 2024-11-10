import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function MerchantNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="text-xl font-semibold">
          <a href="/">EcoEarn</a>
        </div>

        {/* Right side: Profile icon and Toggle Button */}
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          
          {/* Profile icon for larger screens */}
          <div className="hidden md:block ml-4">
            <FaUserCircle className="text-3xl" />
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row md:items-center mt-4 md:mt-0`}
      >
        <a
          href="#"
          className="block py-2 px-4 rounded hover:bg-green-700 md:ml-4"
        >
          Home
        </a>
        <a
          href="#"
          className="block py-2 px-4 rounded hover:bg-green-700 md:ml-4"
        >
          About us
        </a>
        <a
          href="#"
          className="block py-2 px-4 rounded hover:bg-green-700 md:ml-4"
        >
          Services
        </a>
        <a
          href="#"
          className="block py-2 px-4 rounded hover:bg-green-700 md:ml-4"
        >
          Log Out
        </a>
        
      </div>
    </nav>
  );
};

