import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Happy<span className="text-green-400">Faces</span>
                        </h2>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Empowering communities, one life at a time.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-green-500/30 mb-4 md:mb-0">
                            Donate Now
                        </button>
                        <div className="flex gap-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors duration-300">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors duration-300">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Happy Faces Empowerment Network. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
