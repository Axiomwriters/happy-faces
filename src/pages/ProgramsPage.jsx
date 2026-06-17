import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import programsData from '../data/ProgramsData';

const ProgramsPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="font-sans antialiased text-gray-900 bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-gradient-to-br from-green-900 to-green-700 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Our Impact Programs
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Transforming lives through targeted interventions in education, health, and economic empowerment.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 relative">
                {/* Sticky Sidebar Navigation (Desktop) */}
                <aside className="hidden lg:block w-1/4 h-fit sticky top-24 z-30">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 pl-4">Navigate Programs</h3>
                        <nav className="space-y-2 max-h-[calc(100vh-15rem)] overflow-y-auto pr-2 scrollbar-hide">
                            {programsData.map((program) => (
                                <button
                                    key={program.id}
                                    onClick={() => scrollToSection(program.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 ${hash === `#${program.id}`
                                        ? 'bg-green-50 text-green-700 font-bold shadow-sm'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'
                                        }`}
                                >
                                    <program.icon className={hash === `#${program.id}` ? "text-green-600 flex-shrink-0" : "text-gray-400 flex-shrink-0"} />
                                    <span className="truncate">{program.title}</span>
                                </button>
                            ))}
                        </nav>
                        <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                            <p className="text-sm text-green-800 font-medium mb-3">Want to support our work?</p>
                            <Link to="/donate" className="block w-full py-2 bg-green-600 text-white text-center rounded-lg hover:bg-green-700 transition-colors text-sm font-bold">
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="w-full lg:w-3/4 space-y-24">
                    {programsData.map((program) => (
                        <motion.section
                            key={program.id}
                            id={program.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="scroll-mt-28"
                        >
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                                {/* Program Hero Image or Gradient */}
                                <div className="h-64 md:h-96 relative overflow-hidden">
                                    {program.image ? (
                                        <>
                                            <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className={`w-full h-full bg-gradient-to-br ${program.gradient} flex items-center justify-center`}>
                                                <program.icon className="text-white/15 text-8xl" />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                        </>
                                    )}
                                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                                        <div className="flex items-center gap-2 mb-2 bg-green-600/90 w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                            <program.icon /> Program Focus
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold">{program.title}</h2>
                                    </div>
                                </div>

                                <div className="p-8 md:p-12">
                                    <div className="flex flex-col md:flex-row gap-8 mb-10">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.subtitle}</h3>
                                            <p className="text-gray-600 leading-relaxed text-lg">{program.description}</p>
                                        </div>
                                        {/* Stats Cards */}
                                        <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full md:w-64">
                                            {program.stats.map((stat, i) => (
                                                <div key={i} className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                                                    <div className="text-2xl font-bold text-green-700">{stat.value}</div>
                                                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100 pt-10">
                                        <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                                            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                                            Key Features & Outcomes
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {program.keyFeatures.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                    <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 flex-shrink-0">
                                                        <FiCheck size={14} strokeWidth={3} />
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                        <Link to="/partner" className="flex-1 px-8 py-4 bg-gray-900 text-white text-center font-bold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group">
                                            Partner With Us
                                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <Link to="/contact" className="flex-1 px-8 py-4 border-2 border-gray-200 text-gray-700 text-center font-bold rounded-xl hover:border-green-600 hover:text-green-600 transition-all">
                                            Contact Program Lead
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default ProgramsPage;
