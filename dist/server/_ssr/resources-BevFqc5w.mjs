import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, j as Search } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const categories = ["All", "Engineering", "AI Research", "Case Studies", "Tutorials", "Insights"];
const articles = [{
  title: "Designing AI agents that can be trusted in production",
  excerpt: "A field guide to evaluation, guardrails, and governance for enterprise agents.",
  category: "AI Research",
  readTime: "12 min",
  date: "May 2026",
  featured: true
}, {
  title: "How we cut inference costs by 70% with smart routing",
  excerpt: "An engineering deep-dive into our model gateway architecture.",
  category: "Engineering",
  readTime: "8 min",
  date: "Apr 2026"
}, {
  title: "Case Study: Modernizing a 30-year-old ledger",
  excerpt: "How a global lender migrated to QuantumFlow without downtime.",
  category: "Case Studies",
  readTime: "10 min",
  date: "Apr 2026"
}, {
  title: "Building event-sourced systems in 2026",
  excerpt: "Patterns, pitfalls, and a reference implementation.",
  category: "Tutorials",
  readTime: "15 min",
  date: "Mar 2026"
}, {
  title: "The platform engineering maturity model",
  excerpt: "From CI/CD scripts to a true internal developer platform.",
  category: "Insights",
  readTime: "7 min",
  date: "Mar 2026"
}, {
  title: "RAG is dead, long live retrieval",
  excerpt: "Why we moved beyond naive vector search.",
  category: "AI Research",
  readTime: "9 min",
  date: "Feb 2026"
}, {
  title: "Postgres at petabyte scale",
  excerpt: "Scaling stories from our most demanding customers.",
  category: "Engineering",
  readTime: "11 min",
  date: "Feb 2026"
}, {
  title: "Designing for trust in financial UIs",
  excerpt: "Lessons from shipping the Pulse Fintech Suite.",
  category: "Insights",
  readTime: "6 min",
  date: "Jan 2026"
}];
function Resources() {
  const [query, setQuery] = reactExports.useState("");
  const [cat, setCat] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => articles.filter((a) => (cat === "All" || a.category === cat) && (query === "" || (a.title + a.excerpt).toLowerCase().includes(query.toLowerCase()))), [query, cat]);
  const featured = articles.find((a) => a.featured);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "text-center max-w-3xl mx-auto mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4", children: "Resources" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl font-semibold tracking-tight", children: [
        "Field notes from the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "edge" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "Engineering essays, research, and case studies from the BitLabs team." })
    ] }),
    featured && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "mb-14 rounded-3xl glass overflow-hidden grid md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid-bg min-h-[260px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "radial-gradient(ellipse at center, oklch(0.4 0.2 270 / 0.5), transparent 70%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full bg-primary text-primary-foreground", children: "FEATURED" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono text-primary mb-3", children: [
          featured.category,
          " · ",
          featured.readTime
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-semibold mb-3", children: featured.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: featured.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-2 text-primary hover:gap-3 transition-all", children: [
          "Read article ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search articles…", className: "w-full pl-11 pr-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c), className: `px-4 py-2 rounded-xl text-sm transition-all ${cat === c ? "bg-gradient-primary text-primary-foreground" : "glass hover:border-primary/40"}`, children: c }, c)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: [
      filtered.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "#", initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: i * 0.04
      }, className: "group p-6 rounded-2xl glass hover:border-primary/40 hover:-translate-y-1 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs font-mono text-muted-foreground mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: a.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: a.readTime })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: a.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.date })
      ] }, a.title)),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-full text-center py-16 text-muted-foreground", children: "No articles match your search." })
    ] })
  ] });
}
export {
  Resources as component
};
