export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  features: { title: string; desc: string }[];
  benefits: string[];
  technologies: string[];
  useCases: string[];
  accent: "blue" | "purple" | "cyan";
}

export const products: Product[] = [
  {
    slug: "neuralcore-ai",
    name: "NeuralCore AI",
    tagline: "An enterprise AI platform that learns your business.",
    description:
      "NeuralCore AI is a unified intelligence layer that orchestrates LLMs, custom models, retrieval, and agents across your organization — with full observability and governance.",
    tags: ["AI", "LLM Ops", "RAG", "Enterprise"],
    accent: "blue",
    features: [
      { title: "Unified Model Gateway", desc: "Route requests across OpenAI, Anthropic, and self-hosted models with smart fallback." },
      { title: "Knowledge Retrieval", desc: "Connect documents, databases, and SaaS apps as first-class context sources." },
      { title: "Agent Orchestration", desc: "Compose multi-step agents with tool use, memory, and human approval gates." },
      { title: "Governance & Audit", desc: "Policy controls, PII redaction, and immutable audit trails out of the box." },
    ],
    benefits: [
      "Cut model costs by routing intelligently",
      "Ship AI features 10x faster",
      "Stay compliant with built-in guardrails",
      "Scale from prototype to production seamlessly",
    ],
    technologies: ["TypeScript", "Python", "Postgres", "pgvector", "Kubernetes", "Redis"],
    useCases: ["Customer support automation", "Internal knowledge assistants", "Document intelligence", "Code generation pipelines"],
  },
  {
    slug: "quantumflow-erp",
    name: "QuantumFlow ERP",
    tagline: "Modern ERP for fast-moving operations.",
    description:
      "A next-generation ERP that unifies finance, inventory, HR, and operations into a single real-time data spine — built for the speed of modern business.",
    tags: ["ERP", "Operations", "Finance", "Cloud"],
    accent: "purple",
    features: [
      { title: "Real-time Ledger", desc: "Event-sourced accounting with instant consolidation across entities." },
      { title: "Inventory Intelligence", desc: "Predictive stock optimization powered by demand forecasting." },
      { title: "Workflow Studio", desc: "Visual builder for approvals, automations, and SOPs without code." },
      { title: "Open API", desc: "Every entity is fully programmable through a typed REST and GraphQL API." },
    ],
    benefits: [
      "One source of truth across departments",
      "Replace 10+ legacy tools",
      "Deploy in weeks, not years",
      "Scale globally with multi-currency, multi-entity",
    ],
    technologies: ["Node.js", "PostgreSQL", "Kafka", "React", "Tailwind", "AWS"],
    useCases: ["Manufacturing", "Distribution & retail", "Professional services", "Multi-entity holdings"],
  },
  {
    slug: "shieldgrid-security",
    name: "ShieldGrid Security",
    tagline: "Adaptive cybersecurity for cloud-native teams.",
    description:
      "ShieldGrid combines posture management, runtime threat detection, and automated response into a single, calm operations console.",
    tags: ["Security", "Cloud", "SOC", "Detection"],
    accent: "cyan",
    features: [
      { title: "Continuous Posture", desc: "Surface misconfigurations across AWS, GCP, and Azure in minutes." },
      { title: "Runtime Detection", desc: "eBPF-based agents catch anomalies without performance overhead." },
      { title: "Auto-remediation", desc: "Codified playbooks fix common findings without paging humans." },
      { title: "Unified Console", desc: "One place to investigate, triage, and report across tools." },
    ],
    benefits: [
      "Reduce mean time to detect by 80%",
      "Eliminate alert fatigue",
      "Achieve SOC 2 / ISO 27001 faster",
      "Single pane across multi-cloud",
    ],
    technologies: ["Go", "Rust", "eBPF", "ClickHouse", "Terraform", "Kubernetes"],
    useCases: ["SaaS startups", "Fintech compliance", "Healthcare data protection", "Multi-cloud governance"],
  },
  {
    slug: "orbit-devops",
    name: "Orbit DevOps Cloud",
    tagline: "Internal developer platform in a box.",
    description:
      "Orbit gives engineering teams a turnkey IDP — golden paths, environments, observability, and supply chain security, all wired up on day one.",
    tags: ["DevOps", "Platform", "CI/CD", "Observability"],
    accent: "blue",
    features: [
      { title: "Golden Paths", desc: "Self-service templates for new services with built-in best practices." },
      { title: "Ephemeral Envs", desc: "Per-PR environments spin up in under 60 seconds." },
      { title: "Observability", desc: "Logs, metrics, and traces unified with OpenTelemetry." },
      { title: "Supply Chain", desc: "SBOMs, signing, and provenance enforced in every pipeline." },
    ],
    benefits: [
      "Onboard engineers in hours, not weeks",
      "Cut cloud spend with smart autoscaling",
      "Ship safer with policy-as-code",
      "Reduce on-call burden",
    ],
    technologies: ["Kubernetes", "ArgoCD", "Terraform", "Backstage", "OpenTelemetry"],
    useCases: ["Scaling engineering orgs", "Platform teams", "Regulated industries", "Multi-tenant SaaS"],
  },
  {
    slug: "lumen-analytics",
    name: "Lumen Analytics",
    tagline: "Ask your data anything. In plain English.",
    description:
      "Lumen turns your data warehouse into a conversational analyst — every chart, dashboard, and answer derived from a governed semantic layer.",
    tags: ["Analytics", "BI", "AI", "SQL"],
    accent: "purple",
    features: [
      { title: "Semantic Layer", desc: "Define metrics once, use them across every report and AI query." },
      { title: "Conversational BI", desc: "Ask questions in natural language and get verified answers." },
      { title: "Live Dashboards", desc: "Streaming updates with sub-second freshness." },
      { title: "Embedded Analytics", desc: "White-label dashboards into your own product in minutes." },
    ],
    benefits: [
      "Democratize data without losing trust",
      "Stop building one-off dashboards",
      "Empower non-technical teams",
      "Single source of metrics truth",
    ],
    technologies: ["DuckDB", "dbt", "TypeScript", "ClickHouse", "Apache Arrow"],
    useCases: ["Product analytics", "Revenue operations", "Executive reporting", "Embedded SaaS analytics"],
  },
  {
    slug: "pulse-fintech",
    name: "Pulse Fintech Suite",
    tagline: "Payments, ledger, and compliance — composable.",
    description:
      "A modular fintech backend providing accounts, payments, ledger, and KYC primitives that you can assemble into any financial product.",
    tags: ["Fintech", "Payments", "Ledger", "KYC"],
    accent: "cyan",
    features: [
      { title: "Double-entry Ledger", desc: "Battle-tested ledger engine with atomic multi-currency transfers." },
      { title: "Payment Rails", desc: "Unified API across cards, ACH, SEPA, and local methods." },
      { title: "KYC / KYB", desc: "Onboarding flows with global identity providers built-in." },
      { title: "Reconciliation", desc: "Automated matching across processors and bank feeds." },
    ],
    benefits: [
      "Launch financial products in weeks",
      "Pass regulatory audits with confidence",
      "Scale to billions in volume",
      "Avoid building core ledger from scratch",
    ],
    technologies: ["Rust", "PostgreSQL", "gRPC", "Kafka", "TypeScript"],
    useCases: ["Neobanks", "Marketplaces", "Embedded finance", "Crypto on-ramps"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
