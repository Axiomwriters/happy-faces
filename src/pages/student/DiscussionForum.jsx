import { motion } from 'framer-motion';
import { HiChatAlt2, HiThumbUp, HiReply } from 'react-icons/hi';

const DiscussionForum = () => {
    const threads = [
        {
            id: 1,
            title: 'Best practices for dovetail joints?',
            author: 'Sarah M.',
            course: 'Carpentry Basics',
            replies: 12,
            likes: 8,
            time: '2 hours ago',
            preview: 'I\'m having trouble getting clean dovetail joints. Any tips from experienced carpenters?'
        },
        {
            id: 2,
            title: 'Circuit breaker sizing guide',
            author: 'Michael K.',
            course: 'Electrical Installation',
            replies: 7,
            likes: 15,
            time: '5 hours ago',
            preview: 'Can someone explain the formula for calculating the right circuit breaker size?'
        },
        {
            id: 3,
            title: 'Study group for final exams',
            author: 'David N.',
            course: 'General',
            replies: 23,
            likes: 19,
            time: '1 day ago',
            preview: 'Looking to form a study group for the upcoming final exams. Anyone interested?'
        },
    ];

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-violet-600 to-violet-700 rounded-3xl p-8 text-white shadow-xl"
            >
                <h1 className="text-3xl font-bold mb-2">💭 Discussion Forum</h1>
                <p className="text-violet-100">Connect with peers and share knowledge</p>
            </motion.div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-700 transition-colors shadow-lg"
            >
                + Start New Discussion
            </motion.button>

            <div className="space-y-4">
                {threads.map((thread, index) => (
                    <motion.div
                        key={thread.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100 cursor-pointer"
                        whileHover={{ y: -2 }}
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                                {thread.author[0]}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-gray-900 mb-1">{thread.title}</h3>
                                <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                                    <span>{thread.author}</span>
                                    <span>•</span>
                                    <span className="text-violet-600 font-semibold">{thread.course}</span>
                                    <span>•</span>
                                    <span>{thread.time}</span>
                                </div>
                                <p className="text-gray-600 mb-3">{thread.preview}</p>
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <HiReply className="w-4 h-4" />
                                        <span>{thread.replies} replies</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <HiThumbUp className="w-4 h-4" />
                                        <span>{thread.likes} likes</span>
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

export default DiscussionForum;
