import React, { useState, useEffect } from 'react';
import { SOCIALS } from '../constants';
import Reveal from './ui/Reveal';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { RevealEffect, SocialLink } from '../types';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [socials, setSocials] = useState<SocialLink[]>([]);

  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/socials`);
        if (response.ok) {
          const data = await response.json();
          setSocials(data);
        }
      } catch (error) {
        console.error('Error fetching socials:', error);
      }
    };

    fetchSocials();
  }, []);

  const displaySocials = socials.length > 0 ? socials : SOCIALS;

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub': return <Github className="h-8 w-8" />;
      case 'LinkedIn': return <Linkedin className="h-8 w-8" />;
      case 'Twitter': return <Twitter className="h-8 w-8" />;
      case 'Gmail': return <Mail className="h-8 w-8" />;
      default: return <Mail className="h-8 w-8" />;
    }
  };

  const socialLinks = [
    ...displaySocials,
    { platform: 'Gmail', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=abhichauhan200504@gmail.com', username: 'abhichauhan200504@gmail.com' }
  ];

  return (
    <section id="contact" className={`relative w-full py-32 px-4 overflow-hidden ${
      theme === 'dark' ? 'bg-zinc-950' : 'bg-white'
    }`}>
      {/* Background Gradients */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full blur-[120px] ${
        theme === 'dark' ? 'bg-indigo-600/5' : 'bg-indigo-400/10'
      }`}></div>

      <div className="mx-auto max-w-4xl text-center">
        <Reveal effect={RevealEffect.SLIDE}>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-500 mb-4">Get in Touch</h2>
          <h3 className={`text-4xl font-bold sm:text-5xl md:text-6xl ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>Let's Build Something Amazing</h3>
          <p className={`mt-6 text-xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Got a project in mind? Let's turn your ideas into reality.
          </p>
        </Reveal>

        {/* Social Links Grid */}
        <Reveal effect={RevealEffect.FADE} delay={300}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'border-zinc-800 bg-zinc-900/50 hover:border-indigo-500/50 hover:bg-zinc-800/50'
                    : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-gray-50 shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`transition-colors duration-300 group-hover:text-indigo-500 ${
                  theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                  {getIcon(social.platform)}
                </div>
                <span className={`mt-4 text-lg font-medium ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}>{social.platform}</span>
                <span className={`mt-1 text-sm transition-colors ${
                  theme === 'dark' ? 'text-zinc-500 group-hover:text-zinc-400' : 'text-zinc-500 group-hover:text-zinc-600'
                }`}>
                  {social.platform === 'Gmail' ? 'Email Me' : social.username}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Email CTA */}
        <Reveal effect={RevealEffect.SLIDE} delay={500}>
          <div className={`mt-16 pt-12 border-t ${
            theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'
          }`}>
            <p className="text-zinc-500 mb-4">Or drop me an email at</p>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abhichauhan200504@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl sm:text-3xl font-bold hover:text-indigo-500 transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}
            >
              abhichauhan200504@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
