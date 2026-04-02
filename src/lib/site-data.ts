export type NavItem = {
  href: string;
  label: string;
};

export type Capability = {
  title: string;
  description: string;
  bullets: string[];
};

export type ProjectStatus = "Live" | "Prototype" | "Internal" | "Concept";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  track: string;
  featured: boolean;
  outcome: string;
  disclosure: string;
  detail: {
    problem: string;
    system: string;
    architecture: string[];
    currentFocus: string;
    stage: string;
  };
};

export type CoreRole = {
  id: string;
  title: string;
  label: string;
  summary: string;
  focus: string;
  responsibilities: string[];
  note: string;
};

export const companyProfile = {
  name: "Bento AIII",
  positioning:
    "A technology company focused on AI applications and large language model systems, building practical products, workflows, and digital experiences.",
  description:
    "Bento AIII is a small AI product and systems studio. The work usually sits between interface design, operator workflow, retrieval behavior, and delivery detail.",
  mission:
    "Build AI software that is readable, reviewable, and useful inside real business workflows.",
  disclosure:
    "This site shows current capability tracks and core delivery roles. Public case studies are intentionally limited while work is still internal, early-stage, or private."
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" }
];

export const heroSignals = [
  {
    label: "Build focus",
    value: "AI applications, LLM systems, internal workflow software"
  },
  {
    label: "System concerns",
    value: "Retrieval, prompting, evaluation, review, interface clarity"
  },
  {
    label: "Working mode",
    value: "Small-team delivery with practical scope and visible tradeoffs"
  }
];

export const capabilityPillars: Capability[] = [
  {
    title: "AI Product Engineering",
    description:
      "Bento AIII frames the workflow, defines the interface, and ships the software layer around the model instead of treating AI as a bolt-on feature.",
    bullets: ["Product scoping", "Operator surfaces", "Frontend delivery"]
  },
  {
    title: "LLM Systems",
    description:
      "The system work covers retrieval, prompt behavior, orchestration, and evaluation so language model features can hold up under real use.",
    bullets: ["RAG systems", "Agent workflows", "Guardrails and evals"]
  },
  {
    title: "Workflow Automation",
    description:
      "Repetitive business motion gets translated into reviewable AI-assisted workflows with clear human checkpoints where judgment still matters.",
    bullets: ["Approval flows", "Task routing", "Operational tooling"]
  },
  {
    title: "Delivery for Real Teams",
    description:
      "The delivery model assumes mixed systems, imperfect inputs, and the need to explain decisions to operators and stakeholders.",
    bullets: ["Incremental rollout", "Auditability", "Maintainable handoff"]
  }
];

