import { useState } from "react";
import { Check, ClipboardList, RefreshCw, Trophy, Star, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    points: number;
    relation: string;
  }[];
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Cuando surge una inconsistencia técnica o un error grave en un proyecto de tu equipo, ¿cómo reaccionas?",
    options: [
      { text: "Asumo la responsabilidad completa de inmediato, investigo y diseño el plan de corrección.", points: 5, relation: "Carácter y Responsabilidad" },
      { text: "Busco las causas analíticamente, pero me aseguro de compartir el impacto y el costo correctivo de forma justa.", points: 3, relation: "Solución de Problemas" },
      { text: "Busco identificar quién cometió el fallo para asignarle la tarea de arreglar su respectivo error.", points: 1, relation: "Falta de Autogestión" }
    ]
  },
  {
    id: 2,
    text: "En una reunión para trazar objetivos trimestrales, ¿qué define tus decisiones principales?",
    options: [
      { text: "Una visión a tres años, inspiradora y clara, de adónde queremos llegar con el equipo.", points: 5, relation: "Visión y Crecimiento" },
      { text: "Metas realistas basadas únicamente en los datos numéricos acumulados del mes anterior.", points: 3, relation: "Concentración" },
      { text: "Atender de manera reactiva los incidentes que van ocurriendo en el día a día.", points: 1, relation: "Falta de Planificación" }
    ]
  },
  {
    id: 3,
    text: "Un subordinado directo propone una idea magnífica pero que altera significativamente tu plan de trabajo original:",
    options: [
      { text: "Valoro su talento, adopto con seguridad su idea, le cedo el crédito de inmediato y le asigno presupuesto.", points: 5, relation: "Seguridad y Relaciones" },
      { text: "La escucho con agrado, pero trato de amoldarla de forma que se alinee con mis directrices previas.", points: 3, relation: "Escuchar" },
      { text: "La descarto sutilmente por el momento para evitar desviar la agenda preestablecida.", points: 1, relation: "Inseguridad y Rigidez" }
    ]
  },
  {
    id: 4,
    text: "¿Cuál es tu actitud habitual respecto al aprendizaje técnico y profesional?",
    options: [
      { text: "Leo libros especializados de liderazgo y cursos, me considero vulnerable y aprendo de mis errores sistemáticamente.", points: 5, relation: "Enseñabilidad (Aprender)" },
      { text: "Estudio ocasionalmente cuando me enfrento a una crisis específica o un nuevo rol laboral.", points: 3, relation: "Iniciativa" },
      { text: "Considero que mis años de experiencia práctica en el sector son suficientes actualmente.", points: 1, relation: "Complacencia de Destino" }
    ]
  },
  {
    id: 5,
    text: "Cuando te comunicas con otros miembros de tu organización, ¿cuál es tu objetivo prioritario?",
    options: [
      { text: "Simplificar al máximo el mensaje, buscar que sientan entusiasmo y motivar acciones específicas.", points: 5, relation: "Comunicación" },
      { text: "Transmitir la máxima cantidad posible de datos o reportes técnicos detallados.", points: 3, relation: "Capacidad" },
      { text: "Asegurarme de que entiendan mi posición oficial como líder del departamento.", points: 1, relation: "Falta de Empatía" }
    ]
  },
  {
    id: 6,
    text: "En tus actividades de descanso de fin de semana, ¿cómo manejas tu bienestar y crecimiento?",
    options: [
      { text: "Mantengo disciplinas estables: hago ejercicio regular, leo y planifico estratégicamente.", points: 5, relation: "Autodisciplina" },
      { text: "Dedico tiempo libre exclusivamente a actividades lúdicas o de ocio sin directrices rígidas.", points: 3, relation: "Pasión de Vida" },
      { text: "Termino atendiendo de forma desorganizada múltiples correos electrónicos de trabajo atrasados.", points: 1, relation: "Desenfoque y Agotamiento" }
    ]
  },
  {
    id: 7,
    text: "Frente a un severo recorte de recursos, ¿cómo respondes ante la organización?",
    options: [
      { text: "Asumo riesgos proactivamente, inspiro valentía al equipo y busco expandir nuevos frentes alternativos.", points: 5, relation: "Iniciativa y Valentía" },
      { text: "Establezco un plan defensivo de contención estricta para mitigar el golpe y esperar estabilidad.", points: 3, relation: "Resolución de Problemas" },
      { text: "Me quejo con el equipo sobre las malas decisiones financieras de la dirección ejecutiva.", points: 1, relation: "Autovictimización" }
    ]
  },
  {
    id: 8,
    text: "Al interactuar con los tuyos en eventos de equipo, ¿cómo enfocas tu conversación?",
    options: [
      { text: "Escucho con empatía profunda, pregunto por sus vidas personales y busco formas de servir en sus metas.", points: 5, relation: "Servicio y Relaciones" },
      { text: "Me muestro amigable y comparto anécdotas mías sobre éxitos pasados para forjar cercanía.", points: 3, relation: "Carisma" },
      { text: "Suelo hablar puntualmente de la agenda de entregas para mantener al equipo enfocado.", points: 1, relation: "Falta de Conexión" }
    ]
  }
];

