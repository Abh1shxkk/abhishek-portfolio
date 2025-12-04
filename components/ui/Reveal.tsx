import React, { useEffect, useRef, useState } from 'react';
import { RevealEffect } from '../../types';

interface RevealProps {
  children: React.ReactNode;
  effect?: RevealEffect;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  effect = RevealEffect.FADE,
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getTransform = () => {
    switch (effect) {
      case RevealEffect.SLIDE:
        return isVisible ? 'translateY(0)' : 'translateY(40px)';
      case RevealEffect.SCALE:
        return isVisible ? 'scale(1)' : 'scale(0.95)';
      default:
        return 'none';
    }
  };

  const getOpacity = () => {
    return isVisible ? 1 : 0;
  };

  const getFilter = () => {
    if (effect === RevealEffect.BLUR) {
      return isVisible ? 'blur(0px)' : 'blur(10px)';
    }
    return 'none';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `all ${duration}ms cubic-bezier(0.2, 0.65, 0.3, 0.9)`,
        transitionDelay: `${delay}ms`,
        transform: getTransform(),
        opacity: getOpacity(),
        filter: getFilter(),
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
