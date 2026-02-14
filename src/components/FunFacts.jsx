import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Rocket, Brain, Code, Heart } from 'lucide-react';

const iconMap = {
    Rocket: Rocket,
    Brain: Brain,
    Code: Code,
    Heart: Heart,
};

const FunFacts = () => {
    return (
        <Section id="fun-facts" title="Personal Interests">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioData.funFacts.map((fact, idx) => {
                    const Icon = iconMap[fact.icon];
                    return (
                        <motion.div
                            key={fact.title}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-card p-10 flex flex-col items-center text-center group bg-gradient-to-br from-white/5 to-transparent border-white/5 hover:border-primary/20"
                        >
                            <div className="mb-8 text-primary p-6 bg-white/5 rounded-3xl group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-xl group-hover:shadow-primary/20 rotate-3 group-hover:rotate-0">
                                <Icon size={32} />
                            </div>
                            <h3 className="font-black text-xl mb-4 text-white tracking-tighter">{fact.title}</h3>
                            <p className="text-xs font-bold text-text/40 leading-loose uppercase tracking-[0.2em]">{fact.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export default FunFacts;
