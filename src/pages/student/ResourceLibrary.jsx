import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiDocument, HiVideoCamera, HiDownload, HiSearch, HiFilter } from 'react-icons/hi';

const ResourceLibrary = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    const resources = [
        { id: 1, title: 'Carpentry Safety Manual', type: 'document', course: 'Carpentry Basics', size: '2MB', date: '2024-12-01' },
        { id: 2, title: 'Electrical Wiring Diagrams', type: 'document', course: 'Electrical Installation', size: '5MB', date: '2024-11-28' },
        { id: 3, title: 'Joinery Techniques Video', type: 'video', course: 'Carpentry Basics', size: '45MB', date: '2024-11-25' },
        { id: 4, title: 'Past Exam Papers 2023', type: 'past-paper', course: 'Carpentry Basics', size: '1MB', date: '2024-11-15' },
        { id: 5, title: 'Circuit Design Tutorial', type: 'video', course: 'Electrical Installation', size: '38MB', date: '2024-11-10' },
        { id: 6, title: 'Trainer Guide - Module 1', type: 'guide', course: 'Carpentry Basics', size: '3MB', date: '2024-11-05' },
    ];

    const getIcon = (type) => {
        return type === 'video' ? HiVideoCamera : HiDocument;
    };

    const filteredResources = resources.filter(r => {
        const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterType === 'all' || r.type === filterType;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 text-white shadow-xl"
            >
                <h1 className="text-3xl font-bold mb-2">📚 Resource Library</h1>
                <p className="text-teal-100">Access all your learning materials in one place</p>
            </motion.div>

            {/* Search and Filter */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex gap-4 flex-wrap">
                    <div className="flex-1 min-w-[200px]">
                        <div className="relative">
                            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search resources..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                            />
                        </div>
                    </div>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                    >
                        <option value="all">All Types</option>
                        <option value="document">Documents</option>
                        <option value="video">Videos</option>
                        <option value="past-paper">Past Papers</option>
                        <option value="guide">Guides</option>
                    </select>
                </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => {
                    const Icon = getIcon(resource.type);
                    return (
                        <motion.div
                            key={resource.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100 group"
                            whileHover={{ y: -4 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-teal-100 p-3 rounded-xl group-hover:bg-teal-200 transition-colors">
                                    <Icon className="w-6 h-6 text-teal-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-900 mb-1 truncate">{resource.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{resource.course}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>{resource.size}</span>
                                        <span>{resource.date}</span>
                                    </div>
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full mt-4 py-2 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <HiDownload className="w-4 h-4" />
                                Download
                            </motion.button>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ResourceLibrary;
