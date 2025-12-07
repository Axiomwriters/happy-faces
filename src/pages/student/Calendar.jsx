import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { mockCalendarEvents } from '../../data/mockStudentData';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 1)); // December 2024
    const [view, setView] = useState('month'); // month, week, day

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const getEventColor = (type) => {
        switch (type) {
            case 'class': return 'bg-blue-500';
            case 'exam': return 'bg-red-500';
            case 'assignment': return 'bg-green-500';
            case 'payment': return 'bg-yellow-500';
            default: return 'bg-gray-500';
        }
    };

    const getEventsForDate = (day) => {
        const dateStr = `2024-12-${day.toString().padStart(2, '0')}`;
        return mockCalendarEvents.filter(event => event.date === dateStr);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl"
            >
                <h1 className="text-3xl font-bold mb-2">📅 Calendar & Schedule</h1>
                <p className="text-indigo-100">Manage your classes, exams, and deadlines</p>
            </motion.div>

            {/* Calendar Controls */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                        </h2>
                        <div className="flex gap-2">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                            >
                                <HiChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                            >
                                <HiChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>

                    {/* View Toggle */}
                    <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                        {['month', 'week', 'day'].map((v) => (
                            <button
                                key={v}
                                onClick={() => setView(v)}
                                className={`px-4 py-2 rounded-lg font-semibold capitalize transition-all ${view === v
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Calendar Grid */}
                {view === 'month' && (
                    <div>
                        {/* Day Headers */}
                        <div className="grid grid-cols-7 gap-2 mb-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="text-center font-bold text-gray-600 text-sm py-2">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Days */}
                        <div className="grid grid-cols-7 gap-2">
                            {/* Empty cells for days before month starts */}
                            {Array.from({ length: firstDay }).map((_, index) => (
                                <div key={`empty-${index}`} className="aspect-square rounded-lg bg-gray-50" />
                            ))}

                            {/* Days of the month */}
                            {Array.from({ length: daysInMonth }).map((_, index) => {
                                const day = index + 1;
                                const events = getEventsForDate(day);
                                const isToday = day === 7; // Mock today as 7th

                                return (
                                    <motion.div
                                        key={day}
                                        whileHover={{ scale: 1.05 }}
                                        className={`aspect-square rounded-lg p-2 border-2 cursor-pointer transition-all ${isToday
                                                ? 'border-indigo-500 bg-indigo-50'
                                                : 'border-gray-200 hover:border-indigo-300'
                                            }`}
                                    >
                                        <div className="font-bold text-sm mb-1">{day}</div>
                                        <div className="space-y-1">
                                            {events.slice(0, 2).map((event) => (
                                                <div
                                                    key={event.id}
                                                    className={`${getEventColor(event.type)} text-white text-xs px-1 py-0.5 rounded truncate`}
                                                    title={event.title}
                                                >
                                                    {event.title}
                                                </div>
                                            ))}
                                            {events.length > 2 && (
                                                <div className="text-xs text-gray-500">+{events.length - 2} more</div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                    {mockCalendarEvents.map((event) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                            <div className={`${getEventColor(event.type)} w-3 h-3 rounded-full mt-1.5`} />
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-900">{event.title}</h4>
                                <p className="text-sm text-gray-600">{event.date} • {event.time}</p>
                                {event.location && <p className="text-xs text-gray-500">{event.location}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
