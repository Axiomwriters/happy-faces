import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import programsData from '../data/ProgramsData';

const ProjectCard = ({ image, gradient, icon: Icon, title, description, points, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col"
    >
        <div className="relative h-48 overflow-hidden flex-shrink-0">
            {image ? (
                <>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </>
            ) : (
                <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                    <Icon className="text-white/30 text-6xl" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
            )}
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-green-600 shadow-md">
                <Icon className="text-xl" />
            </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                {description}
            </p>
            <ul className="space-y-2 mb-6">
                {points.map((point, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width >= 1024) setItemsPerPage(3);
            else if (width >= 768) setItemsPerPage(2);
            else setItemsPerPage(1);
        };
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(programsData.length / itemsPerPage);

    useEffect(() => {
        if (currentIndex >= totalPages) {
            setCurrentIndex(Math.max(0, totalPages - 1));
        }
    }, [totalPages, currentIndex]);

    const goNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex(prev => prev + 1 >= totalPages ? 0 : prev + 1);
    }, [totalPages]);

    const goPrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex(prev => prev - 1 < 0 ? totalPages - 1 : prev - 1);
    }, [totalPages]);

    const visiblePrograms = programsData.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    const slideVariants = {
        enter: (dir) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <section className="py-20 bg-white" id="programs">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Programs & Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive empowerment initiatives addressing community needs through multiple pathways.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={goPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-green-600 hover:bg-white hover:text-green-700 transition-all border border-green-100 -ml-4 hover:scale-105"
                        aria-label="Previous programs"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <div className="overflow-hidden mx-2">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            >
                                {visiblePrograms.map((program) => (
                                    <ProjectCard
                                        key={program.id}
                                        {...program}
                                        delay={0}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={goNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-green-600 hover:bg-white hover:text-green-700 transition-all border border-green-100 -mr-4 hover:scale-105"
                        aria-label="Next programs"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                {/* Pagination Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex
                                ? 'bg-green-600 w-6'
                                : 'bg-gray-300 hover:bg-green-400'
                                }`}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/programs">
                        <button className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition-all transform hover:scale-105">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
