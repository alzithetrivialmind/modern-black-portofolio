import { motion } from 'framer-motion';
import { PROJECTS } from '../data';
import { ArrowUpRight, Github } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    return (
        <section id="projects" className="py-32 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 tracking-tighter text-neutral-900 dark:text-white transition-colors"
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
                        <div className="md:hidden h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden transition-colors duration-300">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </a>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2 transition-colors">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                            {project.title}
                                        </a>
                                    </h3>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed transition-colors">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800 transition-colors">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded text-xs text-neutral-600 dark:text-neutral-300 font-mono transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block h-full">
                            <Tilt
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                                scale={1.02}
                                transitionSpeed={2000}
                                className="h-full group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500"
                            >
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                                    <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </a>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                {project.title}
                                            </a>
                                        </h3>
                                        <div className="flex gap-3 relative z-20">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors" title="View Code">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors" title="Visit Site">
                                                <ArrowUpRight size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed transition-colors">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800 transition-colors">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded text-xs text-neutral-600 dark:text-neutral-300 font-mono transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
