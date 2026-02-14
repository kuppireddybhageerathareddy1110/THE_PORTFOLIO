import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-20 px-4 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-12 p-4 glass-card border-primary/20 text-primary hover:bg-primary hover:text-background transition-all duration-500 cursor-pointer group"
                >
                    <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                </motion.button>

                <h2 className="text-2xl font-black text-white mb-10 tracking-tighter italic">REDDY<span className="text-primary italic">.</span></h2>

                <div className="flex gap-10 mb-12">
                    {[
                        { icon: Github, href: "https://github.com/kuppireddybhageerathareddy1110", label: "GitHub" },
                        { icon: Linkedin, href: "https://linkedin.com/in/bhageerathareddykuppireddy", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:bhageerathareddykuppireddy@gmail.com", label: "Email" }
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            whileHover={{ scale: 1.15, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-4 glass-card hover:bg-primary hover:text-background transition-all shadow-xl hover:shadow-primary/20 group"
                        >
                            <social.icon size={24} className="text-text/60 group-hover:text-inherit transition-colors" />
                        </motion.a>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-text/40">
                        © {currentYear} {portfolioData.profile.name}
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                        <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">
                            Built with Quantum Precision
                        </p>
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