export default function LeadershipQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerSelect = (points: number) => {
    const updatedAnswers = [...answers, points];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizFinished(false);
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
    const maxScore = quizQuestions.length * 5;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let title = "";
    let tier = "";
    let colorClass = "";
    let recommendation = "";

    if (totalScore >= 35) {
      tier = "ORO";
      title = "Líder de Coherencia y Servicio";
      colorClass = "text-amber-500 border-amber-500/30 bg-amber-500/10";
      recommendation = "Posees una sólida base alineada a John C. Maxwell. Eres proactivo, empático y posees la seguridad necesaria para ceder el poder. Te sugerimos desarrollar aún más tu nivel de 'Servicio' y 'Enseñabilidad' para reclutar y formar activamente a los futuros líderes de tu organización.";
    } else if (totalScore >= 24) {
      tier = "PLATA";
      title = "Líder de Alta Capacidad y Acción";
      colorClass = "text-neutral-400 border-neutral-400/30 bg-neutral-400/10";
      recommendation = "Demuestras alta competencia operativa y enfoque de logros. Tus mayores ámbitos de crecimiento residen en perfeccionar 'Autodisciplina' y 'Escuchar' para mitigar la impulsividad y forjar una real conexión emocional y carismática con todos tus seguidores.";
    } else {
      tier = "BRONCE";
      title = "Líder Emergente";
      colorClass = "text-amber-700 border-amber-700/30 bg-amber-700/10";
      recommendation = "Liderazgo de carácter reactivo. Te sugerimos estudiar a fondo los capítulos de 'Carácter' (Sé un pedazo de roca) y de 'Relaciones' para asentar sólidos cimientos éticos y ganar la confianza legítima de las personas antes de exigirles fidelidad.";
    }

    return { totalScore, maxScore, percentage, title, tier, colorClass, recommendation };
  };

  return (
    <div id="quiz-container" className="rounded-2xl bg-neutral-900/40 dark:bg-slate-900/40 backdrop-blur-md border border-neutral-200/10 dark:border-slate-800/50 p-6 md:p-8 shadow-xl">
      <AnimatePresence mode="wait">
        {!quizFinished ? (
          <motion.div
            key="quiz-body"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            {/* Quiz Header info */}
            <div className="flex justify-between items-center mb-6">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-500 font-mono">
                <ClipboardList size={14} />
                Evaluación: Cualidades Maxwell
              </span>
              <span className="text-xs font-mono text-neutral-400">
                Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}
              </span>
            </div>

            {/* Reading progress bar */}
            <div className="w-full bg-neutral-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-8">
              <div
                className="bg-gradient-to-r from-amber-400 to-amber-600 h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex) / quizQuestions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h3 className="text-xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 mb-6 leading-relaxed">
              {quizQuestions[currentQuestionIndex].text}
            </h3>

            {/* Options List */}
            <div className="space-y-4">
              {quizQuestions[currentQuestionIndex].options.map((option, idx) => (
                <button
                  id={`btn-quiz-opt-${idx}`}
                  key={idx}
                  onClick={() => handleAnswerSelect(option.points)}
                  className="w-full text-left p-4 rounded-xl border border-neutral-200/60 dark:border-slate-800 bg-neutral-100 hover:bg-neutral-200 dark:bg-slate-950/20 dark:hover:bg-slate-900/40 hover:border-amber-500/40 transition-all duration-200 group flex justify-between items-center"
                >
                  <div className="pr-4 leading-relaxed text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="inline-block font-mono font-bold mr-2 text-amber-500 group-hover:text-amber-400">
                      {idx === 0 ? "A)" : idx === 1 ? "B)" : "C)"}
                    </span>
                    {option.text}
                  </div>
                  <ChevronRight size={16} className="text-neutral-400 group-hover:text-amber-400 transition shrink-0" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quiz-result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Award icon badge */}
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/25 mb-6">
              <Trophy size={40} className="animate-pulse" />
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100 mb-1">
              ¡Evaluación Completada!
            </h3>
            <p className="text-sm text-neutral-400 mb-6">Resultados de tu perfil de Liderazgo según las Cualidades de Maxwell</p>

            {/* Scorecard block */}
            {(() => {
              const res = calculateResult();
              return (
                <div id="scorecard-block" className="max-w-xl mx-auto rounded-2xl bg-neutral-950/45 border border-neutral-200/10 dark:border-slate-800 p-6 md:p-8 text-left shadow-2xl mb-8">
                  <div className="flex justify-between items-center flex-wrap gap-4 border-b border-neutral-200/10 dark:border-slate-800/80 pb-4 mb-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Rango de Liderazgo</span>
                      <h4 className="text-xl font-black text-neutral-800 dark:text-neutral-100 mt-1">{res.title}</h4>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest border ${res.colorClass}`}>
                      NIVEL {res.tier}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-200/5 dark:border-slate-800/50">
                      <span className="text-xs text-neutral-400 block mb-0.5">Puntaje Total</span>
                      <span className="text-3xl font-black text-amber-500 font-mono">{res.totalScore} <span className="text-xs text-neutral-500 font-normal">/ {res.maxScore}</span></span>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-200/5 dark:border-slate-800/50">
                      <span className="text-xs text-neutral-400 block mb-0.5">Porcentaje de Coherencia</span>
                      <span className="text-3xl font-black text-amber-500 font-mono">{res.percentage}%</span>
                    </div>
                  </div>

                  <h5 className="text-xs uppercase tracking-widest font-mono text-amber-500 font-extrabold mb-2">Recomendación Personalizada:</h5>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {res.recommendation}
                  </p>
                </div>
              );
            })()}

            {/* Restart button */}
            <button
              id="restart-quiz-btn"
              onClick={resetQuiz}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-neutral-200 hover:bg-neutral-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-neutral-800 dark:text-neutral-100 transition shadow-md"
            >
              <RefreshCw size={15} />
              Realizar la prueba de nuevo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
