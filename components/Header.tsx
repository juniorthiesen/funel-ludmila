import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full h-24 flex justify-between items-center px-[5%] z-50 bg-premium-bg/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <Link to="/" className="block">
        <img
          src="https://ludmilasimoes.com.br/wp-content/uploads/2025/03/logo-ludmila-simoes-150px.png"
          alt="Dra. Ludmila Simões"
          className="h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
        />
      </Link>
      <nav>
        <Link
          to="/quiz"
          className="hover-trigger inline-flex items-center justify-center px-6 py-3 text-xs font-heading font-bold uppercase tracking-widest border border-white/20 text-premium-text hover:border-premium-gold hover:text-premium-gold transition-all duration-300 bg-white/5 hover:bg-white/10 rounded-sm"
        >
          Diagnóstico Gratuito
        </Link>
      </nav>
    </header>
  );
};