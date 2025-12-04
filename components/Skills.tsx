import React from 'react';
import { DETAILED_SKILLS } from '../constants';
import Reveal from './ui/Reveal';
import SpotlightCard from './ui/SpotlightCard';
import { Code2, Database, Terminal } from 'lucide-react';
import { RevealEffect } from '../types';

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes("Frontend")) return <Code2 className="h-6 w-6 text-indigo-400" />;
    if (title.includes("Backend")) return <Database className="h-6 w-6 text-purple-400" />;
    return <Terminal className="h-6 w-6 text-emerald-400" />;
  };

  return (
    <section className="relative w-full py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <Reveal effect={RevealEffect.SLIDE}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Expertise</h2>
            <p className="text-zinc-400">My toolbelt for building world-class applications.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DETAILED_SKILLS.map((category, idx) => (
            <Reveal key={idx} effect={RevealEffect.SLIDE} delay={idx * 150} className="h-full">
              <SpotlightCard className="h-full p-8 bg-zinc-900/40 border-zinc-800/60">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800/50 ring-1 ring-zinc-700">
                  {getIcon(category.title)}
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="rounded-md border border-zinc-700 bg-zinc-800/30 px-3 py-1 text-sm text-zinc-300 transition-colors hover:border-indigo-500/50 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
