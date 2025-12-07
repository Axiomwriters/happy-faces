import { motion } from 'framer-motion';
import { HiBadgeCheck, HiCalendar, HiTrendingUp, HiAcademicCap } from 'react-icons/hi';
import { mockPerformance } from '../../data/mockStudentData';

const Performance = () => {
    const { modules, attendance, achievements } = mockPerformance;

    const averageScore = modules.reduce((acc, m) => acc + m.score, 0) / modules.length;

    const getRarityColor = (rarity) => {
        switch (rarity) {
            case 'epic': return 'from-purple-500 to-purple-600';
            case 'rare': return 'from-blue-500 to-blue-600';
            default: return 'from-gray-400 to-gray-500';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 text-white shadow-xl"
            >
                <h1 className="text-3xl font-bold mb-2">📊 Performance & Analytics</h1>
                <p className="text-purple-100">Track your progress and achievements</p>
            </motion.div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-green-500 p-4 rounded-xl text-white">
                            <HiTrendingUp className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Average Score</p>
                            <p className="text-4xl font-bold text-gray-900">{averageScore.toFixed(0)}%</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-500 p-4 rounded-xl text-white">
                            <HiCalendar className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Attendance</p>
                            <p className="text-4xl font-bold text-gray-900">{attendance.percentage}%</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-purple-500 p-4 rounded-xl text-white">
                            <HiBadgeCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Achievements</p>
                            <p className="text-4xl font-bold text-gray-900">{achievements.length}</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Module Scores */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl shadow-xl p-6"
            >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Module Scores</h2>
                <div className="space-y-4">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 + 0.5 }}
                            className="flex items-center gap-4"
                        >
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-gray-900 text-sm">{module.name}</span>
                                    <span className="text-lg font-bold text-gray-900">{module.score}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(module.score / module.maxScore) * 100}%` }}
                                        transition={{ duration: 0.8, delay: index * 0.05 + 0.6 }}
                                        className={`h-full rounded-full ${module.status === 'passed' ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'
                                            }`}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-3xl shadow-xl p-6"
            >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <HiBadgeCheck className="w-7 h-7 text-yellow-500" />
                    Achievements Unlocked
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.9 }}
                            className={`bg-gradient-to-br ${getRarityColor(achievement.rarity)} rounded-2xl p-6 text-white shadow-lg`}
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                        >
                            <div className="text-5xl mb-3">{achievement.icon}</div>
                            <h3 className="font-bold text-lg mb-2">{achievement.name}</h3>
                            <p className="text-sm text-white/90 mb-3">{achievement.description}</p>
                            <p className="text-xs text-white/70">Earned: {achievement.earnedDate}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Performance;
