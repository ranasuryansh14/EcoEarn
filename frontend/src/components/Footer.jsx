import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" text-green-600 py-8">
            <hr></hr>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Links Section */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-bold mb-2"></h5>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-green-400 transition duration-300">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-green-400 transition duration-300">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-green-400 transition duration-300">Services</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-green-400 transition duration-300">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="mb-6 md:mb-0">
                        <h5 className="text-lg font-bold mb-2">Follow Us</h5>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition duration-300">
                                <FaFacebookF className="text-xl" />
                            </a>
                            <a href="#" className="hover:text-black transition duration-300">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="#" className="hover:text-pink-500 transition duration-300">
                                <FaInstagram className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Eco Earn. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;