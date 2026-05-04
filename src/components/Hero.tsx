import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Briefcase, Mail } from 'lucide-react';
import RevealText from '../animations/RevealText';
import MagneticButton from '../animations/MagneticButton';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Brilho Ambiente Suave (Spotlights) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Conteúdo de Texto */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants} className="overflow-hidden">
            <motion.span 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-primary font-mono text-sm font-medium tracking-wider uppercase mb-2 block"
            >
              Olá, eu sou
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-text-main leading-[1.1]">
              <RevealText text="Nicolas." delay={0.4} />
            </h1>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-3xl md:text-4xl font-semibold text-text-muted flex items-center gap-2"
          >
            <span className="overflow-hidden inline-block border-r-2 border-primary animate-[pulse_1s_infinite] pr-1 whitespace-nowrap">
              Desenvolvedor Web
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-text-muted/80 max-w-lg leading-relaxed font-light mt-4">
            Transformo ideias complexas em experiências digitais imersivas. Especialista em arquitetura frontend escalável e interfaces que as pessoas amam usar.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-8">
            <MagneticButton asChild>
              <a href="#projects" className="px-8 py-4 bg-text-main text-bg rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 group">
                Ver projetos
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
            <MagneticButton asChild>
              <a href="#contact" className="px-8 py-4 bg-transparent text-text-main border border-border-color rounded-full font-bold text-sm hover:bg-surface-hover transition-colors">
                Entrar em contato
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-5 mt-6">
            <a href="#" className="text-text-muted hover:text-primary transition-colors">
              <Terminal size={22} />
            </a>
            <a href="#" className="text-text-muted hover:text-primary transition-colors">
              <Briefcase size={22} />
            </a>
            <a href="mailto:ola@nicolas.dev" className="text-text-muted hover:text-primary transition-colors">
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>

        {/* Elemento Visual - Editor de Código (Plano) */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.8 }}
          className="hidden lg:flex justify-center items-center relative w-full"
        >
          {/* Brilho de fundo */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl relative z-10 font-mono text-sm"
          >
            {/* Header do Editor */}
            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex-1 text-center text-[#8b949e] text-xs">developer.ts</div>
            </div>
            
            {/* Corpo do Editor */}
            <div className="p-5 text-[#c9d1d9] overflow-x-auto">
              <div className="flex">
                <span className="text-[#6e7681] mr-4 select-none">1</span>
                <span><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">developer</span> = {'{'}</span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-4 select-none">2</span>
                <span className="pl-4"><span className="text-[#a5d6ff]">name:</span> <span className="text-[#a5d6ff]">'Nicolas'</span>,</span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-4 select-none">3</span>
                <span className="pl-4"><span className="text-[#a5d6ff]">role:</span> <span className="text-[#a5d6ff]">'Full Stack Developer'</span>,</span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-4 select-none">4</span>
                <span className="pl-4"><span className="text-[#a5d6ff]">skills:</span> {'['}</span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-4 select-none">5</span>
                <span className="pl-8"><span className="text-[#a5d6ff]">'React'</span>, <span className="text-[#a5d6ff]">'NodeJs'</span>, <span className="text-[#a5d6ff]">'Java'</span>, <span className="text-[#a5d6ff]">'MySQL'</span></span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-4 select-none">6</span>
                <span className="pl-4">{']'},</span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-4 select-none">7</span>
                <span className="pl-4"><span className="text-[#d2a8ff]">buildAwesomeProducts</span>: <span className="text-[#ff7b72]">() =&gt;</span> {'{'}</span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-4 select-none">8</span>
                <span className="pl-8"><span className="text-[#ff7b72]">return</span> <span className="text-[#79c0ff]">true</span>;</span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-4 select-none">9</span>
                <span className="pl-4">{'}'}</span>
              </div>
              <div className="flex">
                <span className="text-[#6e7681] mr-4 select-none">10</span>
                <span>{'};'}</span>
              </div>
              <div className="flex animate-pulse mt-2">
                <span className="text-[#6e7681] mr-4 select-none">11</span>
                <span className="w-2 h-4 bg-[#79c0ff]"></span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
