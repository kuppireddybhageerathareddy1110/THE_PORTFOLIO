import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';

const Timeline = () => {
    return (
        <Section id="experience" title="The Journey">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Experience */}
                <div className="relative">
                    <h3 className="text-2xl font-black text-white mb-12 flex items-center gap-3">
                        <Briefcase size={24} className="text-primary" />
                        Professional Path
                    </h3>
                    <div className="space-y-12 after:content-[''] after:absolute after:top-24 after:bottom-0 after:left-[7px] after:w-[2px] after:bg-white/5">
                        {portfolioData.experience.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pl-12 group"
                            >
                                <div className="absolute top-1 left-0 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)] group-hover:scale-125 transition-transform z-10" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 mb-2 block">{item.period}</span>
                                <h4 className="text-xl font-black text-white mb-3 tracking-tighter group-hover:text-primary transition-colors">{item.title}</h4>
                                <p className="text-sm text-text/60 leading-relaxed font-medium">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="relative">
                    <h3 className="text-2xl font-black text-white mb-12 flex items-center gap-3 lg:justify-end">
                        <GraduationCap size={24} className="text-secondary" />
                        Academic Foundation
                    </h3>
                    <div className="space-y-12 after:content-[''] after:absolute after:top-24 after:bottom-0 after:right-[7px] after:w-[2px] after:bg-white/5">
                        {portfolioData.education.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative pr-12 text-right group"
                            >
                                <div className="absolute top-1 right-0 w-4 h-4 rounded-full bg-background border-2 border-secondary shadow-[0_0_15px_rgba(255,107,107,0.3)] group-hover:scale-125 transition-transform z-10" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/60 mb-2 block">{item.period}</span>
                                <h4 className="text-xl font-black text-white mb-3 tracking-tighter group-hover:text-secondary transition-colors">{item.title}</h4>
                                <p className="text-sm text-text/60 leading-relaxed font-medium">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Timeline;
