import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCss3Alt, FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiDart, SiFirebase, SiJavascript, SiGit, SiPostman } from 'react-icons/si';

import imgHiddenTres from './assets/Hidden tres.png';
import imgGradProject from './assets/Horas.png';
import imgMovieApp from './assets/escanorhub.png';
import imgEducationApp from './assets/learning.png';
import imgShopWeb from './assets/shopweb.png';
import vidShopWeb from './assets/HEREW.mp4';
import imgIsupply from './assets/pro1.png';

export const personalInfo = {
    name: "Ibrahim Al-Batrawshy",
    role: "Flutter Developer & Front-End Developer",
    tagline: "Building fast, scalable mobile apps and modern web experiences.",
    about: "I am a passionate software developer specializing in Flutter and Front-End technologies. With a strong focus on UI/UX, clean architecture, and performance, I build scalable applications that deliver exceptional user experiences. My expertise spans integrating RESTful APIs, Firebase, and working collaboratively in agile teams to bring ideas to life.",
    socials: [
        { label: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/ibrahimal-batrawshy/?locale=en" },
        { label: "GitHub", icon: FaGithub, url: "https://github.com/IbrahimAlBatrawshy" },
        { label: "Email", icon: FaEnvelope, url: "mailto:ibrahimalbatrawshy@gmail.com" }
    ]
};

export const skills = {
    "Mobile": [
        { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
        { name: "Dart", icon: SiDart, color: "text-blue-500" },
        { name: "Sqflite", icon: SiFirebase, color: "text-blue-200" } // Placeholder icon for sqflite
    ],
    "State Management": [
        { name: "Cubit/Bloc", icon: SiFlutter, color: "text-blue-400" },
        { name: "Provider", icon: FaReact, color: "text-cyan-400" } // Placeholder icon
    ],
    "Front-End": [
        { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" }
    ],
    "Concepts": [
        { name: "OOP", icon: FaNodeJs, color: "text-green-500" },
        { name: "Clean Arch", icon: FaReact, color: "text-purple-400" },
        { name: "Design Patterns", icon: SiJavascript, color: "text-yellow-400" },
        { name: "UI/UX", icon: FaHtml5, color: "text-pink-400" },
        { name: "MVC", icon: FaReact, color: "text-blue-400" },
        { name: "MVVM", icon: SiFlutter, color: "text-cyan-400" }
    ],
    "Tools & Backend": [
        { name: "Firebase", icon: SiFirebase, color: "text-amber-500" },
        { name: "REST APIs", icon: FaNodeJs, color: "text-green-500" },
        { name: "Pocketbase", icon: SiFirebase, color: "text-teal-400" }, // Placeholder icon
        { name: "Git/GitHub", icon: SiGit, color: "text-orange-600" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" }
    ]
};

export const aiTools = [
    {
        name: "Antigravity",
        description: "AI-powered coding assistant for agentic software development and pair programming",
        gradient: "from-violet-600 to-purple-500",
        glow: "shadow-violet-500/30",
        border: "border-violet-500/30",
        tag: "Agentic Coding"
    },
    {
        name: "Cursor",
        description: "AI-first code editor built for pair-programming with state-of-the-art LLMs",
        gradient: "from-blue-600 to-cyan-500",
        glow: "shadow-blue-500/30",
        border: "border-blue-500/30",
        tag: "AI Editor"
    },
    {
        name: "Claude",
        description: "Anthropic's advanced AI assistant for complex reasoning, code review, and writing",
        gradient: "from-orange-500 to-amber-400",
        glow: "shadow-orange-500/30",
        border: "border-orange-500/30",
        tag: "AI Assistant"
    }
];

export const projects = [
    {
        id: 1,
        title: "Hidden Treasures",
        description: "A Flutter application designed to uncover and explore hidden locations and gems.",
        tags: ["Flutter", "Dart", "Mobile"],
        category: "Flutter",
        githubUrl: "https://github.com/IbrahimAlBatrawshy/Hidden-Treasures",
        liveUrl: "#",
        image: imgHiddenTres
    },
    {
        id: 2,
        title: "Horas (Graduation Project)",
        description: "A comprehensive React web application built as a graduation project.",
        tags: ["React", "Front-End", "Web"],
        category: "Front-End",
        githubUrl: "https://github.com/IbrahimAlBatrawshy/Horas",
        liveUrl: "#",
        image: imgGradProject
    },
    {
        id: 3,
        title: "Movie App",
        description: "A React application for browsing and discovering movies, utilizing modern web development practices.",
        tags: ["React", "Front-End", "Web APIs"],
        category: "Front-End",
        githubUrl: "https://github.com/IbrahimAlBatrawshy/MoiveusingReactITI",
        liveUrl: "#",
        image: imgMovieApp
    },
    {
        id: 4,
        title: "Education App",
        description: "A mobile learning platform built with Flutter, focused on delivering educational content effectively.",
        tags: ["Flutter", "Dart", "Mobile", "Education"],
        category: "Flutter",
        githubUrl: "https://github.com/IbrahimAlBatrawshy/Education-App",
        liveUrl: "#",
        image: imgEducationApp
    },
    {
        id: 5,
        title: "E-Commerce Landing Page",
        description: "A modern, high-converting React landing page built for an online store.",
        tags: ["React", "Front-End", "Landing Page"],
        category: "Front-End",
        githubUrl: "https://github.com/IbrahimAlBatrawshy", // Placeholder since no link was provided
        liveUrl: "#",
        image: imgShopWeb,
        video: vidShopWeb
    },
    {
        id: 6,
        title: "ISUPPLY App",
        description: "A comprehensive Flutter application designed to manage supplies and streamline inventory processes.",
        tags: ["Flutter", "Dart", "Mobile", "B2B"],
        category: "Flutter",
        githubUrl: "https://github.com/IbrahimAlBatrawshy/ISUPPLY",
        liveUrl: "#",
        image: imgIsupply
    }
];

export const experience = [
    {
        id: 1,
        role: "Software Development - Cross Platform Mobile App Developer",
        company: "DEPI",
        duration: "07/2025 – 12/2025",
        description: "Developed and maintained a cross-platform mobile application using Flutter & Dart, implementing state management, secure authentication, real-time data synchronization, and integrating UX/UI best practices for Android & iOS deployment."
    },
    {
        id: 2,
        role: "Data Structure Project Builder",
        company: "Columbus State University (Remote)",
        duration: "11/2023 – 01/2024",
        description: "Created interactive data structure visualizations using Java and the BRIDGES library. Strengthened understanding of data structures and collaborated with an international academic team, enhancing communication and teamwork skills."
    },
    {
        id: 3,
        role: "Bachelor of Computer Science",
        company: "Future Academy - Higher Future Institute For Specialized Technological Studies (Cairo, Egypt)",
        duration: "10/2022 – Present",
        description: "Studying core software engineering principles, algorithms, and advanced mobile/web development."
    }
];
