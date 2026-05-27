import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, MessageCircle, AlertCircle, Bot, User, HelpCircle } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const initialSuggestions = [
  "¿Cómo puedo mejorar mi autodisciplina de cara al equipo?",
  "Mi equipo está desmotivado. ¿Qué cualidad debo trabajar hoy?",
  "Me cuesta delegar el trabajo. ¿Qué me aconseja Maxwell?",
  "¿Cómo aplico la lección del jet de Bill Lear en mi negocio?"
];

export default function AiCoach() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "¡Hola! Soy tu Mentor de Liderazgo Inteligente. Estoy entrenado con las enseñanzas de John C. Maxwell en 'Las 21 cualidades indispensables de un líder'. ¿Qué reto, desafío o duda de liderazgo te gustaría explorar o solucionar hoy?"
    }
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    setError(null);
    const newMessages: Message[] = [...messages, { role: "user", text }];
    setMessages(newMessages);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/mentor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-10) // passes recent context
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error en el servidor.");
      }

      setMessages((prev) => [...prev, { role: "assistant", text: data.text }]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error de conexión. Asegúrate de configurar GEMINI_API_KEY.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="ai-coach-container" className="rounded-2xl bg-neutral-900/40 dark:bg-slate-900/40 backdrop-blur-md border border-neutral-200/10 dark:border-slate-800/50 flex flex-col h-[550px] shadow-xl overflow-hidden">
      {/* Active Coach Header */}
      <div className="p-4 bg-neutral-950/20 border-b border-neutral-200/15 dark:border-slate-800/60 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30 flex items-center justify-center relative shadow-inner">
            <Bot size={20} />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-neutral-900" />
          </div>
          <div>
            <h4 className="text-sm font-bold tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-1.5 leading-none">
              Coach de Liderazgo John C. Maxwell
              <Sparkles className="text-amber-500 h-3.5 w-3.5" />
            </h4>
            <span className="text-[11px] text-neutral-400 font-mono mt-1 block">Powered by Gemini AI</span>
          </div>
        </div>
      </div>

      {/* Messages Output Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-3 max-w-[85%] ${
              msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
            }`}
          >
            <div
              className={`h-8 w-8 rounded-full shrink-0 flex items-center justify-center text-xs border ${
                msg.role === "user"
                  ? "bg-neutral-200 dark:bg-slate-800 border-neutral-300 dark:border-slate-700 text-neutral-800 dark:text-neutral-100"
                  : "bg-amber-500/10 text-amber-500 border-amber-500/30"
              }`}
            >
              {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
            </div>

            <div
              className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-amber-500 text-slate-950 font-medium rounded-tr-none"
                  : "bg-neutral-100 dark:bg-slate-950/40 text-neutral-700 dark:text-neutral-300 border border-neutral-200/40 dark:border-slate-850 rounded-tl-none pr-6"
              }`}
            >
              {msg.text.split("\n").map((line, lIdx) => (
                <p key={lIdx} className={line.trim() === "" ? "h-2" : "mb-1.5 last:mb-0"}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 max-w-[85%] mr-auto">
            <div className="h-8 w-8 rounded-full shrink-0 flex items-center justify-center border bg-amber-500/10 text-amber-500 border-amber-500/30">
              <Bot size={14} className="animate-spin" />
            </div>
            <div className="p-3.5 rounded-2xl rounded-tl-none bg-neutral-100 dark:bg-slate-950/40 text-neutral-400 text-xs italic flex items-center gap-1.5 font-mono border border-neutral-200/20 dark:border-slate-850">
              Analizando principios de Maxwell, escribe...
            </div>
          </div>
        )}

        {error && (
          <div className="flex gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-[11px] items-start">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Error de sincronización con Gemini</p>
              <p className="opacity-80 mt-0.5">{error}</p>
            </div>
          </div>
        )}

        <div ref={endOfMessagesRef} />
      </div>

      {/* Suggested prompts checklist triggers if chat is brief */}
      {messages.length < 3 && (
        <div className="px-4 pb-3 flex flex-wrap gap-1.5">
          {initialSuggestions.map((prompt, idx) => (
            <button
              id={`suggested-prompt-${idx}`}
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400 hover:text-amber-500 dark:hover:text-amber-400 bg-neutral-100 dark:bg-slate-950/30 px-3 py-1.5 rounded-lg border border-neutral-200/60 dark:border-slate-850 text-left transition select-none flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle size={11} className="text-amber-500" />
              {prompt}
            </button>
          ))}
        </div>
      )}

      {/* Input panel block */}
      <form
        id="ai-coach-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(userInput);
        }}
        className="p-3 bg-neutral-950/30 border-t border-neutral-200/15 dark:border-slate-800/60 flex gap-2 items-center"
      >
        <input
          id="chat-input-field"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Plantea un reto de liderazgo o haz una pregunta sobre el libro..."
          className="flex-grow bg-neutral-100 dark:bg-slate-950/50 p-2.5 rounded-xl border border-neutral-200/80 dark:border-slate-850 text-xs sm:text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-500 focus:outline-none focus:border-amber-500/50"
          disabled={loading}
        />
        <button
          id="send-message-btn"
          type="submit"
          className="h-10 w-10 shrink-0 bg-amber-500 text-slate-950 flex items-center justify-center rounded-xl hover:bg-amber-400 transition"
          disabled={loading}
        >
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}
