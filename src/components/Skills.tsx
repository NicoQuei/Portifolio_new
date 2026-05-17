import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { skillsData, type SkillSide } from '../data/skills';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
  exit: { opacity: 0, y: -8 },
};

const Skills: React.FC = () => {
  const [activeSide, setActiveSide] = useState<SkillSide>('frontend');
  const data = skillsData[activeSide];
  const isLeft = activeSide === 'frontend';
  const Icon = data.icon;

  return (
    <section id="skills" className="relative py-32 px-6 bg-bg overflow-hidden">
      {/* Glow ambiente suave */}
      <motion.div
        animate={{
          background: isLeft
            ? `radial-gradient(circle at 25% 50%, rgba(${data.colors.glowRgba}, 0.10), transparent 60%)`
            : `radial-gradient(circle at 75% 50%, rgba(${data.colors.glowRgba}, 0.10), transparent 60%)`,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            Habilidades
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-main">
            Dois lados do mesmo desenvolvedor
          </h3>
        </motion.div>

        {/* Switcher Frontend / Backend */}
        <div className="flex justify-center mb-20">
          <div className="flex items-center gap-1 p-1.5 rounded-full bg-surface border border-border-color">
            {(Object.keys(skillsData) as SkillSide[]).map((side) => (
              <button
                key={side}
                onClick={() => setActiveSide(side)}
                className="relative w-32 h-10 rounded-full text-sm font-medium focus:outline-none"
              >
                {activeSide === side && (
                  <motion.div
                    layoutId="skills-pill"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-bg border border-border-color"
                  />
                )}
                <span
                  className={`relative z-10 transition-colors ${
                    activeSide === side ? 'text-text-main' : 'text-text-muted'
                  }`}
                >
                  {skillsData[side].label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo principal */}
        <motion.div
          layout
          transition={{ type: 'spring', bounce: 0, duration: 0.7 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 ${
            isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Orbe visual */}
          <motion.div layout="position" className="relative shrink-0">
            {/* Um único anel rotativo lento */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className={`absolute inset-[-8%] rounded-full border border-dashed ${data.colors.border} opacity-40`}
            />
            {/* Glow estático sutil */}
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${data.colors.gradient} blur-2xl opacity-20`}
            />
            {/* Núcleo */}
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full border border-white/5 flex items-center justify-center bg-surface/40 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={data.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                >
                  <Icon
                    size={120}
                    strokeWidth={1.2}
                    className={data.colors.text}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Painel de detalhes */}
          <motion.div layout="position" className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSide}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`flex flex-col ${
                  isLeft ? 'items-start text-left' : 'items-end text-right'
                }`}
              >
                <motion.h4
                  variants={itemVariants}
                  className={`text-xs font-bold uppercase tracking-[0.25em] mb-3 ${data.colors.text}`}
                >
                  {data.label}
                </motion.h4>
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-text-main"
                >
                  {data.title}
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className={`text-text-muted leading-relaxed mb-8 ${
                    isLeft ? 'mr-auto' : 'ml-auto'
                  }`}
                >
                  {data.description}
                </motion.p>

                {/* Lista de skills com barras */}
                <motion.div
                  variants={itemVariants}
                  className="w-full space-y-3 p-6 rounded-2xl bg-surface/60 border border-border-color"
                >
                  {data.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div
                        className={`flex items-center justify-between mb-1.5 text-sm ${
                          isLeft ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        <span className="text-text-main font-medium">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-text-muted">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-1 w-full bg-border-color rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 0.8,
                            delay: 0.2 + idx * 0.05,
                            ease: 'easeOut',
                          }}
                          className={`absolute inset-y-0 ${
                            isLeft ? 'left-0' : 'right-0'
                          } ${data.colors.bar} opacity-80 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
