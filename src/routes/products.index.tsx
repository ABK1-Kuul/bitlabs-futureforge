import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Enterprise Products — BitLabs Technology" },
      { name: "description", content: "Explore BitLabs' flagship enterprise products: SinqAuthoringTool for eLearning, Tankua for digital operations, and our Cyber Awareness Platform." },
      { name: "keywords", content: "SinqAuthoringTool, Tankua, cybersecurity platform, eLearning authoring tool, digital infrastructure, corporate training software" },
      { property: "og:url", content: "https://bitlabsbuild.com/products" },
      { property: "og:title", content: "Enterprise Products — BitLabs Technology" },
      { property: "og:description", content: "Explore BitLabs' flagship enterprise products: SinqAuthoringTool for eLearning, Tankua for digital operations, and our Cyber Awareness Platform." },
    ],
    links: [
      { rel: "canonical", href: "https://bitlabsbuild.com/products" },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <section className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4">Products</div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
          Platforms engineered for <span className="text-gradient">organizational impact</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Purpose-built products that solve real operational challenges in learning,
          security, and enterprise enablement.
        </p>
      </section>

      <section>
        <h2 className="sr-only">Our Flagship Enterprise Products</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group block h-full p-7 rounded-2xl glass hover:border-primary/40 hover:-translate-y-1 transition-all"
              >
                <div className="relative h-44 rounded-xl mb-6 overflow-hidden grid-bg">
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      background:
                        p.accent === "purple"
                          ? "radial-gradient(ellipse at center, oklch(0.5 0.2 295 / 0.6), transparent 70%)"
                          : p.accent === "cyan"
                          ? "radial-gradient(ellipse at center, oklch(0.6 0.18 220 / 0.6), transparent 70%)"
                          : "radial-gradient(ellipse at center, oklch(0.5 0.22 260 / 0.6), transparent 70%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-primary glow flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sparkles className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.tagline}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                  View Product <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
