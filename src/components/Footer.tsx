import React from 'react';
import { Terminal, Briefcase, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-bg border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tight text-text-main">
            Nicolas<span className="text-primary">.</span>
          </span>
          <span className="text-text-muted text-sm">
            © {new Date().getFullYear()} Desenvolvido por Nicolas.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-text-muted hover:text-text-main transition-colors">
            <Terminal size={20} />
          </a>
          <a href="#" className="text-text-muted hover:text-text-main transition-colors">
            <Briefcase size={20} />
          </a>
          <a href="mailto:ola@nicolas.dev" className="text-text-muted hover:text-text-main transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
