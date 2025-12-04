import React from 'react';
import { EDUCATION_HISTORY } from '../constants';
import Reveal from './ui/Reveal';
import { GraduationCap } from 'lucide-react';
import { RevealEffect } from '../types';

const Education: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 bg-zinc-900/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-400">
             <GraduationCap className="h-6 w-6" />
          </div>
          <Reveal effect={RevealEffect.FADE}>
            <h2 className="text-3xl font-bold tracking-tight text-white">Education</h2>
          </Reveal>
        </div>

        <div className="relative border-l border-zinc-800 ml-6">
          {EDUCATION_HISTORY.map((edu, idx) => (
            <div key={edu.id} className="mb-12 ml-8 relative">
              {/* Dot */}
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 ring-2 ring-zinc-800">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              </span>

              <Reveal effect={RevealEffect.SLIDE} delay={idx * 100}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                  <span className="text-sm font-medium text-indigo-400/80">{edu.year}</span>
                </div>
                <h4 className="text-lg text-zinc-300 mt-1">{edu.degree}</h4>
                <p className="mt-3 max-w-2xl text-base text-zinc-400 leading-relaxed">
                  {edu.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
