import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Zap, Shield, Cpu, Cloud, Code2,
  Layers, Heart, Rocket, Handshake, Compass, Brain, GraduationCap,
  Workflow, LineChart, ShieldCheck,
} from "lucide-react";
import { BinaryMorph } from "@/components/BinaryMorph";
import { Particles } from "@/components/Particles";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BitLabs Technology — Building Intelligent Digital Ecosystems" },
      { name: "description", content: "BitLabs Technology PLC engineers enterprise systems, educational technology, cybersecurity platforms, and digital transformation solutions for organizations across Africa and beyond." },
    ],
  }),
  component: Home,
});

const capabilities = [
  { icon: Cpu, title: "Enterprise Systems", desc: "Scalable, secure platforms engineered for long-term operational impact." },
  { icon: GraduationCap, title: "Educational Technology", desc: "Learning ecosystems that expand access and improve outcomes." },
  { icon: Shield, title: "Cybersecurity", desc: "Awareness and protection programs that strengthen digital resilience." },
  { icon: Cloud, title: "Digital Transformation", desc: "Cloud-native architectures that modernize how organizations operate." },
];

const whyChoose = [
  { icon: Compass, title: "Deep Industry Understanding", desc: "We design for the real operational realities of the sectors we serve." },
  { icon: Layers, title: "Full-Cycle Development Capability", desc: "From discovery and architecture to deployment and continuous evolution." },
  { icon: Rocket, title: "Enterprise-Grade Scalability", desc: "Systems engineered to grow with your organization, not against it." },
  { icon: Heart, title: "Human-Centered Design", desc: "Interfaces and workflows that empower users rather than overwhelm them." },
  { icon: Brain, title: "Innovation-Driven Engineering", desc: "Modern stacks, intelligent automation, and forward-looking architecture." },
  { icon: Handshake, title: "Long-Term Partnership Approach", desc: "We invest in client success well beyond initial delivery." },
];

const transformationPillars = [
  "Simplifying complexity",
  "Improving accessibility",
  "Automating repetitive processes",
  "Strengthening collaboration",
  "Enabling scalable growth",
  "Empowering users through intuitive systems",
];

const futureFocus = [
  { icon: Brain, title: "AI-Powered Enterprise Systems" },
  { icon: Workflow, title: "Intelligent Automation" },
  { icon: Cloud, title: "Cloud-Native Infrastructure" },
  { icon: GraduationCap, title: "Adaptive Learning Systems" },
  { icon: LineChart, title: "Predictive Analytics" },
  { icon: ShieldCheck, title: "Cybersecurity Resilience" },
  { icon: Layers, title: "Scalable Digital Ecosystems" },
  { icon: Code2, title: "Future-Ready Engineering" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <Particles count={14} />

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            BITLABS TECHNOLOGY PLC · INTELLIGENT SYSTEMS
          </motion.div>

          <BinaryMorph />

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 font-display text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl mx-auto"
          >
            Building <span className="text-gradient">Intelligent Digital Ecosystems</span> for the Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            BitLabs Technology PLC develops scalable enterprise systems, educational technologies,
            cybersecurity platforms, and digital transformation solutions designed to help
            organizations operate smarter, grow faster, and innovate confidently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium animate-pulse-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl glass font-medium hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Products
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 text-xs font-mono tracking-widest uppercase text-muted-foreground/80"
          >
            Enterprise Systems · EdTech · Cybersecurity · Digital Transformation
          </motion.p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title={<>A studio for <span className="text-gradient">intelligent software</span></>}
          desc="From enterprise platforms to learning ecosystems — we engineer technology that compounds."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {capabilities.map((f, i) => (
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
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PRODUCTS PREVIEW */}
      <Section>
        <SectionHeader
          eyebrow="Products"
          title={<>Built for <span className="text-gradient">organizations</span> that move forward</>}
          desc="A focused product suite engineered by BitLabs Technology."
        />
        <div className="grid md:grid-cols-2 gap-5 mt-16">
          {products.map((p, i) => (
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.tagline}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 4).map((t) => (
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

      {/* WHY CHOOSE */}
      <Section>
        <SectionHeader
          eyebrow="Why BitLabs"
          title={<>Why organizations <span className="text-gradient">choose BitLabs Technology</span></>}
          desc="We combine strategic innovation, technical capability, and scalable engineering to help organizations modernize operations and prepare confidently for the future."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {whyChoose.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group p-7 rounded-2xl glass hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <w.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* DIGITAL TRANSFORMATION PHILOSOPHY */}
      <Section>
        <div className="relative rounded-3xl glass overflow-hidden p-10 md:p-16">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div
            className="absolute inset-0 opacity-70"
            style={{ background: "radial-gradient(ellipse at top right, oklch(0.4 0.2 260 / 0.35), transparent 60%)" }}
          />
          <div className="relative max-w-4xl">
            <div className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4">Philosophy</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-6">
              Digital Transformation, <span className="text-gradient">redefined</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              True digital transformation occurs when technology fundamentally improves how
              organizations operate, communicate, and scale.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-10">
              {transformationPillars.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary glow" />
                  <span className="text-sm">{p}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FUTURE VISION */}
      <Section>
        <SectionHeader
          eyebrow="Future vision"
          title={<>Building the future of <span className="text-gradient">intelligent organizations</span></>}
          desc="We invest in the architectures, systems, and ideas that will define the next decade of enterprise technology."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {futureFocus.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.06 }}
              className="group p-5 rounded-2xl glass hover:border-primary/40 transition-all"
            >
              <f.icon className="h-5 w-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-medium leading-snug">{f.title}</h3>
            </motion.div>
          ))}
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
            Let's design, engineer, and deploy the systems your organization needs to move forward.
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
      {desc && <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{desc}</p>}
    </div>
  );
}
