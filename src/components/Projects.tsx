import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import MagneticButton from '../animations/MagneticButton';

/* ─── Fundo decorativo leve ─── */
const SectionBackground: React.FC<{ accent?: string }> = ({ accent = '#0ea5e9' }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'linear-gradient(transparent calc(100% - 1px), rgba(255,255,255,0.05) 1px)',
        backgroundSize: '100% 88px',
      }}
    />
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <line x1="0" y1="100%" x2="100%" y2="0" stroke={accent} strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="10 20" />
    </svg>
    <div
      className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
      style={{ background: `radial-gradient(circle, ${accent}12 0%, transparent 70%)` }}
    />
  </div>
);

/* ─── Card estilo revista/editorial ─── */
const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  return (
    <div className="w-full lg:w-screen h-[90vh] lg:h-screen flex items-center justify-center p-4 md:p-8 lg:p-12 flex-shrink-0 relative">
      <SectionBackground accent="#0ea5e9" />

      {/* Card horizontal */}
      <div
        className="w-full max-w-6xl flex flex-col lg:flex-row rounded-2xl overflow-hidden group"
        style={{ height: 'min(80vh, 680px)', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* ── Imagem 60% ── */}
        <div className="relative lg:w-[60%] h-48 lg:h-full overflow-hidden flex-shrink-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.06]"
          style={{ objectPosition: project.imagePosition ?? 'center' }}
          />
          {/* Sombra sutil na borda direita */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40" />

          {/* Número decorativo na imagem */}
          <div
            className="absolute bottom-4 left-5 font-black text-[7rem] leading-none select-none pointer-events-none"
            style={{ color: 'rgba(255,255,255,0.07)', fontVariantNumeric: 'tabular-nums' }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* ── Painel de conteúdo 40% ── */}
        <div className="flex-1 bg-[#070707] flex flex-col relative overflow-hidden">

          {/* Linha de acento azul no topo */}
          <div className="h-[3px] w-full bg-gradient-to-r from-primary via-primary/60 to-transparent flex-shrink-0" />

          {/* Número rotacionado decorativo */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 text-[10rem] font-black leading-none select-none pointer-events-none rotate-90 hidden lg:block"
            style={{ color: 'rgba(255,255,255,0.03)', fontVariantNumeric: 'tabular-nums' }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          <div className="flex flex-col justify-between h-full p-7 md:p-10 relative z-10">

            {/* Topo: índice + categoria */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/25">
                  {String(index + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
                </span>
                <div className="flex-1 h-px bg-white/10" />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
                  {project.category ?? 'Projeto'}
                </span>
              </motion.div>

              {/* Título */}
              <motion.h4
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-[1.05] tracking-tight"
              >
                {project.title}
              </motion.h4>
            </div>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/50 text-base md:text-lg leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Rodapé: tags + CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
                {project.tags.slice(0, 4).map((tech: string, i: number) => (
                  <React.Fragment key={tech}>
                    <span className="text-xs font-mono tracking-wide text-white/40 uppercase">{tech}</span>
                    {i < Math.min(project.tags.length, 4) - 1 && (
                      <span className="text-white/15">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-6 pt-5 border-t border-white/8">
                <MagneticButton asChild>
                  <a
                    href={project.link || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-base font-semibold text-white hover:text-primary transition-colors group/link"
                  >
                    <span>Ver Projeto</span>
                    <ExternalLink size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </MagneticButton>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono tracking-widest uppercase text-white/30 hover:text-white/70 transition-colors"
                  >
                    Código fonte
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Seção principal ─── */
const Projects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const totalSlides = projectsData.length + 1;
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(totalSlides - 1) * 100}vw`]);

  if (!isDesktop) {
    return (
      <section id="projects" className="py-24 bg-bg border-y border-border-color overflow-hidden">
        <div className="px-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Portfólio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-text-main leading-tight mb-6">
              Trabalhos <br /> Selecionados
            </h3>
            <p className="text-lg text-text-muted font-light max-w-xl">
              Uma seleção de projetos recentes focados em experiência do usuário, performance e design de ponta.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" ref={targetRef} className="relative bg-bg border-y border-border-color" style={{ height: `${totalSlides * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">

          {/* Intro Slide */}
          <div className="h-screen w-screen flex items-center justify-center p-6 md:p-20 flex-shrink-0 relative">
            <SectionBackground accent="#0ea5e9" />

            {/* Texto fantasma */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden" aria-hidden="true">
              <span className="text-[18vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.025)' }}>
                PROJECTS
              </span>
            </div>

            {/* Círculos decorativos */}
            <div className="absolute top-12 right-12 w-48 h-48 rounded-full border border-primary/10 hidden lg:block" />
            <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-primary/5 hidden lg:block" />

            <div className="max-w-5xl w-full relative z-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-primary" />
                  <h2 className="text-sm font-semibold tracking-widest text-primary uppercase">Portfólio</h2>
                </div>

                <h3 className="text-6xl md:text-8xl lg:text-[8rem] font-bold text-text-main leading-[1.1] mb-10 tracking-tight">
                  Trabalhos <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-main via-text-muted to-text-main/20">
                    Selecionados
                  </span>
                </h3>

                <p className="text-xl md:text-2xl text-text-muted font-light max-w-2xl leading-relaxed">
                  Uma seleção de projetos recentes focados em experiência do usuário, performance e design de ponta. Deslize para explorar a galeria.
                </p>

                <div className="mt-20 flex items-center gap-6 text-text-muted">
                  <div className="w-16 h-[1px] bg-text-muted/50 overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0 bg-primary"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                  <span className="uppercase tracking-widest text-sm font-mono flex items-center gap-2">
                    Continue Rolando <ArrowRight size={16} />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Project Slides */}
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
