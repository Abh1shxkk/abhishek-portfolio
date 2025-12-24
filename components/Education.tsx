import React, { useEffect, useState } from 'react';
import Reveal from './ui/Reveal';
import { GraduationCap } from 'lucide-react';
import { RevealEffect, EducationItem } from '../types';
import { useTheme } from '../context/ThemeContext';

const Education: React.FC = () => {
  const { theme } = useTheme();
  const [education, setEducation] = useState<EducationItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/education`);
        if (response.ok) {
          const data = await response.json();
          setEducation(data);
        }
      } catch (error) {
        console.error('Error fetching education:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  if (loading) {
    return (
      <section id="education" className={`relative w-full py-24 px-4 ${
        theme === 'dark' ? 'bg-zinc-900/30' : 'bg-gray-50'
      }`}>
        <div className="mx-auto max-w-4xl flex justify-center">
          <div className="animate-pulse text-zinc-500">Loading education...</div>
        </div>
      </section>
    );
  }

  if (education.length === 0) {
    return null;
  }

  return (
    <section id="education" className={`relative w-full py-24 px-4 ${
      theme === 'dark' ? 'bg-zinc-900/30' : 'bg-gray-50'
    }`}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex items-center gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
            theme === 'dark' ? 'bg-indigo-600/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
          }`}>
             <GraduationCap className="h-6 w-6" />
          </div>
          <Reveal effect={RevealEffect.FADE}>
            <h2 className={`text-3xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}>Education</h2>
          </Reveal>
        </div>

        <div className={`relative border-l ml-6 ${
          theme === 'dark' ? 'border-zinc-800' : 'border-gray-300'
        }`}>
          {education.map((edu, idx) => (
            <div key={edu.id} className="mb-12 ml-8 relative">
              <span className={`absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full ring-2 ${
                theme === 'dark' ? 'bg-zinc-950 ring-zinc-800' : 'bg-white ring-gray-300'
              }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              </span>

              <Reveal effect={RevealEffect.SLIDE} delay={idx * 100}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{edu.school}</h3>
                  <span className="text-sm font-medium text-indigo-500">{edu.year}</span>
                </div>
                <h4 className={`text-lg mt-1 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'}`}>{edu.degree}</h4>
                <p className={`mt-3 max-w-2xl text-base leading-relaxed ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
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
