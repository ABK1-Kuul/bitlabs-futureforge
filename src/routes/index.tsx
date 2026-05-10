import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Cpu, Cloud, Code2 } from "lucide-react";
import { BinaryMorph } from "@/components/BinaryMorph";
import { Particles } from "@/components/Particles";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BitLabs Technology — Engineering the Future" },
      { name: "description", content: "Custom software, AI, and enterprise platforms engineered for tomorrow." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Cpu, title: "AI & Intelligence", desc: "Production-grade AI systems wired into your workflows." },
  { icon: Code2, title: "Custom Software", desc: "Bespoke platforms engineered for scale and precision." },
  { icon: Cloud, title: "Cloud Native", desc: "Resilient infrastructure that grows with your ambition." },
  { icon: Shield, title: "Secure by Design", desc: "Compliance, governance, and zero-trust baked in." },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <Particles count={30} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            INTELLIGENT SYSTEMS · v2026.1
          </motion.div>

          <BinaryMorph />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            className="mt-12 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Engineering the future through intelligent technology. We design, build,
            and scale software that defines what comes next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium animate-pulse-glow"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl glass font-medium hover:border-primary/50 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title={<>A studio for <span className="text-gradient">intelligent software</span></>}
          desc="From AI infrastructure to enterprise platforms — we build technology that compounds."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl glass hover:border-primary/40 transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-medium mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PRODUCTS PREVIEW */}
      <Section>
        <SectionHeader
          eyebrow="Products"
          title={<>Built for <span className="text-gradient">enterprises</span> that move fast</>}
          desc="A growing suite of platforms engineered by BitLabs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {products.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group block h-full p-6 rounded-2xl glass hover:border-primary/40 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary glow flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.tagline}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative rounded-3xl glass p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <Zap className="relative h-10 w-10 mx-auto text-primary mb-6 glow-text" />
          <h2 className="relative font-display text-3xl md:text-5xl font-semibold mb-4">
            Ready to build what's next?
          </h2>
          <p className="relative text-muted-foreground max-w-xl mx-auto mb-8">
            Let's design, prototype, and ship the system your business needs.
          </p>
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium animate-pulse-glow"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
}

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {eyebrow && (
        <div className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground text-lg">{desc}</p>}
    </div>
  );
}
