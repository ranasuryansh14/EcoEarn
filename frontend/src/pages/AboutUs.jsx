import React from "react";

export default function AboutUs() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      </div>

      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At EcoEarn, we are dedicated to promoting sustainable living by rewarding eco-friendly choices. Our mission is to create a greener, healthier planet by incentivizing individuals to make environmentally conscious decisions. We believe that small actions can collectively have a big impact, and our platform helps you earn rewards for every step you take towards sustainability.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">Suryansh Rana</h3>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">Harsh Golyan</h3>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">Ayush Kumar</h3>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">Himanshu Golyan</h3>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600">
          We would love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out to us at:
        </p>
        <p className="text-lg text-gray-600 font-bold">contact@ecoearn.com</p>
      </div>
    </div>
  );
}
