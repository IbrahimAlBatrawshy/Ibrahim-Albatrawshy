import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalInfo } from '../data';
import profileImg from '../assets/Untitled (1).png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-transparent">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 md:px-12 h-screen flex flex-col justify-center relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 h-full pt-20">

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left pb-10 md:pb-0 z-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-2xl text-primary font-medium mb-2 md:mb-4"
                        >
                            Hello, I'm
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white tracking-tight leading-tight"
                        >
                            {personalInfo.name}
                        </motion.h1>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold mb-6 flex items-center justify-center md:justify-start gap-2"
                        >
                            <span className="text-gradient">{personalInfo.role}</span>
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base md:text-lg text-gray-400 mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed"
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8 md:mb-12"
                        >
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity cursor-pointer w-full sm:w-auto shadow-lg shadow-primary/25 text-center"
                            >
                                View Projects
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all cursor-pointer w-full sm:w-auto text-center"
                            >
                                Hire Me
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex items-center justify-center md:justify-start gap-6"
                        >
                            {personalInfo.socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all text-2xl"
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Image Section - Professional Style */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end items-center relative z-10 pt-10 md:pt-0"
                    >
                        {/* Blob glow rings */}
                        <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-primary/30 blur-3xl -z-10" />
                        <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary/20 blur-2xl -z-10" />

                        {/* Photo container */}
                        <div className="relative">
                            {/* Static gradient border ring */}
                            <div className="absolute -inset-1 rounded-full opacity-75 blur-sm"
                                style={{ background: 'conic-gradient(from 0deg, #5227FF, #FF9FFC, #B19EEF, #5227FF)' }}
                            />
                            {/* Circle photo */}
                            <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]"
                                style={{ boxShadow: '0 0 80px rgba(82,39,255,0.6)' }}>
                                <img
                                    src={profileImg}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: '50% 32%', transform: 'scale(1.1)' }}
                                />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>
                            {/* Decorative dots */}
                            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/50" />
                            <div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
                            <div className="absolute top-1/3 -right-5 w-2 h-2 rounded-full bg-purple-300" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
