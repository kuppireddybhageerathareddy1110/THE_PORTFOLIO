import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Target, Rocket, Lightbulb, TrendingUp } from 'lucide-react';

const Vision = () => {
    const goals = [
        { icon: Rocket, text: "Publish research papers on NLP advancements" },
        { icon: Lightbulb, text: "Launch an AI startup focused on healthcare" },
        { icon: TrendingUp, text: "Contribute to open-source AI projects" },
        { icon: Target, text: "Explore cutting-edge AI/ML technologies & speak at conferences" }
    ];

    return (
        <Section id="vision" title="Vision & Future">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-center">
                    <h3 className="text-3xl font-black text-primary mb-6 tracking-tight">The Big Picture</h3>
                    <p className="text-xl text-text/70 leading-relaxed font-medium italic">
                        "To harness the power of AI to solve real-world problems, from healthcare diagnostics to sustainable energy solutions. I envision a future where AI enhances human creativity, not replaces it."
                    </p>
                    <div className="mt-10 p-6 glass border-primary/20 rounded-2xl">
                        <p className="text-primary font-bold">"The best way to predict the future is to create it."</p>
                        <p className="text-xs text-text/40 font-bold uppercase mt-1 tracking-widest">— Peter Drucker</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {goals.map((goal, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ translateZ: 20, scale: 1.02 }}
                            className="p-6 glass border-primary/5 rounded-3xl flex items-center gap-6 group hover:border-primary/30 transition-all"
                        >
                            <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-background transition-all">
                                <goal.icon size={28} />
                            </div>
                            <p className="text-lg font-bold text-text/80">{goal.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Vision;
