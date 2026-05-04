import React from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const RevealText: React.FC<RevealTextProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <div className="relative overflow-hidden inline-block">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }} // Cinematic ease out
        className={className}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default RevealText;
