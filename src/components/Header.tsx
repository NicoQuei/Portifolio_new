import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  
  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-solid/80 backdrop-blur-md border-b border-border-color py-4'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#home"
            className={`transition-colors ${
              isScrolled ? 'text-text-main' : 'text-white drop-shadow-lg'
            }`}
          >
            <Logo className="text-xl" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled
                    ? 'text-text-muted hover:text-text-main'
                    : 'text-white/90 hover:text-white drop-shadow-md'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors ${
                isScrolled
                  ? 'bg-text-main text-bg hover:bg-white/90'
                  : 'bg-white text-bg hover:bg-white/90 shadow-lg'
              }`}
            >
              Fale comigo
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 relative z-[80] transition-colors ${
              isScrolled ? 'text-text-main' : 'text-white drop-shadow-md'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav — renderizado FORA do header para evitar stacking context */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay escuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Painel lateral */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-y-0 right-0 w-72 bg-surface border-l border-border-color shadow-2xl z-[70] md:hidden pt-24 px-8"
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="text-lg text-text-muted hover:text-text-main font-medium transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  className="mt-4 px-5 py-3 text-center bg-text-main text-bg rounded-md font-semibold hover:bg-white/90 transition-colors"
                >
                  Fale comigo
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

