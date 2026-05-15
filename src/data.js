import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCss3Alt, FaReact, FaNodeJs, FaHtml5, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiFlutter, SiDart, SiFirebase, SiJavascript, SiGit, SiPostman, SiTypescript, SiNextdotjs, SiAndroid, SiFigma } from 'react-icons/si';

import imgHiddenTres from './assets/Hidden tres.png';
import imgGradProject from './assets/Horas.png';
import imgMovieApp from './assets/escanorhub.png';
import imgEducationApp from './assets/learning.png';
import imgShopWeb from './assets/shopweb.png';
import vidShopWeb from './assets/HEREW.mp4';
import imgAssl from './assets/assl.png';
import imgIsupply from './assets/pro1.png';

export const personalInfo = {
    name: "Ibrahim Al-Batrawshy",
    role: "Software Engineer | Flutter & React",
    tagline: "Building scalable cross-platform mobile apps and modern web experiences with clean code and exceptional UI/UX.",
    about: "Junior Software Engineer specializing in Flutter and React development with experience building scalable cross-platform and web applications using Firebase, REST APIs, and modern frontend architectures. Passionate about clean code, performance optimization, and responsive UI/UX design.",
    socials: [
        { label: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/ibrahimalbatrawshy/" },
        { label: "GitHub", icon: FaGithub, url: "https://github.com/IbrahimAlBatrawshy" },
        { label: "Email", icon: FaEnvelope, url: "mailto:ibrahimalbatrawshy@gmail.com" }
    ]
};

export const skills = {
    "Languages": [
        { name: "Dart", icon: SiDart, color: "text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Java", icon: FaJava, color: "text-red-500" }
    ],
    "Mobile": [
        { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
        { name: "Android SDK", icon: SiAndroid, color: "text-green-400" },
        { name: "Firebase Auth/Firestore", icon: SiFirebase, color: "text-amber-500" }
    ],
    "State Management": [
        { name: "Bloc / Cubit", icon: SiFlutter, color: "text-blue-400" },
        { name: "HydratedBloc", icon: SiFlutter, color: "text-cyan-400" },
        { name: "Provider", icon: FaReact, color: "text-cyan-300" },
        { name: "React Hooks", icon: FaReact, color: "text-cyan-400" }
    ],
    "Web Development": [
        { name: "React 19", icon: FaReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" }
    ],
    "Tools & Backend": [
        { name: "Firebase", icon: SiFirebase, color: "text-amber-500" },
        { name: "REST APIs", icon: FaNodeJs, color: "text-green-500" },
        { name: "PocketBase", icon: SiFirebase, color: "text-teal-400" },
        { name: "Git / GitHub", icon: SiGit, color: "text-orange-600" },
        { name: "Figma", icon: SiFigma, color: "text-pink-400" },
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
        title: "ASL Brand E-Commerce",
        description: "A full-stack e-commerce web platform featuring a dynamic product catalog with multi-variant selection, order management via Google Sheets integration, and robust form validation using TypeScript & Zod.",
        tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Zod", "Google APIs"],
        category: "Front-End",
        githubUrl: "https://github.com/IbrahimAlBatrawshy",
        liveUrl: "https://www.assl.store/",
        image: imgAssl,
        video: vidShopWeb
    },
    {
        id: 2,
        title: "Horas – AI Exam Proctoring System",
        description: "Graduation project: an AI-powered online exam proctoring system with real-time webcam monitoring, role-based dashboards for admins/examiners/students, and automated exam parsing via Gemini AI.",
        tags: ["React 18", "Vite", "Tailwind CSS", "FastAPI", "WebSockets", "Gemini API"],
        category: "Front-End",
        githubUrl: "https://github.com/IbrahimAlBatrawshy/Horas",
        liveUrl: "#",
        image: imgGradProject
    },
    {
        id: 3,
        title: "Movie Explorer App",
        description: "A React web app for browsing and discovering movies using the TMDB API, with client-side routing, real-time data fetching, and personalized Favorites & Watch Later lists.",
        tags: ["React 19", "Vite", "TMDB API", "React Router v7", "Bootstrap 5"],
        category: "Front-End",
        githubUrl: "https://github.com/IbrahimAlBatrawshy/MoiveusingReactITI",
        liveUrl: "#",
        image: imgMovieApp
    },
    {
        id: 4,
        title: "HiddenTreasures – DEPI",
        description: "A Flutter mobile app to discover hidden locations and gems, featuring secure Firebase authentication, offline state persistence with HydratedBloc, and geolocation-based route drawing via Google Maps API.",
        tags: ["Flutter", "Firebase", "BLoC", "HydratedBloc", "Google Maps API"],
        category: "Flutter",
        githubUrl: "https://github.com/IbrahimAlBatrawshy/Hidden-Treasures",
        liveUrl: "#",
        image: imgHiddenTres
    },
    {
        id: 5,
        title: "Online Education App",
        description: "A Flutter-based mobile learning platform with real-time data sync and secure user authentication powered by PocketBase, delivering efficient content management.",
        tags: ["Flutter", "Dart", "PocketBase", "Mobile", "Education"],
        category: "Flutter",
        githubUrl: "https://github.com/IbrahimAlBatrawshy/Education-App",
        liveUrl: "#",
        image: imgEducationApp
    },
    {
        id: 6,
        title: "ISUPPLY – E-Commerce Mobile App",
        description: "A Flutter mobile app providing a seamless shopping experience across Android and iOS, with robust REST API integration for product browsing and order management.",
        tags: ["Flutter", "Dart", "REST APIs", "Mobile", "B2B"],
        category: "Flutter",
        githubUrl: "https://github.com/IbrahimAlBatrawshy/ISUPPLY",
        liveUrl: "#",
        image: imgIsupply
    }
];

export const experience = [
    {
        id: 1,
        role: "Frontend Development Trainee",
        company: "Information Technology Institute (ITI)",
        duration: "08/2025 – 09/2025",
        description: "Engineered responsive SPAs using React.js, Hooks, and Tailwind CSS with a mobile-first design approach. Optimized web performance and ensured cross-browser compatibility through clean code and modern CSS frameworks like Bootstrap."
    },
    {
        id: 2,
        role: "Cross-Platform Mobile App Developer",
        company: "DEPI — Digital Egypt Pioneers Initiative",
        duration: "07/2025 – 12/2025",
        description: "Architected and maintained a production-ready mobile application using Flutter & Dart, ensuring high performance on both Android & iOS. Implemented robust state management using Bloc/Cubit, integrated secure Firebase authentication, real-time data synchronization, and collaborated on intuitive UI/UX delivery."
    },
    {
        id: 3,
        role: "Data Structure Project Builder",
        company: "Columbus State University (Remote)",
        duration: "11/2023 – 01/2024",
        description: "Created interactive data structure visualizations using Java and the BRIDGES library. Strengthened understanding of data structures and collaborated with an international academic team, enhancing communication and teamwork skills."
    },
    {
        id: 4,
        role: "Bachelor of Computer Science",
        company: "Future Academy – Higher Future Institute For Specialized Technological Studies (Cairo, Egypt)",
        duration: "10/2022 – Present",
        description: "Studying core software engineering principles, algorithms, data structures, and advanced mobile/web development. Completed a graduation project (Horas) involving real-world AI and web technologies."
    }
];
