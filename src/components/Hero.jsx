import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import homeBg from '../assets/home-bg.png';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${homeBg})` }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl"
                >
                    Empowering Kenya's Youth, Women & Communities
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl"
                >
                    Building a sustainable future by equipping marginalized communities with skills, resources, and opportunities.
                </motion.p>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-4 w-full max-w-md md:max-w-none"
                >
                    <button
                        onClick={() => navigate('/donate')}
                        className="col-span-1 px-4 sm:px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center text-center"
                    >
                        Donate Now
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                        className="col-span-1 px-4 sm:px-8 py-4 border-2 border-white hover:bg-white/10 text-white text-base sm:text-lg font-semibold rounded-full backdrop-blur-sm transition-all transform hover:-translate-y-1 flex items-center justify-center text-center"
                    >
                        Apply for Training
                    </button>
                    <button
                        onClick={() => navigate('/partner')}
                        className="col-span-2 md:w-auto px-4 sm:px-8 py-4 border-2 border-white/30 hover:bg-white/10 text-gray-200 text-base sm:text-lg font-semibold rounded-full backdrop-blur-sm transition-all flex items-center justify-center text-center"
                    >
                        Partner with Us
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
