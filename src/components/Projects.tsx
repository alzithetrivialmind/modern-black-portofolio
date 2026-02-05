import { motion } from 'framer-motion';
import { PROJECTS } from '../data';
import { ArrowUpRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    return (
        <section id="projects" className="py-32 border-t border-neutral-800">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter"
            >
                Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                    >
                        <Tilt
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            scale={1.02}
                            transitionSpeed={2000}
                            className="h-full group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-500"
                        >
                            <div className="h-48 overflow-hidden bg-neutral-800 relative">
                                <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                                    {project.title}
                                    <ArrowUpRight size={18} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                                </h3>
                                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-neutral-950 border border-neutral-800 rounded text-xs text-neutral-300 font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
