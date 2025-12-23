import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Showcase from './components/Showcase';
import Education from './components/Education';
import Contact from './components/Contact';
import { Sun, Moon } from 'lucide-react';

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-zinc-950 text-zinc-100' 
        : 'bg-gray-50 text-zinc-900'
    } selection:bg-indigo-500/30`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:px-12 backdrop-blur-md transition-colors duration-300 ${
        theme === 'dark' ? 'bg-zinc-950/80' : 'bg-white/80 border-b border-gray-200'
      }`}>
        <div className={`text-xl font-bold tracking-tighter ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
          Abhishek Chauhan.
        </div>
        
        <div className="flex items-center gap-8">
          <div className={`hidden gap-8 text-sm font-medium md:flex ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            <a href="#profile" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-zinc-900'}`}>Profile</a>
            <a href="#experience" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-zinc-900'}`}>Experience</a>
            <a href="#skills" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-zinc-900'}`}>Skills</a>
            <a href="#projects" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-zinc-900'}`}>Work</a>
            <a href="#contact" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-zinc-900'}`}>Contact</a>
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700' 
                : 'bg-gray-200 text-zinc-700 hover:bg-gray-300'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <Hero />
      <Marquee />
      <Profile />
      <Experience />
      <div id="skills">
        <Skills />
      </div>
      <Showcase />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className={`border-t py-8 text-center transition-colors duration-300 ${
        theme === 'dark' ? 'border-zinc-900 bg-zinc-950' : 'border-gray-200 bg-white'
      }`}>
         <div className={`text-sm ${theme === 'dark' ? 'text-zinc-600' : 'text-zinc-500'}`}>
            © {new Date().getFullYear()} Abhishek Chauhan. All rights reserved.
         </div>
      </footer>
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
