import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as products } from "./router-DCh9Va5z.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, r as Cpu, d as GraduationCap, s as Shield, f as Cloud, S as Sparkles, g as Compass, p as Layers, R as Rocket, H as Heart, t as Brain, u as Handshake, W as Workflow, i as ChartLine, e as ShieldCheck, C as CodeXml, Z as Zap } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const BRAND = "BitLabs";
const TECH = "Technology";
const BINARY = BRAND.split("").map((c) => c.charCodeAt(0).toString(2).padStart(8, "0"));
function BinaryMorph() {
  const [revealed, setRevealed] = reactExports.useState(0);
  const [techIdx, setTechIdx] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);
    return () => clearTimeout(t1);
  }, []);
  reactExports.useEffect(() => {
    if (phase !== 1) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setRevealed(i);
      if (i >= BRAND.length) {
        clearInterval(id);
        setTimeout(() => setPhase(2), 220);
      }
    }, 140);
    return () => clearInterval(id);
  }, [phase]);
  reactExports.useEffect(() => {
    if (phase !== 2) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTechIdx(i);
      if (i >= TECH.length) {
        clearInterval(id);
        setPhase(3);
      }
    }, 55);
    return () => clearInterval(id);
  }, [phase]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center justify-center select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-end justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 min-h-[1.2em]", children: BINARY.map((bin, idx) => {
      const isRevealed = idx < revealed;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "relative flex items-center justify-center",
          style: { minWidth: "0.7em" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isRevealed ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              initial: { opacity: 0, y: 8, filter: "blur(10px)", scale: 0.92 },
              animate: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
              transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              className: "font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-semibold leading-none tracking-tight text-gradient glow-text",
              children: BRAND[idx]
            },
            "letter"
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0, filter: "blur(8px)" },
              transition: { duration: 0.4 },
              className: "font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-primary/80 animate-breathe",
              style: { textShadow: "0 0 14px color-mix(in oklab, var(--primary) 55%, transparent)" },
              children: bin
            },
            "bits"
          ) })
        },
        idx
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 sm:mt-8 h-[1.4em] flex items-center justify-center", children: phase >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.02em] text-foreground/90", children: [
      TECH.split("").map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { opacity: 0, filter: "blur(6px)", y: 4 },
          animate: i < techIdx ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: "blur(6px)", y: 4 },
          transition: { duration: 0.45, ease: "easeOut" },
          children: c
        },
        i
      )),
      phase < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          "aria-hidden": true,
          className: "absolute top-0 bottom-0 w-[2px] bg-primary",
          style: { left: `${techIdx / TECH.length * 100}%`, boxShadow: "0 0 12px var(--primary)" },
          animate: { opacity: [0.4, 1, 0.4] },
          transition: { duration: 0.8, repeat: Infinity }
        }
      )
    ] }) })
  ] });
}
function Particles({ count = 24 }) {
  const [particles, setParticles] = reactExports.useState([]);
  reactExports.useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 12 + 12,
        delay: Math.random() * 10,
        hue: Math.random() > 0.5 ? 250 : 295
      }))
    );
  }, [count]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "absolute rounded-full",
      style: {
        left: `${p.left}%`,
        bottom: 0,
        width: `${p.size}px`,
        height: `${p.size}px`,
        background: `oklch(0.75 0.2 ${p.hue})`,
        boxShadow: `0 0 ${p.size * 4}px oklch(0.75 0.2 ${p.hue} / 0.8)`,
        animation: `float-up ${p.duration}s linear ${p.delay}s infinite`
      }
    },
    p.id
  )) });
}
const capabilities = [{
  icon: Cpu,
  title: "Enterprise Systems",
  desc: "Scalable, secure platforms engineered for long-term operational impact."
}, {
  icon: GraduationCap,
  title: "Educational Technology",
  desc: "Learning ecosystems that expand access and improve outcomes."
}, {
  icon: Shield,
  title: "Cybersecurity",
  desc: "Awareness and protection programs that strengthen digital resilience."
}, {
  icon: Cloud,
  title: "Digital Transformation",
  desc: "Cloud-native architectures that modernize how organizations operate."
}];
const whyChoose = [{
  icon: Compass,
  title: "Deep Industry Understanding",
  desc: "We design for the real operational realities of the sectors we serve."
}, {
  icon: Layers,
  title: "Full-Cycle Development Capability",
  desc: "From discovery and architecture to deployment and continuous evolution."
}, {
  icon: Rocket,
  title: "Enterprise-Grade Scalability",
  desc: "Systems engineered to grow with your organization, not against it."
}, {
  icon: Heart,
  title: "Human-Centered Design",
  desc: "Interfaces and workflows that empower users rather than overwhelm them."
}, {
  icon: Brain,
  title: "Innovation-Driven Engineering",
  desc: "Modern stacks, intelligent automation, and forward-looking architecture."
}, {
  icon: Handshake,
  title: "Long-Term Partnership Approach",
  desc: "We invest in client success well beyond initial delivery."
}];
const transformationPillars = ["Simplifying complexity", "Improving accessibility", "Automating repetitive processes", "Strengthening collaboration", "Enabling scalable growth", "Empowering users through intuitive systems"];
const futureFocus = [{
  icon: Brain,
  title: "AI-Powered Enterprise Systems"
}, {
  icon: Workflow,
  title: "Intelligent Automation"
}, {
  icon: Cloud,
  title: "Cloud-Native Infrastructure"
}, {
  icon: GraduationCap,
  title: "Adaptive Learning Systems"
}, {
  icon: ChartLine,
  title: "Predictive Analytics"
}, {
  icon: ShieldCheck,
  title: "Cybersecurity Resilience"
}, {
  icon: Layers,
  title: "Scalable Digital Ecosystems"
}, {
  icon: CodeXml,
  title: "Future-Ready Engineering"
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "var(--gradient-hero)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { count: 14 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-6xl px-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: -10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.2
        }, className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
          "BITLABS TECHNOLOGY PLC · INTELLIGENT SYSTEMS"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BinaryMorph, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.4,
          duration: 0.6
        }, className: "mt-12 font-display text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl mx-auto", children: [
          "Building ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Intelligent Digital Ecosystems" }),
          " for the Future"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.55,
          duration: 0.6
        }, className: "mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: "BitLabs Technology PLC develops scalable enterprise systems, educational technologies, cybersecurity platforms, and digital transformation solutions designed to help organizations operate smarter, grow faster, and innovate confidently." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.75,
          duration: 0.6
        }, className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium animate-pulse-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", children: [
            "Explore Solutions",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl glass font-medium hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", children: "View Products" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 1,
          duration: 0.6
        }, className: "mt-10 text-xs font-mono tracking-widest uppercase text-muted-foreground/80", children: "Enterprise Systems · EdTech · Cybersecurity · Digital Transformation" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "What we do", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "A studio for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "intelligent software" })
      ] }), desc: "From enterprise platforms to learning ecosystems — we engineer technology that compounds." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16", children: capabilities.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.08
      }, className: "group relative p-6 rounded-2xl glass hover:border-primary/40 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium mb-2", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.desc })
      ] }, f.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Products", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Built for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "organizations" }),
        " that move forward"
      ] }), desc: "A focused product suite engineered by BitLabs Technology." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5 mt-16", children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/$slug", params: {
        slug: p.slug
      }, className: "group block h-full p-6 rounded-2xl glass hover:border-primary/40 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-primary glow flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: p.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: p.tags.slice(0, 4).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 text-muted-foreground", children: t }, t)) })
      ] }) }, p.slug)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", className: "inline-flex items-center gap-2 text-primary hover:gap-3 transition-all", children: [
        "View all products ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Why BitLabs", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Why organizations ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "choose BitLabs Technology" })
      ] }), desc: "We combine strategic innovation, technical capability, and scalable engineering to help organizations modernize operations and prepare confidently for the future." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16", children: whyChoose.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i % 3 * 0.08
      }, className: "group p-7 rounded-2xl glass hover:border-primary/40 hover:-translate-y-1 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-2", children: w.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: w.desc })
      ] }, w.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl glass overflow-hidden p-10 md:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-70", style: {
        background: "radial-gradient(ellipse at top right, oklch(0.4 0.2 260 / 0.35), transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4", children: "Philosophy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-5xl font-semibold tracking-tight mb-6", children: [
          "Digital Transformation, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "redefined" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed max-w-3xl", children: "True digital transformation occurs when technology fundamentally improves how organizations operate, communicate, and scale." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3 mt-10", children: transformationPillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -10
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.05
        }, className: "flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary glow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: p })
        ] }, p)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Future vision", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Building the future of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "intelligent organizations" })
      ] }), desc: "We invest in the architectures, systems, and ideas that will define the next decade of enterprise technology." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16", children: futureFocus.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i % 4 * 0.06
      }, className: "group p-5 rounded-2xl glass hover:border-primary/40 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5 text-primary mb-3 group-hover:scale-110 transition-transform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium leading-snug", children: f.title })
      ] }, f.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl glass p-10 md:p-16 text-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "relative h-10 w-10 mx-auto text-primary mb-6 glow-text" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "relative font-display text-3xl md:text-5xl font-semibold mb-4", children: "Ready to build what's next?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-muted-foreground max-w-xl mx-auto mb-8", children: "Let's design, engineer, and deploy the systems your organization needs to move forward." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium animate-pulse-glow", children: [
        "Start a conversation ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) })
  ] });
}
function Section({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32", children });
}
function SectionHeader({
  eyebrow,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl font-semibold tracking-tight", children: title }),
    desc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg leading-relaxed", children: desc })
  ] });
}
export {
  Section,
  SectionHeader,
  Home as component
};
