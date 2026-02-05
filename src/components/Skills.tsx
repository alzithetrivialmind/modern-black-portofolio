import { motion } from 'framer-motion';
import { SKILLS } from '../data';
import Marquee from 'react-fast-marquee';

const Skills = () => {
    return (
        <section className="py-24 border-t border-neutral-800 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-12 tracking-tighter"
            >
                Technical Skills
            </motion.h2>

            <div className="relative">
                {/* Gradient Masks for fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointers-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointers-events-none" />

                <Marquee speed={40} gradient={false} pauseOnHover={true}>
                    {SKILLS.map((skill, index) => (
                        <div
                            key={index}
                            className="mx-2 px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-base font-medium text-neutral-300 hover:text-white hover:border-indigo-500/50 hover:bg-neutral-800 transition-all cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                    {/* Duplicate map to ensure seamless loop if list is short (though Marquee usually handles this, manual padding is safe) */}
                    {SKILLS.map((skill, index) => (
                        <div
                            key={`dup-${index}`}
                            className="mx-2 px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-base font-medium text-neutral-300 hover:text-white hover:border-indigo-500/50 hover:bg-neutral-800 transition-all cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Skills;
