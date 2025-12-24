import React from 'react';
import Reveal from './ui/Reveal';
import SpotlightCard from './ui/SpotlightCard';
import { TESTIMONIALS } from '../constants';
import { RevealEffect } from '../types';

const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 px-4 bg-noise">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Left Column: Bio */}
          <div className="space-y-8">
            <Reveal effect={RevealEffect.SLIDE}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-500">About Me</h2>
              <h3 className="mt-2 text-4xl font-bold text-white sm:text-5xl">Bridging the gap between Design & Engineering.</h3>
            </Reveal>

            <Reveal effect={RevealEffect.FADE} delay={200}>
              <p className="text-lg leading-relaxed text-zinc-400">
                Computer Science Engineering graduate with hands-on experience in Laravel, PHP, JavaScript, and React-based frontend development. Skilled in building responsive and dynamic web applications with a strong foundation in data structures, algorithms, and problem-solving.
              </p>
            </Reveal>

            <Reveal effect={RevealEffect.FADE} delay={400}>
              <p className="text-lg leading-relaxed text-zinc-400">
                Currently expanding expertise in backend development, focusing on databases, APIs, and server-side programming, with the goal of transitioning into a backend engineering role. I thrive on building applications that enhance user experience and deliver measurable results.
              </p>
            </Reveal>

            <Reveal effect={RevealEffect.SLIDE} delay={600}>
              <div className="flex gap-8 border-l-2 border-zinc-800 pl-6">
                <div>
                  <span className="block text-3xl font-bold text-white">6+</span>
                  <span className="text-sm text-zinc-500">Months Exp</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-white">15+</span>
                  <span className="text-sm text-zinc-500">Projects</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-white">100%</span>
                  <span className="text-sm text-zinc-500">Committed</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Testimonials Marquee (Vertical) or Grid */}
          <div className="relative">
            <div className="grid gap-4">
              {TESTIMONIALS.slice(0, 3).map((t, i) => (
                <Reveal key={t.id} effect={RevealEffect.BLUR} delay={200 + (i * 100)} className="w-full">
                  <SpotlightCard className="p-6 bg-zinc-900/30">
                    <p className="mb-4 text-zinc-300 italic">"{t.content}"</p>
                    <div className="flex items-center gap-3">
                      <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full grayscale" />
                      <div>
                        <p className="text-sm font-bold text-white">{t.name}</p>
                        <p className="text-xs text-zinc-500">{t.role} @ {t.company}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;