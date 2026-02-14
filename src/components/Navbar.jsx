import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Vision', href: '#vision' },
    { name: 'Journey', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
        }
    }, [isDarkMode]);

    return (
        <nav className={cn(
            'fixed top-0 left-0 w-full z-[100] transition-all duration-700 px-6 md:px-12 py-10',
            isScrolled ? 'py-4' : ''
        )}>
            <div className={cn(
                "max-w-7xl mx-auto rounded-[2rem] transition-all duration-700 flex justify-between items-center px-8 md:px-12",
                isScrolled ? "bg-background/60 backdrop-blur-2xl border border-white/5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "py-0"
            )}>
                <motion.a
                    href="#"
                    className="text-2xl md:text-3xl font-black tracking-tighter text-white group flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-background rotate-[-15deg] group-hover:rotate-0 transition-all duration-500 font-black text-xl shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                        R
                    </div>
                    <span className="italic group-hover:not-italic transition-all">REDDY<span className="text-primary italic">.</span></span>
                </motion.a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="text-[10px] font-black uppercase tracking-[0.4em] text-text/40 hover:text-primary transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
                        </motion.a>
                    ))}

                    <div className="w-[1px] h-6 bg-white/10 mx-2" />

                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-3 bg-white/5 border border-white/5 rounded-2xl hover:bg-primary hover:text-background text-primary transition-all hover:scale-110 shadow-xl"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2.5 bg-white/5 border border-white/5 rounded-xl text-primary"
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2.5 bg-white/5 border border-white/5 rounded-xl"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="md:hidden mt-4 mx-2 overflow-hidden glass-card rounded-[2.5rem] border-primary/20 p-10 bg-background/95 backdrop-blur-3xl"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-2xl font-black uppercase tracking-[0.2em] text-text/60 hover:text-primary transition-all"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
