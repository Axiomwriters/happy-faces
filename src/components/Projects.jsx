import { motion } from 'framer-motion';
import { FiScissors } from "react-icons/fi";
import { IoWaterOutline, IoPeopleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import homeBg from '../assets/home-bg.png';
import abt2 from '../assets/abt-2.png';
import abt3 from '../assets/abt-3.png';

const ProjectCard = ({ image, icon: Icon, title, description, points, delay, link }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
        <div className="relative h-48 overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full text-green-600 shadow-md">
                <Icon className="text-xl" />
            </div>
        </div>

        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
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
            <Link to={link} className="block w-full">
                <button className="w-full py-2 border border-green-500 text-green-600 rounded-lg font-medium hover:bg-green-500 hover:text-white transition-all duration-300">
                    Learn More
                </button>
            </Link>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            image: homeBg,
            icon: FiScissors,
            title: 'Empowerment Stitches',
            description: 'Vocational training in fashion design, tailoring, and artisan bag production with mentorship, entrepreneurship training, and counseling.',
            points: [
                'Market-relevant skills: sewing, tailoring',
                'Business incubation & entrepreneurship',
                'Sustainable fashion using recycled materials'
            ],
            link: '/programs#stitches'
        },
        {
            image: abt2,
            icon: IoWaterOutline,
            title: 'Clean Water & Food Security',
            description: 'Providing household water filters, community tanks, and training in climate-smart farming for health and sustainable food security.',
            points: [
                'Household water filters for safe drinking',
                'Community storage tanks',
                'Drip irrigation & climate-smart farming'
            ],
            link: '/programs#water'
        },
        {
            image: abt3,
            icon: IoPeopleOutline,
            title: 'Child & Youth Leadership Hub',
            description: 'Nurturing young leaders through public speaking, financial literacy, mentorship programs, and youth forums on critical social issues.',
            points: [
                'Public speaking & financial literacy',
                'Mentorship with role models',
                'Forums on climate action & equality'
            ],
            link: '/programs#leadership'
        }
    ];

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

                <div className="relative group">
                    {/* Mobile Navigation Arrows */}
                    <button
                        onClick={() => document.getElementById('projects-carousel').scrollBy({ left: -300, behavior: 'smooth' })}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-green-600 hover:bg-white transition-all border border-green-100 md:hidden -ml-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={() => document.getElementById('projects-carousel').scrollBy({ left: 300, behavior: 'smooth' })}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-green-600 hover:bg-white transition-all border border-green-100 md:hidden -mr-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    <div
                        id="projects-carousel"
                        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-8 pb-12 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide scroll-smooth"
                    >
                        {projects.map((project, index) => (
                            <div key={index} className="min-w-[85vw] md:min-w-0 snap-center first:pl-2 last:pr-2">
                                <ProjectCard {...project} delay={index * 0.2} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
