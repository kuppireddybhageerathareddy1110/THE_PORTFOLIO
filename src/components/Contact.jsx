import React, { useState } from 'react';
import Section from './Section';
import { Mail, Send, CheckCircle, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const Contact = () => {
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
        }, 1500);
    };

    return (
        <Section id="contact" title="Collaboration">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-5 space-y-12">
                    <h3 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                        Let's Engineer the Future Together<span className="text-primary">.</span>
                    </h3>

                    <p className="text-lg md:text-xl text-text/60 leading-relaxed font-medium">
                        "Architecting intelligent solutions, one line of code at a time. Whether it's a deep learning project or a full-stack vision, I'm ready to bring it to life."
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: Mail, label: "Digital Mail", value: "bhageerathareddykuppireddy@gmail.com", href: "mailto:bhageerathareddykuppireddy@gmail.com", color: "text-primary" },
                            { icon: Github, label: "Code Hub", value: "@kuppireddybhageerathareddy1110", href: "https://github.com/kuppireddybhageerathareddy1110", color: "text-secondary" },
                            { icon: Send, label: "Network", value: "LinkedIn Profile", href: "https://linkedin.com/in/bhageerathareddykuppireddy", color: "text-tertiary" }
                        ].map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-6 p-8 glass-card border-white/5 group hover:border-primary/20 transition-all"
                            >
                                <div className={cn("p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform", link.color)}>
                                    <link.icon size={24} />
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-text/40">{link.label}</span>
                                    <span className="text-lg font-black text-white group-hover:text-primary transition-colors tracking-tight">{link.value}</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className="glass-card p-12 md:p-16 relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-20 text-center"
                                >
                                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">Transmission Successful!</h3>
                                    <p className="text-text/60 text-lg font-medium mb-12 italic">"Message received. Preparing response at terminal speed."</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-10 py-4 glass-card border-primary/20 text-primary font-black uppercase tracking-widest hover:bg-primary/5 transition-all"
                                    >
                                        Send New Message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-text/40 ml-2">Identity</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="ENTER NAME"
                                                className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary/30 transition-all font-black uppercase tracking-widest text-sm text-white placeholder:text-text/20"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-text/40 ml-2">Coordinates</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="ENTER EMAIL"
                                                className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary/30 transition-all font-black uppercase tracking-widest text-sm text-white placeholder:text-text/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-text/40 ml-2">Transmission Message</label>
                                        <textarea
                                            required
                                            rows="5"
                                            placeholder="TYPE YOUR MESSAGE HERE..."
                                            className="w-full px-8 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-primary/30 transition-all font-black uppercase tracking-widest text-sm text-white placeholder:text-text/20 resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        disabled={status === 'sending'}
                                        className="w-full py-6 bg-primary text-background font-black uppercase tracking-[0.4em] rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.3)] disabled:opacity-50 flex items-center justify-center gap-4 relative overflow-hidden group"
                                    >
                                        <span className="relative z-10">
                                            {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                                        </span>
                                        <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
