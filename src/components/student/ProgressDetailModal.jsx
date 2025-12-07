import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCheckCircle, HiXCircle } from 'react-icons/hi';

const ProgressDetailModal = ({ isOpen, onClose, courseData }) => {
    if (!isOpen || !courseData) return null;

    const modules = [
        { id: 1, name: 'Module 1: Introduction', score: 92, status: 'passed', feedback: 'Excellent understanding of basic concepts!' },
        { id: 2, name: 'Module 2: Fundamentals', score: 88, status: 'passed', feedback: 'Good progress, practice more on safety protocols.' },
        { id: 3, name: 'Module 3: Intermediate Techniques', score: 95, status: 'passed', feedback: 'Outstanding practical skills demonstrated!' },
        { id: 4, name: 'Module 4: Advanced Concepts', score: 85, status: 'passed', feedback: 'Well done! Focus on precision in measurements.' },
        { id: 5, name: 'Module 5: Advanced Joinery', score: null, status: 'in-progress', feedback: null },
        { id: 6, name: 'Module 6: Project Management', score: null, status: 'locked', feedback: null },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'passed': return 'text-green-600';
            case 'failed': return 'text-red-600';
            case 'in-progress': return 'text-yellow-600';
            default: return 'text-gray-400';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'passed': return <HiCheckCircle className="w-6 h-6 text-green-500" />;
            case 'failed': return <HiXCircle className="w-6 h-6 text-red-500" />;
            case 'in-progress': return <div className="w-6 h-6 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin"></div>;
            default: return <div className="w-6 h-6 rounded-full bg-gray-300"></div>;
        }
    };

    const averageScore = modules
        .filter(m => m.score !== null)
        .reduce((acc, m) => acc + m.score, 0) / modules.filter(m => m.score !== null).length;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Header */}
                                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h2 className="text-2xl font-bold mb-2">{courseData.title}</h2>
                                            <p className="text-green-100">Detailed Progress & Performance</p>
                                        </div>
                                        <button
                                            onClick={onClose}
                                            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                        >
                                            <HiX className="w-6 h-6" />
                                        </button>
                                    </div>

                                    {/* Overall Stats */}
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                            <p className="text-green-100 text-sm mb-1">Overall Progress</p>
                                            <p className="text-3xl font-bold">{courseData.progress}%</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                            <p className="text-green-100 text-sm mb-1">Average Score</p>
                                            <p className="text-3xl font-bold">{averageScore.toFixed(0)}%</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                            <p className="text-green-100 text-sm mb-1">Modules Complete</p>
                                            <p className="text-3xl font-bold">
                                                {modules.filter(m => m.status === 'passed').length}/{modules.length}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 max-h-[60vh] overflow-y-auto">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Module Breakdown</h3>
                                    <div className="space-y-4">
                                        {modules.map((module) => (
                                            <motion.div
                                                key={module.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: module.id * 0.05 }}
                                                className="bg-gray-50 rounded-xl p-5 border border-gray-200"
                                            >
                                                <div className="flex items-start gap-4">
                                                    {/* Status Icon */}
                                                    <div className="mt-1">
                                                        {getStatusIcon(module.status)}
                                                    </div>

                                                    {/* Module Info */}
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between mb-2">
                                                            <div>
                                                                <h4 className="font-bold text-gray-900">{module.name}</h4>
                                                                <p className={`text-sm font-semibold capitalize ${getStatusColor(module.status)}`}>
                                                                    {module.status.replace('-', ' ')}
                                                                </p>
                                                            </div>
                                                            {module.score !== null && (
                                                                <div className="text-right">
                                                                    <p className="text-2xl font-bold text-gray-900">{module.score}%</p>
                                                                    <p className="text-xs text-gray-500">Score</p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Progress Bar */}
                                                        {module.status === 'in-progress' && (
                                                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                                                <div className="bg-yellow-500 h-2 rounded-full w-1/2 animate-pulse"></div>
                                                            </div>
                                                        )}

                                                        {/* Feedback */}
                                                        {module.feedback && (
                                                            <div className="mt-3 bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                                                                <p className="text-sm text-gray-700">
                                                                    <span className="font-semibold text-blue-700">Trainer Feedback: </span>
                                                                    {module.feedback}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="border-t border-gray-200 p-6 bg-gray-50">
                                    <div className="flex gap-4">
                                        <motion.button
                                            onClick={onClose}
                                            className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Close
                                        </motion.button>
                                        <motion.button
                                            className="flex-1 py-3 px-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Download Report
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProgressDetailModal;
