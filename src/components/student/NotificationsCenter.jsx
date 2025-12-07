import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiBell,
    HiX,
    HiCheckCircle,
    HiClock,
    HiExclamation,
    HiDocument
} from 'react-icons/hi';
import { mockNotifications } from '../../data/mockStudentData';

const NotificationsCenter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState(mockNotifications);

    const unreadCount = notifications.filter(n => !n.read).length;

    const getIcon = (type) => {
        switch (type) {
            case 'class': return HiClock;
            case 'payment': return HiExclamation;
            case 'assignment': return HiDocument;
            default: return HiBell;
        }
    };

    const getColor = (type) => {
        switch (type) {
            case 'class': return 'bg-blue-100 text-blue-600';
            case 'payment': return 'bg-red-100 text-red-600';
            case 'assignment': return 'bg-green-100 text-green-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    const markAsRead = (id) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, read: true } : n
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    return (
        <div className="relative">
            {/* Bell Icon Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2.5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <HiBell className="w-6 h-6 text-gray-700" />
                {unreadCount > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                    >
                        {unreadCount > 9 ? '9+' : unreadCount}
                    </motion.span>
                )}
            </motion.button>

            {/* Notifications Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-bold">Notifications</h3>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                                    >
                                        <HiX className="w-5 h-5" />
                                    </button>
                                </div>
                                {unreadCount > 0 && (
                                    <button
                                        onClick={markAllAsRead}
                                        className="text-sm text-green-100 hover:text-white transition-colors"
                                    >
                                        Mark all as read
                                    </button>
                                )}
                            </div>

                            {/* Notifications List */}
                            <div className="max-h-96 overflow-y-auto">
                                {notifications.length === 0 ? (
                                    <div className="p-8 text-center text-gray-500">
                                        <HiBell className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                                        <p>No notifications yet</p>
                                    </div>
                                ) : (
                                    <div className="divide-y divide-gray-100">
                                        {notifications.map((notification) => {
                                            const Icon = getIcon(notification.type);
                                            const colorClass = getColor(notification.type);

                                            return (
                                                <motion.div
                                                    key={notification.id}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${!notification.read ? 'bg-blue-50/30' : ''
                                                        }`}
                                                    onClick={() => markAsRead(notification.id)}
                                                >
                                                    <div className="flex gap-3">
                                                        <div className={`${colorClass} p-2 rounded-lg h-fit`}>
                                                            <Icon className="w-5 h-5" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-start justify-between gap-2">
                                                                <h4 className={`font-semibold text-sm ${!notification.read ? 'text-gray-900' : 'text-gray-700'
                                                                    }`}>
                                                                    {notification.title}
                                                                </h4>
                                                                {!notification.read && (
                                                                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1.5"></div>
                                                                )}
                                                            </div>
                                                            <p className="text-sm text-gray-600 mt-0.5">
                                                                {notification.message}
                                                            </p>
                                                            <p className="text-xs text-gray-400 mt-1">
                                                                {notification.time}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="border-t border-gray-100 p-3 bg-gray-50">
                                <button className="w-full text-center text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
                                    View All Notifications
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NotificationsCenter;
