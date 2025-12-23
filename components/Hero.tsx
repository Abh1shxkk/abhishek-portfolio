import React from 'react';
import Reveal from './ui/Reveal';
import BorderBeamButton from './ui/BorderBeamButton';
import { Download, Mail } from 'lucide-react';
import { RevealEffect } from '../types';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative flex min-h-screen w-full flex-col justify-center items-center overflow-hidden px-4 pt-24 text-center ${
      theme === 'light' ? 'bg-gray-50' : ''
    }`}>

      {/* Background Decor */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-[600px] rounded-full blur-[120px] ${
        theme === 'dark' ? 'bg-indigo-600/10' : 'bg-indigo-400/20'
      }`}></div>
      <div className={`absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full blur-[120px] ${
        theme === 'dark' ? 'bg-purple-600/10' : 'bg-purple-400/20'
      }`}></div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">

        <Reveal effect={RevealEffect.FADE} duration={1000} className="mb-8">
          <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm shadow-lg ${
            theme === 'dark' 
              ? 'border-zinc-700 bg-zinc-800/50 text-indigo-400 shadow-indigo-900/10' 
              : 'border-indigo-200 bg-white/80 text-indigo-600 shadow-indigo-100'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for freelance work
          </div>
        </Reveal>

        <Reveal effect={RevealEffect.SLIDE} delay={200}>
          <h1 className={`text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl lg:leading-[0.9] ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            Building the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-500">
              Digital Future.
            </span>
          </h1>
        </Reveal>

        <Reveal effect={RevealEffect.FADE} delay={400} className="mt-8 max-w-2xl mx-auto">
          <p className={`text-lg leading-relaxed sm:text-xl ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            I'm Abhishek Chauhan, a Full Stack Developer focused on building intersectional digital experiences. I specialize in building responsive and dynamic web applications with Laravel, PHP, JavaScript, and modern frameworks.
          </p>
        </Reveal>

        <Reveal effect={RevealEffect.SLIDE} delay={600} className="mt-10 flex flex-wrap justify-center gap-4">
          <BorderBeamButton onClick={scrollToContact}>
            <span className="flex items-center gap-2">
              Get in Touch <Mail className="h-4 w-4" />
            </span>
          </BorderBeamButton>

          <a
            href="/resume.pdf"
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-8 py-3 font-medium transition-all ${
              theme === 'dark'
                ? 'border-zinc-700 bg-zinc-800/50 text-white hover:bg-zinc-800 hover:border-zinc-600'
                : 'border-gray-300 bg-white text-zinc-900 hover:bg-gray-100 hover:border-gray-400'
            }`}
          >
            Resume <Download className="h-4 w-4" />
          </a>
        </Reveal>

        {/* Stats */}
        <Reveal effect={RevealEffect.FADE} delay={800} className={`mt-16 mb-8 w-full max-w-4xl border-t pt-8 ${
          theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-24">
            <div className="text-center">
              <p className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>1+</p>
              <p className={`text-xs uppercase tracking-wider mt-1 ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'}`}>Years Exp.</p>
            </div>
            <div className="text-center">
              <p className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>15+</p>
              <p className={`text-xs uppercase tracking-wider mt-1 ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'}`}>Projects</p>
            </div>
            <div className="text-center">
              <p className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>100%</p>
              <p className={`text-xs uppercase tracking-wider mt-1 ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'}`}>Satisfaction</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
