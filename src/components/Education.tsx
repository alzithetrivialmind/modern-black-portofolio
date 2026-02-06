import { motion } from 'framer-motion';
import { EDUCATION } from '../data';

const Education = () => {
    return (
        <section id="education" className="py-24 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-16 tracking-tighter text-neutral-900 dark:text-white transition-colors"
            >
                Education
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
                {EDUCATION.map((edu) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 bg-white dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2 transition-colors">{edu.school}</h3>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 font-medium mb-4 transition-colors">{edu.degree}</p>
                        <div className="flex justify-between items-end text-neutral-500 text-sm font-mono transition-colors">
                            <span>{edu.period}</span>
                            {edu.grade && <span>Grade: {edu.grade}</span>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
