import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  CheckSquare, 
  Upload, 
  BarChart3, 
  Settings, 
  LogOut,
  Users,
  CreditCard,
  Layers,
  GraduationCap
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarItemProps {
  to: string;
  icon: any;
  label: string;
  active?: boolean;
  key?: string;
}

const SidebarItem = ({ to, icon: Icon, label, active }: SidebarItemProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
      active 
        ? "bg-primary text-white shadow-md shadow-primary/20" 
        : "text-gray-500 hover:bg-gray-100 hover:text-primary"
    )}
  >
    <Icon className={cn("w-5 h-5", active ? "text-white" : "group-hover:text-primary")} />
    <span className="font-medium">{label}</span>
  </Link>
);

export const Layout = ({ children, role = 'student' }: { children: React.ReactNode, role?: 'student' | 'teacher' | 'admin' }) => {
  const location = useLocation();

  const studentLinks = [
    { to: "/student/dashboard", icon: LayoutDashboard, label: "Tableau de bord" },
    { to: "/student/courses", icon: BookOpen, label: "Mes Cours" },
    { to: "/student/exercises", icon: CheckSquare, label: "Exercices" },
    { to: "/student/homework", icon: Upload, label: "Devoirs" },
    { to: "/student/progress", icon: BarChart3, label: "Ma Progression" },
  ];

  const teacherLinks = [
    { to: "/teacher/dashboard", icon: LayoutDashboard, label: "Tableau de bord" },
    { to: "/teacher/courses", icon: BookOpen, label: "Gérer mes cours" },
    { to: "/teacher/students", icon: Users, label: "Mes Étudiants" },
    { to: "/teacher/homework", icon: CheckSquare, label: "Corrections" },
    { to: "/teacher/analytics", icon: BarChart3, label: "Statistiques" },
  ];

  const adminLinks = [
    { to: "/admin/dashboard", icon: LayoutDashboard, label: "Tableau de bord" },
    { to: "/admin/users", icon: Users, label: "Utilisateurs" },
    { to: "/admin/courses", icon: BookOpen, label: "Contrôle des cours" },
    { to: "/admin/categories", icon: Layers, label: "Catégories" },
    { to: "/admin/payments", icon: CreditCard, label: "Paiements" },
  ];

  const links = role === 'admin' ? adminLinks : role === 'teacher' ? teacherLinks : studentLinks;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col gap-8 sticky top-0 h-screen overflow-y-auto">
        <div className="flex items-center gap-2 px-2">
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            💡
          </div>
          <span className="text-xl font-bold tracking-tight text-text-dark">Oh fhamet</span>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-4">Menu</div>
          {links.map((link) => (
            <SidebarItem 
              key={link.to} 
              to={link.to} 
              icon={link.icon} 
              label={link.label} 
              active={location.pathname === link.to}
            />
          ))}
        </nav>

        <div className="pt-6 border-t border-gray-100">
          <SidebarItem to="/login" icon={LogOut} label="Déconnexion" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-text-dark">Bienvenue, {role === 'student' ? 'Étudiant' : role === 'teacher' ? 'Professeur' : 'Admin'} !</h1>
            <p className="text-gray-500">C'est une excellente journée pour apprendre.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-500 hover:text-primary transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                {role[0].toUpperCase()}
              </div>
              <span className="text-sm font-semibold">{role === 'student' ? 'Mohamed' : role === 'teacher' ? 'Prof. Ahmed' : 'Admin'}</span>
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
};
