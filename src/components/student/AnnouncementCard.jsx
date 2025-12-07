import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronUp, HiInformationCircle, HiExclamation, HiBell } from 'react-icons/hi';

const AnnouncementCard = ({ announcement }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const getBadgeStyle = (type) => {
        switch (type) {
            case 'urgent':
                return {
                    bg: 'bg-red-100',
                    text: 'text-red-700',
                    border: 'border-red-500',
                    icon: HiExclamation,
                    label: 'Urgent'
                };
            case 'reminder':
                return {
                    bg: 'bg-yellow-100',
                    text: 'text-yellow-700',
                    border: 'border-yellow-500',
                    icon: HiBell,
                    label: 'Reminder'
                };
            default:
                return {
                    bg: 'bg-blue-100',
                    text: 'text-blue-700',
                    border: 'border-blue-500',
                    icon: HiInformationCircle,
                    label: 'Info'
                };
        }
    };

    const style = getBadgeStyle(announcement.type);
    const IconComponent = style.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-white border-l-4 ${style.border} rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300`}
        >
            <div
                className="p-4 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                        {/* Icon */}
                        <div className={`${style.bg} p-2 rounded-lg mt-0.5`}>
                            <IconComponent className={`w-5 h-5 ${style.text}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-gray-900 text-sm">
                                    {announcement.title}
                                </h4>
                                <span className={`${style.bg} ${style.text} px-2 py-0.5 rounded-full text-xs font-semibold`}>
                                    {style.label}
                                </span>
                            </div>

                            <p className={`text-sm text-gray-600 ${!isExpanded ? 'line-clamp-2' : ''}`}>
                                {announcement.message}
                            </p>

                            {announcement.details && (
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="mt-3 pt-3 border-t border-gray-100"
                                        >
                                            <p className="text-sm text-gray-700">
                                                {announcement.details}
                                            </p>
                                            {announcement.link && (
                                                <a
                                                    href={announcement.link}
                                                    className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-green-600 hover:text-green-700"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Learn more →
                                                </a>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}

                            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                <span>{announcement.date}</span>
                                {announcement.author && <span>By {announcement.author}</span>}
                            </div>
                        </div>
                    </div>

                    {/* Expand Button */}
                    {announcement.details && (
                        <motion.button
                            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <HiChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default AnnouncementCard;
