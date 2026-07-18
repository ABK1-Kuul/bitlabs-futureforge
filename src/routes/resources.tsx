import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Insights — BitLabs Technology" },
      { name: "description", content: "Read the latest engineering articles, case studies, AI research, and tutorials from the software development team at BitLabs Technology." },
      { name: "keywords", content: "AI research, platform engineering, event sourcing, Postgres scaling, model gateway, RAG search, fintech design" },
      { property: "og:url", content: "https://bitlabsbuild.com/resources" },
      { property: "og:title", content: "Resources & Insights — BitLabs Technology" },
      { property: "og:description", content: "Read the latest engineering articles, case studies, AI research, and tutorials from the software development team at BitLabs Technology." },
    ],
    links: [
      { rel: "canonical", href: "https://bitlabsbuild.com/resources" },
    ],
  }),
  component: Resources,
});

const categories = ["All", "Engineering", "AI Research", "Case Studies", "Tutorials", "Insights"] as const;

interface Article {
  title: string;
  excerpt: string;
  category: typeof categories[number];
  readTime: string;
  date: string;
  featured?: boolean;
}

const articles: Article[] = [
  { title: "Designing AI agents that can be trusted in production", excerpt: "A field guide to evaluation, guardrails, and governance for enterprise agents.", category: "AI Research", readTime: "12 min", date: "May 2026", featured: true },
  { title: "How we cut inference costs by 70% with smart routing", excerpt: "An engineering deep-dive into our model gateway architecture.", category: "Engineering", readTime: "8 min", date: "Apr 2026" },
  { title: "Case Study: Modernizing a 30-year-old ledger", excerpt: "How a global lender migrated to QuantumFlow without downtime.", category: "Case Studies", readTime: "10 min", date: "Apr 2026" },
  { title: "Building event-sourced systems in 2026", excerpt: "Patterns, pitfalls, and a reference implementation.", category: "Tutorials", readTime: "15 min", date: "Mar 2026" },
  { title: "The platform engineering maturity model", excerpt: "From CI/CD scripts to a true internal developer platform.", category: "Insights", readTime: "7 min", date: "Mar 2026" },
  { title: "RAG is dead, long live retrieval", excerpt: "Why we moved beyond naive vector search.", category: "AI Research", readTime: "9 min", date: "Feb 2026" },
  { title: "Postgres at petabyte scale", excerpt: "Scaling stories from our most demanding customers.", category: "Engineering", readTime: "11 min", date: "Feb 2026" },
  { title: "Designing for trust in financial UIs", excerpt: "Lessons from shipping the Pulse Fintech Suite.", category: "Insights", readTime: "6 min", date: "Jan 2026" },
];

function Resources() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<typeof categories[number]>("All");

  const filtered = useMemo(
    () =>
      articles.filter(
        (a) =>
          (cat === "All" || a.category === cat) &&
          (query === "" || (a.title + a.excerpt).toLowerCase().includes(query.toLowerCase()))
      ),
    [query, cat]
  );

  const featured = articles.find((a) => a.featured);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <section className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4">Resources</div>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
          Field notes from the <span className="text-gradient">edge</span>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Engineering essays, research, and case studies from the BitLabs team.
        </p>
      </section>

      {/* Featured */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 rounded-3xl glass overflow-hidden grid md:grid-cols-2"
        >
          <div className="relative grid-bg min-h-[260px]">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, oklch(0.4 0.2 270 / 0.5), transparent 70%)" }} />
            <div className="absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full bg-primary text-primary-foreground">FEATURED</div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="text-xs font-mono text-primary mb-3">{featured.category} · {featured.readTime}</span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">{featured.title}</h2>
            <p className="text-muted-foreground mb-6">{featured.excerpt}</p>
            <Link
              to="/resources"
              hash="featured"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
              aria-label={`Read featured article: ${featured.title}`}
            >
              Read article <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}

      {/* Search + filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-input/40 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-xl text-sm transition-all ${
                cat === c ? "bg-gradient-primary text-primary-foreground" : "glass hover:border-primary/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section>
        <h2 className="sr-only">Articles & Insights Grid</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                to="/resources"
                hash={a.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="group block h-full p-6 rounded-2xl glass hover:border-primary/40 hover:-translate-y-1 transition-all"
                aria-label={`Read article: ${a.title}`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-3">
                  <span className="text-primary">{a.category}</span>
                  <span>{a.readTime}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{a.excerpt}</p>
                <div className="text-xs text-muted-foreground">{a.date}</div>
              </Link>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16 text-muted-foreground">
              No articles match your search.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
