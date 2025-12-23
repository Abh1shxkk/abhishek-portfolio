import React from 'react';
import { SKILLS } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Marquee: React.FC = () => {
  const { theme } = useTheme();
  const marqueeContent = [...SKILLS, ...SKILLS, ...SKILLS];
  const marqueeContentReverse = [...SKILLS.reverse(), ...SKILLS, ...SKILLS];

  return (
    <div className={`relative w-full overflow-hidden border-y py-12 flex flex-col gap-6 ${
      theme === 'dark' 
        ? 'border-zinc-800 bg-zinc-950/50' 
        : 'border-gray-200 bg-gray-50'
    }`}>
      
      {/* Alpha Masks */}
      <div className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r to-transparent ${
        theme === 'dark' ? 'from-zinc-950' : 'from-gray-50'
      }`}></div>
      <div className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l to-transparent ${
        theme === 'dark' ? 'from-zinc-950' : 'from-gray-50'
      }`}></div>

      {/* Row 1 */}
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        {marqueeContent.map((skill, index) => (
          <div key={`row1-${skill}-${index}`} className={`flex items-center gap-2 text-2xl font-bold transition-colors ${
            theme === 'dark' 
              ? 'text-zinc-600 hover:text-zinc-300' 
              : 'text-gray-400 hover:text-gray-700'
          }`}>
             <span className={theme === 'dark' ? 'text-zinc-800' : 'text-gray-300'}>/</span>
            {skill}
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex w-max animate-marquee-reverse gap-16 whitespace-nowrap">
        {marqueeContentReverse.map((skill, index) => (
          <div key={`row2-${skill}-${index}`} className={`flex items-center gap-2 text-2xl font-bold transition-colors ${
            theme === 'dark' 
              ? 'text-zinc-600 hover:text-indigo-400/80' 
              : 'text-gray-400 hover:text-indigo-500'
          }`}>
             <span className={theme === 'dark' ? 'text-zinc-800' : 'text-gray-300'}>/</span>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
