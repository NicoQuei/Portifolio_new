import React, { useRef, useState, useEffect } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', ...props }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Calcula distância para criar campo magnético mais forte no centro
    const distance = Math.sqrt(middleX * middleX + middleY * middleY);
    const maxDistance = width; // Raio de influência
    
    if (distance < maxDistance) {
      setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.addEventListener('mousemove', handleMouse);
      el.addEventListener('mouseleave', reset);
    }
    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleMouse);
        el.removeEventListener('mouseleave', reset);
      }
    };
  }, []);

  return (
    <motion.button
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${className}`}
      {...props}
    >
      <motion.div
        animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

export default MagneticButton;
