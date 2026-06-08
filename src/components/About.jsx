import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, education } from '../data';

const highlightWords = ['Flutter', 'React', 'Firebase', 'REST APIs', 'UI/UX'];

function buildHighlightedText(text) {
    const parts = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
        let matchIndex = -1;
        let matchWord = '';

        for (const word of highlightWords) {
            const idx = remaining.indexOf(word);
            if (idx !== -1 && (matchIndex === -1 || idx < matchIndex)) {
                matchIndex = idx;
                matchWord = word;
            }
        }

        if (matchIndex === -1) {
            parts.push(<span key={key++}>{remaining}</span>);
            break;
        }

        if (matchIndex > 0) {
            parts.push(<span key={key++}>{remaining.slice(0, matchIndex)}</span>);
        }

        parts.push(
            <span
                key={key++}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold"
            >
                {matchWord}
            </span>
        );

        remaining = remaining.slice(matchIndex + matchWord.length);
    }

    return parts;
}

const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: 'UI/UX', label: 'Design Focused' },
    { value: '100%', label: 'Client Satisfaction' },
];

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background glow blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">About Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                {/* ── Bio Card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                        {buildHighlightedText(personalInfo.about)}
                    </p>
                </motion.div>

                {/* ── Stats Row ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                            className="glass-card rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300"
                        >
                            <h4 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-1">
                                {s.value}
                            </h4>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Education Card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="glass-card rounded-3xl p-8 md:p-10">
                            {/* header row */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">🎓</span>
                                    <h3 className="text-2xl font-bold text-white">Education</h3>
                                </div>
                            </div>

                            {education.map((item) => (
                                <div key={item.id}>
                                    {/* Duration pill */}
                                    <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30 mb-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
                                        {item.duration}
                                    </span>

                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                                        {item.degree}
                                    </h4>

                                    <p className="text-sm text-gray-400 font-medium mb-5 flex items-center gap-2">
                                        <span className="text-secondary">📍</span>
                                        {item.institution}
                                    </p>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
