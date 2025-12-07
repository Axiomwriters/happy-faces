import { motion } from 'framer-motion';
import { HiPlay, HiClock, HiCheckCircle } from 'react-icons/hi';

const StudentCourses = () => {
    const courses = [
        {
            id: 1,
            title: 'Carpentry Basics',
            instructor: 'Mr. James Kamau',
            progress: 80,
            status: 'In Progress',
            duration: '12 weeks',
            enrolled: 'Sep 2024',
            nextClass: 'Tomorrow, 9:00 AM',
            modules: 15,
            completedModules: 12,
            image: '🪵',
        },
        {
            id: 2,
            title: 'Electrical Installation',
            instructor: 'Mrs. Grace Wanjiru',
            progress: 45,
            status: 'In Progress',
            duration: '16 weeks',
            enrolled: 'Oct 2024',
            nextClass: 'Monday, 10:00 AM',
            modules: 20,
            completedModules: 9,
            image: '⚡',
        },
        {
            id: 3,
            title: 'Tailoring Fundamentals',
            instructor: 'Ms. Mary Akinyi',
            progress: 100,
            status: 'Completed',
            duration: '10 weeks',
            enrolled: 'Jul 2024',
            nextClass: 'Course Completed',
            modules: 10,
            completedModules: 10,
            image: '🧵',
        },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
                    <p className="text-gray-600">Track your learning progress and access course materials</p>
                </div>
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
                    Browse Courses
                </button>
            </motion.div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-lg flex items-center justify-center">
                            <HiPlay className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">3</p>
                            <p className="text-gray-600">Total Courses</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-yellow-100 text-yellow-600 w-14 h-14 rounded-lg flex items-center justify-center">
                            <HiClock className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">2</p>
                            <p className="text-gray-600">In Progress</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-green-100 text-green-600 w-14 h-14 rounded-lg flex items-center justify-center">
                            <HiCheckCircle className="text-2xl" />
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-gray-900">1</p>
                            <p className="text-gray-600">Completed</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Courses List */}
            <div className="space-y-6">
                {courses.map((course, index) => (
                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <div className="p-6">
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Course Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center text-5xl">
                                        {course.image}
                                    </div>
                                </div>

                                {/* Course Info */}
                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.title}</h3>
                                            <p className="text-gray-600">Instructor: {course.instructor}</p>
                                        </div>
                                        <span
                                            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${course.status === 'Completed'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                        >
                                            {course.status}
                                        </span>
                                    </div>

                                    {/* Course Details */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Duration</p>
                                            <p className="font-semibold text-gray-900">{course.duration}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Enrolled</p>
                                            <p className="font-semibold text-gray-900">{course.enrolled}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Modules</p>
                                            <p className="font-semibold text-gray-900">
                                                {course.completedModules}/{course.modules}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Next Class</p>
                                            <p className="font-semibold text-gray-900 text-sm">{course.nextClass}</p>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-600">Course Progress</span>
                                            <span className="text-sm font-bold text-gray-900">{course.progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div
                                                className={`h-3 rounded-full transition-all ${course.progress === 100 ? 'bg-green-600' : 'bg-blue-600'
                                                    }`}
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {course.status !== 'Completed' && (
                                            <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                                Continue Learning
                                            </button>
                                        )}
                                        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                                            Course Details
                                        </button>
                                        {course.status === 'Completed' && (
                                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                                Download Certificate
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StudentCourses;
