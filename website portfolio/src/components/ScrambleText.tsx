import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function ScrambleText({ text, className = '', delay = 0 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const timeout = setTimeout(() => {
      let iteration = 0;
      const maxIterations = 20;

      const interval = setInterval(() => {
        if (iteration >= maxIterations) {
          setDisplayText(text);
          clearInterval(interval);
          return;
        }

        const progress = iteration / maxIterations;
        const revealedChars = Math.floor(progress * text.length);

        let newText = '';
        for (let i = 0; i < text.length; i++) {
          if (i < revealedChars) {
            newText += text[i];
          } else if (text[i] === ' ') {
            newText += ' ';
          } else {
            newText += characters[Math.floor(Math.random() * characters.length)];
          }
        }

        setDisplayText(newText);
        iteration++;
      }, 40);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
