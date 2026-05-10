import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BRAND = "BitLabs";
const TECH = "Technology";
const BINARY = BRAND.split("").map((c) => c.charCodeAt(0).toString(2).padStart(8, "0"));

/**
 * Cinematic hero animation:
 *  Phase 0 (0–1.4s): clean, breathing binary
 *  Phase 1 (1.4–3.6s): each octet morphs into its letter, left→right
 *  Phase 2 (3.6s+): "Technology" reveals via left→right scanning decode
 */
export function BinaryMorph() {
  const [revealed, setRevealed] = useState(0);
  const [techIdx, setTechIdx] = useState(0);
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1400);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase !== 1) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= BRAND.length) {
        clearInterval(id);
        setTimeout(() => setPhase(2), 500);
      }
    }, 280);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== 2) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTechIdx(i);
      if (i >= TECH.length) {
        clearInterval(id);
        setPhase(3);
      }
    }, 95);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Line 1 — fixed-height stage prevents jump */}
      <div className="relative flex items-end justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 min-h-[1.2em]">
        {BINARY.map((bin, idx) => {
          const isRevealed = idx < revealed;
          return (
            <div
              key={idx}
              className="relative flex items-center justify-center"
              style={{ minWidth: "0.7em" }}
            >
              <AnimatePresence mode="wait">
                {isRevealed ? (
                  <motion.span
                    key="letter"
                    initial={{ opacity: 0, y: 8, filter: "blur(10px)", scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-semibold leading-none tracking-tight text-gradient glow-text"
                  >
                    {BRAND[idx]}
                  </motion.span>
                ) : (
                  <motion.span
                    key="bits"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.4 }}
                    className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-primary/80 animate-breathe"
                    style={{ textShadow: "0 0 14px color-mix(in oklab, var(--primary) 55%, transparent)" }}
                  >
                    {bin}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Line 2 — Technology with scan reveal */}
      <div className="mt-6 sm:mt-8 h-[1.4em] flex items-center justify-center">
        {phase >= 2 && (
          <div className="relative inline-flex font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.02em] text-foreground/90">
            {TECH.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(6px)", y: 4 }}
                animate={
                  i < techIdx
                    ? { opacity: 1, filter: "blur(0px)", y: 0 }
                    : { opacity: 0, filter: "blur(6px)", y: 4 }
                }
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {c}
              </motion.span>
            ))}
            {phase < 3 && (
              <motion.span
                aria-hidden
                className="absolute top-0 bottom-0 w-[2px] bg-primary"
                style={{ left: `${(techIdx / TECH.length) * 100}%`, boxShadow: "0 0 12px var(--primary)" }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
