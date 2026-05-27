import React, { useState, useEffect } from "react";
import {
  ShieldAlert,
  Sparkles,
  Award,
  MessageSquareText,
  Cpu,
  BrainCircuit,
  Target,
  HeartHandshake,
  Rocket,
  Ear,
  Flame,
  TrendingUp,
  HelpCircle,
  Users,
  Search,
  BookOpen,
  CheckCircle2,
  BookmarkCheck,
  ChevronDown,
  ChevronUp,
  Moon,
  Sun,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { qualities, Quality } from "./data/qualities";
import InspirationalQuotes from "./components/InspirationalQuotes";
import LeadershipQuiz from "./components/LeadershipQuiz";
import AiCoach from "./components/AiCoach";
import DeveloperTab from "./components/DeveloperTab";
import AudioNarrator from "./components/AudioNarrator";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ShieldAlert,
  Sparkles,
  Award,
  MessageSquareText,
  Cpu,
  BrainCircuit,
  Target,
  HeartHandshake,
  Rocket,
  Ear,
  Flame,
  TrendingUp,
  HelpCircle,
  Users
};

export default function App() {
  const [activeTab, setActiveTab] = useState<"qualities" | "quiz" | "coach" | "dev">("qualities");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [readQualities, setReadQualities] = useState<number[]>([]);
  const [expandedQualityId, setExpandedQualityId] = useState<number | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Read progress tracker from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("maxwell_read_progress");
    if (saved) {
      setReadQualities(JSON.parse(saved));
    }
    const savedTheme = localStorage.getItem("maxwell_theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleReadProgress = (id: number) => {
    const updated = readQualities.includes(id)
      ? readQualities.filter((qId) => qId !== id)
      : [...readQualities, id];
    setReadQualities(updated);
    localStorage.setItem("maxwell_read_progress", JSON.stringify(updated));
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("maxwell_theme", nextTheme);
  };

  const categories = [
    { id: "all", label: "Todas" },
    { id: "Carácter e Integridad", label: "Carácter e Integridad" },
    { id: "Habilidad Relacional", label: "Habilidad Relacional" },
    { id: "Acción e Iniciativa", label: "Acción e Iniciativa" },
    { id: "Crecimiento y Visión", label: "Crecimiento y Visión" },
    { id: "Eficacia y Enfoque", label: "Eficacia y Enfoque" }
  ];

  const filteredQualities = qualities.filter((q) => {
    const matchesSearch =
      q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.example.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const progressPercentage = Math.round((readQualities.length / 21) * 100);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-slate-950 text-neutral-100" 
        : "bg-neutral-50 text-neutral-900"
    }`}>
      {/* Dynamic Background glowing lights */}
      <div className="absolute top-0 left-0 right-0 h-[500px] overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[350px] h-[350px] rounded-full bg-indigo-500/10 dark:bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-[5%] right-[15%] w-[400px] h-[400px] rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-[150px]" />
      </div>

      {/* Academia Header Panel */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        theme === "dark" 
          ? "bg-slate-950/80 border-slate-900" 
          : "bg-white/80 border-neutral-200"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Title */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md">
              <GraduationCap size={22} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-black tracking-tight flex items-center gap-1 bg-gradient-to-r from-neutral-800 to-neutral-950 dark:from-amber-400 dark:to-amber-300 bg-clip-text text-transparent">
                ACADEMIA DE LIDERAZGO
              </h1>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B38F00] dark:text-amber-500 font-mono">John C. Maxwell</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex gap-1.5 p-1 rounded-xl bg-neutral-200/50 dark:bg-slate-900/60 border border-neutral-300/30 dark:border-slate-800/40">
            <button
              id="nav-qualities"
              onClick={() => setActiveTab("qualities")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider font-mono transition-all ${
                activeTab === "qualities"
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
              }`}
            >
              21 Cualidades
            </button>
            <button
              id="nav-quiz"
              onClick={() => setActiveTab("quiz")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider font-mono transition-all ${
                activeTab === "quiz"
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
              }`}
            >
              Auto-Evaluación
            </button>
            <button
              id="nav-coach"
              onClick={() => setActiveTab("coach")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider font-mono transition-all ${
                activeTab === "coach"
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
              }`}
            >
              Consultoría AI (Coach)
            </button>
            <button
              id="nav-dev"
              onClick={() => setActiveTab("dev")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider font-mono transition-all ${
                activeTab === "dev"
                  ? "bg-amber-500 text-slate-950 shadow-md"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
              }`}
            >
              Plantillas (PHP / Java)
            </button>
          </nav>

          {/* Action Tools: Theme Toggler */}
          <button
            id="theme-toggler"
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border transition ${
              theme === "dark" 
                ? "bg-slate-900 border-slate-800 text-yellow-400 hover:bg-slate-850" 
                : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-100 shadow-sm"
            }`}
            aria-label="Cambiar tema visual"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile View Nav Menu */}
        <div className="lg:hidden flex bg-neutral-200/50 dark:bg-slate-900/40 border-t border-neutral-300/30 dark:border-slate-800/40 p-2 overflow-x-auto gap-2 scrollbar-none justify-center">
          <button
            id="mobile-nav-qualities"
            onClick={() => setActiveTab("qualities")}
            className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider font-mono shrink-0 transition-all ${
              activeTab === "qualities" ? "bg-amber-500 text-slate-950 shadow" : "text-neutral-500"
            }`}
          >
            Cualidades
          </button>
          <button
            id="mobile-nav-quiz"
            onClick={() => setActiveTab("quiz")}
            className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider font-mono shrink-0 transition-all ${
              activeTab === "quiz" ? "bg-amber-500 text-slate-950 shadow" : "text-neutral-500"
            }`}
          >
            Evaluación
          </button>
          <button
            id="mobile-nav-coach"
            onClick={() => setActiveTab("coach")}
            className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider font-mono shrink-0 transition-all ${
              activeTab === "coach" ? "bg-amber-500 text-slate-950 shadow" : "text-neutral-500"
            }`}
          >
            Coach AI
          </button>
          <button
            id="mobile-nav-dev"
            onClick={() => setActiveTab("dev")}
            className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider font-mono shrink-0 transition-all ${
              activeTab === "dev" ? "bg-amber-500 text-slate-950 shadow" : "text-neutral-500"
            }`}
          >
            PHP / Java
          </button>
        </div>
      </header>

      {/* Main Academy Board */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Banner Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none bg-gradient-to-b from-neutral-800 to-neutral-950 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
            Las 21 Cualidades Indispensables de un Líder
          </h2>
          <p className="text-sm md:text-base text-neutral-500 max-w-2xl mx-auto mt-3">
            Desarrolla el carácter, la visión y la solidez necesarios para guiar e influir positivamente en el corazón de las personas, basándote en la joya de John C. Maxwell.
          </p>
        </div>

        {/* Global Reading Progress Tracker Panel */}
        <div className={`mb-10 p-5 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 transition ${
          theme === "dark" 
            ? "bg-slate-900/50 border-slate-800" 
            : "bg-white border-neutral-200 shadow-sm"
        }`}>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-500">
              <BookmarkCheck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-tight text-neutral-800 dark:text-neutral-100">Progreso de Lectura de la Academia</h4>
              <p className="text-xs text-neutral-400 mt-1">Has dominado {readQualities.length} de 21 cualidades indispensables</p>
            </div>
          </div>
          
          <div className="w-full md:w-80 flex items-center gap-3">
            <div className="flex-grow bg-neutral-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-400 to-amber-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-sm font-bold font-mono text-amber-500 shrink-0">{progressPercentage}%</span>
          </div>
        </div>

        {/* Active Tab Router */}
        <AnimatePresence mode="wait">
          {activeTab === "qualities" && (
            <motion.div
              key="qualities-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              {/* Quotes Slider Widget */}
              <InspirationalQuotes />

              {/* Filters Search Control Bar */}
              <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
                {/* Search Bar Input */}
                <div className="relative flex-grow max-w-md">
                  <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-neutral-400" />
                  <input
                    id="qualities-search-bar"
                    type="text"
                    placeholder="Buscar por cualidad, resumen u ejemplo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 text-xs md:text-sm rounded-xl border focus:outline-none transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-slate-900 border-slate-800 text-neutral-200 placeholder-neutral-500 focus:border-amber-500/50"
                        : "bg-white border-neutral-300 focus:border-amber-500/50 placeholder-neutral-400 shadow-sm"
                    }`}
                  />
                </div>

                {/* Category selectors */}
                <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                  {categories.map((cat) => (
                    <button
                      id={`cat-filter-${cat.id}`}
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-semibold tracking-wider transition shrink-0 uppercase border font-mono ${
                        selectedCategory === cat.id
                          ? "bg-amber-500/10 text-amber-500 border-amber-500/30"
                          : theme === "dark"
                            ? "bg-slate-900/30 border-slate-900 text-neutral-400 hover:text-neutral-200"
                            : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid 21 Qualities Cards */}
              <div id="qualities-bento-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQualities.map((item) => {
                  const QualityIcon = iconMap[item.icon] || Award;
                  const isExpanded = expandedQualityId === item.id;
                  const isRead = readQualities.includes(item.id);

                  return (
                    <motion.div
                      id={`quality-card-${item.id}`}
                      key={item.id}
                      layout
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                        isExpanded ? "lg:col-span-2 row-span-2 shadow-2xl scale-[1.01]" : ""
                      } ${
                        theme === "dark"
                          ? isExpanded
                            ? "bg-slate-900/90 border-amber-500/30 relative"
                            : "bg-slate-900/40 border-slate-900/60 hover:border-slate-800"
                          : isExpanded
                            ? "bg-white border-amber-500/30 shadow-lg relative"
                            : "bg-white border-neutral-200 hover:border-neutral-300 shadow-sm"
                      }`}
                    >
                      {/* Card main visual header */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[10px] font-mono tracking-widest text-[#B38F00] dark:text-amber-500 uppercase font-black">
                            Cualidad {String(item.id).padStart(2, "0")}
                          </span>
                          
                          {/* Complete status selector click */}
                          <button
                            id={`progress-btn-${item.id}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleReadProgress(item.id);
                            }}
                            className={`p-1 rounded-md transition ${
                              isRead 
                                ? "text-emerald-500 dark:text-emerald-400 hover:text-neutral-400" 
                                : "text-neutral-300 dark:text-slate-800 hover:text-amber-500"
                            }`}
                            title={isRead ? "Marcar como no leída" : "Marcar como leída"}
                          >
                            <CheckCircle2 size={18} strokeWidth={isRead ? 2.5 : 2} />
                          </button>
                        </div>

                        {/* Title and Badge */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`h-11 w-11 rounded-xl flex items-center justify-center border transition ${
                            theme === "dark" 
                              ? "bg-slate-950 border-slate-800 text-amber-500" 
                              : "bg-neutral-100 border-neutral-200 text-amber-600"
                          }`}>
                            <QualityIcon size={22} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">{item.name}</h3>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 font-mono italic">{item.subtitle}</span>
                          </div>
                        </div>

                        {/* Description Summary */}
                        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-300 leading-relaxed mt-4">
                          {item.summary}
                        </p>

                        {/* Interactive Premium Audio Narrator */}
                        <AudioNarrator quality={item} theme={theme} />

                        {/* Collapsed view snippet quote if not expanded */}
                        {!isExpanded && (
                          <div className="mt-4 p-3 rounded-lg bg-neutral-100/50 dark:bg-slate-950/20 border border-neutral-200/40 dark:border-slate-850/50 text-[11px] text-neutral-400 italic font-medium leading-normal">
                            "{item.quote.slice(0, 100)}..."
                          </div>
                        )}

                        {/* Expanded details accordion block */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4 }}
                              className="mt-6 border-t border-neutral-200/15 dark:border-slate-800/60 pt-6 space-y-6 overflow-hidden"
                            >
                              {/* Central quote banner inside card */}
                              <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/15 text-xs">
                                <p className="italic text-neutral-700 dark:text-neutral-200 leading-relaxed">
                                  "{item.quote}"
                                </p>
                                <span className="block font-mono text-[10px] text-amber-500 font-bold mt-2 text-right">
                                  — {item.quoteAuthor}
                                </span>
                              </div>

                              {/* Importance breakdown */}
                              <div>
                                <h4 className="text-neutral-800 dark:text-neutral-200 text-xs uppercase font-extrabold tracking-wider font-mono flex items-center gap-1.5 mb-2">
                                  <BookOpen size={12} className="text-amber-500" />
                                  Importancia Pedagógica
                                </h4>
                                <p className="text-xs text-neutral-500 dark:text-neutral-300 leading-relaxed">
                                  {item.importance}
                                </p>
                              </div>

                              {/* Historical interactive story of leadership */}
                              <div className="p-4 rounded-xl bg-neutral-900/30 dark:bg-slate-950/40 border border-neutral-200/10 dark:border-slate-850">
                                <h4 className="text-amber-500 text-xs uppercase font-black tracking-wider font-mono mb-2">
                                  Ejemplo Práctico e Histórico
                                </h4>
                                <p className="text-xs text-neutral-500 dark:text-neutral-300 leading-relaxed italic pr-2">
                                  {item.example}
                                </p>
                              </div>

                              {/* Key core teaching lesson */}
                              <div>
                                <h4 className="text-neutral-800 dark:text-neutral-200 text-xs uppercase font-extrabold tracking-wider font-mono flex items-center gap-1.5 mb-2">
                                  <CheckCircle2 size={12} className="text-amber-500" />
                                  Enseñanza Principal
                                </h4>
                                <p className="text-xs text-neutral-500 dark:text-neutral-300 leading-relaxed font-medium">
                                  {item.lesson}
                                </p>
                              </div>

                              {/* Daily action checklist advice */}
                              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                                <h4 className="text-[#B38F00] dark:text-amber-400 text-xs uppercase font-bold tracking-wider font-mono mb-2">
                                  Aplicación Diaria Accionable
                                </h4>
                                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                  {item.application}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Card actions footer panel */}
                      <div className="px-6 py-4 bg-neutral-950/10 dark:bg-slate-950/20 border-t border-neutral-200/10 dark:border-slate-900 flex items-center justify-between">
                        <span className="text-[10px] font-mono font-medium tracking-wide text-neutral-400">
                          ID: {item.category}
                        </span>
                        
                        <button
                          id={`btn-expand-${item.id}`}
                          onClick={() => setExpandedQualityId(isExpanded ? null : item.id)}
                          className="flex items-center gap-1 text-[11px] md:text-xs font-bold uppercase tracking-wider font-mono text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300 transition"
                        >
                          {isExpanded ? (
                            <>
                              <span>Ver menos</span>
                              <ChevronUp size={14} className="mt-0.5" />
                            </>
                          ) : (
                            <>
                              <span>Ver más</span>
                              <ChevronDown size={14} className="mt-0.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "quiz" && (
            <motion.div
              key="quiz-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">Prueba de Autoevaluación de Liderazgo</h3>
                  <p className="text-sm text-neutral-400 mt-1 max-w-2xl mx-auto">
                    Responde a las siguientes situaciones cotidianas de gestión para recibir tu diagnóstico inmediato basado en las 21 dimensiones indispensables de John C. Maxwell.
                  </p>
                </div>
                <LeadershipQuiz />
              </div>
            </motion.div>
          )}

          {activeTab === "coach" && (
            <motion.div
              key="coach-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">Consultoría AI Maxwell</h3>
                  <p className="text-sm text-neutral-400 mt-1 max-w-2xl mx-auto">
                    Conéctate con tu tutor de liderazgo inteligente de forma instantánea. Plantea tus contradicciones organizacionales y recibe un plan correctivo.
                  </p>
                </div>
                <AiCoach />
              </div>
            </motion.div>
          )}

          {activeTab === "dev" && (
            <motion.div
              key="dev-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 font-sans">Estructura Modular para Desarrolladores</h3>
                  <p className="text-sm text-neutral-400 mt-1 max-w-2xl mx-auto">
                    Estudia las plantillas modulares PHP organizadas jerárquicamente o el microservicio Java para sincronizar esta academia en tus propios proyectos empresariales.
                  </p>
                </div>
                <DeveloperTab />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Modern Academy Footer */}
      <footer className={`mt-20 border-t py-12 px-6 text-center text-sm transition ${
        theme === "dark" 
          ? "bg-slate-950 border-slate-900 text-neutral-500" 
          : "bg-neutral-100 border-neutral-300 text-neutral-500 shadow-inner"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-bold text-neutral-700 dark:text-neutral-300">Academia Interactiva de Liderazgo</h4>
            <p className="text-xs text-neutral-400 mt-1">Metodología inspirada en el libro "Las 21 cualidades indispensables de un líder" de John C. Maxwell.</p>
          </div>
          <div className="text-xs font-mono bg-neutral-200/50 dark:bg-slate-900/80 px-4 py-2 border border-neutral-300/40 dark:border-slate-800 rounded-lg">
            PHP Modular Loader & Java API controllers disponibles en la pestaña de Código.
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-200/10 dark:border-slate-900 text-center text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Academia de Liderazgo Premium. Elaborado bajo principios de excelencia.</p>
        </div>
      </footer>
    </div>
  );
}
