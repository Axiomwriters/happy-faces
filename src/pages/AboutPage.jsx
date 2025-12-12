import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = () => {
    return (
        <div className="font-sans antialiased text-gray-900 bg-gray-50">
            <Navbar />

            {/* Page Header */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-24"
            >
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold mb-4"
                    >
                        About Happy Faces
                    </motion.h1>
                    <motion.p
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto"
                    >
                        Empowering communities through education, skills training, and sustainable development
                    </motion.p>
                </div>
            </motion.section>

            {/* About Component */}
            <About />

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100"
                        >
                            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                                M
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To empower marginalized communities in Kenya by providing access to quality education,
                                vocational training, and sustainable livelihood opportunities, fostering self-reliance
                                and community development.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100"
                        >
                            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                                V
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                A Kenya where every young person, woman, and vulnerable community member has the
                                opportunity to thrive, contribute to society, and build a sustainable future for
                                themselves and their families.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center mb-12"
                    >
                        Our Core Values
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Empowerment',
                                description: 'We believe in empowering individuals with the skills and knowledge they need to transform their lives.',
                            },
                            {
                                title: 'Integrity',
                                description: 'We operate with transparency, accountability, and honesty in all our programs and partnerships.',
                            },
                            {
                                title: 'Community',
                                description: 'We foster collaborative relationships and work hand-in-hand with communities to create lasting impact.',
                            },
                            {
                                title: 'Innovation',
                                description: 'We embrace creative solutions and adapt to changing needs to deliver effective programs.',
                            },
                            {
                                title: 'Sustainability',
                                description: 'We focus on long-term solutions that create self-reliant communities and sustainable livelihoods.',
                            },
                            {
                                title: 'Inclusion',
                                description: 'We ensure equal opportunities for all, regardless of background, gender, or circumstance.',
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <h4 className="text-xl font-bold text-green-600 mb-3">{value.title}</h4>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Join Us in Making a Difference
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-8 max-w-2xl mx-auto"
                    >
                        Whether through donations, partnerships, or volunteering, your support helps us create lasting change.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/donate"
                            className="px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Donate Now
                        </Link>
                        <Link
                            to="/partner"
                            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Partner with Us
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
