import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-bottom border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            💡
          </div>
          <span className="text-2xl font-bold tracking-tight text-text-dark">Oh fhamet</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/courses" className="text-gray-600 hover:text-primary font-medium transition-colors">Cours</Link>
          <Link to="/about" className="text-gray-600 hover:text-primary font-medium transition-colors">À propos</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-primary font-medium transition-colors">Tarifs</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-gray-600 hover:text-primary font-semibold px-4 py-2">Connexion</Link>
          <Link to="/register" className="btn-primary">S'inscrire</Link>
        </div>
      </div>
    </nav>
  );
};
