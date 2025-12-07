import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChat, HiPaperAirplane, HiSearch } from 'react-icons/hi';

const Messaging = () => {
    const [selectedChat, setSelectedChat] = useState(1);
    const [message, setMessage] = useState('');

    const chats = [
        { id: 1, name: 'Peter Kamau', role: 'Carpentry Instructor', avatar: null, lastMessage: 'Great work on the project!', time: '2 min ago', unread: 2 },
        { id: 2, name: 'James Odhiambo', role: 'Electrical Instructor', avatar: null, lastMessage: 'Please submit your assignment', time: '1 hour ago', unread: 0 },
        { id: 3, name: 'Support Team', role: 'Help Desk', avatar: null, lastMessage: 'How can we help you?', time: '2 days ago', unread: 0 },
    ];

    const messages = [
        { id: 1, sender: 'trainer', text: 'Hi John! How is your carpentry project coming along?', time: '10:30 AM' },
        { id: 2, sender: 'me', text: 'Hello! It\'s going well. I\'m working on the joinery section.', time: '10:32 AM' },
        { id: 3, sender: 'trainer', text: 'Great work on the project! Keep it up.', time: '10:35 AM' },
    ];

    return (
        <div className="h-[calc(100vh-200px)]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-3xl p-8 text-white shadow-xl mb-6"
            >
                <h1 className="text-3xl font-bold mb-2">💬 Messages</h1>
                <p className="text-cyan-100">Chat with your instructors and support team</p>
            </motion.div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-3 h-[600px]">
                {/* Chat List */}
                <div className="border-r border-gray-200 overflow-y-auto">
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative">
                            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search chats..."
                                className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:border-cyan-500"
                            />
                        </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {chats.map((chat) => (
                            <button
                                key={chat.id}
                                onClick={() => setSelectedChat(chat.id)}
                                className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${selectedChat === chat.id ? 'bg-cyan-50' : ''
                                    }`}
                            >
                                <div className="flex gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                                        {chat.name[0]}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-bold text-gray-900 truncate">{chat.name}</h4>
                                            {chat.unread > 0 && (
                                                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                                    {chat.unread}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500 mb-1">{chat.role}</p>
                                        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat Window */}
                <div className="md:col-span-2 flex flex-col">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-200 bg-gray-50">
                        <h3 className="font-bold text-gray-900">{chats.find(c => c.id === selectedChat)?.name}</h3>
                        <p className="text-sm text-gray-500">{chats.find(c => c.id === selectedChat)?.role}</p>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[70%] rounded-2xl p-3 ${msg.sender === 'me'
                                            ? 'bg-cyan-600 text-white'
                                            : 'bg-gray-100 text-gray-900'
                                        }`}
                                >
                                    <p className="text-sm">{msg.text}</p>
                                    <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-cyan-100' : 'text-gray-500'}`}>
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700"
                            >
                                <HiPaperAirplane className="w-6 h-6" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messaging;
