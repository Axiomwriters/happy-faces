import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiAcademicCap,
  HiClock,
  HiCheckCircle,
  HiTrendingUp,
  HiCalendar,
  HiDocumentText,
  HiTrendingDown,
  HiMinus
} from 'react-icons/hi';
import AnnouncementCard from '../../components/student/AnnouncementCard';
import { mockStudent, mockAnnouncements, mockStats, mockCourses } from '../../data/mockStudentData';

const StudentDashboard = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      label: 'Enrolled Courses',
      value: '3',
      icon: HiAcademicCap,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
      change: mockStats[0].change,
      trend: mockStats[0].trend
    },
    {
      label: 'In Progress',
      value: '2',
      icon: HiClock,
      color: 'bg-yellow-500',
      gradient: 'from-yellow-500 to-yellow-600',
      change: mockStats[1].change,
      trend: mockStats[1].trend
    },
    {
      label: 'Completed',
      value: '1',
      icon: HiCheckCircle,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
      change: mockStats[2].change,
      trend: mockStats[2].trend
    },
    {
      label: 'Overall Progress',
      value: '65%',
      icon: HiTrendingUp,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
      change: mockStats[3].change,
      trend: mockStats[3].trend,
      isSpecial: true
    },
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return HiTrendingUp;
      case 'down': return HiTrendingDown;
      default: return HiMinus;
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Welcome Banner Only - No Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-2"
            >
              Welcome back, {mockStudent.name.split(' ')[0]}! 👋
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-green-100 text-lg"
            >
              You're making great progress. Keep up the excellent work!
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const TrendIcon = getTrendIcon(stat.trend);
          const isHovered = hoveredStat === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer transition-all duration-300 ${stat.isSpecial
                  ? 'ring-2 ring-purple-200 ring-offset-2'
                  : ''
                }`}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  className={`bg-gradient-to-br ${stat.gradient} w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg`}
                  animate={{
                    rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                    scale: isHovered ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="text-2xl" />
                </motion.div>
                <motion.span
                  className="text-4xl font-bold text-gray-900"
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                >
                  {stat.value}
                </motion.span>
              </div>
              <p className="text-gray-600 font-semibold mb-2">{stat.label}</p>
              <div className={`flex items-center gap-1 text-xs font-medium ${getTrendColor(stat.trend)}`}>
                <TrendIcon className="w-4 h-4" />
                <span>{stat.change}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
      >
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
          <p className="text-sm text-gray-600 mt-1">Track your learning progress</p>
        </div>
        <div className="p-6 space-y-4">
          {mockCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.7 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 group"
              whileHover={{ x: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    📅 Next Class: <span className="font-semibold">{course.nextClass}</span>
                  </p>
                  {course.currentModule && course.currentModule !== 'Completed' && (
                    <p className="text-xs text-gray-500 mt-1">
                      {course.currentModule} / {course.totalModules} modules
                    </p>
                  )}
                </div>
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-sm ${course.status === 'Completed'
                      ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-700'
                      : 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700'
                    }`}
                >
                  {course.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 font-medium">Progress</span>
                  <span className="font-bold text-gray-900">{course.progress}%</span>
                </div>
                <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.8, ease: 'easeOut' }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <motion.div
          className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl p-6 border-2 border-blue-100 shadow-lg group"
          whileHover={{ y: -4, boxShadow: '0 15px 35px rgba(59, 130, 246, 0.15)' }}
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
              <HiCalendar className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">📚 Upcoming Classes</h3>
              <p className="text-gray-600 mb-4">You have 2 classes scheduled for this week</p>
              <motion.button
                className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Schedule
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-purple-50 via-white to-purple-50 rounded-2xl p-6 border-2 border-purple-100 shadow-lg group"
          whileHover={{ y: -4, boxShadow: '0 15px 35px rgba(168, 85, 247, 0.15)' }}
        >
          <div className="flex items-start gap-4">
            <div className="bg-purple-500 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
              <HiDocumentText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">🎓 Certificates</h3>
              <p className="text-gray-600 mb-4">You have 1 certificate ready to download</p>
              <motion.button
                className="px-6 py-2.5 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Certificates
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Announcements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">📢 Announcements</h2>
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {mockAnnouncements.filter(a => a.type === 'urgent').length}
          </span>
        </div>
        <div className="space-y-4">
          {mockAnnouncements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 1.3 }}
            >
              <AnnouncementCard announcement={announcement} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StudentDashboard;
