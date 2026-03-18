import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
const finalText = 'VIDEO EDITOR';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(true);
  const [showSubtext, setShowSubtext] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let iteration = 0;
    const maxIterations = 30;
    
    const scrambleInterval = setInterval(() => {
      if (iteration >= maxIterations) {
        setDisplayText(finalText);
        setIsScrambling(false);
        clearInterval(scrambleInterval);
        setTimeout(() => setShowSubtext(true), 300);
        setTimeout(() => setFadeOut(true), 2000);
        setTimeout(() => onComplete(), 2500);
        return;
      }

      const progress = iteration / maxIterations;
      const revealedChars = Math.floor(progress * finalText.length);
      
      let text = '';
      for (let i = 0; i < finalText.length; i++) {
        if (i < revealedChars) {
          text += finalText[i];
        } else if (finalText[i] === ' ') {
          text += ' ';
        } else {
          text += characters[Math.floor(Math.random() * characters.length)];
        }
      }
      
      setDisplayText(text);
      iteration++;
    }, 50);

    return () => clearInterval(scrambleInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.h1
              className="font-display text-6xl md:text-9xl tracking-wider text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {displayText}
            </motion.h1>
            
            {isScrambling && (
              <motion.div
                className="absolute -inset-4 border border-foreground/20"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 0.2, repeat: Infinity }}
              />
            )}
          </div>

          <AnimatePresence>
            {showSubtext && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="w-16 h-px bg-foreground/50" />
                <span className="text-muted text-sm tracking-[0.3em] uppercase">Crafting Visual Stories</span>
                <div className="w-16 h-px bg-foreground/50" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-foreground"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
