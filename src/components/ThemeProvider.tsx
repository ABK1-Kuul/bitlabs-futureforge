import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

type Ctx = {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
  reduceEffects: boolean;
  setReduceEffects: (v: boolean) => void;
  toggleReduceEffects: () => void;
  prefersReducedMotion: boolean;
};

const ThemeContext = createContext<Ctx>({
  theme: "dark",
  toggle: () => {},
  setTheme: () => {},
  reduceEffects: false,
  setReduceEffects: () => {},
  toggleReduceEffects: () => {},
  prefersReducedMotion: false,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [reduceEffects, setReduceEffectsState] = useState(false);
  const [prefersReducedMotion, setPRM] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored === "light" || stored === "dark") setThemeState(stored);
      const re = localStorage.getItem("reduce-effects");
      if (re === "1") setReduceEffectsState(true);
    } catch {}
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPRM(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-effects", reduceEffects || prefersReducedMotion);
    try { localStorage.setItem("reduce-effects", reduceEffects ? "1" : "0"); } catch {}
  }, [reduceEffects, prefersReducedMotion]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: setThemeState,
        toggle: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
        reduceEffects,
        setReduceEffects: setReduceEffectsState,
        toggleReduceEffects: () => setReduceEffectsState((v) => !v),
        prefersReducedMotion,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
