import React from 'react';

export default function EcoPoints() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 space-y-8 md:space-y-0">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="eco.png" 
          alt="Description"
          className="w-90 max-h-80 md:max-h-80 object-cover rounded-lg"
        />
      </div>

      {/* Right side: Write-up */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold text-green-600">Eco-Points</h2>
        <p className="mt-4 text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facilis nemo debitis laborum deserunt sint expedita aperiam, sit et corporis tenetur quaerat qui in consequuntur id voluptates, nisi quia quo.
        </p>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit temporibus magni architecto id. Vitae dolorem natus ullam dolorum assumenda? Repudiandae nihil quia impedit voluptatum quod asperiores vitae optio laboriosam. Quidem?
        </p>
      </div>
    </div>
  );
}
