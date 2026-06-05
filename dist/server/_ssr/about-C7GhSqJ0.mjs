import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { o as Building2, d as GraduationCap, W as Workflow, p as Layers, q as Target, E as Eye, H as Heart } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const stats = [{
  icon: Building2,
  label: "Enterprise Solutions"
}, {
  icon: GraduationCap,
  label: "Digital Learning Systems"
}, {
  icon: Workflow,
  label: "Automation Platforms"
}, {
  icon: Layers,
  label: "Scalable Infrastructure"
}];
const values = [{
  icon: Target,
  title: "Mission",
  desc: "Design and deliver innovative software systems that simplify operations, improve productivity, and create meaningful long-term value."
}, {
  icon: Eye,
  title: "Vision",
  desc: "To become Africa's leading digital transformation and educational technology company through intelligent, human-centered engineering."
}, {
  icon: Heart,
  title: "Values",
  desc: "Innovation with purpose, excellence through technology, client-centered collaboration, integrity, and impact-driven development."
}];
const principles = ["Technical excellence", "Human-centered design", "Strategic innovation", "Scalable engineering", "Long-term partnership commitment"];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "text-center max-w-4xl mx-auto mb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4", children: "About us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight", children: [
        "Engineering ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "intelligent digital ecosystems" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "BitLabs Technology PLC is a next-generation technology company focused on building intelligent, scalable, and transformative digital ecosystems for organizations across Africa and beyond." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-3xl mx-auto mb-32 space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We specialize in enterprise software development, educational technology, cybersecurity systems, cloud infrastructure, workflow automation, and digital transformation solutions engineered for long-term operational impact." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We do not build generic systems. We build intelligent digital ecosystems specifically engineered to solve operational challenges, improve efficiency, and support sustainable organizational growth." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3 pt-4", children: principles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 rounded-xl glass", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: p })
      ] }, p)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-32", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.08
    }, className: "p-6 rounded-2xl glass text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 mx-auto mb-3 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: s.label })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.1
    }, className: "p-8 rounded-2xl glass", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: v.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: v.desc })
    ] }, v.title)) }) })
  ] });
}
export {
  About as component
};
