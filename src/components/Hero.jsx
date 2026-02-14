import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: portfolioData.profile.typedStrings,
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '_',
        });

        return () => typed.destroy();
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-32 pb-20 relative overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(78,205,196,0.05)_0%,transparent_50%)]">
            {/* Animated background accent */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-glow [animation-delay:2s]" />

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative group mb-12"
            >
                <div className="absolute -inset-6 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-white/5 overflow-hidden relative z-10 glow-border p-1.5 bg-background/50 backdrop-blur-sm">
                    <img
                        src={profileImg}
                        alt={portfolioData.profile.name}
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                    />
                </div>

                <motion.div
                    className="absolute -bottom-4 -right-4 bg-surface/80 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl z-20 flex items-center gap-4"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <div className="relative">
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                        <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-text/40 uppercase tracking-[0.2em]">Status</span>
                        <span className="text-xs font-black text-white uppercase tracking-wider">Ready to Innovate</span>
                    </div>
                </motion.div>
            </motion.div>

            <div className="text-center relative z-10 max-w-4xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-4 inline-block"
                >
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.3em] backdrop-blur-md">
                        Data Science & AI Developer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8 leading-[0.85]"
                >
                    K<span className="text-primary italic">.</span>BHAGEERATHA
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">REDDY.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="w-full max-w-2xl mx-auto glass-card p-8 mb-12 group hover:translate-y-[-4px] transition-all duration-500"
                >
                    <div className="flex gap-2 mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="font-mono text-sm md:text-lg min-h-[140px] text-left leading-relaxed text-text/80 overflow-hidden">
                        <span ref={el} className="text-glow" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <a
                        href="/resume.pdf"
                        download
                        className="group relative px-10 py-5 bg-primary text-background font-black uppercase tracking-widest rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.3)]"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <Download size={20} />
                            Download Resume
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </a>

                    <a
                        href="#projects"
                        className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all hover:border-primary/30 flex items-center gap-3 active:scale-95"
                    >
                        View Projects
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary rounded-full mx-auto"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
