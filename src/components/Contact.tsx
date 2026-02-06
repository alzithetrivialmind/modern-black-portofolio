import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { PROFILE } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="py-32 border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden transition-colors duration-300">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-900/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-300" />

            <div className="max-w-2xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-neutral-900 dark:text-white transition-colors"
                >
                    Let's Work Together
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 transition-colors"
                >
                    Always interested in new opportunities in ERP Development, Cybersecurity, and Network Infrastructure.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-8"
                >
                    <a
                        href={`mailto:${PROFILE.social.email}`}
                        className="flex flex-col items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors group"
                    >
                        <div className="p-5 bg-white dark:bg-neutral-900 rounded-2xl group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-all border border-neutral-200 dark:border-neutral-800 group-hover:-translate-y-1 shadow-sm">
                            <Mail size={28} />
                        </div>
                        <span className="text-sm font-medium">Email</span>
                    </a>

                    {PROFILE.social.linkedin && (
                        <a
                            href={PROFILE.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors group"
                        >
                            <div className="p-5 bg-white dark:bg-neutral-900 rounded-2xl group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-all border border-neutral-200 dark:border-neutral-800 group-hover:-translate-y-1 shadow-sm">
                                <Linkedin size={28} />
                            </div>
                            <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                    )}

                    {PROFILE.social.github && (
                        <a
                            href={PROFILE.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors group"
                        >
                            <div className="p-5 bg-white dark:bg-neutral-900 rounded-2xl group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-all border border-neutral-200 dark:border-neutral-800 group-hover:-translate-y-1 shadow-sm">
                                <Github size={28} />
                            </div>
                            <span className="text-sm font-medium">GitHub</span>
                        </a>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
