import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="py-24 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-16 tracking-tighter text-neutral-900 dark:text-white transition-colors"
            >
                Professional Experience
            </motion.h2>

            <div className="space-y-20">
                {EXPERIENCE.map((job) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 md:gap-8 group"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                {'companyUrl' in job ? (
                                    <a href={(job as any).companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                                        {job.company}
                                        <span className="text-xs opacity-50 font-normal">↗</span>
                                    </a>
                                ) : (
                                    job.company
                                )}
                            </h3>
                            <p className="text-neutral-500 mt-1 font-medium transition-colors">{job.period}</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 transition-colors">{job.role}</h4>
                            <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base space-y-4 transition-colors">
                                {job.description.split('\n\n').map((block, idx) => (
                                    <p key={idx}>
                                        {block.split('\n').map((line, lineIdx) => (
                                            <span key={lineIdx} className="block mb-1">
                                                {line.startsWith('-') || line.includes(':') ? (
                                                    <span>
                                                        {line.includes(':') && !line.startsWith('-') ? (
                                                            <>
                                                                <strong className="text-neutral-700 dark:text-neutral-300 transition-colors">{line.split(':')[0]}:</strong>
                                                                {line.substring(line.indexOf(':') + 1)}
                                                            </>
                                                        ) : (
                                                            line
                                                        )}
                                                    </span>
                                                ) : line}
                                            </span>
                                        ))}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
