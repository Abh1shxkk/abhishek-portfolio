import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import SpotlightCard from './ui/SpotlightCard';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Reveal from './ui/Reveal';
import { RevealEffect, Project } from '../types';
import { useTheme } from '../context/ThemeContext';

const Showcase: React.FC = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/projects`);
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const displayData = projects.length > 0 ? projects : PROJECTS;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayData.length) % displayData.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [displayData.length]);

  const getCardStyle = (index: number) => {
    const total = displayData.length;
    let diff = (index - currentIndex + total) % total;
    if (diff > total / 2) diff -= total;

    if (Math.abs(diff) > 1) {
      return { 
        display: 'none',
        opacity: 0,
        transform: 'translateX(0) scale(0.8) z-0'
      };
    }

    const xOffset = diff * 110;
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

  return (
    <section id="projects" className={`relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-24 ${
      theme === 'dark' ? 'bg-zinc-950' : 'bg-white'
    }`}>
      
      <div className="mb-16 text-center">
        <Reveal effect={RevealEffect.SLIDE}>
          <h2 className={`mb-4 text-4xl font-bold tracking-tight sm:text-5xl ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>Selected Works</h2>
          <p className={`max-w-xl text-lg ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            A curated selection of projects demonstrating complex UI patterns and performance optimizations.
          </p>
        </Reveal>
      </div>

      <div className="relative flex h-[500px] w-full max-w-6xl items-center justify-center">
        {displayData.map((project, index) => (
          <div
            key={project.id}
            className="absolute w-[350px] sm:w-[500px]"
            style={getCardStyle(index)}
          >
            <div className={`h-[450px] rounded-2xl border overflow-hidden ${
              theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <div className="flex h-full flex-col">
                <div className="relative h-56 w-full overflow-hidden group/image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-125"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-80 ${
                    theme === 'dark' ? 'from-zinc-900' : 'from-white'
                  }`} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-500">
                    {project.category}
                  </span>
                  <h3 className={`mb-2 text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-zinc-900'
                  }`}>{project.title}</h3>
                  <p className={`mb-4 line-clamp-3 text-sm ${
                    theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>{project.description}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className={`rounded-full px-2 py-1 text-xs ${
                          theme === 'dark' ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-100 text-zinc-700'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {(project as any).url && (
                      <a
                        href={(project as any).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-indigo-500 hover:text-indigo-400 transition-colors"
                      >
                        View <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button 
          onClick={handlePrev}
          className={`absolute left-4 z-20 rounded-full border p-3 backdrop-blur-md transition sm:left-12 ${
            theme === 'dark'
              ? 'border-zinc-700 bg-zinc-800/80 text-white hover:bg-zinc-700'
              : 'border-gray-300 bg-white/80 text-zinc-900 hover:bg-gray-100'
          }`}
          aria-label="Previous project"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={handleNext}
          className={`absolute right-4 z-20 rounded-full border p-3 backdrop-blur-md transition sm:right-12 ${
            theme === 'dark'
              ? 'border-zinc-700 bg-zinc-800/80 text-white hover:bg-zinc-700'
              : 'border-gray-300 bg-white/80 text-zinc-900 hover:bg-gray-100'
          }`}
          aria-label="Next project"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <Reveal effect={RevealEffect.FADE} delay={300} className="mt-8 flex justify-center gap-2">
        {displayData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'w-8 bg-indigo-500' 
                : `w-2 ${theme === 'dark' ? 'bg-zinc-700 hover:bg-zinc-600' : 'bg-gray-300 hover:bg-gray-400'}`
            }`}
          />
        ))}
      </Reveal>
    </section>
  );
};

export default Showcase;
