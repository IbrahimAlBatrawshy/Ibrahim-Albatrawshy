import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';

const Education = () => {
    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Education</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[-24px] md:left-1/2 top-0 w-12 h-12 bg-surface border-4 border-background rounded-full md:-translate-x-1/2 z-10 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                                </div>

                                <div className="md:w-1/2 pl-8 md:pl-0 md:px-12">
                                    <div className={`glass-card p-6 rounded-2xl relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold mb-3 border border-primary/20">
                                            {item.duration}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                                        <h4 className="text-md text-gray-400 font-medium mb-4">{item.institution}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
