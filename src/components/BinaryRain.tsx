import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * Ambient matrix-style binary rain. Extremely subtle, fixed full-screen,
 * pointer-events disabled, sits behind all content (z-index: 0 on a -1 layer
 * relative to body). Adapts to dark/light mode via --rain-color CSS var.
 */
export function BinaryRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    const fontSize = 16;
    const colorRgb = getComputedStyle(document.documentElement)
      .getPropertyValue("--rain-color")
      .trim() || (theme === "dark" ? "130, 180, 255" : "30, 60, 120");
    const trailAlpha = theme === "dark" ? 0.08 : 0.06;
    const charAlpha = theme === "dark" ? 0.32 : 0.18;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(width / (fontSize * 1.6));
      drops = Array.from({ length: columns }, () => Math.random() * -height);
    };
    resize();
    window.addEventListener("resize", resize);

    let last = 0;
    const interval = 80; // ~12fps — slow, ambient
    const step = (t: number) => {
      raf = requestAnimationFrame(step);
      if (t - last < interval) return;
      last = t;

      // fade prior frame
      ctx.fillStyle = theme === "dark"
        ? `rgba(8, 10, 18, ${trailAlpha})`
        : `rgba(250, 251, 254, ${trailAlpha})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;
      ctx.fillStyle = `rgba(${colorRgb}, ${charAlpha})`;

      for (let i = 0; i < columns; i++) {
        const ch = Math.random() > 0.5 ? "1" : "0";
        const x = i * fontSize * 1.6;
        const y = drops[i];
        ctx.fillText(ch, x, y);
        drops[i] = y > height + Math.random() * 200 ? -20 : y + fontSize;
      }
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.5 }}
    />
  );
}
