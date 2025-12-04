import React, { useState, useRef, useEffect } from 'react';
import { chatWithPortfolio } from '../services/geminiService';
import { MessageCircle, Send, Sparkles, X, Bot, User } from 'lucide-react';
import Reveal from './ui/Reveal';
import { RevealEffect } from '../types';

interface Message {
  id: string;
  role: 'user' | 'ai';
  text: string;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      text: "Hi! I'm an AI assistant trained on Alex's portfolio. Ask me anything about his skills, experience, or projects."
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatWithPortfolio(userMsg.text);
      const aiMsg: Message = { id: (Date.now() + 1).toString(), role: 'ai', text: response };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      // Error handled in service, but fallback here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 hover:bg-indigo-500"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <>
               <MessageCircle className="h-6 w-6 text-white transition-opacity group-hover:opacity-0" />
               <Sparkles className="absolute h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100" />
            </>
          )}
          {/* Ping animation to draw attention */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-indigo-500 border-2 border-zinc-950"></span>
            </span>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Reveal effect={RevealEffect.SCALE} duration={300} className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-md origin-bottom-right">
          <div className="flex h-[500px] flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-950/50 p-4 backdrop-blur">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Lumina AI</h3>
                <p className="text-xs text-zinc-400">Powered by Gemini 2.5 Flash</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-900/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    msg.role === 'user' ? 'bg-zinc-700' : 'bg-indigo-600/20 text-indigo-400'
                  }`}>
                    {msg.role === 'user' ? <User className="h-4 w-4 text-zinc-300" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-none'
                        : 'bg-zinc-800 text-zinc-200 rounded-tl-none border border-zinc-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400">
                     <Bot className="h-4 w-4" />
                   </div>
                   <div className="flex items-center gap-1 rounded-2xl rounded-tl-none border border-zinc-700 bg-zinc-800 px-4 py-3">
                     <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.3s]"></div>
                     <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.15s]"></div>
                     <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-500"></div>
                   </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-zinc-800 bg-zinc-950 p-3">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Alex's experience..."
                  className="w-full rounded-full border border-zinc-700 bg-zinc-900 py-3 pl-4 pr-12 text-sm text-white placeholder-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white transition hover:bg-indigo-500 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      )}
    </>
  );
};

export default AIChat;