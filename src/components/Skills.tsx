import React from 'react';
import { motion } from 'framer-motion';
import { skillsData, type SkillSide } from '../data/skills';

const Skills: React.FC = () => {
  const sides = Object.keys(skillsData) as SkillSide[];

  return (
    <section id="skills" className="relative py-32 px-6 bg-transparent overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            Habilidades
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-main">
            Dois lados do mesmo desenvolvedor
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sides.map((side, sideIdx) => {
            const data = skillsData[side];
            const Icon = data.icon;

            return (
              <motion.div
                key={side}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: sideIdx * 0.15, ease: 'easeOut' }}
                className="p-8 bg-surface border border-border-color rounded-2xl hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-bg rounded-lg flex items-center justify-center border border-border-color group-hover:border-primary/30 transition-colors">
                    <Icon size={22} strokeWidth={1.6} className="text-primary" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-bg border border-border-color rounded-full text-xs font-medium text-primary mb-2 group-hover:border-primary/30 transition-colors">
                      {data.label}
                    </span>
                    <h4 className="text-xl font-bold text-text-main leading-tight">
                      {data.title}
                    </h4>
                  </div>
                </div>

                <p className="text-text-muted/80 text-sm leading-relaxed font-light mb-8">
                  {data.description}
                </p>

                <div className="space-y-4">
                  {data.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5 text-sm">
                        <span className="text-text-main font-medium">{skill.name}</span>
                        <span className="font-mono text-xs text-text-muted">{skill.level}%</span>
                      </div>
                      <div className="relative h-1 w-full bg-border-color rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: '-100px' }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3 + idx * 0.05,
                            ease: 'easeOut',
                          }}
                          className="absolute inset-y-0 left-0 bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
