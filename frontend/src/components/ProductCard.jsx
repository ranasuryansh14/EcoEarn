import React from 'react';

const ProductCard = () => {
    return (
        <>
        <div className="flex flex-col md:flex-row items-center bg-white p-8 ">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left md:m-8">
                <h1 className="text-4xl font-bold text-green-900 uppercase mb-4">Eco-Friendly Bags</h1>
                <p className=" text-lg">
                    Introducing our eco-friendly bags, crafted to reduce plastic waste and promote a greener planet. Made with sustainable materials, these bags are durable, stylish, and perfect for everyday use. Join us in making a positive impact—each bag purchase contributes to reducing environmental footprints.
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                <button className="bg-green-900  text-white py-2 px-4 rounded hover:bg-green-400 transition duration-300 w-full md:w-auto">
                    Go-Green
                </button>
            </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 mt-6 md:mt-0 md:m-8">
                <img
                    src="bag.jpg"
                    alt="Eco-Friendly Bag"
                    className="w-full h-auto max-h-60 object-cover rounded-lg shadow-md"
                />
            </div>
        </div>
       </>
    );
};

export default ProductCard;
