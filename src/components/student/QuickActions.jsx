import { motion } from 'framer-motion';
import { HiPlus, HiPhone, HiDownload } from 'react-icons/hi';

const QuickActions = () => {
    const actions = [
        {
            id: 1,
            icon: HiPlus,
            label: 'Enroll in New Course',
            description: 'Browse available courses',
            color: 'from-blue-500 to-blue-600',
            hoverColor: 'hover:from-blue-600 hover:to-blue-700',
            action: () => console.log('Navigate to courses')
        },
        {
            id: 2,
            icon: HiPhone,
            label: 'Contact Trainer',
            description: 'Get help with your courses',
            color: 'from-green-500 to-green-600',
            hoverColor: 'hover:from-green-600 hover:to-green-700',
            action: () => console.log('Open contact')
        },
        {
            id: 3,
            icon: HiDownload,
            label: 'Download Timetable',
            description: 'View your class schedule',
            color: 'from-purple-500 to-purple-600',
            hoverColor: 'hover:from-purple-600 hover:to-purple-700',
            action: () => console.log('Download timetable')
        }
    ];

    return (
        <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {actions.map((action, index) => (
                    <motion.button
                        key={action.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={action.action}
                        className={`bg-gradient-to-r ${action.color} ${action.hoverColor} text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 text-left group`}
                        whileHover={{ y: -4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:scale-110 transition-transform">
                                <action.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg mb-1">{action.label}</h3>
                                <p className="text-sm text-white/80">{action.description}</p>
                            </div>
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
