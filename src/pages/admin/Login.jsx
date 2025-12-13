import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiMail,
    HiLockClosed,
    HiEye,
    HiEyeOff,
    HiCheckCircle,
    HiXCircle,
    HiShieldCheck
} from 'react-icons/hi';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    // Email validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('');
            setEmailValid(false);
            return;
        }
        if (emailRegex.test(email)) {
            setEmailError('');
            setEmailValid(true);
        } else {
            setEmailError('Please enter a valid email address');
            setEmailValid(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailValid) {
            setEmailError('Please enter a valid email address');
            return;
        }

        // Admin Authentication Check
        if (formData.email === 'admin@happyfaces.org') {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userRole', 'admin');
            navigate('/admin');
        } else {
            setEmailError('Access Denied: Restricted to Administrators.');
            setEmailValid(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({ ...formData, [name]: newValue });

        if (name === 'email') {
            validateEmail(value);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Dark Theme Gradient Glow Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-md w-full relative z-10"
            >
                {/* Logo and Header */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center gap-2 mb-4"
                        >
                            <div className="bg-green-600 p-2 rounded-lg">
                                <HiShieldCheck className="text-3xl text-white" />
                            </div>
                        </motion.div>
                        <motion.h1
                            className="text-4xl font-bold text-white tracking-tight"
                        >
                            Admin Console
                        </motion.h1>
                    </Link>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-2 text-gray-400"
                    >
                        Authorized Personnel Only
                    </motion.p>
                </div>

                {/* Dark Glassmorphism Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-800/50 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-gray-700 relative"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                                Administrator Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <motion.div
                                        animate={formData.email ? { scale: [1, 1.2, 1] } : {}}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <HiMail className={`h-5 w-5 transition-colors duration-300 ${emailValid ? 'text-green-500' : 'text-gray-500'
                                            }`} />
                                    </motion.div>
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`block w-full pl-12 pr-12 py-3.5 bg-gray-900/50 border-2 rounded-xl focus:ring-2 focus:ring-green-500 transition-all duration-300 text-white placeholder-gray-600 ${emailError
                                        ? 'border-red-500/50 focus:border-red-500'
                                        : emailValid
                                            ? 'border-green-500/50 focus:border-green-500'
                                            : 'border-gray-700 focus:border-green-500'
                                        }`}
                                    placeholder="admin@happyfaces.org"
                                />
                                {formData.email && (
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        <AnimatePresence mode="wait">
                                            {emailValid ? (
                                                <motion.div
                                                    key="valid"
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    exit={{ scale: 0, rotate: 180 }}
                                                >
                                                    <HiCheckCircle className="h-5 w-5 text-green-500" />
                                                </motion.div>
                                            ) : emailError ? (
                                                <motion.div
                                                    key="invalid"
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    exit={{ scale: 0, rotate: 180 }}
                                                >
                                                    <HiXCircle className="h-5 w-5 text-red-500" />
                                                </motion.div>
                                            ) : null}
                                        </AnimatePresence>
                                    </div>
                                )}
                            </div>
                            <AnimatePresence>
                                {emailError && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-2 text-sm text-red-400 bg-red-900/20 p-2 rounded-lg border border-red-900/50"
                                    >
                                        {emailError}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <HiLockClosed className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full pl-12 pr-12 py-3.5 bg-gray-900/50 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-white placeholder-gray-600"
                                    placeholder="••••••••"
                                />
                                <motion.button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <AnimatePresence mode="wait">
                                        {showPassword ? (
                                            <motion.div
                                                key="hide"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <HiEyeOff className="h-5 w-5 text-gray-500 hover:text-gray-300" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="show"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <HiEye className="h-5 w-5 text-gray-500 hover:text-gray-300" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="w-full py-4 px-4 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold rounded-xl shadow-lg shadow-green-900/50 transition-all duration-300 relative overflow-hidden group"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">Access Dashboard</span>
                        </motion.button>
                    </form>


                </motion.div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
