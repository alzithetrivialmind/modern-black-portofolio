import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { PROFILE } from '../data';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-950 -z-10" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[128px] pointer-events-none" />


            <div className="max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="order-2 md:order-1">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-indigo-400 mb-4 font-bold tracking-widest text-sm uppercase"
                    >
                        Hello, I am
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]"
                    >
                        {PROFILE.name}<span className="text-indigo-500">.</span>
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                        className="text-2xl md:text-3xl text-neutral-400 font-semibold mb-8 tracking-tight"
                    >
                        {PROFILE.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-lg text-neutral-400 max-w-lg leading-relaxed mb-10"
                    >
                        {PROFILE.about}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-4"
                    >
                        <a href="#contact" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
                            Contact Me
                        </a>
                        <a href="#experience" className="px-8 py-3 border border-neutral-700 text-white font-medium rounded-full hover:bg-neutral-900 transition-colors">
                            View Work
                        </a>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                        <motion.img
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            src={PROFILE.image}
                            alt={PROFILE.name}
                            className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border border-neutral-800 grayscale hover:grayscale-0 transition-all duration-500 z-10"
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-0 w-full flex justify-center"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown className="text-neutral-500" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
