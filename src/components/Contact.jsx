import { motion } from 'framer-motion';
import { CiLocationOn, CiMail, CiGlobe } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const ContactCard = ({ icon: Icon, title, content, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
    >
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-600">
            <Icon className="text-3xl" />
        </div>
        <h3 className="text-lg font-semibold text-gray-500 mb-2">{title}</h3>
        <p className="text-xl font-bold text-gray-800">{content}</p>
    </motion.div>
);

const Contact = () => {
    const contacts = [
        { icon: CiLocationOn, title: 'Location', content: 'Nakuru (Head Office), Kenya' },
        { icon: IoCallOutline, title: 'Phone', content: '0724436338' },
        { icon: CiMail, title: 'Email', content: 'info@happyfaces.org' },
    ];

    return (
        <section className="py-20 bg-gray-50" id="contact">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get in touch to learn more about our programs or how you can help.
                    </p>
                </motion.div>

                <div className="relative group">
                    {/* Mobile Navigation Arrows */}
                    <button
                        onClick={() => document.getElementById('contact-carousel').scrollBy({ left: -300, behavior: 'smooth' })}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-green-600 hover:bg-white transition-all border border-green-100 md:hidden -ml-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={() => document.getElementById('contact-carousel').scrollBy({ left: 300, behavior: 'smooth' })}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-green-600 hover:bg-white transition-all border border-green-100 md:hidden -mr-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    <div
                        id="contact-carousel"
                        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-6 mb-12 pb-12 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide scroll-smooth"
                    >
                        {contacts.map((contact, index) => (
                            <div key={index} className="min-w-[70vw] md:min-w-0 snap-center first:pl-2 last:pr-2">
                                <ContactCard {...contact} delay={index * 0.1} />
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-lg text-gray-500">
                        We serve communities in <span className="font-bold text-gray-800">Nakuru, Nairobi, and Kisumu</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
