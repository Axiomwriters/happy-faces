import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiMail,
  HiLockClosed,
  HiUser,
  HiPhone,
  HiEye,
  HiEyeOff,
  HiCheckCircle,
  HiXCircle,
  HiCamera,
  HiUpload
} from 'react-icons/hi';
import {
  FcGoogle
} from 'react-icons/fc';
import {
  FaFacebook,
  FaPhone
} from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: '',
    color: '',
    suggestions: []
  });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
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

  // Password strength checker
  const checkPasswordStrength = (password) => {
    if (!password) {
      setPasswordStrength({ score: 0, label: '', color: '', suggestions: [] });
      return;
    }

    let score = 0;
    let suggestions = [];

    // Length check
    if (password.length >= 8) score++;
    else suggestions.push('At least 8 characters');

    // Uppercase check
    if (/[A-Z]/.test(password)) score++;
    else suggestions.push('One uppercase letter');

    // Lowercase check
    if (/[a-z]/.test(password)) score++;
    else suggestions.push('One lowercase letter');

    // Number check
    if (/[0-9]/.test(password)) score++;
    else suggestions.push('One number');

    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) score++;
    else suggestions.push('One special character');

    let label, color;
    if (score <= 2) {
      label = 'Weak';
      color = 'bg-red-500';
    } else if (score <= 3) {
      label = 'Medium';
      color = 'bg-orange-500';
    } else if (score <= 4) {
      label = 'Strong';
      color = 'bg-green-500';
    } else {
      label = 'Very Strong';
      color = 'bg-green-600';
    }

    setPasswordStrength({ score, label, color, suggestions });
  };

  // Handle photo upload with optimization
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB');
      return;
    }

    setProfilePhoto(file);

    // Create optimized preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Create canvas for optimization
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Calculate dimensions to maintain aspect ratio
        const maxSize = 300;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxSize) {
            height = (height * maxSize) / width;
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width = (width * maxSize) / height;
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;

        // Enable image smoothing for better quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Draw image
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to blob with optimized quality
        canvas.toBlob(
          (blob) => {
            const optimizedUrl = URL.createObjectURL(blob);
            setPhotoPreview(optimizedUrl);
          },
          'image/jpeg',
          0.9 // High quality
        );
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setProfilePhoto(null);
    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
      setPhotoPreview(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    checkPasswordStrength(formData.password);
  }, [formData.password]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
    };
  }, [photoPreview]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailValid) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (passwordStrength.score < 3) {
      alert('Please choose a stronger password');
      return;
    }

    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // TODO: Implement actual registration with photo upload
    console.log('Profile photo:', profilePhoto);
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: newValue });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const handleSocialSignup = (provider) => {
    // TODO: Implement social signup
    console.log(`Signup with ${provider}`);
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
            Create Your Account
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-base text-gray-600"
          >
            Join the HappyFaces learning family
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
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Profile Photo Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 text-center">
                Profile Photo
              </label>
              <div className="flex flex-col items-center">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                  id="profilePhoto"
                />

                <AnimatePresence mode="wait">
                  {photoPreview ? (
                    <motion.div
                      key="preview"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="relative group"
                    >
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
                        <img
                          src={photoPreview}
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <motion.button
                        type="button"
                        onClick={removePhoto}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <HiXCircle className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.label
                      key="upload"
                      htmlFor="profilePhoto"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-green-200 border-4 border-dashed border-green-400 flex flex-col items-center justify-center cursor-pointer hover:from-green-200 hover:to-green-300 transition-all group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiCamera className="w-10 h-10 text-green-600 mb-1 group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-green-700 font-medium">Upload Photo</span>
                    </motion.label>
                  )}
                </AnimatePresence>

                <p className="mt-2 text-xs text-gray-500 text-center">
                  JPG, PNG or GIF (Max 5MB)
                </p>
              </div>
            </div>

            {/* Social Signup Buttons */}
            <div className="space-y-3">
              <motion.button
                type="button"
                onClick={() => handleSocialSignup('google')}
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
                  onClick={() => handleSocialSignup('phone')}
                  className="py-3.5 px-4 bg-white border-2 border-gray-200 rounded-xl text-green-600 hover:border-green-500 hover:bg-green-50 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPhone className="text-xl" />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => handleSocialSignup('facebook')}
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
                <span className="px-4 bg-white/80 text-gray-500 font-medium">or sign up with email</span>
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <motion.div
                    animate={formData.fullName ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <HiUser className={`h-5 w-5 transition-colors duration-300 ${formData.fullName ? 'text-green-500' : 'text-gray-400'
                      }`} />
                  </motion.div>
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
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

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <motion.div
                    animate={formData.phone ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <HiPhone className={`h-5 w-5 transition-colors duration-300 ${formData.phone ? 'text-green-500' : 'text-gray-400'
                      }`} />
                  </motion.div>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="+254 712 345 678"
                />
              </div>
            </div>

            {/* Password */}
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

              {/* Password Strength Meter */}
              <AnimatePresence>
                {formData.password && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 space-y-2"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 font-medium">Password Strength:</span>
                      <span className={`font-semibold ${passwordStrength.label === 'Weak' ? 'text-red-500' :
                          passwordStrength.label === 'Medium' ? 'text-orange-500' :
                            passwordStrength.label === 'Strong' ? 'text-green-500' :
                              'text-green-600'
                        }`}>
                        {passwordStrength.label}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                        className={`h-full rounded-full ${passwordStrength.color} transition-all duration-500`}
                      />
                    </div>

                    {/* Suggestions */}
                    {passwordStrength.suggestions.length > 0 && (
                      <div className="text-xs text-gray-500 space-y-1">
                        <p className="font-medium">Add:</p>
                        <ul className="list-disc list-inside space-y-0.5">
                          {passwordStrength.suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <HiLockClosed className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`block w-full pl-12 pr-12 py-3.5 border-2 rounded-xl focus:ring-2 focus:ring-green-500 transition-all duration-300 ${formData.confirmPassword && formData.password !== formData.confirmPassword
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-gray-200 focus:border-green-500'
                    }`}
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
                  {formData.confirmPassword && formData.password === formData.confirmPassword && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                    >
                      <HiCheckCircle className="h-5 w-5 text-green-500" />
                    </motion.div>
                  )}
                  <motion.button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AnimatePresence mode="wait">
                      {showConfirmPassword ? (
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
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-600"
                >
                  Passwords do not match
                </motion.p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1 cursor-pointer"
              />
              <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-green-600 hover:text-green-500 font-semibold">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-green-600 hover:text-green-500 font-semibold">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-4 px-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-200 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ y: -2, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Create Account</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-green-600 hover:text-green-500 transition-colors">
                Sign in here
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
          🔒 Your data is protected with 256-bit encryption
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
