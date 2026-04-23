import { EDUCATION } from '../data';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "tween", ease: "easeOut", duration: 0.5 } }
};

const Education = () => {
    return (
        <section id="education" className="pt-12 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-10"
            >
                <p className="font-hand text-2xl text-marker">/education</p>
                <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                    Academic Foundation
                </h2>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-8 text-ink"
            >
                {EDUCATION.map((edu) => (
                    <motion.div key={edu.id} variants={itemVariants} className="group">
                        <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft mb-4">
                            {edu.school}
                        </h3>
                        <div className="grid gap-2 md:grid-cols-[12rem_1fr] text-lg leading-relaxed">
                            <span className="font-hand text-xl text-marker">{edu.period}</span>
                            <div>
                                <h4 className="font-semibold text-ink group-hover:text-marker transition-colors">
                                    {edu.degree}
                                </h4>
                                {edu.grade && (
                                    <p className="mt-2 text-ink-soft text-base">
                                        Result: {edu.grade}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Education;
