import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiMail,
  HiLockClosed,
  HiEye,
  HiEyeOff,
  HiCheckCircle,
  HiXCircle
} from 'react-icons/hi';
import {
  FcGoogle
} from 'react-icons/fc';
import {
  FaFacebook,
  FaPhone
} from 'react-icons/fa';

const Login = () => {
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

    // TODO: Implement actual authentication
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userRole', 'student');
    navigate('/student');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: newValue });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const handleSocialLogin = (provider) => {
    // TODO: Implement social login
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
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
            <motion.h1
              className="text-5xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-green-600">Happy</span>
              <span className="text-gray-800">Faces</span>
            </motion.h1>
          </Link>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-3xl font-bold text-gray-900"
          >
            Welcome Back
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-base text-gray-600"
          >
            Let's get you signed in
          </motion.p>
        </div>

        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-3xl p-8 border border-white/20 relative"
          style={{
            boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.1)'
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Social Login Buttons */}
            <div className="space-y-3">
              <motion.button
                type="button"
                onClick={() => handleSocialLogin('google')}
                className="w-full py-3.5 px-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-green-500 hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-3 group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FcGoogle className="text-2xl" />
                <span>Continue with Google</span>
              </motion.button>

              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  type="button"
                  onClick={() => handleSocialLogin('phone')}
                  className="py-3.5 px-4 bg-white border-2 border-gray-200 rounded-xl text-green-600 hover:border-green-500 hover:bg-green-50 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPhone className="text-xl" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => handleSocialLogin('facebook')}
                  className="py-3.5 px-4 bg-white border-2 border-gray-200 rounded-xl text-blue-600 hover:border-green-500 hover:bg-green-50 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaFacebook className="text-2xl" />
                </motion.button>
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-gray-500 font-medium">or continue with email</span>
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <motion.div
                    animate={formData.email ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <HiMail className={`h-5 w-5 transition-colors duration-300 ${emailValid ? 'text-green-500' : 'text-gray-400'
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
                  className={`block w-full pl-12 pr-12 py-3.5 border-2 rounded-xl focus:ring-2 focus:ring-green-500 transition-all duration-300 ${emailError
                    ? 'border-red-300 focus:border-red-500'
                    : emailValid
                      ? 'border-green-300 focus:border-green-500'
                      : 'border-gray-200 focus:border-green-500'
                    }`}
                  placeholder="you@example.com"
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
                    className="mt-2 text-sm text-red-600"
                  >
                    {emailError}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <HiLockClosed className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-12 pr-12 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
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
                        <HiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="show"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-semibold text-green-600 hover:text-green-500 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-4 px-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-200 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -2, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-semibold text-green-600 hover:text-green-500 transition-colors">
                Register here
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-4 text-center">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors inline-flex items-center gap-1"
            >
              <span>←</span> Back to Home
            </Link>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center text-xs text-gray-500"
        >
          🔒 Secured with industry-standard encryption
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
