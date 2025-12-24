import React, { useEffect, useState } from 'react';
import Reveal from './ui/Reveal';
import { RevealEffect } from '../types';
import { User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProfileData {
  bio: string;
  location: string;
  experience: string;
  availability: string;
  avatar?: string;
}

const Profile: React.FC = () => {
  const { theme } = useTheme();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000/api'}/profile`);
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <section id="profile" className={`relative w-full py-32 px-4 min-h-[80vh] flex items-center justify-center ${
        theme === 'dark' ? 'bg-zinc-950' : 'bg-white'
      }`}>
        <div className="animate-pulse text-zinc-500">Loading profile...</div>
      </section>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <section id="profile" className={`relative w-full py-32 px-4 min-h-[80vh] flex items-center ${
      theme === 'dark' ? 'bg-zinc-950' : 'bg-white'
    }`}>
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
          
          {/* Left: Title + Profile Image */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-8">
            <Reveal effect={RevealEffect.SLIDE}>
              <h2 className={`text-4xl font-bold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}>PROFILE<span className="text-indigo-500">.</span></h2>
              <div className="mt-3 w-16 h-1 bg-indigo-500"></div>
            </Reveal>
            
            {/* Profile Image */}
            <Reveal effect={RevealEffect.SCALE} delay={200}>
              <div className="relative group">
                <div className={`h-48 w-48 sm:h-56 sm:w-56 rounded-2xl p-1 transition-transform duration-300 group-hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20' 
                    : 'bg-gradient-to-br from-indigo-500/30 to-purple-500/30'
                }`}>
                  <div className={`h-full w-full rounded-2xl flex items-center justify-center overflow-hidden ${
                    theme === 'dark' ? 'bg-zinc-900' : 'bg-gray-100'
                  }`}>
                    {profile.avatar ? (
                      <img 
                        src={profile.avatar} 
                        alt="Profile" 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    ) : (
                      <User className={`h-24 w-24 ${theme === 'dark' ? 'text-zinc-700' : 'text-gray-400'}`} />
                    )}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-indigo-600/30 blur-2xl"></div>
              </div>
            </Reveal>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-8 space-y-10">
            <Reveal effect={RevealEffect.FADE} delay={300}>
              <p className={`text-xl leading-relaxed ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'
              }`}>
                {profile.bio}
              </p>
            </Reveal>

            {/* Stats Row */}
            <Reveal effect={RevealEffect.SLIDE} delay={500}>
              <div className={`flex flex-wrap gap-16 pt-8 border-t ${
                theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'
              }`}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Location</p>
                  <p className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{profile.location}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Experience</p>
                  <p className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{profile.experience}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Availability</p>
                  <p className={`text-lg font-medium flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    {profile.availability}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
