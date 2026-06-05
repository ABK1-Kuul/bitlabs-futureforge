import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X, M as Menu, G as Github, T as Twitter, L as Linkedin, a as Mail, S as Sparkles, b as Moon, c as Sun } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-BHNFO20l.css";
const ThemeContext = reactExports.createContext({
  theme: "dark",
  toggle: () => {
  },
  setTheme: () => {
  },
  reduceEffects: false,
  setReduceEffects: () => {
  },
  toggleReduceEffects: () => {
  },
  prefersReducedMotion: false
});
function ThemeProvider({ children }) {
  const [theme, setThemeState] = reactExports.useState("dark");
  const [reduceEffects, setReduceEffectsState] = reactExports.useState(false);
  const [prefersReducedMotion, setPRM] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") setThemeState(stored);
      const re = localStorage.getItem("reduce-effects");
      if (re === "1") setReduceEffectsState(true);
    } catch {
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPRM(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  reactExports.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
    }
  }, [theme]);
  reactExports.useEffect(() => {
    document.documentElement.classList.toggle("reduce-effects", reduceEffects || prefersReducedMotion);
    try {
      localStorage.setItem("reduce-effects", reduceEffects ? "1" : "0");
    } catch {
    }
  }, [reduceEffects, prefersReducedMotion]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ThemeContext.Provider,
    {
      value: {
        theme,
        setTheme: setThemeState,
        toggle: () => setThemeState((t) => t === "dark" ? "light" : "dark"),
        reduceEffects,
        setReduceEffects: setReduceEffectsState,
        toggleReduceEffects: () => setReduceEffectsState((v) => !v),
        prefersReducedMotion
      },
      children
    }
  );
}
const useTheme = () => reactExports.useContext(ThemeContext);
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "relative h-9 w-9 rounded-lg glass flex items-center justify-center overflow-hidden hover:border-primary/50 transition-colors",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { y: -16, opacity: 0, rotate: -90 },
          animate: { y: 0, opacity: 1, rotate: 0 },
          exit: { y: 16, opacity: 0, rotate: 90 },
          transition: { duration: 0.32, ease: "easeOut" },
          className: "absolute inset-0 flex items-center justify-center text-foreground",
          children: isDark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" })
        },
        isDark ? "moon" : "sun"
      ) })
    }
  );
}
function ReduceEffectsToggle() {
  const { reduceEffects, toggleReduceEffects } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggleReduceEffects,
      "aria-label": reduceEffects ? "Enable ambient effects" : "Reduce ambient effects",
      "aria-pressed": reduceEffects,
      title: reduceEffects ? "Effects: off" : "Effects: on",
      className: "relative h-9 w-9 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      children: reduceEffects ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 opacity-40" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" })
    }
  );
}
const logoLight = "data:image/svg+xml,%3csvg%20width='24'%20height='64'%20viewBox='0%200%2024%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2010C0%204.47715%204.47715%200%2010%200V30H0V10Z'%20fill='%232563FF'/%3e%3cpath%20d='M14%2044C14%2038.4772%2018.4772%2034%2024%2034V64H14V44Z'%20fill='%232563FF'/%3e%3cpath%20d='M0%2034H10V64H0V34Z'%20fill='%237C3AED'/%3e%3crect%20x='16'%20y='2'%20width='6'%20height='26'%20rx='2'%20stroke='%23F8FAFC'%20stroke-width='4'/%3e%3c/svg%3e";
const logoDark = "data:image/svg+xml,%3csvg%20width='24'%20height='64'%20viewBox='0%200%2024%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2010C0%204.47715%204.47715%200%2010%200V30H0V10Z'%20fill='%232563FF'/%3e%3cpath%20d='M14%2044C14%2038.4772%2018.4772%2034%2024%2034V64H14V44Z'%20fill='%232563FF'/%3e%3cpath%20d='M0%2034H10V64H0V34Z'%20fill='%237C3AED'/%3e%3crect%20x='16'%20y='2'%20width='6'%20height='26'%20rx='2'%20stroke='black'%20stroke-width='4'/%3e%3c/svg%3e";
function Logo({ className = "", height = 28 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `relative inline-block align-middle ${className}`,
      style: { height, width: height * 24 / 64 },
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logoLight,
            alt: "",
            draggable: false,
            className: "absolute inset-0 h-full w-full select-none opacity-0 transition-opacity duration-500 ease-out [transform:translateZ(0)] dark:opacity-100"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logoDark,
            alt: "",
            draggable: false,
            className: "absolute inset-0 h-full w-full select-none opacity-100 transition-opacity duration-500 ease-out [transform:translateZ(0)] dark:opacity-0"
          }
        )
      ]
    }
  );
}
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const menuBtnRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.4)]" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/",
                  "aria-label": "BitLabs Technology — home",
                  className: "group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Logo,
                      {
                        height: 28,
                        className: "transition-[filter,transform] duration-500 ease-out group-hover:brightness-110 group-hover:[filter:drop-shadow(0_0_8px_color-mix(in_oklab,var(--primary)_40%,transparent))]"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-semibold tracking-tight text-lg leading-none", children: [
                      "BitLabs",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: " Technology" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
                links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: l.to,
                    activeOptions: { exact: l.to === "/" },
                    className: "relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    activeProps: { className: "text-foreground" },
                    children: ({ isActive }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label }),
                      isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.span,
                        {
                          layoutId: "nav-active",
                          className: "absolute inset-0 rounded-lg bg-foreground/5 -z-10",
                          transition: { type: "spring", stiffness: 350, damping: 30 }
                        }
                      )
                    ] })
                  },
                  l.to
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "ml-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    children: "Get in touch"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-2 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ReduceEffectsToggle, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ReduceEffectsToggle, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    ref: menuBtnRef,
                    onClick: () => setOpen((o) => !o),
                    className: "p-2 rounded-lg hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    "aria-label": open ? "Close menu" : "Open menu",
                    "aria-expanded": open,
                    "aria-controls": "mobile-menu",
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.nav,
          {
            id: "mobile-menu",
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1",
            children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: "px-4 py-3 rounded-lg text-sm hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  children: l.label
                },
                l.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  onClick: () => setOpen(false),
                  className: "mt-2 w-full text-center px-4 py-3 rounded-lg text-sm font-medium bg-gradient-primary text-primary-foreground glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  children: "Get in touch"
                }
              )
            ]
          }
        ) })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-32 border-t border-border/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", "aria-label": "BitLabs Technology — home", className: "group flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { height: 32, className: "transition-[filter] duration-500 ease-out group-hover:brightness-110" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-lg", children: "BitLabs Technology" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-md leading-relaxed", children: "Building Technology That Moves Organizations Forward." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground/70", children: "Addis Ababa, Ethiopia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: [
            { Icon: Github, label: "GitHub", href: "https://github.com" },
            { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
            { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            { Icon: Mail, label: "Email", href: "mailto:hello@bitlabs.tech" }
          ].map(({ Icon, label, href }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href,
              target: href.startsWith("http") ? "_blank" : void 0,
              rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
              className: "h-9 w-9 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "aria-label": `BitLabs on ${label}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", "aria-hidden": true })
            },
            label
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-4 text-sm", children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-foreground", children: "About" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-foreground", children: "Services" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-foreground", children: "Products" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground", children: "Contact" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-4 text-sm", children: "Resources" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/resources", className: "hover:text-foreground", children: "Blog" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/resources", className: "hover:text-foreground", children: "Case Studies" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/resources", className: "hover:text-foreground", children: "Documentation" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/resources", className: "hover:text-foreground", children: "Research" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " BitLabs Technology PLC. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono", children: "crafted with precision · v1.0" })
      ] })
    ] })
  ] });
}
function BinaryRain() {
  const ref = reactExports.useRef(null);
  const { theme, reduceEffects, prefersReducedMotion } = useTheme();
  const disabled = reduceEffects || prefersReducedMotion;
  reactExports.useEffect(() => {
    if (disabled) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const isDark = theme === "dark";
    const isMobile = window.innerWidth < 768;
    const densityScale = isMobile ? 0.45 : 1;
    const colorRgb = getComputedStyle(document.documentElement).getPropertyValue("--rain-color").trim() || (isDark ? "130, 180, 255" : "60, 90, 160");
    let width = 0;
    let height = 0;
    let dpr = 1;
    const particles = [];
    const layerConfig = [
      { count: 6e-5, sizeMin: 10, sizeMax: 13, alpha: 0.18, blur: 1.4, speed: 6 },
      // back
      { count: 4e-5, sizeMin: 13, sizeMax: 16, alpha: 0.28, blur: 0.6, speed: 10 },
      // mid
      { count: 2e-5, sizeMin: 15, sizeMax: 19, alpha: 0.42, blur: 0, speed: 14 }
      // front
    ];
    const rand = (a, b) => a + Math.random() * (b - a);
    const newDigit = () => Math.random() > 0.5 ? "1" : "0";
    const spawn = (layer, fromTop = false) => {
      const cfg = layerConfig[layer];
      const x = Math.random() * width;
      const y = fromTop ? -20 : Math.random() * height;
      return {
        x,
        y,
        bx: x,
        by: y,
        vx: 0,
        vy: 0,
        ch: newDigit(),
        size: rand(cfg.sizeMin, cfg.sizeMax),
        layer,
        alpha: cfg.alpha * rand(0.7, 1.1),
        life: rand(0, 1),
        lifeDir: Math.random() > 0.5 ? 1 : -1,
        lifeSpeed: rand(0.05, 0.18),
        glow: 0,
        driftSpeed: cfg.speed * rand(0.7, 1.3),
        swayAmp: rand(4, 14) * (layer + 1) * 0.4,
        swayFreq: rand(0.15, 0.45),
        swayPhase: Math.random() * Math.PI * 2
      };
    };
    const populate = () => {
      particles.length = 0;
      const area = width * height;
      for (let l = 0; l <= 2; l = l + 1) {
        const n = Math.max(4, Math.floor(area * layerConfig[l].count * densityScale));
        for (let i = 0; i < n; i++) particles.push(spawn(l));
      }
    };
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      populate();
    };
    resize();
    window.addEventListener("resize", resize);
    const pointer = { x: -9999, y: -9999, active: false, pulse: 0 };
    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onDown = () => {
      pointer.pulse = 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    let raf = 0;
    let last = performance.now();
    let visible = true;
    const onVis = () => {
      visible = !document.hidden;
      last = performance.now();
    };
    document.addEventListener("visibilitychange", onVis);
    const RADIUS = 140;
    const RADIUS2 = RADIUS * RADIUS;
    const step = (now) => {
      raf = requestAnimationFrame(step);
      if (!visible) return;
      const dt = Math.min(0.05, (now - last) / 1e3);
      last = now;
      ctx.clearRect(0, 0, width, height);
      pointer.pulse *= Math.pow(1e-3, dt);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life += p.lifeDir * p.lifeSpeed * dt;
        if (p.life > 1) {
          p.life = 1;
          p.lifeDir = -1;
        } else if (p.life < 0) {
          p.life = 0;
          p.lifeDir = 1;
          if (Math.random() < 0.6) p.ch = newDigit();
        }
        p.by += p.driftSpeed * dt;
        p.swayPhase += p.swayFreq * dt;
        const sway = Math.sin(p.swayPhase) * p.swayAmp;
        if (p.by > height + 30) {
          const fresh = spawn(p.layer, true);
          Object.assign(p, fresh);
          continue;
        }
        const targetX = p.bx + sway;
        const targetY = p.by;
        let fx = 0, fy = 0;
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < RADIUS2 && d2 > 0.5) {
            const d = Math.sqrt(d2);
            const force = 1 - d / RADIUS;
            const strength = 90 * force * (0.5 + p.layer * 0.35);
            fx += dx / d * strength;
            fy += dy / d * strength;
            p.glow = Math.max(p.glow, force);
          }
        }
        const ease = 3.2;
        p.vx += (fx + (targetX - p.x) * ease) * dt;
        p.vy += (fy + (targetY - p.y) * ease) * dt;
        p.vx *= Math.pow(0.02, dt);
        p.vy *= Math.pow(0.02, dt);
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.glow *= Math.pow(0.05, dt);
        const a = p.alpha * (0.35 + 0.65 * p.life);
        ctx.font = `${p.size}px JetBrains Mono, ui-monospace, monospace`;
        if (p.glow > 0.05) {
          ctx.shadowColor = `rgba(${colorRgb}, ${0.55 * p.glow})`;
          ctx.shadowBlur = 14 * p.glow;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fillStyle = `rgba(${colorRgb}, ${Math.min(1, a + p.glow * 0.5)})`;
        ctx.fillText(p.ch, p.x, p.y);
      }
      ctx.shadowBlur = 0;
    };
    raf = requestAnimationFrame((t) => {
      last = t;
      step(t);
    });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [theme, disabled]);
  if (disabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref,
      "aria-hidden": true,
      className: "fixed inset-0 pointer-events-none",
      style: {
        zIndex: 0,
        opacity: 0.85,
        maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.25) 100%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.25) 100%)"
      }
    }
  );
}
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BitLabs Technology — Engineering the Future" },
      { name: "description", content: "BitLabs Technology PLC builds intelligent software, AI systems, and enterprise platforms for the next generation of business." },
      { name: "author", content: "BitLabs Technology PLC" },
      { property: "og:title", content: "BitLabs Technology — Engineering the Future" },
      { property: "og:description", content: "Custom software, AI, cloud, and enterprise platforms engineered for tomorrow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { dangerouslySetInnerHTML: { __html: themeInitScript } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BinaryRain, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { zIndex: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./services-MoOsVr0V.mjs");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — BitLabs Technology"
    }, {
      name: "description",
      content: "Enterprise software, EdTech, cybersecurity, cloud, and digital transformation services engineered for long-term impact."
    }, {
      property: "og:title",
      content: "Services — BitLabs Technology"
    }, {
      property: "og:description",
      content: "Full-cycle digital engineering for organizations operating at scale."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./resources-BevFqc5w.mjs");
const Route$5 = createFileRoute("/resources")({
  head: () => ({
    meta: [{
      title: "Resources — BitLabs Technology"
    }, {
      name: "description",
      content: "Articles, case studies, research, and documentation from the BitLabs team."
    }, {
      property: "og:title",
      content: "Resources — BitLabs Technology"
    }, {
      property: "og:description",
      content: "Insights, research and case studies."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-kbLrPLqY.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — BitLabs Technology"
    }, {
      name: "description",
      content: "Get in touch with BitLabs Technology. We respond within one business day."
    }, {
      property: "og:title",
      content: "Contact — BitLabs Technology"
    }, {
      property: "og:description",
      content: "Let's build something together."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-C7GhSqJ0.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — BitLabs Technology"
    }, {
      name: "description",
      content: "BitLabs Technology PLC builds intelligent digital ecosystems for organizations across Africa and beyond."
    }, {
      property: "og:title",
      content: "About BitLabs Technology"
    }, {
      property: "og:description",
      content: "A next-generation technology company engineering scalable, human-centered digital ecosystems."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-Ch8SXAdu.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "BitLabs Technology — Building Intelligent Digital Ecosystems"
    }, {
      name: "description",
      content: "BitLabs Technology PLC engineers enterprise systems, educational technology, cybersecurity platforms, and digital transformation solutions for organizations across Africa and beyond."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./products.index-u2HQpPsp.mjs");
const Route$1 = createFileRoute("/products/")({
  head: () => ({
    meta: [{
      title: "Products — BitLabs Technology"
    }, {
      name: "description",
      content: "Enterprise-grade platforms across educational technology and cybersecurity awareness."
    }, {
      property: "og:title",
      content: "Products — BitLabs Technology"
    }, {
      property: "og:description",
      content: "Intelligent products engineered by BitLabs Technology PLC."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const products = [
  {
    slug: "sinq-authoring-tool",
    name: "SinqAuthoringTool",
    tagline: "A next-generation eLearning authoring platform for professional course development.",
    description: "SinqAuthoringTool is a standalone eLearning authoring ecosystem that simplifies the creation of interactive, standards-compliant courses. It gives instructional designers, training teams, and educators a unified environment to build, preview, and publish modern learning experiences without external dependencies.",
    tags: ["EdTech", "Authoring", "SCORM", "cmi5"],
    accent: "blue",
    features: [
      { title: "SCORM & cmi5 Support", desc: "Publish courses that work natively across enterprise LMS environments and modern learning records stores." },
      { title: "Interactive Learning Systems", desc: "Compose quizzes, branching scenarios, drag-and-drop activities, and rich media interactions." },
      { title: "Responsive Course Creation", desc: "Author once and deliver fluid experiences across desktop, tablet, and mobile devices." },
      { title: "Offline Accessibility", desc: "Build and consume courses in low-connectivity environments without losing functionality." },
      { title: "Real-time Previews", desc: "Iterate quickly with instant in-editor previews of every screen and interaction." },
      { title: "Gamification Support", desc: "Add points, badges, levels, and progress mechanics to drive learner engagement." }
    ],
    benefits: [
      "Cut course development cycles dramatically",
      "Standardize quality across training teams",
      "Reduce dependency on multiple authoring tools",
      "Deliver consistent experiences across devices"
    ],
    technologies: ["TypeScript", "Electron", "React", "SCORM 1.2 / 2004", "cmi5", "IndexedDB"],
    useCases: [
      "Corporate training and onboarding",
      "Higher education course production",
      "Professional certification programs",
      "Government and NGO capacity building"
    ]
  },
  {
    slug: "tankua",
    name: "Tankua",
    tagline: "Intelligent digital infrastructure for modern service ecosystems.",
    description: "Tankua is a modern digital platform designed to streamline service accessibility, operational workflows, and intelligent user engagement through scalable technology infrastructure. Built for organizations that need to modernize how services are delivered, accessed, and measured, Tankua unifies operations, customer experience, and analytics into a single intelligent system.",
    tags: ["Platform", "Operations", "Service Delivery", "Cloud"],
    accent: "purple",
    features: [
      { title: "Intelligent Workflow Management", desc: "Automate complex service workflows with rules, approvals, and event-driven orchestration." },
      { title: "Real-Time Service Accessibility", desc: "Deliver consistent, low-latency access across web, mobile, and partner channels." },
      { title: "Scalable Infrastructure", desc: "Elastic architecture that grows from a single team to nationwide service operations." },
      { title: "Analytics & Insights", desc: "Operational dashboards and behavioral analytics to drive continuous service improvement." },
      { title: "Modern User Experience", desc: "Clean, accessible interfaces engineered for clarity, speed, and engagement." },
      { title: "Cloud-Based Architecture", desc: "Cloud-native foundation with high availability, observability, and zero-downtime deploys." },
      { title: "Enterprise Integration", desc: "Connect seamlessly with ERPs, payment rails, identity providers, and partner APIs." },
      { title: "Secure Digital Operations", desc: "Defense-in-depth security with role-based access, audit trails, and encryption in transit and at rest." }
    ],
    benefits: [
      "Modernize service delivery end-to-end",
      "Reduce operational overhead and manual handoffs",
      "Improve accessibility and customer satisfaction",
      "Unlock data-driven decisions across the organization"
    ],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis", "Kubernetes"],
    useCases: [
      "Tours, travel, and hospitality operations",
      "Public and private service providers",
      "Multi-branch service organizations",
      "Digital transformation programs"
    ]
  },
  {
    slug: "cyber-awareness-platform",
    name: "Cyber Awareness Platform",
    tagline: "Interactive cybersecurity awareness and organizational training, engineered for digital resilience.",
    description: "An organizational cybersecurity awareness platform that turns security training into an engaging, measurable experience. Built to strengthen the human layer of defense through scenario-based learning, behavior analytics, and continuous awareness programs.",
    tags: ["Cybersecurity", "Awareness", "Training", "Analytics"],
    accent: "cyan",
    features: [
      { title: "Scenario-Based Training", desc: "Realistic phishing, social engineering, and incident simulations tailored to your industry." },
      { title: "Gamified Learning", desc: "Leaderboards, achievements, and progression systems that drive sustained engagement." },
      { title: "Analytics Dashboards", desc: "Granular visibility into organizational risk posture, learner progress, and behavioral trends." },
      { title: "Awareness Assessments", desc: "Adaptive assessments that benchmark and track security competency over time." },
      { title: "Organizational Reporting", desc: "Executive-ready reports for compliance, audits, and continuous improvement programs." },
      { title: "Role-Based Programs", desc: "Tailor training paths for executives, technical staff, and front-line employees." }
    ],
    benefits: [
      "Reduce human-factor security incidents",
      "Demonstrate compliance with measurable evidence",
      "Build a sustained culture of cyber awareness",
      "Identify and remediate high-risk groups proactively"
    ],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    useCases: [
      "Financial institutions and fintech",
      "Healthcare and public sector",
      "Enterprise compliance programs",
      "Educational and research institutions"
    ]
  }
];
function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
const $$splitComponentImporter = () => import("./products._slug-BNUuzcom.mjs");
const $$splitErrorComponentImporter = () => import("./products._slug-C78J1H7v.mjs");
const $$splitNotFoundComponentImporter = () => import("./products._slug-IFVpusA2.mjs");
const Route = createFileRoute("/products/$slug")({
  loader: ({
    params
  }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return {
      product
    };
  },
  head: ({
    loaderData
  }) => {
    const p = loaderData?.product;
    return {
      meta: p ? [{
        title: `${p.name} — BitLabs Technology`
      }, {
        name: "description",
        content: p.tagline
      }, {
        property: "og:title",
        content: `${p.name} — BitLabs Technology`
      }, {
        property: "og:description",
        content: p.tagline
      }] : [{
        title: "Product not found"
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$7
});
const ResourcesRoute = Route$5.update({
  id: "/resources",
  path: "/resources",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const ProductsIndexRoute = Route$1.update({
  id: "/products/",
  path: "/products/",
  getParentRoute: () => Route$7
});
const ProductsSlugRoute = Route.update({
  id: "/products/$slug",
  path: "/products/$slug",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ResourcesRoute,
  ServicesRoute,
  ProductsSlugRoute,
  ProductsIndexRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  products as p,
  router as r
};
