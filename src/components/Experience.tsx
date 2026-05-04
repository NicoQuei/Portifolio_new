import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experienceData } from '../data/experience';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="experience" className="py-32 px-6 bg-bg overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Trajetória</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-main">
            Experiência & Jornada
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline Line (Grows with scroll) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-color transform md:-translate-x-1/2"></div>
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-primary transform md:-translate-x-1/2 origin-top shadow-[0_0_15px_rgba(14,165,233,0.8)] z-0"
          ></motion.div>

          <div className="space-y-12 relative z-10">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-[0_0_10px_rgba(14,165,233,0.5)] z-20 mt-6 md:mt-0"
                  ></motion.div>

                  {/* Empty space for alignment on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}
                  >
                    <div className="p-8 bg-surface border border-border-color rounded-2xl hover:border-primary/30 transition-colors">
                      <span className="inline-block px-3 py-1 bg-bg border border-border-color rounded-full text-xs font-medium text-primary mb-4">
                        {exp.period}
                      </span>
                      <h4 className="text-xl font-bold text-text-main mb-1">{exp.role}</h4>
                      <h5 className="text-sm font-medium text-text-muted mb-4">{exp.company}</h5>
                      <p className="text-text-muted/80 text-sm leading-relaxed font-light">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
