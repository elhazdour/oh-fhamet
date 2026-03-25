import React from 'react';
import { BookOpen, Clock, Star, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';

interface CourseCardProps {
  title: string;
  subject: 'maths' | 'svt' | 'french';
  category: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  image: string;
  price?: string;
  progress?: number;
  locked?: boolean;
}

export const CourseCard = ({ title, subject, category, level, image, price, progress, locked }: CourseCardProps) => {
  const badgeClass = subject === 'maths' ? 'badge-maths' : subject === 'svt' ? 'badge-svt' : 'badge-french';
  
  return (
    <div className="oh-fhamet-card group flex flex-col h-full relative overflow-hidden">
      {locked && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex items-center justify-center">
          <div className="bg-white p-4 rounded-full shadow-lg border border-gray-100">
            🔒
          </div>
        </div>
      )}
      
      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className={cn("shadow-sm", badgeClass)}>{subject}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <span>{category}</span>
          <span>•</span>
          <span>{level}</span>
        </div>
        <h3 className="text-lg font-bold text-text-dark leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>12 leçons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>4h 30m</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        {progress !== undefined ? (
          <div className="w-full">
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-gray-400 uppercase">Progression</span>
              <span className="text-primary">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${progress}%` }}
              />
            </div>
            {progress === 100 && (
              <div className="mt-2 text-accent text-xs font-bold flex items-center gap-1">
                Oh fhamet ! ✅
              </div>
            )}
          </div>
        ) : (
          <>
            <span className="text-xl font-bold text-text-dark">{price || 'Gratuit'}</span>
            <button className="text-primary font-bold hover:underline">Voir plus</button>
          </>
        )}
      </div>
    </div>
  );
};
