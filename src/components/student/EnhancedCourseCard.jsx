import { motion } from 'framer-motion';
import {
    HiPlay,
    HiPhone,
    HiMail,
    HiCheckCircle,
    HiClock,
    HiBookOpen
} from 'react-icons/hi';
import { useState } from 'react';

const EnhancedCourseCard = ({ course }) => {
    const [showTasks, setShowTasks] = useState(false);

    const completedTasks = course.tasks?.filter(t => t.completed).length || 0;
    const totalTasks = course.tasks?.length || 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            whileHover={{ y: -4 }}
        >
            {/* Course Header with Image */}
            <div className="relative h-40 bg-gradient-to-br from-green-500 to-green-700 overflow-hidden">
                {course.image ? (
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <HiBookOpen className="w-20 h-20 text-white/30" />
                    </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                    <span
                        className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${course.status === 'Completed'
                                ? 'bg-green-500/90 text-white'
                                : 'bg-yellow-500/90 text-white'
                            }`}
                    >
                        {course.status}
                    </span>
                </div>

                {/* Progress Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-sm font-bold text-gray-900">{course.progress}%</span>
                </div>
            </div>

            {/* Course Content */}
            <div className="p-6">
                {/* Title and Module Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {course.title}
                </h3>

                {course.currentModule && course.currentModule !== 'Completed' && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <HiBookOpen className="w-4 h-4" />
                        <span>{course.currentModule}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{course.totalModules} modules total</span>
                    </div>
                )}

                {/* Next Class */}
                <div className="flex items-center gap-2 text-sm mb-4">
                    <HiClock className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">
                        <span className="font-semibold">Next: </span>
                        {course.nextClass}
                    </span>
                </div>

                {/* Trainer Info */}
                {course.trainer && (
                    <div className="bg-gray-50 rounded-xl p-3 mb-4">
                        <p className="text-xs text-gray-500 mb-1">Instructor</p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-gray-900 text-sm">{course.trainer.name}</p>
                            <div className="flex gap-2">
                                <motion.a
                                    href={`tel:${course.trainer.phone}`}
                                    className="p-1.5 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <HiPhone className="w-4 h-4" />
                                </motion.a>
                                <motion.a
                                    href={`mailto:${course.trainer.email}`}
                                    className="p-1.5 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <HiMail className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600 font-medium">Course Progress</span>
                        <span className="font-bold text-gray-900">{course.progress}%</span>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                        />
                    </div>
                </div>

                {/* Daily Tasks */}
                {totalTasks > 0 && (
                    <div className="mb-4">
                        <button
                            onClick={() => setShowTasks(!showTasks)}
                            className="w-full flex items-center justify-between text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            <span>Daily Tasks ({completedTasks}/{totalTasks})</span>
                            <motion.div
                                animate={{ rotate: showTasks ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                ▼
                            </motion.div>
                        </button>

                        {showTasks && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-3 space-y-2"
                            >
                                {course.tasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className={`flex items-center gap-2 text-sm p-2 rounded-lg ${task.completed ? 'bg-green-50' : 'bg-gray-50'
                                            }`}
                                    >
                                        <HiCheckCircle
                                            className={`w-5 h-5 flex-shrink-0 ${task.completed ? 'text-green-500' : 'text-gray-300'
                                                }`}
                                        />
                                        <span className={task.completed ? 'text-gray-500 line-through' : 'text-gray-700'}>
                                            {task.title}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                )}

                {/* Action Button */}
                {course.status !== 'Completed' && (
                    <motion.button
                        className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <HiPlay className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Resume Learning</span>
                    </motion.button>
                )}

                {course.status === 'Completed' && (
                    <motion.button
                        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <HiCheckCircle className="w-5 h-5" />
                        <span>View Certificate</span>
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};

export default EnhancedCourseCard;
