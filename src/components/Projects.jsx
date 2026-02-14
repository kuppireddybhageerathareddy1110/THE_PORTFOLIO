import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { cn } from '../utils/cn';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(portfolioData.projects.flatMap(p => p.tags))];

    const filtered = filter === 'All'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.tags.includes(filter));

    return (
        <Section id="projects" title="Showcase">
            <div className="flex flex-wrap gap-4 mb-16">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={cn(
                            "px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all border",
                            filter === cat
                                ? "bg-primary text-background border-primary shadow-[0_10px_20px_-5px_rgba(var(--primary-rgb),0.3)]"
                                : "bg-white/5 text-text/60 border-white/5 hover:border-primary/20"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
                <AnimatePresence mode='popLayout'>
                    {filtered.map((project, idx) => (
                        <motion.div
                            layout
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="group glass-card overflow-hidden flex flex-col h-full"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center p-8 text-center">
                                    <p className="text-white text-sm font-medium leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full border border-white/10">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">{project.tags[0]}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 flex-1 flex flex-col">
                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors tracking-tighter">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="text-[9px] font-bold text-text/40 uppercase tracking-widest px-2 py-0.5 border border-white/5 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5 relative z-10">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2 hover:translate-x-2 transition-transform"
                                    >
                                        <Github size={16} /> View Source
                                    </a>
                                    <a
                                        href={project.live || project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/10 transition-all cursor-pointer"
                                    >
                                        <ExternalLink size={14} className="text-text/40 hover:text-primary transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </Section>
    );
};

export default Projects;
