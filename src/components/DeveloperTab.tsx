import { useState, useEffect } from "react";
import { Copy, Check, FileCode, Server, Terminal, Info } from "lucide-react";

interface CodeTemplates {
  php: {
    header: string;
    index: string;
    footer: string;
  };
  java: string;
}

export default function DeveloperTab() {
  const [templates, setTemplates] = useState<CodeTemplates | null>(null);
  const [activeTab, setActiveTab] = useState<"php" | "java">("php");
  const [activePhpFile, setActivePhpFile] = useState<"header" | "index" | "footer">("header");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/templates")
      .then((res) => res.json())
      .then((data) => setTemplates(data))
      .catch((err) => console.error("Error al cargar plantillas:", err));
  }, []);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  if (!templates) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mb-4"></div>
        <p className="text-sm text-neutral-500 font-mono">Cargando módulos de integración técnica...</p>
      </div>
    );
  }

  const getActiveCode = () => {
    if (activeTab === "java") {
      return templates.java;
    }
    return templates.php[activePhpFile];
  };

  return (
    <div id="dev-tab-container" className="rounded-2xl bg-neutral-900/40 dark:bg-slate-900/40 backdrop-blur-md border border-neutral-200/10 dark:border-slate-800/50 overflow-hidden shadow-xl">
      {/* Dev Header */}
      <div className="p-6 border-b border-neutral-200/15 dark:border-slate-800/60 bg-neutral-950/20">
        <h3 className="text-xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
          <Terminal className="text-amber-500" size={22} />
          Módulos de Integración Técnica (PHP & Java)
        </h3>
        <p className="text-sm text-neutral-500 mt-1 max-w-3xl leading-relaxed">
          Para cumplir con tus necesidades de arquitectura backend modular, hemos estructurado el loader PHP del sitio para servidores tradicionales tipo Apache y un Microservicio Java (Spring Boot REST) que permite persistir los avances del líder.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex bg-neutral-950/30 p-2 gap-2 border-b border-neutral-200/10 dark:border-slate-800/40">
        <button
          id="btn-tab-php"
          onClick={() => setActiveTab("php")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider font-mono transition-all uppercase ${
            activeTab === "php"
              ? "bg-amber-500/15 text-amber-500 border border-amber-500/30 shadow-md"
              : "text-neutral-400 hover:bg-neutral-800/40"
          }`}
        >
          <FileCode size={14} />
          PHP Modular Loader (Frontend)
        </button>
        <button
          id="btn-tab-java"
          onClick={() => setActiveTab("java")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider font-mono transition-all uppercase ${
            activeTab === "java"
              ? "bg-amber-500/15 text-amber-500 border border-amber-500/30 shadow-md"
              : "text-neutral-400 hover:bg-neutral-800/40"
          }`}
        >
          <Server size={14} />
          Java Microservice (Backend)
        </button>
      </div>

      {/* Main Panel Content */}
      <div className="p-6">
        {activeTab === "php" && (
          <div className="flex flex-wrap gap-2 mb-4 bg-neutral-900/20 p-1.5 rounded-lg border border-neutral-200/10 dark:border-slate-800/30 max-w-sm">
            {(["header", "index", "footer"] as const).map((file) => (
              <button
                id={`btn-php-sub-${file}`}
                key={file}
                onClick={() => setActivePhpFile(file)}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                  activePhpFile === file
                    ? "bg-neutral-200 dark:bg-slate-800 text-neutral-800 dark:text-neutral-100 font-bold"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {file}.php
              </button>
            ))}
          </div>
        )}

        {/* Code Output Viewer */}
        <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800/80 font-mono text-[11px] md:text-[13px] leading-relaxed">
          {/* Action Bar */}
          <div className="flex justify-between items-center bg-neutral-900 px-4 py-2 border-b border-neutral-800/40">
            <span className="text-neutral-500 font-mono text-xs">
              {activeTab === "php" ? `${activePhpFile}.php` : "LeadershipController.java"}
            </span>
            <button
              id="copy-code-btn"
              onClick={() => handleCopy(getActiveCode(), activeTab === "php" ? activePhpFile : "java")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition text-xs font-mono font-medium"
              title="Copiar código"
            >
              {copied === (activeTab === "php" ? activePhpFile : "java") ? (
                <>
                  <Check size={13} className="text-green-500" />
                  <span className="text-green-400">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 md:p-6 overflow-x-auto text-neutral-300 max-h-[480px]">
            <code>{getActiveCode()}</code>
          </pre>
        </div>

        {/* Info Explanations */}
        <div className="mt-4 flex gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-neutral-600 dark:text-neutral-400 text-xs leading-relaxed">
          <Info size={18} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-neutral-700 dark:text-neutral-300">¿Cómo usar estas plantillas modulares?</p>
            <p className="mt-1">
              Las plantillas de arriba coinciden exactamente con la organización de las 21 cualidades lideradas. Puedes guardar el código de la pestaña PHP para montarlo en cualquier proveedor de hosting tradicional. La clase Java expone endpoints listos para sincronizar lecturas y auto-evaluaciones usando frameworks empresariales como Spring Boot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
