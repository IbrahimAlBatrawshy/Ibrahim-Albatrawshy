import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiquidEther from './components/LiquidEther';

function App() {
  return (
    <div className="font-sans text-gray-200 min-h-screen selection:bg-primary/30 selection:text-white pb-0 relative z-0">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10, pointerEvents: 'none' }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={80}
          isViscous={false}
          iterationsViscous={8}
          iterationsPoisson={12}
          dt={0.014}
          resolution={0.25}
          isBounce={false}
          autoDemo
          autoSpeed={1.2}
          autoIntensity={3.0}
          takeoverDuration={0.25}
          autoResumeDelay={1500}
          autoRampDuration={0.4}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
