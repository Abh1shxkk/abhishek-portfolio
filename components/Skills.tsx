import React, { useEffect, useState } from 'react';
import Reveal from './ui/Reveal';
import { RevealEffect } from '../types';
import { SkillCategory } from '../types';
import { useTheme } from '../context/ThemeContext';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/skills`);
        if (response.ok) {
          const data = await response.json();
          setSkills(data);
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section className={`relative w-full py-32 px-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-zinc-950'}`}>
        <div className="mx-auto max-w-6xl flex justify-center">
          <div className="animate-pulse text-zinc-500">Loading skills...</div>
        </div>
      </section>
    );
  }

  if (skills.length === 0) {
    return null;
  }

  return (
    <section className={`relative w-full py-32 px-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-zinc-950'}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Title */}
          <div className="lg:col-span-3">
            <Reveal effect={RevealEffect.SLIDE}>
              <h2 className={`text-4xl font-bold tracking-tight leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>
                TECHNICAL<br />SKILLS<span className="text-indigo-500">.</span>
              </h2>
              <div className="mt-4 w-12 h-1 bg-zinc-700"></div>
              <p className={`mt-6 text-sm leading-relaxed ${
                theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'
              }`}>
                A toolkit refined over years of building scalable applications and immersive web experiences.
              </p>
            </Reveal>
          </div>

          {/* Right: Skills Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {skills.map((category, idx) => (
                <Reveal key={idx} effect={RevealEffect.FADE} delay={idx * 100}>
                  <div>
                    <h3 className={`text-xs font-semibold uppercase tracking-wider mb-6 ${
                      theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
                    }`}>
                      {category.title}
                    </h3>
                    <ul className="space-y-4">
                      {category.items.map((skill, skillIdx) => (
                        <li 
                          key={skill}
                          className={`flex items-center gap-3 text-base transition-colors duration-200 ${
                            theme === 'dark' 
                              ? 'text-zinc-300 hover:text-white' 
                              : 'text-zinc-700 hover:text-zinc-900'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            theme === 'dark' ? 'bg-zinc-600' : 'bg-zinc-400'
                          }`}></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
