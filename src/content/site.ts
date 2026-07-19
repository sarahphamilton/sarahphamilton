export const site = {
  name: "Sarah Hamilton",
  role: "Program & Operations Leader",
  tagline: "Complex work. Simple systems.",
  email: "sprich08@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarahphamilton/",
  calendly: "https://calendly.com/sprich08",
  location: "Houston, Texas · Open to remote opportunities",
  intro:
    "I make complicated organizations easier to run—turning strategy into clear workflows, aligned teams, and measurable execution.",
};

export const metrics = [
  { value: "13% → 92%", label: "Readiness outcomes improved through data-guided execution" },
  { value: "$35K → $105K", label: "Annual revenue growth in a service operation" },
  { value: "2 days → 2–5 min", label: "Customer onboarding reduced through automation" },
  { value: "500+", label: "Families supported across a career in learning and service operations" },
];

export const capabilities = [
  "Program & project execution",
  "Strategy & operations",
  "Implementation & onboarding",
  "Product operations",
  "Process improvement & SOPs",
  "Enablement & change management",
  "Stakeholder alignment",
  "Data-informed decision support",
];

export const experience = [
  {
    years: "2022–2026",
    role: "Learning Program Lead / Montessori Guide",
    company: "Bezos Academy",
    summary:
      "Led daily program operations, coached a six-person team, coordinated 50+ stakeholders, and used visible performance systems to move readiness outcomes from 13% to 92%.",
  },
  {
    years: "2020–2024",
    role: "Founder & Director of Operations",
    company: "Brothers In Lawn",
    summary:
      "Built a subscription service operation serving 800+ unique clients, grew annual revenue from $35K to $105K, and automated customer onboarding from roughly two days to minutes.",
  },
  {
    years: "2012–2022",
    role: "Program Leadership & Technology Enablement",
    company: "The Fay School · Concord College · St. Paul’s Preschool",
    summary:
      "Designed learning programs, led educators, supported technology adoption, and created consistent operating routines across cross-cultural and standards-driven environments.",
  },
];

export const credentials = [
  { name: "PMP Certification", detail: "In progress" },
  { name: "Agentic AI Foundations Certificate", detail: "Harvard Online · Planned" },
  {
    name: "Data Analysis with SQL, Excel & Power BI Specialization",
    detail: "Microsoft · In progress",
  },
];

export type CaseStudy = {
  slug: string;
  type: string;
  title: string;
  summary: string;
  result: string;
  tags: string[];
  thinking: { label: string; text: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "onboarding-automation",
    type: "Implementation & customer operations",
    title: "From manual intake to near-instant onboarding",
    summary:
      "A growing service operation depended on slow, manual handoffs across intake, scheduling, and customer communication.",
    result:
      "A connected website workflow reduced onboarding from roughly two days to 2–5 minutes while supporting a larger recurring-customer base.",
    tags: ["Workflow design", "Automation", "Customer experience"],
    thinking: [
      { label: "Why this mattered", text: "Growth was creating more administrative work at exactly the point when the operation needed speed and consistency." },
      { label: "How I approached it", text: "I mapped every handoff, removed duplicate decisions, standardized intake, and connected customer communication to the operating workflow." },
      { label: "Tradeoff I considered", text: "Standardization required more upfront design work, but it reduced downstream delay and preventable questions." },
      { label: "What I’d improve next", text: "Add funnel analytics and exception reporting so the team can see where customers pause or require manual support." },
    ],
  },
  {
    slug: "performance-system",
    type: "Program management & analytics",
    title: "Turning fragmented data into an execution rhythm",
    summary:
      "Performance information existed, but it did not consistently translate into prioritized interventions, team ownership, or stakeholder clarity.",
    result:
      "A repeatable tracking, planning, and coaching cadence helped move readiness-assessment outcomes from 13% to 92%.",
    tags: ["Analytics", "Operating cadence", "Team enablement"],
    thinking: [
      { label: "Why this mattered", text: "Data without an operating rhythm documents a problem; it does not change the result." },
      { label: "How I approached it", text: "I connected measures to intervention planning, established review points, clarified ownership, and used coaching to support consistent follow-through." },
      { label: "Tradeoff I considered", text: "The system needed enough structure to create accountability without becoming a reporting burden for the team." },
      { label: "What I’d improve next", text: "Automate trend visualization and leading indicators so risks surface earlier and coaching can become more proactive." },
    ],
  },
  {
    slug: "service-operations",
    type: "Strategy & operations",
    title: "Building a repeatable service operation",
    summary:
      "Revenue growth was not enough; the business needed repeatable delivery, stronger vendor economics, and clear controls for quality and customer communication.",
    result:
      "Annual revenue grew from $35K to $105K, while operating margin moved from deficit to approximately 60% profit.",
    tags: ["Operations", "SOPs", "Resource optimization"],
    thinking: [
      { label: "Why this mattered", text: "A service business can grow itself into instability when revenue, capacity, and delivery standards are not managed together." },
      { label: "How I approached it", text: "I standardized scheduling and delivery, renegotiated vendors, shifted procurement strategy, reduced waste, and made customer expectations explicit." },
      { label: "Tradeoff I considered", text: "Efficiency could not come at the expense of customer trust, so changes were evaluated against both margin and service consistency." },
      { label: "What I’d improve next", text: "Build a capacity model and customer-health dashboard to forecast staffing, retention, and profitability by service segment." },
    ],
  },
];

export const roadmap = [
  { title: "AI Onboarding", status: "In development", description: "An AI-supported onboarding system focused on clarity, adoption, and measurable time-to-value." },
  { title: "Program Command Center", status: "In development", description: "One source of truth for priorities, ownership, risks, decisions, and operating cadence." },
  { title: "Knowledge Management System", status: "Planned", description: "A practical system for turning scattered information into reusable organizational knowledge." },
];
