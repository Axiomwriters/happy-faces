import { motion } from 'framer-motion';
import { MdOutlineDescription } from "react-icons/md";
import { FiTarget } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";

const AboutCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
        <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
            <Icon className="text-3xl" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const About = () => {
    const cards = [
        {
            icon: MdOutlineDescription,
            title: 'Who We Are',
            description: 'Founded in 2022, Happy Faces Empowerment Network supports vulnerable communities in Kenya by creating opportunities for education, employment, and resilience.',
        },
        {
            icon: FiTarget,
            title: 'Our Mission',
            description: 'To empower vulnerable and marginalized persons in Kenya with the skills, tools, and networks to achieve sustainable livelihoods.',
        },
        {
            icon: FaRegEye,
            title: 'Our Vision',
            description: 'A future where every vulnerable and marginalized person in Kenya has access to quality education, clean water, and decent work opportunities.',
        },
    ];

    return (
        <section className="py-20 bg-gray-50" id="about">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Building a sustainable future for Kenya's communities through empowerment and opportunity.
                    </p>
                    <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-full border border-green-200 hover:bg-green-50 transition-all shadow-sm hover:shadow-md">
                        Learn More About Our Mission
                    </button>
                </motion.div>

                <div className="relative group">
                    {/* Mobile Navigation Arrows */}
                    <button
                        onClick={() => document.getElementById('about-carousel').scrollBy({ left: -300, behavior: 'smooth' })}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-green-600 hover:bg-white transition-all border border-green-100 md:hidden -ml-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={() => document.getElementById('about-carousel').scrollBy({ left: 300, behavior: 'smooth' })}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-green-600 hover:bg-white transition-all border border-green-100 md:hidden -mr-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    <div
                        id="about-carousel"
                        className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-8 pb-12 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide scroll-smooth"
                    >
                        {cards.map((card, index) => (
                            <div key={index} className="min-w-[85vw] md:min-w-0 snap-center first:pl-2 last:pr-2">
                                <AboutCard {...card} delay={index * 0.2} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
