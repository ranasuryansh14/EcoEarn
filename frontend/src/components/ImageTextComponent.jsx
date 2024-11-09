import React from 'react';

export default function ImageTextComponent() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 space-y-8 md:space-y-0">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="bag2.png" 
          alt="Description"
          className="w-90 max-h-80 md:max-h-80 object-cover rounded-lg"
        />
      </div>

      {/* Right side: Write-up */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold text-green-600">Eco-Friendly Products</h2>
        <p className="mt-4 text-gray-700">
          We create products that are not only sustainable but also stylish and functional. Our eco-friendly bags are designed to help reduce plastic waste and promote a greener, cleaner planet. Join us in making a positive impact with every purchase.
        </p>
        <p className="mt-4 text-gray-700">
          Our commitment to sustainability goes beyond just the products we offer. We strive to incorporate green practices in every aspect of our business, from packaging to shipping.
        </p>
      </div>
    </div>
  );
}
