import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Layers, Lightbulb } from "lucide-react";
import { getProduct, products } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: p
        ? [
            { title: `${p.name} — BitLabs Technology` },
            { name: "description", content: p.tagline },
            { property: "og:title", content: `${p.name} — BitLabs Technology` },
            { property: "og:description", content: p.tagline },
          ]
        : [{ title: "Product not found" }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl font-semibold mb-4">Product not found</h1>
      <Link to="/products" className="text-primary">← Back to products</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl font-semibold mb-4">Something went wrong</h1>
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  const related = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              p.accent === "purple"
                ? "radial-gradient(ellipse at top, oklch(0.3 0.18 295 / 0.5), transparent 60%)"
                : p.accent === "cyan"
                ? "radial-gradient(ellipse at top, oklch(0.3 0.15 220 / 0.5), transparent 60%)"
                : "radial-gradient(ellipse at top, oklch(0.3 0.18 260 / 0.5), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-muted-foreground mb-6">
              <Sparkles className="h-3 w-3 text-primary" /> BITLABS PRODUCT
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
              {p.name}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">{p.tagline}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium animate-pulse-glow"
              >
                Request Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass">
                All products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">{p.description}</p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-3">Features</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Built with intent</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {p.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-6 rounded-2xl glass"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                <Layers className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mockup placeholder */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative rounded-3xl glass overflow-hidden p-2">
          <div className="aspect-video rounded-2xl grid-bg relative flex items-center justify-center">
            <div className="absolute inset-0" style={{
              background: "radial-gradient(ellipse at center, oklch(0.3 0.2 260 / 0.5), transparent 70%)",
            }} />
            <div className="relative text-center">
              <div className="h-20 w-20 rounded-2xl bg-gradient-primary glow mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-9 w-9 text-primary-foreground" />
              </div>
              <p className="font-mono text-sm text-muted-foreground">{p.name} · interface preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-3">Benefits</div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Why teams choose it</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {p.benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 p-4 rounded-xl glass">
              <div className="h-6 w-6 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="text-sm">{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech + Use cases */}
      <section className="mx-auto max-w-5xl px-4 py-16 grid md:grid-cols-2 gap-6">
        <div className="p-7 rounded-2xl glass">
          <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <Layers className="h-5 w-5 text-primary" /> Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {p.technologies.map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="p-7 rounded-2xl glass">
          <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" /> Use cases
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {p.useCases.map((u) => (
              <li key={u} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {u}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="relative rounded-3xl glass p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <h2 className="relative font-display text-3xl md:text-4xl font-semibold mb-4">
            See {p.name} in action
          </h2>
          <p className="relative text-muted-foreground max-w-xl mx-auto mb-8">
            Schedule a personalized walkthrough with our team.
          </p>
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium animate-pulse-glow"
          >
            Request Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h3 className="font-display text-2xl font-semibold mb-6">Other products</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/products/$slug"
              params={{ slug: r.slug }}
              className="group p-6 rounded-2xl glass hover:border-primary/40 transition-all"
            >
              <h4 className="font-display text-lg font-semibold mb-1">{r.name}</h4>
              <p className="text-sm text-muted-foreground mb-3">{r.tagline}</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
