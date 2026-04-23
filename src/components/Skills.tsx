import { SKILLS } from '../data';
import Marquee from 'react-fast-marquee';
import { Annotation } from './Annotation';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id="skills" className="pt-12 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-10 flex items-center justify-between"
            >
                <div>
                    <p className="font-hand text-2xl text-marker">/toolbox</p>
                    <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                        Technical Arsenal
                    </h2>
                </div>
                <div className="hidden sm:block">
                    <Annotation className="text-xl">Always learning</Annotation>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden py-6"
            >
                <Marquee speed={40} gradient={false} pauseOnHover={true}>
                    {SKILLS.map((skill, index) => (
                        <div
                            key={index}
                            className="mx-4 text-3xl sm:text-5xl font-display font-bold text-ink-soft/20 hover:text-marker transition-colors cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                    {SKILLS.map((skill, index) => (
                        <div
                            key={`dup-${index}`}
                            className="mx-4 text-3xl sm:text-5xl font-display font-bold text-ink-soft/20 hover:text-marker transition-colors cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                </Marquee>
            </motion.div>
        </section>
    );
};

export default Skills;
