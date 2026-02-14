import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code, Terminal, Layers } from 'lucide-react';
import { cn } from '../utils/cn';

const SkillBar = ({ name, level }) => (
    <div className="mb-6 group">
        <div className="flex justify-between mb-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text/60 group-hover:text-primary transition-colors">{name}</span>
            <span className="text-[10px] font-black text-primary/40">{level}%</span>
        </div>
        <div className="h-[6px] bg-white/5 rounded-full overflow-hidden border border-white/5">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary via-primary/60 to-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] relative"
            >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] animate-shimmer" />
            </motion.div>
        </div>
    </div>
);

const IconGrid = ({ items, title }) => (
    <div className="mt-20">
        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-text/20 mb-10 text-center">{title}</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {items.map((item, i) => (
                <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-6 flex flex-col items-center gap-4 group hover:border-primary/20 transition-all cursor-default"
                >
                    <div className="group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                        {item.icon ? (
                            <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                        ) : (
                            <Terminal size={28} className="text-text/40 group-hover:text-primary" />
                        )}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-text/60 group-hover:text-white transition-colors">{item.name}</span>
                </motion.div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <Section id="skills" title="Expertise">
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="glass-card p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                    <h3 className="text-2xl font-black mb-10 text-primary tracking-tight">Core Proficiencies</h3>
                    <div className="space-y-2">
                        {portfolioData.skills.technical.map(skill => (
                            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="glass-card p-10 rounded-[2.5rem] h-full flex flex-col justify-center border-tertiary/20 group hover:border-tertiary/40 transition-all">
                        <div className="p-4 bg-tertiary/10 rounded-2xl w-fit mb-6 text-tertiary group-hover:rotate-12 transition-transform">
                            <Code size={32} />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black mb-6 text-white italic tracking-tight leading-tight">"Turning mathematical complexity into computational simplicity."</h3>
                        <p className="text-lg text-text/60 leading-relaxed font-medium italic">
                            I specialize in building end-to-end AI systems, from data preprocessing and model selection to deployment using modern web frameworks.
                        </p>
                    </div>
                </div>
            </div>

            <IconGrid items={portfolioData.skills.tools} title="Development Stack" />
            <IconGrid items={portfolioData.skills.libraries} title="AI & Data Science Libraries" />
        </Section>
    );
};

export default Skills;
