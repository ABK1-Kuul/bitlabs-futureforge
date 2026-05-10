import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Code2, Globe, Smartphone, BrainCircuit, Cloud, Palette,
  Database, Plug, GitBranch, Headphones, ShieldCheck, Settings,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BitLabs Technology" },
      { name: "description", content: "Software engineering, AI, cloud, design, and security — all under one roof." },
      { property: "og:title", content: "Services — BitLabs Technology" },
      { property: "og:description", content: "Custom software, AI, mobile, cloud, and more." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Bespoke platforms engineered from first principles." },
  { icon: Globe, title: "Web Development", desc: "High-performance web apps with cinematic interfaces." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-feel iOS and Android products people love." },
  { icon: BrainCircuit, title: "AI Solutions", desc: "LLMs, RAG, agents, and custom models in production." },
  { icon: Cloud, title: "Cloud Systems", desc: "Multi-cloud architecture, IaC, and edge deployments." },
  { icon: Palette, title: "UI / UX Design", desc: "Interface design that translates strategy into clarity." },
  { icon: Database, title: "ERP Systems", desc: "Modern ERPs unifying finance, ops, and inventory." },
  { icon: Plug, title: "API Integration", desc: "Seamless connectivity across SaaS, payments, and data." },
  { icon: GitBranch, title: "DevOps", desc: "Pipelines, observability, and platform engineering done right." },
  { icon: Headphones, title: "IT Consulting", desc: "Strategic technical guidance from senior engineers." },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Posture, detection, and zero-trust at scale." },
  { icon: Settings, title: "Managed Services", desc: "We run, monitor, and improve your platforms 24/7." },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <section className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4">Services</div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
          Engineering capabilities, <span className="text-gradient">end to end</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A full-stack technology partner for product, infrastructure, and intelligence.
        </p>
      </section>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (i % 6) * 0.06 }}
            className="group relative p-7 rounded-2xl glass hover:border-primary/40 hover:-translate-y-1 transition-all overflow-hidden"
          >
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, oklch(0.72 0.2 250 / 0.15), transparent 60%)" }}
            />
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
