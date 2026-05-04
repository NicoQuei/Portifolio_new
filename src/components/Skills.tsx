import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.4, duration: 1 } }
  };

  const badgeVariants: any = {
    hidden: { opacity: 0, scale: 0, rotate: -15 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 200, damping: 12 } }
  };

  return (
    <section id="skills" className="py-32 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Habilidades</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-main">
            Tecnologias que domino
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="p-8 bg-surface border border-border-color rounded-2xl"
            >
              <h4 className="text-xl font-semibold text-text-main mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.05, borderColor: '#0ea5e9', color: '#fff', boxShadow: '0 0 15px rgba(14, 165, 233, 0.2)' }}
                    className="px-4 py-2 bg-bg border border-border-color rounded-lg text-sm text-text-muted font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
