import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiUser, HiCog, HiLogout, HiDotsVertical, HiPencil } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const ProfileSummaryCard = ({ student = {} }) => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    // Mock student data
    const studentData = {
        name: student.name || 'John Doe',
        id: student.id || 'STU-2024-001',
        email: student.email || 'john.doe@example.com',
        avatar: student.avatar || null,
        enrollmentDate: student.enrollmentDate || '2024-01-15'
    };

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const handleLogout = () => {
        setShowMenu(false);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
        >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative">
                        {studentData.avatar ? (
                            <img
                                src={studentData.avatar}
                                alt={studentData.name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
                            />
                        ) : (
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-lg border-2 border-green-400 shadow-md">
                                {getInitials(studentData.name)}
                            </div>
                        )}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 text-sm truncate">
                            {studentData.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">
                            ID: {studentData.id}
                        </p>
                    </div>

                    {/* Menu Button */}
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                    >
                        <HiDotsVertical className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Dropdown Menu - Opens UPWARD */}
                <AnimatePresence>
                    {showMenu && (
                        <>
                            {/* Backdrop */}
                            <div
                                className="fixed inset-0 z-40"
                                onClick={() => setShowMenu(false)}
                            />

                            {/* Menu */}
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                                className="absolute right-4 bottom-full mb-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                            >
                                <div className="p-2 space-y-1">
                                    <Link
                                        to="/student/profile"
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors group"
                                        onClick={() => setShowMenu(false)}
                                    >
                                        <HiUser className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                            View Profile
                                        </span>
                                    </Link>

                                    <Link
                                        to="/student/profile/edit"
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors group"
                                        onClick={() => setShowMenu(false)}
                                    >
                                        <HiPencil className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                            Edit Profile
                                        </span>
                                    </Link>

                                    <Link
                                        to="/student/settings"
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors group"
                                        onClick={() => setShowMenu(false)}
                                    >
                                        <HiCog className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                            Settings
                                        </span>
                                    </Link>

                                    <div className="border-t border-gray-100 my-2"></div>

                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-lg transition-colors group"
                                    >
                                        <HiLogout className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-red-600">
                                            Logout
                                        </span>
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ProfileSummaryCard;
