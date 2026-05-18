import React from 'react';
import { motion } from 'framer-motion';
import { LayoutTemplate, Code2, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <LayoutTemplate size={24} className="text-text-main" />,
      title: 'Front-end moderno',
      desc: 'Interfaces dinâmicas usando o ecossistema React e Next.js com foco total no usuário.'
    },
    {
      icon: <Code2 size={24} className="text-text-main" />,
      title: 'Código limpo',
      desc: 'Arquitetura escalável, fácil manutenção e aplicação rigorosa de boas práticas de software.'
    },
    {
      icon: <Smartphone size={24} className="text-text-main" />,
      title: 'Experiência responsiva',
      desc: 'Aplicações adaptáveis que funcionam perfeitamente em qualquer dispositivo ou tamanho de tela.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.5, duration: 1 } }
  };

  return (
    <section id="about" className="py-32 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Sobre Mim</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text-main mb-6 leading-tight">
              Construindo produtos <br />
              com propósito.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
              Minha jornada na tecnologia começou na UNIFOR em 2024, onde iniciei o curso de Ciência da Computação. Desde então, mergulhei de cabeça no desenvolvimento web, absorvendo conhecimento através de cursos online e muita prática.
            </p>
            <p className="text-text-muted text-lg leading-relaxed font-light">
              Hoje, lidero minha própria empresa, desenvolvendo soluções de alto impacto para clientes e focando em entregar não apenas código, mas produtos digitais que resolvem problemas reais com máxima performance.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`p-6 bg-surface/20 backdrop-blur-sm border border-border-color rounded-xl transition-colors hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center mb-4 border border-border-color">
                  {item.icon}
                </div>
                <h4 className="text-text-main font-semibold mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
