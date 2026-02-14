import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const Section = ({ id, title, children, className }) => {
    return (
        <section id={id} className={cn("section-container scroll-mt-20", className)}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {title && (
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">
                            {title}<span className="text-primary italic">.</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
                    </div>
                )}
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
