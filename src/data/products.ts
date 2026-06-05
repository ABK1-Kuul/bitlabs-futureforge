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
    slug: "sinq-authoring-tool",
    name: "SinqAuthoringTool",
    tagline:
      "A next-generation eLearning authoring platform for professional course development.",
    description:
      "SinqAuthoringTool is a standalone eLearning authoring ecosystem that simplifies the creation of interactive, standards-compliant courses. It gives instructional designers, training teams, and educators a unified environment to build, preview, and publish modern learning experiences without external dependencies.",
    tags: ["EdTech", "Authoring", "SCORM", "cmi5"],
    accent: "blue",
    features: [
      { title: "SCORM & cmi5 Support", desc: "Publish courses that work natively across enterprise LMS environments and modern learning records stores." },
      { title: "Interactive Learning Systems", desc: "Compose quizzes, branching scenarios, drag-and-drop activities, and rich media interactions." },
      { title: "Responsive Course Creation", desc: "Author once and deliver fluid experiences across desktop, tablet, and mobile devices." },
      { title: "Offline Accessibility", desc: "Build and consume courses in low-connectivity environments without losing functionality." },
      { title: "Real-time Previews", desc: "Iterate quickly with instant in-editor previews of every screen and interaction." },
      { title: "Gamification Support", desc: "Add points, badges, levels, and progress mechanics to drive learner engagement." },
    ],
    benefits: [
      "Cut course development cycles dramatically",
      "Standardize quality across training teams",
      "Reduce dependency on multiple authoring tools",
      "Deliver consistent experiences across devices",
    ],
    technologies: ["TypeScript", "Electron", "React", "SCORM 1.2 / 2004", "cmi5", "IndexedDB"],
    useCases: [
      "Corporate training and onboarding",
      "Higher education course production",
      "Professional certification programs",
      "Government and NGO capacity building",
    ],
  },
  {
    slug: "tankua",
    name: "Tankua",
    tagline:
      "Intelligent digital infrastructure for modern service ecosystems.",
    description:
      "Tankua is a modern digital platform designed to streamline service accessibility, operational workflows, and intelligent user engagement through scalable technology infrastructure. Built for organizations that need to modernize how services are delivered, accessed, and measured, Tankua unifies operations, customer experience, and analytics into a single intelligent system.",
    tags: ["Platform", "Operations", "Service Delivery", "Cloud"],
    accent: "purple",
    features: [
      { title: "Intelligent Workflow Management", desc: "Automate complex service workflows with rules, approvals, and event-driven orchestration." },
      { title: "Real-Time Service Accessibility", desc: "Deliver consistent, low-latency access across web, mobile, and partner channels." },
      { title: "Scalable Infrastructure", desc: "Elastic architecture that grows from a single team to nationwide service operations." },
      { title: "Analytics & Insights", desc: "Operational dashboards and behavioral analytics to drive continuous service improvement." },
      { title: "Modern User Experience", desc: "Clean, accessible interfaces engineered for clarity, speed, and engagement." },
      { title: "Cloud-Based Architecture", desc: "Cloud-native foundation with high availability, observability, and zero-downtime deploys." },
      { title: "Enterprise Integration", desc: "Connect seamlessly with ERPs, payment rails, identity providers, and partner APIs." },
      { title: "Secure Digital Operations", desc: "Defense-in-depth security with role-based access, audit trails, and encryption in transit and at rest." },
    ],
    benefits: [
      "Modernize service delivery end-to-end",
      "Reduce operational overhead and manual handoffs",
      "Improve accessibility and customer satisfaction",
      "Unlock data-driven decisions across the organization",
    ],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis", "Kubernetes"],
    useCases: [
      "Tours, travel, and hospitality operations",
      "Public and private service providers",
      "Multi-branch service organizations",
      "Digital transformation programs",
    ],
  },
  {
    slug: "cyber-awareness-platform",
    name: "Cyber Awareness Platform",
    tagline:
      "Interactive cybersecurity awareness and organizational training, engineered for digital resilience.",
    description:
      "An organizational cybersecurity awareness platform that turns security training into an engaging, measurable experience. Built to strengthen the human layer of defense through scenario-based learning, behavior analytics, and continuous awareness programs.",
    tags: ["Cybersecurity", "Awareness", "Training", "Analytics"],
    accent: "cyan",
    features: [
      { title: "Scenario-Based Training", desc: "Realistic phishing, social engineering, and incident simulations tailored to your industry." },
      { title: "Gamified Learning", desc: "Leaderboards, achievements, and progression systems that drive sustained engagement." },
      { title: "Analytics Dashboards", desc: "Granular visibility into organizational risk posture, learner progress, and behavioral trends." },
      { title: "Awareness Assessments", desc: "Adaptive assessments that benchmark and track security competency over time." },
      { title: "Organizational Reporting", desc: "Executive-ready reports for compliance, audits, and continuous improvement programs." },
      { title: "Role-Based Programs", desc: "Tailor training paths for executives, technical staff, and front-line employees." },
    ],
    benefits: [
      "Reduce human-factor security incidents",
      "Demonstrate compliance with measurable evidence",
      "Build a sustained culture of cyber awareness",
      "Identify and remediate high-risk groups proactively",
    ],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    useCases: [
      "Financial institutions and fintech",
      "Healthcare and public sector",
      "Enterprise compliance programs",
      "Educational and research institutions",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
