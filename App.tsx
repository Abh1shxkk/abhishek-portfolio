import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
      
      {/* Navigation (Simple Absolute) */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between p-6 md:px-12 backdrop-blur-sm">
        <div className="text-xl font-bold tracking-tighter text-white">Lumina.</div>
        <div className="hidden gap-8 text-sm font-medium text-zinc-400 md:flex">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <Hero />
      <Marquee /> {/* Kept as Logos/Technologies divider */}
      <About />
      <div id="skills">
        <Skills />
      </div>
      <Education />
      <Showcase />
      <Contact />
      
      {/* Footer Copyright Only */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center">
         <div className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Lumina Portfolio. All rights reserved.
         </div>
      </footer>

    </main>
  );
}

export default App;
