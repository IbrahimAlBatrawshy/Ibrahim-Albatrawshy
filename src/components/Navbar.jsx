import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
const cvFile = "https://drive.google.com/file/d/1bi4CvnFfKniCsT7J8Au0f5F0VWgRNqeI/view?usp=drive_link";
import logoImg from '../assets/logo.png';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-3">
                    <img src={logoImg} alt="Logo" className="h-10 w-auto object-contain" />
                    <span className="text-2xl font-bold text-gradient hidden sm:block">{personalInfo.name.split(' ')[0]}</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-primary"
                            className="text-gray-300 hover:text-white cursor-pointer transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all cursor-pointer text-sm font-medium"
                    >
                        Contact
                    </Link>
                    <a
                        href={cvFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity text-sm"
                    >
                        Download CV
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-2xl text-gray-200" onClick={() => setIsMobileMenuOpen(true)}>
                    <HiMenuAlt3 />
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-surface z-50 flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute top-6 right-6 text-3xl text-gray-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <HiX />
                        </button>
                        <div className="flex flex-col items-center space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl text-gray-300 hover:text-white font-medium cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl text-primary font-medium cursor-pointer"
                            >
                                Contact
                            </Link>
                            <a
                                href={cvFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