export const projects: Project[] = [
  {
    slug: "support-knowledge-console",
    name: "Support Knowledge Console",
    summary:
      "A retrieval-first workspace for support and operations lookup.",
    description:
      "A current applied track for teams that need grounded answers against internal documentation, policy notes, and change logs.",
    tags: ["Retrieval", "Next.js", "LLM"],
    status: "Prototype",
    track: "External Track",
    featured: true,
    outcome:
      "Established a believable delivery shape for documentation-heavy teams without overstating deployment maturity.",
    disclosure:
      "Representative applied track. Public references are intentionally omitted while work is still early or private.",
    detail: {
      problem:
        "Documentation-heavy teams lose time moving between wikis, PDFs, and ticket history when answers need source grounding.",
      system:
        "The system combines ingestion, retrieval, answer generation, and reviewer visibility inside a single operator surface.",
      architecture: [
        "Ingestion and chunking flow for internal documentation and policy material",
        "Retrieval-backed answer composer with visible source context",
        "Operator interface for review, correction, and feedback capture"
      ],
      currentFocus:
        "Tighten source ranking, answer formatting, and citation visibility before broader rollout.",
      stage:
        "Prototype scoped around limited-source collections and reviewer feedback."
    }
  },
  {
    slug: "internal-copilot-workflow",
    name: "Internal Copilot Workflow",
    summary:
      "An internal assistant pattern for request intake, drafting, and review queues.",
    description:
      "An internal build focused on structuring repetitive request work before it hits human reviewers.",
    tags: ["Workflow", "Prompting", "Internal Tools"],
    status: "Internal",
    track: "Internal Build",
    featured: true,
    outcome:
      "Defined a usable internal pattern for triage and draft generation without claiming a public product launch.",
    disclosure:
      "Internal operating build, shown here as a capability direction rather than a client case study.",
    detail: {
      problem:
        "Teams receive recurring requests with thin context, inconsistent formatting, and too much manual preparation work.",
      system:
        "Bento AIII maps intake, context assembly, drafting, and review into a staged internal workflow.",
      architecture: [
        "Request intake layer with structured fields and task typing",
        "Draft generation block with editable prompt and source inputs",
        "Review queue with status, owner, and approval checkpoints"
      ],
      currentFocus:
        "Reduce manual triage time while keeping reviewer control visible in the interface.",
      stage:
        "Internal build used to refine workflow shape before any public release."
    }
  },
  {
    slug: "review-operations-layer",
    name: "Review Operations Layer",
    summary:
      "A review layer for conversation, draft, and policy-sensitive outputs.",
    description:
      "A practical track for teams that need a structured way to inspect AI-assisted output before it becomes operational.",
    tags: ["Evaluation", "Transcripts", "Node.js"],
    status: "Prototype",
    track: "External Track",
    featured: true,
    outcome:
      "Showed how quality review could be made faster and more consistent without pretending full automation.",
    disclosure:
      "Representative quality-assurance direction. Public deployment details are intentionally withheld.",
    detail: {
      problem:
        "Policy-sensitive outputs often need a repeatable review layer, but fully manual checking does not scale well.",
      system:
        "The system groups outputs into reviewable units, applies explicit criteria, and surfaces exceptions that need human attention.",
      architecture: [
        "Input normalization for drafts, conversations, and generated summaries",
        "Criteria engine for policy fit, tone, and escalation triggers",
        "Reviewer dashboard for exception queues and sample inspection"
      ],
      currentFocus:
        "Tighten rubric calibration and reviewer workflows before wider adoption.",
      stage:
        "Prototype held at a reviewable scope, not marketed as autonomous QA."
    }
  },
  {
    slug: "ai-delivery-foundation",
    name: "AI Delivery Foundation",
    summary:
      "A shared internal layer for interface patterns, prompt primitives, and operating rules.",
    description:
      "An internal capability block intended to make future Bento AIII builds more consistent and easier to maintain.",
    tags: ["Design System", "Prompt Ops", "Internal Platform"],
    status: "Internal",
    track: "Capability Layer",
    featured: false,
    outcome:
      "Shortened the distance between concept, interface scaffold, and usable system behavior for internal builds.",
    disclosure:
      "Internal foundation work. It supports delivery quality rather than serving as a public-facing product.",
    detail: {
      problem:
        "Repeated AI builds were recreating the same chat, search, review, and prompt-control patterns from scratch.",
      system:
        "Bento AIII keeps a shared layer for UI structure, prompt behavior, and system conventions that can be reused across engagements.",
      architecture: [
        "Reusable UI blocks for review, context display, and action history",
        "Prompt and evaluation primitives aligned to delivery workflows",
        "Internal documentation for repeatable engineering decisions"
      ],
      currentFocus:
        "Consolidate shared primitives so new projects start from a tighter operational baseline.",
      stage:
        "Internal capability layer under active use and continuous cleanup."
    }
  },
  {
    slug: "decision-briefing-study",
    name: "Decision Briefing Study",
    summary:
      "A concept track for turning fragmented updates into concise operating briefs.",
    description:
      "Kept intentionally exploratory while the expected inputs, review path, and reporting tolerance are still being tested.",
    tags: ["Summarization", "Reporting", "Concept"],
    status: "Concept",
    track: "Concept Study",
    featured: false,
    outcome:
      "Created a realistic concept boundary for a briefing system without pretending it is already a product line.",
    disclosure:
      "Concept-only direction. It is listed to show problem space coverage, not to imply a finished deployment.",
    detail: {
      problem:
        "Leadership reporting often breaks down when updates live across notes, dashboards, and uneven status writeups.",
      system:
        "The concept organizes incoming updates by workstream, risk, and decision point before drafting a compact brief for review.",
      architecture: [
        "Ingestion model for status notes, metrics, and milestone updates",
        "Drafting layer focused on variance, blockers, and next decisions",
        "Human review gate before anything becomes an official brief"
      ],
      currentFocus:
        "Validate what a trustworthy briefing workflow would need before any build commitment.",
      stage:
        "Concept study only. No production or commercial rollout is implied."
    }
  }
];

