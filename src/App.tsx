import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Lightbulb,
  Award,
  TrendingUp,
  Clock,
  Calendar,
  MoreVertical,
  Plus,
  BookOpen,
  Upload,
  Users,
  CheckSquare,
  Star,
  CreditCard
} from 'lucide-react';
import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { CourseCard } from './components/CourseCard';
import { cn } from './lib/utils';

// --- Landing Page ---
const LandingPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-bold w-fit">
              <Zap className="w-4 h-4" />
              <span>L'apprentissage réinventé</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-text-dark leading-tight">
              Comprendre devient facile avec <span className="text-primary">Oh fhamet</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              La plateforme qui transforme les concepts complexes en déclics d'apprentissage pour les étudiants ambitieux.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="btn-primary flex items-center gap-2">
                Commencer gratuitement <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/courses" className="bg-white text-text-dark px-6 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-all">
                Explorer les cours
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Rejoignez plus de <span className="font-bold text-text-dark">2,000+ étudiants</span> déjà inscrits.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-primary/10 absolute -inset-4 rounded-3xl blur-3xl -z-10 animate-pulse" />
            <div className="oh-fhamet-card p-4 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                alt="Student learning" 
                className="rounded-xl w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark">Oh fhamet ! 🎉</h4>
                    <p className="text-sm text-gray-500">Vous venez de débloquer un nouveau badge.</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[85%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Nos Filières d'Excellence</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Des cours structurés par des experts pour vous garantir une compréhension totale et durable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Mathématiques', icon: '📐', color: 'bg-blue-50 text-blue-600', desc: 'Algèbre, Analyse, Géométrie et plus encore.' },
              { title: 'SVT', icon: '🌱', color: 'bg-green-50 text-green-600', desc: 'Biologie, Géologie et sciences de la vie.' },
              { title: 'Français', icon: '📖', color: 'bg-purple-50 text-purple-600', desc: 'Grammaire, Littérature et communication.' },
            ].map((subject, idx) => (
              <div key={idx} className="oh-fhamet-card group cursor-pointer">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110", subject.color)}>
                  {subject.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{subject.title}</h3>
                <p className="text-gray-500 mb-6">{subject.desc}</p>
                <Link to="/courses" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explorer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Courses Page ---
const CoursesPage = () => {
  const [filter, setFilter] = useState('all');
  
  const courses = [
    { title: "Algèbre Linéaire : Les Bases", subject: 'maths', category: 'Algèbre', level: 'Débutant', image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80", price: "199 DH" },
    { title: "Biologie Cellulaire Avancée", subject: 'svt', category: 'Biologie', level: 'Avancé', image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80", price: "249 DH" },
    { title: "Littérature Française du XIXe", subject: 'french', category: 'Littérature', level: 'Intermédiaire', image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80", price: "149 DH" },
    { title: "Géométrie Euclidienne", subject: 'maths', category: 'Géométrie', level: 'Intermédiaire', image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80", price: "199 DH" },
    { title: "Grammaire : Maîtriser la Syntaxe", subject: 'french', category: 'Grammaire', level: 'Débutant', image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80", price: "Gratuit" },
    { title: "Géologie : Tectonique des Plaques", subject: 'svt', category: 'Géologie', level: 'Intermédiaire', image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80", price: "199 DH" },
  ];

  const filteredCourses = filter === 'all' ? courses : courses.filter(c => c.subject === filter);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-text-dark mb-2">Explorer les cours</h1>
            <p className="text-gray-500">Trouvez le cours qui vous fera dire "Oh fhamet !".</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['all', 'maths', 'svt', 'french'].map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-6 py-2 rounded-full font-semibold transition-all",
                  filter === f ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-white text-gray-500 border border-gray-200 hover:border-primary hover:text-primary"
                )}
              >
                {f === 'all' ? 'Tous' : f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <CourseCard key={idx} {...course as any} />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Student Dashboard ---
const StudentDashboard = () => {
  return (
    <Layout role="student">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="oh-fhamet-card bg-primary text-white border-none">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">MOIS ACTUEL</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">12</h3>
          <p className="text-white/80 text-sm">Cours en cours</p>
        </div>
        <div className="oh-fhamet-card bg-accent text-white border-none">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">TOTAL</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">8</h3>
          <p className="text-white/80 text-sm">Certificats obtenus</p>
        </div>
        <div className="oh-fhamet-card bg-secondary text-white border-none">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">CETTE SEMAINE</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">85%</h3>
          <p className="text-white/80 text-sm">Taux de réussite</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-text-dark">Continuer l'apprentissage</h2>
            <Link to="/student/courses" className="text-primary text-sm font-bold hover:underline">Voir tout</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <CourseCard 
              title="Algèbre Linéaire : Les Bases" 
              subject="maths" 
              category="Algèbre" 
              level="Débutant" 
              image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80" 
              progress={65}
            />
            <CourseCard 
              title="Grammaire : Maîtriser la Syntaxe" 
              subject="french" 
              category="Grammaire" 
              level="Débutant" 
              image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" 
              progress={100}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-text-dark">Prochains Devoirs</h2>
          <div className="flex flex-col gap-4">
            {[
              { title: "Exercices de Géométrie", date: "Demain, 10:00", subject: "Maths", color: "bg-blue-500" },
              { title: "Analyse de texte : Balzac", date: "28 Mars, 23:59", subject: "Français", color: "bg-purple-500" },
              { title: "Rapport de Biologie", date: "30 Mars, 18:00", subject: "SVT", color: "bg-green-500" },
            ].map((hw, i) => (
              <div key={i} className="oh-fhamet-card p-4 flex items-center gap-4">
                <div className={cn("w-2 h-12 rounded-full", hw.color)} />
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-text-dark">{hw.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                    <Calendar className="w-3 h-3" />
                    <span>{hw.date}</span>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-primary">
                  <Upload className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// --- Teacher Dashboard ---
const TeacherDashboard = () => {
  return (
    <Layout role="teacher">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Étudiants Actifs", value: "156", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Cours Publiés", value: "12", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Devoirs à Corriger", value: "45", icon: CheckSquare, color: "text-orange-600", bg: "bg-orange-50" },
          { label: "Note Moyenne", value: "16.5/20", icon: Award, color: "text-green-600", bg: "bg-green-50" },
        ].map((stat, i) => (
          <div key={i} className="oh-fhamet-card flex items-center gap-4">
            <div className={cn("p-3 rounded-xl", stat.bg, stat.color)}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">{stat.label}</p>
              <h3 className="text-xl font-bold text-text-dark">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="oh-fhamet-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text-dark">Dernières Activités</h2>
            <button className="text-gray-400 hover:text-primary"><MoreVertical className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { user: "Amine B.", action: "a soumis son devoir", target: "Algèbre Linéaire", time: "Il y a 10 min" },
              { user: "Sara K.", action: "a terminé le cours", target: "Grammaire Française", time: "Il y a 25 min" },
              { user: "Yassine M.", action: "s'est inscrit au cours", target: "Biologie Cellulaire", time: "Il y a 1h" },
            ].map((act, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-primary">
                  {act.user[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-bold text-text-dark">{act.user}</span> {act.action}{" "}
                    <span className="font-semibold text-primary">{act.target}</span>
                  </p>
                  <span className="text-xs text-gray-400">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="oh-fhamet-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text-dark">Mes Cours Populaires</h2>
            <Link to="/teacher/create-course" className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Nouveau Cours
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { title: "Algèbre Linéaire", students: 89, rating: 4.9 },
              { title: "Géométrie Euclidienne", students: 67, rating: 4.7 },
              { title: "Analyse Mathématique", students: 45, rating: 4.8 },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <h4 className="font-bold text-text-dark">{c.title}</h4>
                  <p className="text-xs text-gray-400">{c.students} étudiants inscrits</p>
                </div>
                <div className="flex items-center gap-1 text-secondary font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{c.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

// --- Auth Pages ---
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="oh-fhamet-card w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">💡</div>
            <span className="text-2xl font-bold tracking-tight text-text-dark">Oh fhamet</span>
          </Link>
          <h2 className="text-2xl font-bold text-text-dark">Bon retour !</h2>
          <p className="text-gray-500">Connectez-vous pour continuer à apprendre.</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); navigate('/student/dashboard'); }}>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-700">Email</label>
            <input type="email" placeholder="votre@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" required />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-700">Mot de passe</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" required />
          </div>
          <button type="submit" className="btn-primary w-full mt-2">Se connecter</button>
        </form>
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            Pas encore de compte ? <Link to="/register" className="text-primary font-bold hover:underline">S'inscrire</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="oh-fhamet-card w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">💡</div>
            <span className="text-2xl font-bold tracking-tight text-text-dark">Oh fhamet</span>
          </Link>
          <h2 className="text-2xl font-bold text-text-dark">Créer un compte</h2>
          <p className="text-gray-500">Rejoignez la communauté Oh fhamet.</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); navigate('/student/dashboard'); }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">Prénom</label>
              <input type="text" placeholder="Ahmed" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" required />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">Nom</label>
              <input type="text" placeholder="Bennani" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" required />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-700">Email</label>
            <input type="email" placeholder="votre@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" required />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-700">Rôle</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
              <option value="student">Étudiant</option>
              <option value="teacher">Professeur</option>
            </select>
          </div>
          <button type="submit" className="btn-primary w-full mt-2">S'inscrire</button>
        </form>
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            Déjà un compte ? <Link to="/login" className="text-primary font-bold hover:underline">Se connecter</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Admin Dashboard ---
const AdminDashboard = () => {
  return (
    <Layout role="admin">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="oh-fhamet-card flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase">Utilisateurs</p>
            <h3 className="text-xl font-bold text-text-dark">2,450</h3>
          </div>
        </div>
        <div className="oh-fhamet-card flex items-center gap-4">
          <div className="p-3 rounded-xl bg-green-50 text-green-600">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase">Revenus (DH)</p>
            <h3 className="text-xl font-bold text-text-dark">45,200</h3>
          </div>
        </div>
        <div className="oh-fhamet-card flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase">Cours Actifs</p>
            <h3 className="text-xl font-bold text-text-dark">124</h3>
          </div>
        </div>
      </div>

      <div className="oh-fhamet-card">
        <h2 className="text-xl font-bold text-text-dark mb-6">Derniers Paiements</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="pb-4 font-bold text-gray-400 text-sm uppercase">Étudiant</th>
                <th className="pb-4 font-bold text-gray-400 text-sm uppercase">Cours</th>
                <th className="pb-4 font-bold text-gray-400 text-sm uppercase">Montant</th>
                <th className="pb-4 font-bold text-gray-400 text-sm uppercase">Date</th>
                <th className="pb-4 font-bold text-gray-400 text-sm uppercase">Statut</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Amine B.", course: "Algèbre Linéaire", amount: "199 DH", date: "25 Mars", status: "Réussi" },
                { name: "Sara K.", course: "Biologie Cellulaire", amount: "249 DH", date: "24 Mars", status: "Réussi" },
                { name: "Yassine M.", course: "Littérature XIXe", amount: "149 DH", date: "24 Mars", status: "En attente" },
              ].map((p, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="py-4 font-semibold text-text-dark">{p.name}</td>
                  <td className="py-4 text-gray-500">{p.course}</td>
                  <td className="py-4 font-bold text-text-dark">{p.amount}</td>
                  <td className="py-4 text-gray-500">{p.date}</td>
                  <td className="py-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-bold",
                      p.status === "Réussi" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                    )}>
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

// --- Student Progress ---
const StudentProgress = () => {
  return (
    <Layout role="student">
      <div className="flex flex-col gap-8">
        <div className="oh-fhamet-card">
          <h2 className="text-xl font-bold text-text-dark mb-6">Vue d'ensemble de la progression</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Mathématiques", progress: 75, color: "bg-blue-500" },
              { label: "SVT", progress: 40, color: "bg-green-500" },
              { label: "Français", progress: 90, color: "bg-purple-500" },
            ].map((p, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-text-dark">{p.label}</span>
                  <span className="text-2xl font-bold text-primary">{p.progress}%</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className={cn("h-full transition-all duration-1000", p.color)} style={{ width: `${p.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="oh-fhamet-card">
            <h3 className="text-lg font-bold text-text-dark mb-6">Badges débloqués</h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: "🚀", label: "Premier pas" },
                { icon: "📐", label: "Génie Maths" },
                { icon: "🔥", label: "7 jours d'affilée" },
                { icon: "📚", label: "Grand lecteur" },
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-help">
                  <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-2xl border-2 border-transparent group-hover:border-primary transition-all">
                    {b.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase text-center">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="oh-fhamet-card flex flex-col items-center justify-center text-center p-8 bg-accent/5 border-accent/20">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-4xl mb-4 shadow-lg shadow-accent/20">
              💡
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-2">Oh fhamet ! 🎉</h3>
            <p className="text-gray-500 mb-6">Vous progressez plus vite que 85% des étudiants de votre niveau.</p>
            <button className="btn-secondary">Voir mes récompenses</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// --- Payment Page ---
const PaymentPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold text-text-dark">Finalisez votre inscription</h1>
          <div className="oh-fhamet-card flex items-center gap-4 p-4">
            <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=200&q=80" alt="course" className="w-20 h-20 rounded-xl object-cover" />
            <div>
              <h3 className="font-bold text-text-dark">Algèbre Linéaire : Les Bases</h3>
              <p className="text-primary font-bold">199 DH</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-text-dark">Ce que vous obtenez :</h3>
            {[
              "Accès illimité à vie",
              "12 leçons vidéo HD",
              "Exercices interactifs",
              "Certificat de réussite",
              "Support du professeur"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-600">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="oh-fhamet-card flex flex-col gap-6">
          <h3 className="text-xl font-bold text-text-dark">Détails du paiement</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">Nom sur la carte</label>
              <input type="text" placeholder="Ahmed Bennani" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">Numéro de carte</label>
              <input type="text" placeholder="**** **** **** ****" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-700">Expiration</label>
                <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-700">CVC</label>
                <input type="text" placeholder="***" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-primary" />
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Total à payer</span>
              <span className="text-2xl font-bold text-text-dark">199 DH</span>
            </div>
            <button 
              onClick={() => {
                alert("Oh fhamet ! 🎉 Paiement réussi.");
                navigate('/student/dashboard');
              }}
              className="btn-primary w-full"
            >
              Payer maintenant
            </button>
          </div>
          <p className="text-xs text-center text-gray-400">Paiement sécurisé par cryptage SSL.</p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        
        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<StudentDashboard />} />
        <Route path="/student/exercises" element={<StudentDashboard />} />
        <Route path="/student/homework" element={<StudentDashboard />} />
        <Route path="/student/progress" element={<StudentProgress />} />
        
        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/courses" element={<TeacherDashboard />} />
        <Route path="/teacher/students" element={<TeacherDashboard />} />
        <Route path="/teacher/homework" element={<TeacherDashboard />} />
        <Route path="/teacher/analytics" element={<TeacherDashboard />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminDashboard />} />
        <Route path="/admin/courses" element={<AdminDashboard />} />
        <Route path="/admin/categories" element={<AdminDashboard />} />
        <Route path="/admin/payments" element={<AdminDashboard />} />
        
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
