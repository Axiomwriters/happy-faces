import { useState } from 'react';
import { FaSave, FaUser, FaLock, FaBell, FaPalette } from 'react-icons/fa';

const Settings = () => {
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        weeklyReport: true
    });

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
                <p className="text-gray-500">Manage your profile and dashboard preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sidebar for settings (optional, simplified here as vertical stack) */}
                <div className="md:col-span-1 space-y-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <nav className="space-y-1">
                            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-blue-50 text-blue-700">
                                <FaUser /> Profile
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50">
                                <FaBell /> Notifications
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50">
                                <FaPalette /> Appearance
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50">
                                <FaLock /> Security
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                    {/* Profile Settings */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Profile Information</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                                    AD
                                </div>
                                <button className="text-sm text-blue-600 hover:underline">Change Avatar</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" defaultValue="Admin" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" defaultValue="User" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" defaultValue="admin@example.com" />
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Notifications</h2>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Email Notifications</p>
                                    <p className="text-xs text-gray-500">Receive updates via email</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={notifications.email}
                                    onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                                    className="w-5 h-5 text-blue-600"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Push Notifications</p>
                                    <p className="text-xs text-gray-500">Receive real-time alerts</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={notifications.push}
                                    onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
                                    className="w-5 h-5 text-blue-600"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Weekly Reports</p>
                                    <p className="text-xs text-gray-500">Summary of enrollments and revenue</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={notifications.weeklyReport}
                                    onChange={(e) => setNotifications({ ...notifications, weeklyReport: e.target.checked })}
                                    className="w-5 h-5 text-blue-600"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors shadow-sm">
                            <FaSave /> Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
