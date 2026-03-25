import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const categoryIcons = { All: '', Flutter: '', 'Front-End': '' };

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [hoveredId, setHoveredId] = useState(null);
    const categories = ['All', 'Flutter', 'Front-End'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Featured Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base mb-6">
                        A selection of my work — mobile apps, web apps, and everything in between.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-10" />

                    {/* Filter Tabs */}
                    <div className="flex justify-center flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                                    ${filter === cat
                                        ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-lg shadow-primary/20'
                                        : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20 bg-white/5'
                                    }`}
                            >
                                {categoryIcons[cat]} {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* ── Project Grid ── */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                onHoverStart={() => setHoveredId(project.id)}
                                onHoverEnd={() => setHoveredId(null)}
                                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5
                                    hover:border-primary/30 hover:bg-white/8 transition-all duration-300
                                    flex flex-col shadow-xl hover:shadow-primary/10"
                            >
                                {/* ── Image / Media area ── */}
                                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
                                    {project.video ? (
                                        <>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover absolute inset-0 group-hover:opacity-0 transition-opacity duration-500"
                                            />
                                            <video
                                                src={project.video}
                                                className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                muted loop playsInline
                                                onMouseEnter={(e) => e.target.play()}
                                                onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                                            />
                                            {/* Video hint badge */}
                                            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white border border-white/20 group-hover:opacity-0 transition-opacity">
                                                <FaPlay className="text-[10px]" /> Hover to play
                                            </div>
                                        </>
                                    ) : project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <h3 className="text-2xl font-bold text-white/30 uppercase tracking-wider">{project.title}</h3>
                                        </div>
                                    )}

                                    {/* Overlay with links */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                        flex items-center justify-center gap-4 backdrop-blur-sm">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank" rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full
                                                    text-white text-sm font-medium hover:bg-primary hover:border-primary transition-all duration-200"
                                            >
                                                <FaGithub /> GitHub
                                            </a>
                                        )}
                                        {project.liveUrl && project.liveUrl !== '#' && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank" rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full
                                                    text-white text-sm font-medium hover:bg-secondary hover:border-secondary transition-all duration-200"
                                            >
                                                <FaExternalLinkAlt /> Live
                                            </a>
                                        )}
                                    </div>

                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/10">
                                            {categoryIcons[project.category]} {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* ── Card Content ── */}
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-2.5 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
