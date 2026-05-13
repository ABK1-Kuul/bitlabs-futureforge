import { Sparkles, SparklesIcon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ReduceEffectsToggle() {
  const { reduceEffects, toggleReduceEffects } = useTheme();
  return (
    <button
      onClick={toggleReduceEffects}
      aria-label={reduceEffects ? "Enable ambient effects" : "Reduce ambient effects"}
      aria-pressed={reduceEffects}
      title={reduceEffects ? "Effects: off" : "Effects: on"}
      className="relative h-9 w-9 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {reduceEffects ? (
        <SparklesIcon className="h-4 w-4 opacity-40" />
      ) : (
        <Sparkles className="h-4 w-4 text-primary" />
      )}
    </button>
  );
}
