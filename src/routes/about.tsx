import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Briefcase, Package, Code2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BitLabs Technology" },
      { name: "description", content: "We are a team of engineers, designers, and researchers building the future of software." },
      { property: "og:title", content: "About BitLabs Technology" },
      { property: "og:description", content: "Our story, mission, and the people behind the platform." },
    ],
  }),
  component: About,
});

const stats = [
  { icon: Briefcase, label: "Projects Completed", value: "120+" },
  { icon: Users, label: "Active Clients", value: "45+" },
  { icon: Package, label: "Products Built", value: "12" },
  { icon: Code2, label: "Team Members", value: "60+" },
];

const values = [
  { icon: Target, title: "Mission", desc: "Build intelligent systems that help organizations operate at the edge of what's possible." },
  { icon: Eye, title: "Vision", desc: "A world where every business has access to world-class engineering and AI." },
  { icon: Heart, title: "Values", desc: "Craft, honesty, curiosity, and an obsession with the user." },
];

const timeline = [
  { year: "2019", title: "Founded", desc: "BitLabs is founded with a vision to merge engineering excellence with AI." },
  { year: "2021", title: "First Enterprise Clients", desc: "Onboarded our first Fortune-listed customers across fintech and healthcare." },
  { year: "2023", title: "Product Era", desc: "Launched our first commercial product, NeuralCore AI." },
  { year: "2025", title: "Global Scale", desc: "Operating across three continents with 60+ engineers and growing." },
];

function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4">About us</div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            We build software that <span className="text-gradient">thinks ahead</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            BitLabs Technology is an engineering studio crafting intelligent systems for
            ambitious organizations. We blend research, design, and deep technical craft
            into products that compound value over time.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
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
            <div className="font-display text-3xl md:text-4xl font-semibold text-gradient">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Values */}
      <section className="mb-32">
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

      {/* Story / timeline */}
      <section className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-12 text-center">Our story</h2>
        <div className="relative pl-8">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <div className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full bg-primary glow" />
              <div className="font-mono text-xs text-primary mb-1">{t.year}</div>
              <h3 className="font-display text-xl font-semibold mb-1">{t.title}</h3>
              <p className="text-muted-foreground text-sm">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
