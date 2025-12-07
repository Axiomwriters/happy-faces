import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
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
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto"
                    >
                        We'd love to hear from you. Reach out to us for any questions, partnerships, or support.
                    </motion.p>
                </div>
            </motion.section>

            {/* Contact Component */}
            <Contact />

            {/* Additional Info */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-green-100"
                        >
                            <div className="text-5xl mb-4">📍</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Visit Us</h3>
                            <p className="text-gray-600">
                                Nairobi, Kenya
                                <br />
                                123 Community Street
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-green-100"
                        >
                            <div className="text-5xl mb-4">📞</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Call Us</h3>
                            <p className="text-gray-600">
                                +254 712 345 678
                                <br />
                                Mon - Fri, 8AM - 5PM
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-green-100"
                        >
                            <div className="text-5xl mb-4">✉️</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Email Us</h3>
                            <p className="text-gray-600">
                                info@happyfaces.org
                                <br />
                                support@happyfaces.org
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
