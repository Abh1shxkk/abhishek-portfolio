import React, { useState } from 'react';
import { SOCIALS } from '../constants';
import Reveal from './ui/Reveal';
import BorderBeamButton from './ui/BorderBeamButton';
import { ArrowUpRight, Github, Linkedin, Twitter, Dribbble, Mail, Send } from 'lucide-react';
import { RevealEffect } from '../types';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub': return <Github className="h-5 w-5" />;
      case 'LinkedIn': return <Linkedin className="h-5 w-5" />;
      case 'Twitter': return <Twitter className="h-5 w-5" />;
      case 'Dribbble': return <Dribbble className="h-5 w-5" />;
      default: return <ArrowUpRight className="h-5 w-5" />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Laravel backend integration point
    console.log("Submitting to Laravel backend:", formState);
    alert("Message sent! (Mock)");
  };

  return (
    <section id="contact" className="relative w-full py-24 px-4 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[100px]"></div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info & Socials */}
          <div className="space-y-8">
            <Reveal effect={RevealEffect.SLIDE}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-500">Get in Touch</h2>
              <h3 className="mt-2 text-4xl font-bold text-white sm:text-5xl">Let's build something extraordinary together.</h3>
              <p className="mt-6 text-lg text-zinc-400">
                Whether you have a question, a project proposition, or just want to discuss the latest tech trends, feel free to reach out.
              </p>
            </Reveal>

            <Reveal effect={RevealEffect.FADE} delay={200} className="space-y-4 pt-8">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-semibold">Email Me</p>
                  <a href="mailto:abhichauhan200504@gmail.com" className="text-lg font-medium hover:text-indigo-400 transition-colors">abhichauhan200504@gmail.com</a>
                </div>
              </div>
            </Reveal>

            <Reveal effect={RevealEffect.SLIDE} delay={400} className="pt-8">
              <h4 className="mb-4 text-lg font-semibold text-white">Connect with me</h4>
              <div className="flex flex-wrap gap-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
                  >
                    {getIcon(social.platform)}
                    {social.platform}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Form */}
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm lg:p-12">
            <Reveal effect={RevealEffect.SCALE} delay={200}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </div>

                <BorderBeamButton type="submit" className="w-full">
                  <span className="flex items-center gap-2">
                    Send Message <Send className="h-4 w-4" />
                  </span>
                </BorderBeamButton>
              </form>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
