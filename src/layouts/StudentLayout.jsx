import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiHome,
    HiAcademicCap,
    HiDocumentText,
    HiCreditCard,
    HiCog,
    HiLogout,
    HiMenuAlt3,
    HiX,
    HiUser,
    HiCalendar,
    HiBookOpen,
    HiChat,
    HiChatAlt2,
    HiChartBar,
} from 'react-icons/hi';
import NotificationsCenter from '../components/student/NotificationsCenter';
import ProfileSummaryCard from '../components/student/ProfileSummaryCard';

const StudentLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const menuItems = [
        { name: 'Dashboard', path: '/student', icon: HiHome },
        { name: 'My Courses', path: '/student/courses', icon: HiAcademicCap },
        { name: 'Performance', path: '/student/performance', icon: HiChartBar },
        { name: 'Calendar', path: '/student/calendar', icon: HiCalendar },
        { name: 'Resources', path: '/student/resources', icon: HiBookOpen },
        { name: 'Messages', path: '/student/messaging', icon: HiChat },
        { name: 'Forum', path: '/student/forum', icon: HiChatAlt2 },
        { name: 'Certificates', path: '/student/certificates', icon: HiDocumentText },
        { name: 'Payments', path: '/student/payments', icon: HiCreditCard },
        { name: 'Profile', path: '/student/profile', icon: HiUser },
        { name: 'Settings', path: '/student/settings', icon: HiCog },
    ];

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    return (
        <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
            {/* Desktop Sidebar */}
            <motion.aside
                initial={{ x: 0 }}
                animate={{ width: isSidebarOpen ? 280 : 80 }}
                transition={{ duration: 0.3 }}
                className="hidden md:flex flex-col bg-white shadow-xl border-r border-gray-200"
            >
                {/* Logo */}
                <div className="p-6 border-b border-gray-200">
                    <Link to="/" className="flex items-center gap-3">
                        {isSidebarOpen ? (
                            <h1 className="text-2xl font-bold">
                                <span className="text-green-600">Happy</span>
                                <span className="text-gray-800">Faces</span>
                            </h1>
                        ) : (
                            <span className="text-2xl font-bold text-green-600">HF</span>
                        )}
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6 overflow-y-auto">
                    <ul className="space-y-2 px-3">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all"
                                >
                                    <item.icon className="text-xl flex-shrink-0" />
                                    {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Profile Card - Only show when sidebar is open */}
                {isSidebarOpen && (
                    <div className="px-3 pb-4">
                        <ProfileSummaryCard student={{ name: 'John Doe', id: 'STU-2024-001' }} />
                    </div>
                )}

            </motion.aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* Desktop Toggle */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="hidden md:block p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <HiMenuAlt3 className="text-2xl text-gray-600" />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <HiMenuAlt3 className="text-2xl text-gray-600" />
                        </button>

                        <h2 className="text-xl font-bold text-gray-900">Student Portal</h2>
                    </div>

                    {/* Right Side: Notifications Only */}
                    <div className="flex items-center gap-4">
                        <NotificationsCenter />
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <Outlet />
                </main>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
                        />

                        {/* Sidebar */}
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 left-0 bottom-0 w-[280px] max-w-[90vw] bg-white shadow-2xl z-50 md:hidden flex flex-col overflow-hidden"
                        >
                            {/* Logo and Close Button */}
                            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                                <Link to="/" className="flex items-center gap-3">
                                    <h1 className="text-2xl font-bold">
                                        <span className="text-green-600">Happy</span>
                                        <span className="text-gray-800">Faces</span>
                                    </h1>
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-3 bg-gray-100 hover:bg-red-100 rounded-full transition-all shadow-md hover:shadow-lg"
                                    aria-label="Close menu"
                                >
                                    <HiX className="text-2xl text-gray-900 font-bold" />
                                </button>
                            </div>

                            {/* Navigation */}
                            <nav className="flex-1 py-6 overflow-y-auto">
                                <ul className="space-y-2 px-3">
                                    {menuItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all"
                                            >
                                                <item.icon className="text-xl" />
                                                <span className="font-medium">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Profile Card for Mobile - Properly Constrained */}
                            <div className="px-4 pb-6 w-full">
                                <div className="w-full max-w-full overflow-hidden">
                                    <ProfileSummaryCard student={{ name: 'John Doe', id: 'STU-2024-001' }} />
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default StudentLayout;
