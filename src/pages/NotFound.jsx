import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-4">
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="mb-8"
                >
                    <div className="text-9xl font-bold text-green-600 mb-4">404</div>
                    <div className="text-6xl mb-4">😕</div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                    Page Not Found
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-gray-600 mb-8 max-w-md mx-auto"
                >
                    Oops! The page you're looking for doesn't exist or has been moved.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                        <HiHome className="text-xl" />
                        Back to Home
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-green-600 text-green-600 font-bold rounded-full hover:bg-green-50 transition-all"
                    >
                        Contact Support
                    </Link>
                </motion.div>

                {/* Helpful Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-gray-200"
                >
                    <p className="text-gray-600 mb-4">You might be looking for:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/about" className="text-green-600 hover:text-green-700 font-medium">
                            About Us
                        </Link>
                        <Link to="/programs" className="text-green-600 hover:text-green-700 font-medium">
                            Programs
                        </Link>
                        <Link to="/donate" className="text-green-600 hover:text-green-700 font-medium">
                            Donate
                        </Link>
                        <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
                            Login
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