export const coreRoles: CoreRole[] = [
  {
    id: "leadership-product",
    title: "Leadership + Product",
    label: "Core role",
    summary:
      "Owns scoping, workflow framing, and product direction so the build stays tied to an actual operating problem.",
    focus:
      "Turns business context into a clear delivery boundary, interface direction, and implementation sequence.",
    responsibilities: ["Scope", "Product shape", "Delivery decisions"],
    note:
      "This role keeps Bento AIII from drifting into model-first demos with weak workflow fit."
  },
  {
    id: "ai-systems",
    title: "AI Systems",
    label: "Core role",
    summary:
      "Handles retrieval, prompt behavior, evaluation loops, and the runtime logic around model-assisted features.",
    focus:
      "Keeps the model layer usable, inspectable, and aligned with the real boundaries of the workflow.",
    responsibilities: ["Retrieval", "Prompting", "Evaluation"],
    note:
      "The emphasis is on stable system behavior, not just getting a plausible output once."
  },
  {
    id: "design-frontend",
    title: "Design + Frontend",
    label: "Core role",
    summary:
      "Shapes the interface, component language, and implementation fidelity so the product is clear under real use.",
    focus:
      "Brings product hierarchy, readable states, and reliable frontend execution into the same loop.",
    responsibilities: ["Interface systems", "Frontend build", "Design consistency"],
    note:
      "The goal is a surface operators can understand quickly, not a decorative AI dashboard."
  },
  {
    id: "delivery-integration",
    title: "Delivery + Integration",
    label: "Core role",
    summary:
      "Connects product decisions to internal systems, review paths, and deployment realities.",
    focus:
      "Makes sure the shipped system has a workable handoff, clear ownership, and operational fit after launch.",
    responsibilities: ["Integrations", "Review controls", "Operational rollout"],
    note:
      "This role treats delivery quality as part of the product, not something added after the demo works."
  }
];

export const values = [
  {
    title: "Practical Intelligence",
    description:
      "We focus on useful systems, not demos that collapse outside ideal conditions."
  },
  {
    title: "Readable Systems",
    description:
      "Operators and stakeholders should be able to understand what the system is doing and why."
  },
  {
    title: "Production Discipline",
    description:
      "Evaluation, traceability, and rollout strategy matter as much as the model call itself."
  },
  {
    title: "Shared Ownership",
    description:
      "The best AI products are built with design, engineering, and operations aligned from the start."
  }
];

export const roadmap = [
  {
    phase: "Phase 01",
    title: "Tighten Shared Build Blocks",
    description:
      "Keep consolidating the interface, prompt, and review primitives reused across Bento AIII delivery work."
  },
  {
    phase: "Phase 02",
    title: "Publish Only Verifiable Case Material",
    description:
      "Turn internal notes into public case studies only when the scope, results, and permissions are concrete enough to stand behind."
  },
  {
    phase: "Phase 03",
    title: "Expand Evaluation Coverage",
    description:
      "Increase the depth of review and evaluation patterns used across operator-facing AI systems."
  },
  {
    phase: "Phase 04",
    title: "Refine Intake and Delivery Ops",
    description:
      "Improve scoping, reporting, and handoff so the company can stay small without becoming ad hoc."
  }
];

export type ContactChannel = {
  label: string;
  value: string;
  note: string;
  href?: string;
};

export const contactChannels = [
  {
    label: "General email",
    value: "hello@bentoaiii.com",
    href: "mailto:hello@bentoaiii.com",
    note: "General inquiries, project introductions, and first-contact conversations"
  },
  {
    label: "Project intake",
    value: "Use the form below",
    note: "Best for structured briefs, workflow notes, or a scoped description of the problem"
  },
  {
    label: "Base",
    value: "Edmonton, Alberta / remote",
    note: "Distributed delivery across product, engineering, and AI systems work"
  }
] satisfies ContactChannel[];
