import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Badges = () => {
    return (
        <Section id="badges" title="Certifications">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.badges.map((badge, idx) => (
                    <motion.div
                        key={badge.name}
                        whileHover={{ y: -15, rotate: idx % 2 === 0 ? 1 : -1 }}
                        className="glass-card p-10 flex flex-col items-center text-center h-full group bg-gradient-to-br from-white/5 to-transparent border-white/5 hover:border-primary/20"
                    >
                        <div className="h-40 mb-8 flex items-center justify-center p-4 relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img
                                src={badge.image}
                                alt={badge.name}
                                className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_15px_30px_rgba(var(--primary-rgb),0.3)] transition-all duration-500 scale-100 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-black text-xl mb-4 text-white group-hover:text-primary transition-colors tracking-tighter leading-tight">{badge.name}</h3>
                        <p className="text-xs font-bold text-text/40 uppercase tracking-widest">{badge.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Badges;
