import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaBell, FaSearch, FaUserCircle, FaPlus, FaSignOutAlt } from 'react-icons/fa';

const Topbar = ({ isSidebarOpen, toggleSidebar }) => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => {
        // Clear auth data
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userRole');
        // Redirect to admin login
        navigate('/admin/login');
    };

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-40 transition-all duration-300">
            <div className="flex items-center flex-1 gap-4">
                <button
                    onClick={toggleSidebar}
                    className="text-gray-500 focus:outline-none lg:hidden mr-2"
                >
                    <FaBars className="w-6 h-6" />
                </button>

                {/* Enhanced Search */}
                <div className="relative w-full max-w-xl hidden md:block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FaSearch className="w-4 h-4 text-gray-400" />
                    </span>
                    <input
                        className="w-full py-2.5 pl-10 pr-4 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        type="text"
                        placeholder="Search students (ID), courses, or program status..."
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <span className="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">⌘K</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* Quick Add Action */}
                <button className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
                    <FaPlus className="w-3.5 h-3.5" />
                    <span>Quick Add</span>
                </button>

                <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

                {/* Notifications */}
                <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
                    <FaBell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 inline-flex items-center justify-center p-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full border-2 border-white">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    </span>
                </button>

                {/* Profile Dropdown */}
                <div className="relative pl-2">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-3 focus:outline-none hover:bg-gray-50 p-1.5 rounded-lg transition-colors"
                    >
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 border border-green-200">
                            <FaUserCircle className="w-6 h-6" />
                        </div>
                        <div className="hidden md:block text-left">
                            <p className="text-xs font-bold text-gray-700">Admin User</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wide">Administrator</p>
                        </div>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 origin-top-right transform transition-all z-50">
                            <div className="px-4 py-3 border-b border-gray-100">
                                <p className="text-sm font-semibold text-gray-900">Signed in as</p>
                                <p className="text-sm text-gray-500 truncate">admin@happyfaces.org</p>
                            </div>
                            <div className="py-1">
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors gap-2"
                                >
                                    <FaSignOutAlt className="w-4 h-4" />
                                    Sign out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Topbar;
