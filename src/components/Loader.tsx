import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

type Stage = 'nicolas' | 'morphing' | 'ns' | 'done';

const middleLetters = ['i', 'c', 'o', 'l', 'a'];

const SPRING = { type: 'spring' as const, stiffness: 220, damping: 28 };

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<Stage>('nicolas');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t1 = window.setTimeout(() => setStage('morphing'), 900);
    const t2 = window.setTimeout(() => setStage('ns'), 1500);
    const t3 = window.setTimeout(() => setStage('done'), 2400);
    const t4 = window.setTimeout(onComplete, 2900);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const showMiddle = stage === 'nicolas';
  const lastChar = stage === 'ns' ? 'S' : 's';

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-baseline font-sans font-bold tracking-tight text-text-main text-5xl md:text-7xl"
          >
            <motion.span layout transition={SPRING}>
              N
            </motion.span>

            <AnimatePresence mode="popLayout">
              {showMiddle &&
                middleLetters.map((letter, idx) => (
                  <motion.span
                    key={letter}
                    layout
                    initial={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      transition: { duration: 0.25, delay: idx * 0.06 },
                    }}
                    transition={SPRING}
                  >
                    {letter}
                  </motion.span>
                ))}
            </AnimatePresence>

            <motion.span
              layout
              transition={SPRING}
              className="relative inline-block overflow-hidden"
              style={{ verticalAlign: 'baseline' }}
            >
              {/* Reserva espaço/baseline com o caractere mais largo */}
              <span aria-hidden className="invisible">S</span>
              <AnimatePresence initial={false} mode="popLayout">
                <motion.span
                  key={lastChar}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  className="absolute left-0 right-0 text-center"
                  style={{ bottom: 0 }}
                >
                  {lastChar}
                </motion.span>
              </AnimatePresence>
            </motion.span>

            <motion.span layout transition={SPRING} className="text-primary">
              .
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
