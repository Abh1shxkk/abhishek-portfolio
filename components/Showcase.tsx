import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import SpotlightCard from './ui/SpotlightCard';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Reveal from './ui/Reveal';
import { RevealEffect } from '../types';

const Showcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const getCardStyle = (index: number) => {
    // Basic circular buffer logic for 3 positions relative to current
    const total = PROJECTS.length;
    // Normalized index relative to current
    let diff = (index - currentIndex + total) % total;
    if (diff > total / 2) diff -= total;

    // Only show 3 cards: center, left (-1), right (+1)
    if (Math.abs(diff) > 1) {
      return { 
        display: 'none',
        opacity: 0,
        transform: 'translateX(0) scale(0.8) z-0'
      };
    }

    const xOffset = diff * 110; // 110% width offset
    const scale = diff === 0 ? 1 : 0.85;
    const opacity = diff === 0 ? 1 : 0.4;
    const zIndex = diff === 0 ? 10 : 1;
    const blur = diff === 0 ? '0px' : '4px';

    return {
      display: 'block',
      transform: `translateX(${xOffset}%) scale(${scale})`,
      opacity,
      zIndex,
      filter: `blur(${blur})`,
      transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
    };
  };

  const activeProject = PROJECTS[currentIndex];

  return (
    <section id="projects" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-24">
      
      <div className="mb-16 text-center">
        <Reveal effect={RevealEffect.SLIDE}>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Selected Works</h2>
          <p className="max-w-xl text-lg text-zinc-400">
            A curated selection of projects demonstrating complex UI patterns and performance optimizations.
          </p>
        </Reveal>
      </div>

      <div className="relative flex h-[500px] w-full max-w-6xl items-center justify-center">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="absolute w-[350px] sm:w-[500px]"
            style={getCardStyle(index)}
          >
            <SpotlightCard className="h-[450px] bg-zinc-900 border-zinc-800">
              <div className="flex h-full flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mb-4 line-clamp-3 text-sm text-zinc-400">{project.description}</p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        ))}

        {/* Controls */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 z-20 rounded-full border border-zinc-700 bg-zinc-800/80 p-3 text-white backdrop-blur-md transition hover:bg-zinc-700 sm:left-12"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 z-20 rounded-full border border-zinc-700 bg-zinc-800/80 p-3 text-white backdrop-blur-md transition hover:bg-zinc-700 sm:right-12"
          aria-label="Next project"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <Reveal effect={RevealEffect.FADE} delay={300} className="mt-8 flex justify-center gap-2">
        {PROJECTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-zinc-700 hover:bg-zinc-600'
            }`}
          />
        ))}
      </Reveal>
    </section>
  );
};

export default Showcase;