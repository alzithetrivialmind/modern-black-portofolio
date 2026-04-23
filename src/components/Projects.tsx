import { useState } from 'react';
import { PROJECTS } from '../data';
import { X, ArrowUpRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut", duration: 0.5 } }
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

    return (
        <section id="projects" className="pt-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <p className="font-hand text-2xl text-marker flex items-center gap-2">
                    a few things I made <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="inline-block">→</motion.span>
                </p>
                <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                    Selected Projects
                </h2>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
                {PROJECTS.map((p) => (
                    <motion.div key={p.id} variants={itemVariants}>
                        <Tilt
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            glareEnable={true}
                            glareMaxOpacity={0.05}
                            glareColor="#ffffff"
                            glarePosition="all"
                            transitionSpeed={1500}
                            scale={1.02}
                            className="h-full"
                        >
                            <button
                                onClick={() => setSelectedProject(p)}
                                className="w-full h-full group relative flex flex-col items-start text-left bg-neutral-50 dark:bg-neutral-900 border border-transparent hover:border-marker/30 rounded-3xl p-8 transition-[border-color,box-shadow] duration-300 shadow-sm hover:shadow-lg"
                            >
                                <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft mb-4">
                                    {p.tech[0]}
                                </span>
                                <h3 className="font-display text-2xl font-medium text-ink group-hover:text-marker transition-colors mb-2">
                                    {p.title}
                                </h3>
                                <div className="mt-auto pt-6">
                                    <span className="text-sm font-medium text-marker flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        View details 
                                        <motion.span animate={{ x: [0, 2, 0], y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="inline-block">
                                            <ArrowUpRight size={14} />
                                        </motion.span>
                                    </span>
                                </div>
                            </button>
                        </Tilt>
                    </motion.div>
                ))}
            </motion.div>

            {/* Simple Modal for Project Details */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-canvas/80 backdrop-blur-md"
                            onClick={() => setSelectedProject(null)}
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                            className="relative w-full max-w-2xl bg-card border border-border rounded-[2.5rem] p-8 sm:p-12 shadow-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-8 right-8 text-ink-soft hover:text-ink transition-colors"
                            >
                                <X size={24} />
                            </button>
                            
                            <div className="mb-8">
                                <p className="font-hand text-2xl text-marker mb-2">Project Details</p>
                                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-ink">
                                    {selectedProject.title}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed text-ink opacity-90">
                                    {selectedProject.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-medium text-ink-soft italic">
                                            #{t.toLowerCase()}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-8 flex flex-wrap gap-4">
                                    {selectedProject.link && selectedProject.link !== "#" && (
                                        <a 
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-ink text-canvas px-8 py-3 rounded-full font-display font-medium hover:opacity-90 transition-opacity"
                                        >
                                            Visit Live Site 
                                            <motion.span animate={{ x: [0, 3, 0], y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="inline-block">
                                                <ArrowUpRight size={18} />
                                            </motion.span>
                                        </a>
                                    )}
                                    {selectedProject.github && selectedProject.github !== "#" && (
                                        <a 
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-3 rounded-full font-display font-medium hover:bg-ink hover:text-canvas transition-colors duration-200"
                                        >
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;

