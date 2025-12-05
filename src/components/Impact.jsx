import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { IoPeopleOutline, IoWaterOutline } from "react-icons/io5";
import { LuUtensils } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const StatCard = ({ icon: Icon, end, suffix, label, description, delay }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 shadow-xl"
        >
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-white">
                <Icon className="text-3xl" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">
                {inView ? <CountUp end={end} duration={2.5} separator="," /> : '0'}
                {suffix}
            </div>
            <h3 className="text-xl font-semibold text-green-100 mb-2">{label}</h3>
            <p className="text-green-50 text-sm">{description}</p>
        </motion.div>
    );
};

const Impact = () => {
    const stats = [
        {
            icon: IoPeopleOutline,
            end: 50,
            suffix: '+',
            label: 'Youth Trained',
            description: 'In vocational and leadership skills',
        },
        {
            icon: LuUtensils,
            end: 2000,
            suffix: '+',
            label: 'Children Fed',
            description: 'Through school and community programs',
        },
        {
            icon: FaRegHeart,
            end: 3000,
            suffix: '',
            label: 'Sanitary Pads',
            description: 'Distributed to girls in schools',
        },
        {
            icon: IoWaterOutline,
            end: 10,
            suffix: '+',
            label: 'Water & Trees',
            description: 'Clean water tanks + 1,000 trees planted',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-700 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact at a Glance</h2>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto">
                        Creating lasting change across Kenya's communities through dedicated action and sustainable programs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
