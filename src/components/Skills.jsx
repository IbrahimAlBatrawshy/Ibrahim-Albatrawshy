import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, aiTools } from '../data';

const categoryIcons = {
    "Mobile": "",
    "State Management": "",
    "Front-End": "",
    "Concepts": "",
    "Tools & Backend": ""
};

const Skills = () => {
    const categories = Object.keys(skills);
    const [activeTab, setActiveTab] = useState(categories[0]);

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: i * 0.08 }
        })
    };

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">My Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                        Technologies and tools I work with to build great products.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
                </motion.div>

                {/* ── Tab Navigation ── */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                                ${activeTab === cat
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-lg shadow-primary/20'
                                    : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20 bg-white/5'
                                }`}
                        >
                            {categoryIcons[cat]} {cat}
                        </button>
                    ))}
                </div>

                {/* ── Skill Cards ── */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 min-h-[160px]"
                >
                    {skills[activeTab].map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.08, y: -4 }}
                            className="flex flex-col items-center justify-center gap-2 p-5 w-[100px] rounded-2xl
                                bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10
                                transition-all duration-300 cursor-default group"
                        >
                            <skill.icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                            <span className="text-xs text-gray-300 font-medium text-center leading-tight">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── AI Tools Section ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24"
                >
                    {/* AI Tools Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                            <span className="text-sm text-primary font-medium">✨ AI-Powered Workflow</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-gradient">AI Tools I Use</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                            I leverage cutting-edge AI tools to supercharge my development workflow and build faster.
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
                    </div>

                    {/* AI Tool Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {aiTools.map((tool, i) => (
                            <motion.div
                                key={tool.name}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03, y: -6 }}
                                className={`relative rounded-2xl p-6 bg-white/5 border ${tool.border}
                                    hover:bg-white/8 transition-all duration-300 overflow-hidden group
                                    shadow-xl ${tool.glow} cursor-default`}
                            >
                                {/* Gradient glow blob in background */}
                                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${tool.gradient}
                                    opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`} />

                                {/* Tag badge */}
                                <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium mb-4
                                    bg-gradient-to-r ${tool.gradient} text-white`}>
                                    {tool.tag}
                                </div>

                                {/* Icon + Name */}
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">{tool.icon}</span>
                                    <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {tool.description}
                                </p>

                                {/* Bottom gradient line */}
                                <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r ${tool.gradient} opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
