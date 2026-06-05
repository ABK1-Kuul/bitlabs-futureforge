import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { k as Check, l as Send, a as Mail, m as Phone, n as MapPin, G as Github, T as Twitter, L as Linkedin } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  textarea
}) {
  const [focused, setFocused] = reactExports.useState(false);
  const Comp = textarea ? "textarea" : "input";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `absolute left-4 transition-all pointer-events-none font-mono text-xs ${focused || value ? "-top-2 px-1 bg-background text-primary" : "top-3.5 text-muted-foreground"}`, children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { name, type, required, value, onChange: (e) => onChange(e.target.value), onFocus: () => setFocused(true), onBlur: () => setFocused(false), rows: textarea ? 5 : void 0, className: "w-full px-4 py-3.5 rounded-xl bg-input/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all resize-none" })
  ] });
}
function Contact() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [sent, setSent] = reactExports.useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 3e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl font-semibold tracking-tight", children: [
        "Let's build something ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "extraordinary" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "Tell us about your project. We'll reply within one business day." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "lg:col-span-3 p-8 md:p-10 rounded-3xl glass relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", required: true, value: form.name, onChange: (v) => setForm({
              ...form,
              name: v
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true, value: form.email, onChange: (v) => setForm({
              ...form,
              email: v
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company", value: form.company, onChange: (v) => setForm({
            ...form,
            company: v
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "How can we help?", name: "message", textarea: true, required: true, value: form.message, onChange: (v) => setForm({
            ...form,
            message: v
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: sent, className: "w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium animate-pulse-glow disabled:opacity-70", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }),
            " Sent — we'll be in touch"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Send message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sent && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.95
        }, animate: {
          opacity: 1,
          scale: 1
        }, exit: {
          opacity: 0
        }, className: "absolute inset-x-0 bottom-0 h-1 bg-gradient-primary" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        [{
          icon: Mail,
          label: "Email",
          value: "hello@bitlabs.tech"
        }, {
          icon: Phone,
          label: "Phone",
          value: "+251 (0) 911 000 000"
        }, {
          icon: MapPin,
          label: "Office",
          value: "Bole Road, Addis Ababa"
        }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: i * 0.08
        }, className: "p-5 rounded-2xl glass flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: item.value })
          ] })
        ] }, item.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl glass overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] grid-bg relative flex items-center justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
            background: "radial-gradient(ellipse at center, oklch(0.3 0.18 260 / 0.4), transparent 70%)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-8 w-8 mx-auto text-primary mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm text-muted-foreground", children: "9.0054° N, 38.7636° E" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [Github, Twitter, Linkedin].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "flex-1 h-12 rounded-xl glass flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, i)) })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
