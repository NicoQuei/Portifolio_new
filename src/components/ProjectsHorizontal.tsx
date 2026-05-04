import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projects';
import TiltCard from '../animations/TiltCard';
import MagneticButton from '../animations/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const ProjectsHorizontal: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;

    if (section && scrollContainer) {
      // Calculate how far to scroll horizontally
      const scrollWidth = scrollContainer.scrollWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      // Ensure we don't try to scroll if content is smaller than window
      if (amountToScroll > 0) {
        const tween = gsap.to(scrollContainer, {
          x: -amountToScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${amountToScroll}`,
            pin: true,
            scrub: 1, // Smooth scrubbing
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.kill();
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      }
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="projects" 
      className="bg-surface border-y border-border-color overflow-hidden relative"
      // Added a large min-height as a fallback, though ScrollTrigger manages the pin duration
      style={{ minHeight: '100vh' }}
    >
      <div className="absolute top-20 left-6 md:left-12 z-10 pointer-events-none">
        <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Portfólio</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-text-main">
          Projetos <br/> Selecionados
        </h3>
      </div>

      {/* The container that will move horizontally */}
      <div 
        ref={scrollRef} 
        className="flex h-screen items-center px-6 md:px-32 w-[fit-content]"
      >
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[70vh] flex-shrink-0 mr-12 md:mr-24 flex items-center"
          >
            <TiltCard className="w-full h-full">
              <div className="bg-bg border border-border-color rounded-3xl overflow-hidden flex flex-col group transition-all h-full shadow-2xl">
                
                {/* Image Container */}
                <div className="h-[45%] md:h-[55%] overflow-hidden relative border-b border-border-color">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-[0.33,1,0.68,1]"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <MagneticButton asChild>
                      <a href={project.link || "#"} className="bg-primary/90 text-bg px-6 py-3 rounded-full font-bold tracking-wide backdrop-blur-md">
                        Ver Projeto
                      </a>
                    </MagneticButton>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-text-main mb-4">{project.title}</h4>
                    <p className="text-text-muted text-base md:text-lg leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-mono px-3 py-1.5 bg-surface rounded text-text-muted border border-border-color"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsHorizontal;
