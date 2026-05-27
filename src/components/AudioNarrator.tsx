import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, Square, Headphones } from "lucide-react";
import { Quality } from "../data/qualities";

interface AudioNarratorProps {
  quality: Quality;
  theme: "light" | "dark";
}

export default function AudioNarrator({ quality, theme }: AudioNarratorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechUtterance, setSpeechUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [voiceVolume, setVoiceVolume] = useState(0.85);

  // Initialize and cleanup speech Synthesis
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayNarrator = () => {
    if (!window.speechSynthesis) {
      alert("Tu navegador no soporta la reproducción de audiolibros vía Text-to-Speech.");
      return;
    }

    if (isPlaying) {
      // Pause synthesis
      window.speechSynthesis.pause();
      setIsPlaying(false);
      return;
    }

    // If it was paused previously, we can resume
    if (window.speechSynthesis.paused && speechUtterance) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      return;
    }

    // Cancel any generic speech currently active
    window.speechSynthesis.cancel();

    // Fabricate narrative text based on John C. Maxwell's principles
    const narrationText = `Cualidad número ${quality.id}. ${quality.name}. Subtítulo: ${quality.subtitle}. Frase célebre: ${quality.quote}. Resumen principal: ${quality.summary}`;

    const utterance = new SpeechSynthesisUtterance(narrationText);
    
    // Attain Spanish voice if available
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find(
      (v) => v.lang.startsWith("es-") || v.lang.toLowerCase().includes("spanish")
    );
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }

    utterance.lang = "es-ES";
    utterance.volume = voiceVolume;
    utterance.rate = 1.0; // Normal rate speed

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    setSpeechUtterance(utterance);
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handleStopNarrator = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  return (
    <div
      id={`audio-narrator-${quality.id}`}
      className={`mt-4 p-3 rounded-xl border flex flex-col md:flex-row items-center justify-between gap-3 transition-all duration-300 ${
        isPlaying
          ? "bg-amber-500/10 border-amber-500/30 ring-1 ring-amber-500/15"
          : theme === "dark"
            ? "bg-slate-950/40 border-slate-800/60 hover:bg-slate-950/80"
            : "bg-neutral-100/60 border-neutral-200 hover:bg-neutral-100"
      }`}
    >
      {/* Player descriptive state bar */}
      <div className="flex items-center gap-2.5">
        <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-all ${
          isPlaying 
            ? "bg-amber-500 text-slate-950 animate-pulse" 
            : "bg-neutral-200/50 dark:bg-slate-900 text-neutral-500 dark:text-neutral-400"
        }`}>
          {isPlaying ? <Headphones size={15} className="animate-bounce" /> : <Volume2 size={15} />}
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#B38F00] dark:text-amber-500 font-mono block">
            {isPlaying ? "Reproduciendo" : "Audiolibro Maxwell"}
          </span>
          <span className="text-xs text-neutral-600 dark:text-neutral-300 font-medium block">
            Escuchar lección en audio
          </span>
        </div>
      </div>

      {/* Visual audio waveform sound-wave mockup when active */}
      {isPlaying && (
        <div className="flex items-end gap-1 h-5 px-3" aria-hidden="true">
          <span className="w-1 bg-amber-500 rounded-full h-3 animate-waveform-slow" style={{ animationDelay: '0.1s' }} />
          <span className="w-1 bg-amber-500 rounded-full h-5 animate-waveform-fast" style={{ animationDelay: '0.3s' }} />
          <span className="w-1 bg-amber-500 rounded-full h-2 animate-waveform-medium" style={{ animationDelay: '0.5s' }} />
          <span className="w-1 bg-amber-500 rounded-full h-4 animate-waveform-fast" style={{ animationDelay: '0.2s' }} />
          <span className="w-1 bg-amber-500 rounded-full h-3 animate-waveform-slow" style={{ animationDelay: '0.4s' }} />
        </div>
      )}

      {/* Control buttons */}
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          id={`btn-narrate-play-${quality.id}`}
          onClick={handlePlayNarrator}
          className={`px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider font-mono transition flex items-center gap-1 cursor-pointer ${
            isPlaying
              ? "bg-amber-500 text-slate-950 hover:bg-amber-400 font-extrabold"
              : "bg-neutral-200 hover:bg-neutral-300 dark:bg-slate-900 dark:hover:bg-slate-800 text-neutral-700 dark:text-neutral-200 border border-neutral-300/40 dark:border-slate-800"
          }`}
          title={isPlaying ? "Pausar narración" : "Iniciar audio narrador"}
        >
          {isPlaying ? (
            <>
              <Pause size={12} fill="currentColor" />
              <span>Pausar</span>
            </>
          ) : (
            <>
              <Play size={12} fill="currentColor" />
              <span>Escuchar</span>
            </>
          )}
        </button>

        {isPlaying && (
          <button
            id={`btn-narrate-stop-${quality.id}`}
            onClick={handleStopNarrator}
            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 transition border border-rose-500/20"
            title="Detener audio"
          >
            <Square size={12} fill="currentColor" />
          </button>
        )}
      </div>
    </div>
  );
}
