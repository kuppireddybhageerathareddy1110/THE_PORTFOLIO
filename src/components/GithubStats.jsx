import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const GithubStats = () => {
    return (
        <Section id="github" title="Activity">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                <div className="lg:col-span-8 space-y-8">
                    <div className="glass-card p-10 group bg-gradient-to-br from-primary/5 to-transparent">
                        <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                            <Github size={24} className="text-primary" />
                            Contribution Flow
                        </h3>
                        <div className="overflow-hidden rounded-2xl">
                            <img
                                src="https://github-readme-activity-graph.vercel.app/graph?username=kuppireddybhageerathareddy1110&theme=dracula&bg_color=0a0f18&hide_border=true&color=4ecdc4&line=4ecdc4&point=ff6b6b&area=true&hide_title=true"
                                alt="GitHub Contributions Graph"
                                className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-8">
                    <div className="glass-card p-10 flex-1 group hover:border-secondary/30 transition-all flex flex-col justify-center">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-6 italic">Current Streak</h4>
                        <img
                            src="https://github-readme-streak-stats.herokuapp.com?user=kuppireddybhageerathareddy1110&theme=dark&hide_border=true&background=0a0f1800&stroke=4ecdc4&ring=ff6b6b&fire=ff6b6b&currStreakLabel=4ecdc4"
                            alt="GitHub Streak"
                            className="w-full"
                        />
                    </div>

                    <div className="glass-card p-10 flex-1 group hover:border-tertiary/30 transition-all flex flex-col justify-center">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-tertiary mb-6 italic">Top Languages</h4>
                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=kuppireddybhageerathareddy1110&layout=compact&theme=dark&hide_border=true&bg_color=0a0f1800&title_color=4ecdc4&text_color=f5f6f5&icon_color=ff6b6b"
                            alt="Top Languages"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default GithubStats;
