import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const ProgramsPage = () => {
    const programs = [
        {
            title: 'Vocational Training',
            description: 'Hands-on skills training in carpentry, tailoring, electrical work, plumbing, and more.',
            icon: '🛠️',
            features: [
                'Industry-certified training',
                '6-12 month courses',
                'Job placement assistance',
                'Tool kits for graduates',
            ],
        },
        {
            title: 'Youth Empowerment',
            description: 'Leadership development and entrepreneurship programs for young people.',
            icon: '🌟',
            features: [
                'Business mentorship',
                'Seed funding opportunities',
                'Networking events',
                'Digital skills training',
            ],
        },
        {
            title: "Women's Economic Empowerment",
            description: 'Supporting women through skills training and microfinance programs.',
            icon: '👩‍💼',
            features: [
                'Financial literacy training',
                'Microloans and grants',
                'Support groups',
                'Market linkages',
            ],
        },
        {
            title: 'Education Support',
            description: 'Scholarships and educational resources for vulnerable children and youth.',
            icon: '📚',
            features: [
                'School fees assistance',
                'Learning materials',
                'Tutoring programs',
                'Career guidance',
            ],
        },
    ];

    return (
        <div className="font-sans antialiased text-gray-900 bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-24 mt-20"
            >
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold mb-4"
                    >
                        Our Programs
                    </motion.h1>
                    <motion.p
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto"
                    >
                        Comprehensive programs designed to create sustainable impact in communities across Kenya
                    </motion.p>
                </div>
            </motion.section>

            {/* Programs Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border border-gray-100"
                            >
                                <div className="text-5xl mb-4">{program.icon}</div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-900">{program.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-green-600 text-sm uppercase tracking-wide">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {program.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-green-600 font-bold mt-1">✓</span>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center mb-12"
                    >
                        Current Projects
                    </motion.h2>
                    <Projects />
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-white">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center mb-12"
                    >
                        Our Impact
                    </motion.h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '500+', label: 'Students Trained' },
                            { number: '200+', label: 'Women Empowered' },
                            { number: '50+', label: 'Communities Reached' },
                            { number: '15+', label: 'Partner Organizations' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg"
                            >
                                <div className="text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Ready to Get Started?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-8 max-w-2xl mx-auto"
                    >
                        Apply for our training programs or partner with us to make a difference in your community.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/register"
                            className="px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Apply for Training
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProgramsPage;
