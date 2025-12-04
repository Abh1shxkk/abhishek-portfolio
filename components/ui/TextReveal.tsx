import React, { useEffect, useState } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className = "", delay = 0 }) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap gap-x-3 gap-y-1 ${className}`}>
      {words.map((word, i) => (
        <div key={i} className="overflow-hidden">
          <span
            className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.3,0.9)]"
            style={{
              transform: loaded ? 'translateY(0)' : 'translateY(110%)',
              transitionDelay: `${i * 50}ms`,
            }}
          >
            {word}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TextReveal;
