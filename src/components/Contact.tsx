import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Briefcase, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 1 } }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso! (Demonstração)');
    setFormState({ name: '', email: '', message: '' });
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
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Contato</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
            Vamos conversar?
          </h3>
          <p className="text-text-muted max-w-2xl mx-auto text-lg font-light">
            Tem uma ideia ou oportunidade? Preencha o formulário abaixo ou entre em contato diretamente através das minhas redes sociais.
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
            <motion.a variants={itemVariants} href="mailto:ola@nicolas.dev" className="flex items-center gap-4 p-6 bg-bg border border-border-color rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-main group-hover:text-primary transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-text-main font-semibold">E-mail</h4>
                <span className="text-text-muted text-sm">ola@nicolas.dev</span>
              </div>
            </motion.a>
            
            <motion.a variants={itemVariants} href="#" className="flex items-center gap-4 p-6 bg-bg border border-border-color rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-main group-hover:text-primary transition-colors">
                <Briefcase size={20} />
              </div>
              <div>
                <h4 className="text-text-main font-semibold">LinkedIn</h4>
                <span className="text-text-muted text-sm">in/nicolas</span>
              </div>
            </motion.a>

            <motion.a variants={itemVariants} href="#" className="flex items-center gap-4 p-6 bg-bg border border-border-color rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-main group-hover:text-primary transition-colors">
                <Terminal size={20} />
              </div>
              <div>
                <h4 className="text-text-main font-semibold">GitHub</h4>
                <span className="text-text-muted text-sm">nicolas-dev</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-bg border border-border-color rounded-3xl p-8 md:p-10 shadow-2xl">
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-muted ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-surface border border-border-color rounded-xl px-5 py-4 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-text-muted/50"
                    placeholder="João Silva"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-muted ml-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-surface border border-border-color rounded-xl px-5 py-4 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-text-muted/50"
                    placeholder="joao@exemplo.com"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-text-muted ml-1">Sua Mensagem</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-surface border border-border-color rounded-xl px-5 py-4 text-text-main focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-text-muted/50 resize-y"
                  placeholder="Olá Nicolas, gostaria de conversar sobre..."
                ></textarea>
              </motion.div>

              <motion.button 
                variants={itemVariants}
                type="submit" 
                className="w-full flex items-center justify-center gap-3 bg-text-main text-bg py-4 rounded-xl font-bold hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
              >
                <Send size={18} />
                Enviar mensagem
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
