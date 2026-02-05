import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { PROFILE } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="py-32 border-t border-neutral-800 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-2xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter"
                >
                    Let's Work Together
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-400 mb-12"
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
                        className="flex flex-col items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                    >
                        <div className="p-5 bg-neutral-900 rounded-2xl group-hover:bg-neutral-800 transition-all border border-neutral-800 group-hover:-translate-y-1">
                            <Mail size={28} />
                        </div>
                        <span className="text-sm font-medium">Email</span>
                    </a>

                    {PROFILE.social.linkedin && (
                        <a
                            href={PROFILE.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                        >
                            <div className="p-5 bg-neutral-900 rounded-2xl group-hover:bg-neutral-800 transition-all border border-neutral-800 group-hover:-translate-y-1">
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
                            className="flex flex-col items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                        >
                            <div className="p-5 bg-neutral-900 rounded-2xl group-hover:bg-neutral-800 transition-all border border-neutral-800 group-hover:-translate-y-1">
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
