import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// "BitLabs" in 8-bit ASCII binary
const TARGET = "BitLabs";
const BINARY_CHARS = TARGET.split("").map((c) =>
  c.charCodeAt(0).toString(2).padStart(8, "0")
);

const GLITCH_POOL = "01ABCDEF#@$%&*<>/\\|=+-_:;{}[]";
function rand() {
  return GLITCH_POOL[Math.floor(Math.random() * GLITCH_POOL.length)];
}

/**
 * Stage 1: show full binary for "BitLabs" (each character = 8 bits)
 * Stage 2: each binary octet collapses into its letter, one by one
 * Stage 3: "Technology" decodes via glitch reveal
 */
export function BinaryMorph() {
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0);
  const [revealed, setRevealed] = useState(0); // # letters of BitLabs revealed
  const [techText, setTechText] = useState("");
  const [tick, setTick] = useState(0);

  // Tick for glitch effect on un-revealed binary
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 90);
    return () => clearInterval(id);
  }, []);

  // Sequence
  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1200); // start morphing
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (stage !== 1) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= TARGET.length) {
        clearInterval(id);
        setTimeout(() => setStage(2), 600);
      }
    }, 380);
    return () => clearInterval(id);
  }, [stage]);

  // Stage 2 -> 3: decode "Technology"
  useEffect(() => {
    if (stage !== 2) return;
    const target = "Technology";
    let i = 0;
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      // every 3 frames reveal another char
      if (frame % 3 === 0) i += 1;
      const out = target
        .split("")
        .map((c, idx) => {
          if (idx < i) return c;
          if (idx === i) return rand();
          return "";
        })
        .join("");
      setTechText(out);
      if (i >= target.length) {
        setTechText(target);
        clearInterval(id);
        setStage(3);
      }
    }, 60);
    return () => clearInterval(id);
  }, [stage]);

  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Line 1: BitLabs */}
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 font-mono text-xs sm:text-sm md:text-base">
        {BINARY_CHARS.map((bin, idx) => {
          const isRevealed = stage >= 1 && idx < revealed;
          if (isRevealed) {
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.4, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gradient glow-text"
              >
                {TARGET[idx]}
              </motion.span>
            );
          }
          // glitching binary
          const display = bin
            .split("")
            .map((b) => (Math.random() > 0.85 ? rand() : b))
            .join("");
          return (
            <span
              key={`${idx}-${tick}`}
              className="text-primary/80 tracking-widest"
              style={{ textShadow: "0 0 10px oklch(0.72 0.2 250 / 0.6)" }}
            >
              {display}
            </span>
          );
        })}
      </div>

      {/* Line 2: Technology */}
      <div className="mt-6 h-[1.2em] flex items-center justify-center">
        {stage >= 2 && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground/90"
          >
            {techText}
            {stage < 3 && (
              <span className="inline-block w-[2px] h-[0.9em] align-middle bg-primary ml-1 animate-pulse" />
            )}
          </motion.span>
        )}
      </div>

      {/* Scanning line during early stages */}
      {stage < 3 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="scanline absolute inset-x-0 h-32" />
        </div>
      )}
    </div>
  );
}
