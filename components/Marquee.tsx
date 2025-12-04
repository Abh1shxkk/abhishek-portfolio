import React from 'react';
import { SKILLS } from '../constants';

const Marquee: React.FC = () => {
  // Triple the skills to ensure smooth looping for wide screens
  const marqueeContent = [...SKILLS, ...SKILLS, ...SKILLS];
  // A second set of items for the reverse row, could be different but reusing for consistency
  const marqueeContentReverse = [...SKILLS.reverse(), ...SKILLS, ...SKILLS];

  return (
    <div className="relative w-full overflow-hidden border-y border-zinc-800 bg-zinc-950/50 py-12 flex flex-col gap-6">
      
      {/* Alpha Masks for Fade Effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-zinc-950 to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-zinc-950 to-transparent"></div>

      {/* Row 1: Left to Right (Technically Right to Left is standard Marquee) */}
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        {marqueeContent.map((skill, index) => (
          <div key={`row1-${skill}-${index}`} className="flex items-center gap-2 text-2xl font-bold text-zinc-600 transition-colors hover:text-zinc-300">
             <span className="text-zinc-800 font-normal">/</span>
            {skill}
          </div>
        ))}
      </div>

      {/* Row 2: Right to Left (Reverse) */}
      <div className="flex w-max animate-marquee-reverse gap-16 whitespace-nowrap">
        {marqueeContentReverse.map((skill, index) => (
          <div key={`row2-${skill}-${index}`} className="flex items-center gap-2 text-2xl font-bold text-zinc-600 transition-colors hover:text-indigo-400/80">
             <span className="text-zinc-800 font-normal">/</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;