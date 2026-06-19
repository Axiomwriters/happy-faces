import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();
    return (
        <section className="py-20 bg-green-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Join Us in Creating Change
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-green-100 mb-10 max-w-3xl mx-auto"
                >
                    Whether through donations, partnerships, or volunteering, your support helps us empower more communities across Kenya.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-8 justify-center items-start w-full"
                >
                    {/* Become a Supporter */}
                    <div className="flex flex-col gap-4 items-center w-full md:w-auto">
                        <h3 className="text-yellow-300 border-b-2 border-yellow-300 pb-1 mb-4 text-xl font-bold tracking-wide">Become a Supporter</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={() => navigate('/donate')} className="px-8 py-4 bg-white text-green-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:-translate-y-1">
                                Donate Now
                            </button>
                            <button className="px-8 py-4 bg-green-700 text-white font-bold rounded-full shadow-lg hover:bg-green-800 transition-transform transform hover:-translate-y-1 border border-green-600">
                                Sponsor a Program
                            </button>
                        </div>
                    </div>

                    {/* Opportunities */}
                    <div className="flex flex-col gap-4 items-center w-full md:w-auto">
                        <h3 className="text-yellow-300 border-b-2 border-yellow-300 pb-1 mb-4 text-xl font-bold tracking-wide">Opportunities</h3>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-transform transform hover:-translate-y-1">
                            Apply for Training
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
