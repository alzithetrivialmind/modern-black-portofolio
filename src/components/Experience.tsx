import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="py-24 border-t border-neutral-800">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-16 tracking-tighter"
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
                        className="grid md:grid-cols-[300px_1fr] gap-8 group"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                                {'companyUrl' in job ? (
                                    <a href={(job as any).companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                                        {job.company}
                                        <span className="text-xs opacity-50 font-normal">↗</span>
                                    </a>
                                ) : (
                                    job.company
                                )}
                            </h3>
                            <p className="text-neutral-500 mt-1 font-medium">{job.period}</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold text-neutral-200 mb-4">{job.role}</h4>
                            <div className="text-neutral-400 leading-relaxed text-base space-y-4">
                                {job.description.split('\n\n').map((block, idx) => (
                                    <p key={idx}>
                                        {block.split('\n').map((line, lineIdx) => (
                                            <span key={lineIdx} className="block mb-1">
                                                {line.startsWith('-') || line.includes(':') ? (
                                                    <span>
                                                        {line.includes(':') && !line.startsWith('-') ? (
                                                            <>
                                                                <strong className="text-neutral-300">{line.split(':')[0]}:</strong>
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
