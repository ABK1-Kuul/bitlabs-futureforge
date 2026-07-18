import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Code2, GraduationCap, BookOpen, ShieldCheck, Cloud, Compass,
  Workflow, Palette, Plug, LineChart,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — BitLabs Technology" },
      { name: "description", content: "Explore our end-to-end engineering capabilities, including custom enterprise software, educational technology, cybersecurity platforms, and cloud infrastructure." },
      { name: "keywords", content: "custom software development, learning management systems, LMS, SCORM, cybersecurity training, cloud migration, workflow automation, UI UX engineering" },
      { property: "og:url", content: "https://bitlabsbuild.com/services" },
      { property: "og:title", content: "Our Services — BitLabs Technology" },
      { property: "og:description", content: "Explore our end-to-end engineering capabilities, including custom enterprise software, educational technology, cybersecurity platforms, and cloud infrastructure." },
    ],
    links: [
      { rel: "canonical", href: "https://bitlabsbuild.com/services" },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Code2, title: "Enterprise Software Development", desc: "Custom-engineered platforms built for scalability, secure architecture, and long-term operational reliability." },
  { icon: GraduationCap, title: "Educational Technology Solutions", desc: "Modern EdTech systems that expand access, improve learning outcomes, and modernize institutional workflows." },
  { icon: BookOpen, title: "Learning Management Systems", desc: "Custom and Moodle-based LMS environments with SCORM compliance, analytics, and mobile-ready delivery." },
  { icon: ShieldCheck, title: "Cybersecurity Platforms", desc: "Awareness programs, assessments, and protective systems that harden the human and technical layers of defense." },
  { icon: Cloud, title: "Cloud Infrastructure Services", desc: "Cloud migration, containerization, and resilient deployment architectures engineered for continuity." },
  { icon: Compass, title: "Digital Transformation Consulting", desc: "Strategic guidance to modernize operations, align technology with business goals, and unlock scalable growth." },
  { icon: Workflow, title: "Workflow Automation Systems", desc: "Intelligent automation that removes operational friction and frees teams to focus on higher-value work." },
  { icon: Palette, title: "UI / UX Engineering", desc: "Human-centered interfaces that translate complexity into clarity across every touchpoint." },
  { icon: Plug, title: "API & Systems Integration", desc: "Reliable, well-documented integrations that connect platforms, data, and external services at scale." },
  { icon: LineChart, title: "Intelligent Analytics Solutions", desc: "Decision-grade analytics that turn organizational data into measurable operational insight." },
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
          A full-cycle technology partner for enterprise systems, educational platforms,
          cybersecurity, and digital transformation.
        </p>
      </section>

      <section>
        <h2 className="sr-only">Our Core Service Capabilities</h2>
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
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
