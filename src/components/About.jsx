/* REDDY PORTFOLIO - CORE COMPONENT: PHILOSOPHY */
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import { cn } from '../utils/cn';

const About = () => {
    return (
        <Section id="about" title="Philosophy">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                    <div className="relative glass-card aspect-square overflow-hidden group">
                        <img
                            src={profileImg}
                            alt="Bhageeratha Reddy Profile"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-10 left-10">
                            <p className="text-4xl font-black text-white italic tracking-tighter">REDDY<span className="text-primary">.</span></p>
                            <p className="text-xs font-bold text-text/60 uppercase tracking-[0.4em]">Researcher & Dev</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                        Merging Artificial Intelligence with Human Intuition<span className="text-primary">.</span>
                    </h3>
                    <div className="space-y-8 text-lg md:text-xl text-text/70 leading-relaxed font-medium mb-12">
                        <p>{portfolioData.profile.bio}</p>
                        <p className="text-white">
                            "Speed of F1. Spirit of Zanpakuto. Dreaming of the Grand Line. Building intelligent systems inspired by the cosmos."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { label: "Graduation CGPA", value: "8.87", color: "from-primary/20" },
                            { label: "Certifications", value: "10+", color: "from-secondary/20" },
                            { label: "Innovation", value: "100%", color: "from-tertiary/20" }
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className={cn(
                                    "p-8 glass-card border-white/5 group hover:border-primary/20",
                                    "bg-gradient-to-br transition-all duration-500",
                                    stat.color
                                )}
                            >
                                <span className="block text-4xl font-black text-white group-hover:text-primary transition-colors tracking-tighter mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-[10px] font-black text-text/40 uppercase tracking-[0.2em]">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
