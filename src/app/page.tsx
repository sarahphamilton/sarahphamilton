import Image from "next/image";
import Link from "next/link";
import { experience, recommendations, site } from "@/content/site";

const implementationScope = [
  {
    title: "Planning and rollout",
    approach: "Start with the operating reality: owners, dependencies, local constraints, communication paths, and the conditions required for launch.",
    example: "Supported a founding Texas-site implementation during multi-state expansion, surfaced scheduling and local-context friction, and led Brightwheel adoption for 6 staff and 50+ families.",
  },
  {
    title: "Stakeholder alignment",
    approach: "Translate different needs into clear decisions, responsibilities, communication rhythms, and escalation paths.",
    example: "Coordinated staff, families, specialists, and central teams while maintaining delivery for 50+ families in a standards-driven environment.",
  },
  {
    title: "Training and enablement",
    approach: "Design training around the work people must perform, then reinforce it with usable documentation and support.",
    example: "Trained cross-cultural users during a rapid technology transition, created screen-recorded walkthroughs, and introduced a parent-communication platform.",
  },
  {
    title: "Adoption and continuous improvement",
    approach: "Treat launch as the beginning: observe use, surface barriers, test changes, and feed what users learn back into the system.",
    example: "Supported approximately 2 years and 12 iterations of an internal recordkeeping and intervention-planning platform through pilot analysis, workflow testing, user training, and documented feedback.",
  },
];
const workSamples = [
  { title: "K–12 Classroom Charter", label: "Implementation playbook", description: "A reviewable implementation artifact translating expectations, responsibilities, routines, and reinforcement into a usable operating system.", href: "/transcend-implementation-playbook.pdf" },
  { title: "Motor Lab Proposal", label: "Program proposal", description: "A reviewable proposal connecting a defined need to program design, stakeholder considerations, rollout requirements, and measures of success.", href: "/transcend-motor-lab-proposal.pdf" },
];

export default function Home() {
  return <main>
    <section className="overflow-hidden py-16 sm:py-24 lg:py-28"><div className="shell grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
      <div><p className="eyebrow">Sarah Hamilton</p><h1 className="mt-5 max-w-4xl font-serif text-[clamp(3.5rem,8vw,7.2rem)] leading-[.88] tracking-[-.06em]">Implementation<br/><span className="text-coral">Program Manager</span></h1><p className="mt-8 max-w-3xl text-lg leading-8 text-ink/70 sm:text-xl">{site.intro}</p><div className="mt-9 flex flex-wrap gap-3"><a className="button button-coral" href="/Sarah-Hamilton-Resume.pdf" download>Download résumé</a><a className="button button-outline" href="#work-samples">Review work samples</a></div><p className="mt-6 text-sm font-medium text-ink/60">{site.location}</p></div>
      <div className="relative mx-auto w-full max-w-md"><div className="absolute -left-5 -top-5 h-2/3 w-2/3 rounded-[2rem] bg-sage"/><Image className="relative aspect-[4/5] w-full rounded-[42%_42%_2rem_2rem] object-cover object-[50%_24%] shadow-2xl" src="/sarah-hamilton-headshot.jpg" alt="Sarah Hamilton" width={900} height={1125} priority/></div>
    </div></section>
    <section className="section border-y border-ink/10 bg-paper"><div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow">Implementation scope</p><h2>From plan to sustained use.</h2><p className="mt-6 max-w-md text-ink/65">Open each area to see the operating judgment and completed work behind it.</p></div><div className="grid items-start gap-4 sm:grid-cols-2">{implementationScope.map((item,index)=><details className="scope-card card group" key={item.title}><summary><span><span className="text-sm font-bold text-coral">0{index+1}</span><span className="mt-3 block font-serif text-2xl">{item.title}</span></span><span className="ml-4 text-2xl text-coral transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><div className="mt-5 grid gap-4 border-t border-ink/10 pt-5"><div><p className="eyebrow">My approach</p><p className="mt-2 text-sm leading-6 text-ink/70">{item.approach}</p></div><div><p className="eyebrow">In practice</p><p className="mt-2 text-sm leading-6 text-ink/70">{item.example}</p></div></div></details>)}</div></div></section>
    <section className="section" id="work-samples"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Selected evidence</p><h2>Two implementation work samples.</h2></div><p>These completed artifacts were developed from existing work and show how I structure implementation—not hypothetical future projects.</p></div><div className="grid gap-5 lg:grid-cols-2">{workSamples.map(sample=><article className="card flex flex-col items-start" key={sample.title}><p className="eyebrow">{sample.label}</p><h3 className="mt-4 font-serif text-3xl">{sample.title}</h3><p className="mt-4 flex-1 text-ink/65">{sample.description}</p><a className="button button-outline mt-7" href={sample.href} target="_blank" rel="noreferrer">Open PDF</a></article>)}</div></div></section>
    <section className="section border-y border-ink/10 bg-paper"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Relevant experience</p><h2>Implementation through people and process.</h2></div><Link className="button button-outline whitespace-nowrap" href="/resume">Full résumé</Link></div><div className="divide-y divide-ink/10 border-y border-ink/10">{experience.map(item=><article className="grid gap-3 py-7 md:grid-cols-[150px_1fr_1.25fr] md:gap-8" key={item.role}><p className="text-sm font-bold text-coral">{item.years}</p><div><h3 className="font-serif text-xl">{item.role}</h3><p className="mt-1 text-sm font-semibold text-ink/55">{item.company}</p></div><p className="text-ink/65">{item.summary}</p></article>)}</div></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Recommendations</p><h2>What leadership and mentors say.</h2></div><p>Direct observations of how I lead, improve systems, and support the people doing the work.</p></div><div className="grid gap-5 lg:grid-cols-3">{recommendations.map(item=><figure className="card flex h-full flex-col" key={item.name}><blockquote className="font-serif text-2xl leading-snug tracking-[-.02em] text-ink"><span aria-hidden="true" className="text-coral">“</span>{item.quote}<span aria-hidden="true" className="text-coral">”</span></blockquote><figcaption className="mt-8 border-t border-ink/10 pt-5"><p className="font-bold text-ink">{item.name}</p><p className="mt-1 text-sm leading-6 text-ink/55">{item.relationship}</p></figcaption></figure>)}</div></div></section>
    <section className="section pt-0"><div className="shell rounded-[2.25rem] bg-coral px-7 py-14 text-center text-white sm:px-14"><p className="eyebrow text-white/80">Implementation leadership</p><h2 className="mx-auto mt-3 max-w-3xl">Need someone who can carry a rollout from plan through adoption?</h2><div className="mt-8 flex flex-wrap justify-center gap-3"><Link className="button bg-ink text-white" href="/contact">Start a conversation</Link><a className="button border border-white/50 bg-transparent text-white" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></div></section>
  </main>;
}
