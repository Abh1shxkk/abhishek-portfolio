import React from 'react';
import TextReveal from './ui/TextReveal';
import Reveal from './ui/Reveal';
import BorderBeamButton from './ui/BorderBeamButton';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { RevealEffect } from '../types';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center items-center overflow-hidden px-4 pt-20 text-center">

      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]"></div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">

        <Reveal effect={RevealEffect.FADE} duration={1000} className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-1.5 text-sm text-indigo-400 backdrop-blur-sm shadow-lg shadow-indigo-900/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for freelance work
          </div>
        </Reveal>

        <Reveal effect={RevealEffect.SLIDE} delay={200}>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl lg:leading-[0.9]">
            Building the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-purple-400 to-indigo-400">
              Digital Future.
            </span>
          </h1>
        </Reveal>

        <Reveal effect={RevealEffect.FADE} delay={400} className="mt-8 max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed text-zinc-400 sm:text-xl">
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
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-8 py-3 font-medium text-white transition-all hover:bg-zinc-800 hover:border-zinc-600"
          >
            Resume <Download className="h-4 w-4" />
          </a>
        </Reveal>

        {/* Stats - Centered Grid */}
        <Reveal effect={RevealEffect.FADE} delay={800} className="mt-16 w-full max-w-4xl border-t border-zinc-800 pt-8">
          <div className="flex flex-wrap justify-center gap-12 sm:gap-24">
            <div className="text-center">
              <p className="text-4xl font-bold text-white">1+</p>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Years Exp.</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">15+</p>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">100%</p>
              <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Satisfaction</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-zinc-600" />
      </div>
    </section>
  );
};

export default Hero;