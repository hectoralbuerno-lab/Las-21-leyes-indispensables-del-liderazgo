import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { leadershipQuotes } from "../data/qualities";

export default function InspirationalQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % leadershipQuotes.length);
    }, 8000); // changes quote every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="quote-carousel" className="relative overflow-hidden rounded-2xl bg-neutral-900/40 dark:bg-slate-900/40 backdrop-blur-md border border-neutral-200/10 dark:border-slate-800/50 p-6 md:p-8 shadow-xl">
      <div className="absolute top-4 right-4 text-amber-500/15">
        <Quote size={80} strokeWidth={1} />
      </div>
      
      <div className="min-h-[120px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-lg md:text-xl font-medium tracking-wide text-neutral-800 dark:text-neutral-100 leading-relaxed italic pr-8">
              "{leadershipQuotes[index].text}"
            </p>
            <p className="text-sm font-semibold tracking-wider text-amber-600 dark:text-amber-400 mt-4 font-mono uppercase">
              — {leadershipQuotes[index].author}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-2 mt-6">
          {leadershipQuotes.map((_, idx) => (
            <button
              id={`quote-dot-${idx}`}
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === idx ? "w-8 bg-amber-500" : "w-2 bg-neutral-300 dark:bg-slate-700 hover:bg-neutral-400"
              }`}
              aria-label={`Ver frase ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
