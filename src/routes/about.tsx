import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Building2, GraduationCap, Workflow, Layers } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BitLabs Technology" },
      { name: "description", content: "BitLabs Technology PLC builds intelligent digital ecosystems for organizations across Africa and beyond." },
      { property: "og:title", content: "About BitLabs Technology" },
      { property: "og:description", content: "A next-generation technology company engineering scalable, human-centered digital ecosystems." },
    ],
  }),
  component: About,
});

const stats = [
  { icon: Building2, label: "Enterprise Solutions" },
  { icon: GraduationCap, label: "Digital Learning Systems" },
  { icon: Workflow, label: "Automation Platforms" },
  { icon: Layers, label: "Scalable Infrastructure" },
];

const values = [
  { icon: Target, title: "Mission", desc: "Design and deliver innovative software systems that simplify operations, improve productivity, and create meaningful long-term value." },
  { icon: Eye, title: "Vision", desc: "To become Africa's leading digital transformation and educational technology company through intelligent, human-centered engineering." },
  { icon: Heart, title: "Values", desc: "Innovation with purpose, excellence through technology, client-centered collaboration, integrity, and impact-driven development." },
];

const principles = [
  "Technical excellence",
  "Human-centered design",
  "Strategic innovation",
  "Scalable engineering",
  "Long-term partnership commitment",
];

function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4">About us</div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            Engineering <span className="text-gradient">intelligent digital ecosystems</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            BitLabs Technology PLC is a next-generation technology company focused on building
            intelligent, scalable, and transformative digital ecosystems for organizations across
            Africa and beyond.
          </p>
        </motion.div>
      </section>

      {/* Narrative */}
      <section className="max-w-3xl mx-auto mb-32 space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
        <p>
          We specialize in enterprise software development, educational technology, cybersecurity
          systems, cloud infrastructure, workflow automation, and digital transformation solutions
          engineered for long-term operational impact.
        </p>
        <p>
          We do not build generic systems. We build intelligent digital ecosystems specifically
          engineered to solve operational challenges, improve efficiency, and support sustainable
          organizational growth.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 pt-4">
          {principles.map((p) => (
            <div key={p} className="flex items-center gap-3 p-4 rounded-xl glass">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-sm text-foreground">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Capability pillars */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 rounded-2xl glass text-center"
          >
            <s.icon className="h-5 w-5 mx-auto mb-3 text-primary" />
            <div className="text-sm font-medium">{s.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Values */}
      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl glass"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <v.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
