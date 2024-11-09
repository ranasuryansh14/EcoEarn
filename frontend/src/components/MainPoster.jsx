
export default function MainPoster() {
    return (
        <>
            {/* Full-screen background with hero.jpg */}
            <div className="w-screen h-screen bg-cover bg-center bg-slate-600" style={{ backgroundImage: `url('hero2.jpg')` }}>

                {/* Flex container for Follow Section and Main Heading */}
                <div className="flex ml-4 pt-40 items-start">

                    {/* Main Heading and Subtext */}
                    <div>
                        <div
                            className="text-black text-4xl md:text-8xl font-bold"
                            style={{
                                WebkitTextStroke: "1px white", // White stroke with 2px width
                            }}
                        >
                            Eco-Conscious
                        </div>

                        <div
                            className="text-green-600 text-4xl md:text-8xl font-bold"
                            style={{
                                WebkitTextStroke: "1px black", // White stroke with 2px width
                            }}
                        >
                            Go Green
                        </div>


                        <p className="text-white text-xs md:text-sm mt-4">
                            Creating sustainable, eco-friendly bags that help reduce plastic waste and promote a greener planet,
                        </p>
                        <p className="text-white text-xs md:text-sm">
                            combining durability with environmental responsibility.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 w-full md:w-auto">
                                Go-Green
                            </button>
                            <button className="bg-transparent border-2 border-green-900 text-white text-medium py-2 px-4 rounded hover:bg-green-900 transition duration-300 w-full md:w-auto">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
