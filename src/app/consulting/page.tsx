import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Operations Consulting for Service Businesses",
  description:
    "Operations consulting for founder-led service businesses that need clearer workflows, stronger onboarding, practical automation, documented processes, and better performance visibility.",
  alternates: { canonical: "/consulting" },
  openGraph: { url: "/consulting" },
};

const idealClients = [
  "Founder-led service business",
  "Approximately $250,000–$1 million in annual revenue",
  "Approximately 2–15 employees or contractors",
  "Inconsistent workflows, manual handoffs, owner bottlenecks, weak documentation, or limited performance visibility",
];

const weeks = [
  ["Week 1", "Operational audit and priority map"],
  ["Week 2", "Workflow and responsibility redesign"],
  ["Week 3", "SOPs, templates, and practical automations"],
  ["Week 4", "KPI tracking, implementation handoff, and next-step plan"],
];

const deliverables = [
  "Operational workflow audit",
  "Current-state and improved-state process map",
  "Roles and responsibility clarification",
  "SOPs and reusable templates",
  "Intake or onboarding workflow",
  "Practical, AI-assisted workflow improvements where appropriate",
  "Simple KPI scorecard",
  "30- or 60-day implementation roadmap",
];

const proof = [
  { value: "$35K → $105K", label: "Annual revenue growth in a service operation" },
  { value: "2 days → minutes", label: "Customer onboarding reduced through automation" },
  { value: "800+", label: "Clients supported, including 250+ recurring clients" },
  { value: "13% → 92%", label: "Organizational readiness improved through data-guided execution" },
];

export default function ConsultingPage() {
  return (
    <main>
      <section className="section overflow-hidden">
        <div className="shell">
          <p className="eyebrow">Operations Consulting for Growing Service Businesses</p>
          <h1 className="mt-5 max-w-5xl font-serif text-[clamp(3.6rem,8vw,7rem)] leading-[.9] tracking-[-.06em]">
            Build a business that runs without everything running through you.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-ink/65">
            I help founder-led service businesses simplify intake, onboarding, recurring-service delivery, team handoffs, and performance tracking—so growth does not create more chaos for the owner.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button button-coral" href={site.calendly} target="_blank" rel="noreferrer">Book a consulting conversation</a>
            <a className="button button-outline" href="#operations-reset">See the Operations Reset</a>
          </div>
        </div>
      </section>

      <section className="section border-y border-ink/10 bg-paper">
        <div className="shell grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div><p className="eyebrow">Designed for</p><h2>Growing businesses at an operational inflection point.</h2></div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {idealClients.map((item) => <li className="card text-ink/70" key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section" id="operations-reset">
        <div className="shell">
          <p className="eyebrow">Core offer</p>
          <h2>The Operations Reset</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-ink/65">A focused four-week engagement to identify the operational bottleneck creating the most friction, redesign the workflow, document the new process, introduce appropriate automation, and establish a practical way to measure performance.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {weeks.map(([week, focus]) => <article className="card" key={week}><p className="eyebrow">{week}</p><h3 className="mt-4 font-serif text-2xl">{focus}</h3></article>)}
          </div>
          <div className="mt-12 grid gap-10 rounded-[2rem] bg-ink p-7 text-ivory sm:p-10 lg:grid-cols-[1.2fr_.8fr]">
            <div><h3 className="font-serif text-3xl">Potential deliverables</h3><ul className="mt-6 grid gap-3 sm:grid-cols-2">{deliverables.map((item) => <li className="border-l-2 border-coral-light pl-4 text-ivory/75" key={item}>{item}</li>)}</ul></div>
            <div className="rounded-2xl border border-ivory/15 p-6"><p className="eyebrow text-coral-light">Starting investment</p><p className="mt-4 font-serif text-3xl">Pilot engagements begin at $2,500.</p><p className="mt-4 text-sm leading-6 text-ivory/65">Exact scope and final pricing depend on the business&apos;s needs. No specific financial result is promised.</p></div>
          </div>
        </div>
      </section>

      <section className="section border-y border-ink/10 bg-paper">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Operating experience</p><h2>Evidence behind the offer.</h2></div><p>These are verified results from Sarah&apos;s operating experience—not guaranteed consulting outcomes.</p></div>
          <div className="grid overflow-hidden rounded-3xl border border-ink/10 bg-ivory sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((item) => <div className="min-h-48 border-b border-ink/10 p-7 last:border-b-0 sm:border-r lg:border-b-0" key={item.value}><strong className="font-sans text-3xl font-semibold tracking-tight text-sage-deep">{item.value}</strong><p className="mt-4 text-sm leading-6 text-ink/60">{item.label}</p></div>)}
          </div>
          <p className="mt-8 max-w-4xl text-ink/65">The work also included SOP development, vendor processes, contractor coordination, operational controls, and service systems supporting more than 500 families.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell rounded-[2.25rem] bg-coral px-7 py-14 text-center text-white sm:px-14">
          <p className="eyebrow text-white/80">A more durable next stage</p>
          <h2 className="mx-auto mt-3 max-w-4xl">Your next stage of growth should not require you to hold every process together personally.</h2>
          <div className="mt-8"><a className="button bg-ink text-white" href={site.calendly} target="_blank" rel="noreferrer">Schedule a consulting conversation</a></div>
        </div>
      </section>
    </main>
  );
}
