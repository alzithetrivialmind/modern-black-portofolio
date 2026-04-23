import { EXPERIENCE } from '../data';
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

const Experience = () => {
    return (
        <section id="experience" className="pt-12 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-10"
            >
                <p className="font-hand text-2xl text-marker">/experience</p>
                <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                    Professional Journey
                </h2>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-8 text-ink"
            >
                {EXPERIENCE.map((job) => (
                    <motion.div key={job.id} variants={itemVariants} className="group">
                        <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft mb-4">
                            {job.company}
                        </h3>
                        <div className="grid gap-2 md:grid-cols-[12rem_1fr] text-lg leading-relaxed">
                            <span className="font-hand text-xl text-marker">{job.period}</span>
                            <div>
                                <h4 className="font-semibold text-ink group-hover:text-marker transition-colors">
                                    {job.role}
                                </h4>
                                <div className="mt-2 text-ink-soft text-base leading-relaxed space-y-2">
                                    {job.description.split('\n').filter(l => l.trim()).map((line, i) => (
                                        <p key={i} className="flex gap-2">
                                            <motion.span animate={{ x: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="text-marker select-none inline-block">→</motion.span>
                                            {line.startsWith('-') ? line.substring(1).trim() : line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;
