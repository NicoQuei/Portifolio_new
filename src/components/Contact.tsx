import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Briefcase, Mail, Bot, Sparkles, Cpu, Zap, Camera, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 1 } }
  };



  return (
    <section id="contact" className="py-32 px-6 bg-surface border-y border-border-color">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Laboratório</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
            O que estou explorando
          </h3>
          <p className="text-text-muted max-w-2xl mx-auto text-lg font-light">
            Focado em unir a web moderna com inteligência artificial para criar a próxima geração de aplicações. Abaixo estão meus estudos e experimentações atuais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <motion.a variants={itemVariants} href="https://wa.me/5585996941119" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-bg border border-border-color rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-main group-hover:text-primary transition-colors">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="text-text-main font-semibold">WhatsApp</h4>
                <span className="text-text-muted text-sm">(85) 99694-1119</span>
              </div>
            </motion.a>

            <motion.a variants={itemVariants} href="https://www.instagram.com/nicoqueip/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-bg border border-border-color rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-main group-hover:text-primary transition-colors">
                <Camera size={20} />
              </div>
              <div>
                <h4 className="text-text-main font-semibold">Instagram</h4>
                <span className="text-text-muted text-sm">@nicoqueip</span>
              </div>
            </motion.a>

            <motion.a variants={itemVariants} href="https://www.linkedin.com/in/nicoquei/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-bg border border-border-color rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-main group-hover:text-primary transition-colors">
                <Briefcase size={20} />
              </div>
              <div>
                <h4 className="text-text-main font-semibold">LinkedIn</h4>
                <span className="text-text-muted text-sm">in/nicoquei</span>
              </div>
            </motion.a>

            <motion.a variants={itemVariants} href="https://github.com/NicoQuei" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-bg border border-border-color rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-main group-hover:text-primary transition-colors">
                <Terminal size={20} />
              </div>
              <div>
                <h4 className="text-text-main font-semibold">GitHub</h4>
                <span className="text-text-muted text-sm">NicoQuei</span>
              </div>
            </motion.a>

            <motion.a variants={itemVariants} href="mailto:nicolasqueirogapaix@gmail.com" className="flex items-center gap-4 p-6 bg-bg border border-border-color rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-main group-hover:text-primary transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-text-main font-semibold">E-mail</h4>
                <span className="text-text-muted text-sm">nicolasqueirogapaix@gmail.com</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Current Focus Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} className="bg-bg border border-border-color rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] transition-all group">
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-text-main mb-4 group-hover:text-primary transition-colors border border-border-color">
                <Bot size={22} />
              </div>
              <h4 className="text-text-main font-bold mb-2">Agentes Autônomos</h4>
              <p className="text-text-muted text-sm leading-relaxed">Embutindo agentes de IA diretamente no Front-end para criar fluxos de trabalho que antecipam as necessidades do usuário.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-bg border border-border-color rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] transition-all group">
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-text-main mb-4 group-hover:text-primary transition-colors border border-border-color">
                <Sparkles size={22} />
              </div>
              <h4 className="text-text-main font-bold mb-2">Generative UI</h4>
              <p className="text-text-muted text-sm leading-relaxed">Geração de interfaces dinâmicas usando React e LLMs, abandonando chatbots tradicionais em favor de experiências ricas.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-bg border border-border-color rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] transition-all group">
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-text-main mb-4 group-hover:text-primary transition-colors border border-border-color">
                <Cpu size={22} />
              </div>
              <h4 className="text-text-main font-bold mb-2">Arquitetura + IA</h4>
              <p className="text-text-muted text-sm leading-relaxed">Unindo a velocidade de frameworks modernos como Vite e Next.js com o poder de raciocínio de modelos como Gemini.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-bg border border-border-color rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] transition-all group">
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-text-main mb-4 group-hover:text-primary transition-colors border border-border-color">
                <Zap size={22} />
              </div>
              <h4 className="text-text-main font-bold mb-2">Produtividade Automática</h4>
              <p className="text-text-muted text-sm leading-relaxed">Testando a implementação de agentes que analisam dados e automatizam processos repetitivos dentro de aplicações web.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
