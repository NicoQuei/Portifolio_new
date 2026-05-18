import React from 'react';
import { Terminal, Briefcase, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo className="text-xl text-text-main" />
          <span className="text-text-muted text-sm">
            © {new Date().getFullYear()} Desenvolvido por Nicolas.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/NicoQuei" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-main transition-colors">
            <Terminal size={20} />
          </a>
          <a href="https://www.linkedin.com/in/nicoquei/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-main transition-colors">
            <Briefcase size={20} />
          </a>
          <a href="mailto:nicolasqueirogapaix@gmail.com" className="text-text-muted hover:text-text-main transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
