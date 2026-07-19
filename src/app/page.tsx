import Image from "next/image";
import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { capabilities, caseStudies, credentials, experience, metrics, site } from "@/content/site";

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="shell grid items-center gap-14 lg:grid-cols-[1.12fr_.88fr] lg:gap-20">
          <div>
            <p className="eyebrow">Program · Strategy · Operations · AI Transformation</p>
            <h1 className="mt-5 max-w-4xl font-serif text-[clamp(4rem,9vw,7.8rem)] leading-[.85] tracking-[-.065em]">
              Complex work.<br/><span className="text-coral">Simple systems.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/65 sm:text-xl">{site.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="button button-coral" href="/work">See my work</Link>
              <a className="button button-outline" href="/Sarah-Hamilton-Resume.pdf" download>Download résumé</a>
            </div>
            <p className="mt-6 text-sm font-medium text-ink/55">{site.location}</p>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-5 -top-5 h-2/3 w-2/3 rounded-[2rem] bg-sage" />
            <Image className="relative aspect-[4/5] w-full rounded-[42%_42%_2rem_2rem] object-cover object-[50%_24%] shadow-2xl" src="/sarah-hamilton-headshot.jpg" alt="Sarah Hamilton" width={900} height={1125} priority />
          </div>
        </div>
      </section>

      <section className="section border-y border-ink/10 bg-paper">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Selected impact</p><h2>Systems that move outcomes.</h2></div><p>Across education, entrepreneurship, and customer operations, I build the structure that helps people move from intention to reliable execution.</p></div>
          <div className="grid overflow-hidden rounded-3xl border border-ink/10 bg-ivory sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => <div className="min-h-48 border-b border-ink/10 p-7 last:border-b-0 sm:border-r lg:border-b-0" key={metric.value}><strong className="font-sans text-3xl font-semibold tracking-tight text-sage-deep">{metric.value}</strong><p className="mt-4 text-sm leading-6 text-ink/60">{metric.label}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div><p className="eyebrow">How I work</p><h2>Clarity is an operating advantage.</h2><p className="mt-6 text-lg leading-8 text-ink/60">I bring analytical judgment, calm leadership, and practical systems thinking to work that crosses teams, tools, and priorities.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{capabilities.map((item) => <div className="rounded-2xl border border-ink/10 bg-paper p-5 font-bold" key={item}>{item}</div>)}</div>
        </div>
      </section>

      <section className="section border-y border-ink/10 bg-paper">
        <div className="shell"><div className="section-heading"><div><p className="eyebrow">Featured case studies</p><h2>Proof—and the thinking behind it.</h2></div><p>Results matter. So do the decisions, constraints, and tradeoffs that produced them.</p></div><div className="grid gap-5 lg:grid-cols-3">{caseStudies.map((study) => <CaseStudyCard study={study} key={study.slug} />)}</div></div>
      </section>

      <section className="section">
        <div className="shell"><div className="section-heading"><div><p className="eyebrow">Experience</p><h2>A career built around making work work.</h2></div><Link className="button button-outline" href="/resume">Full résumé</Link></div><div className="divide-y divide-ink/10 border-y border-ink/10">{experience.map((item) => <article className="grid gap-3 py-7 md:grid-cols-[150px_1fr_1.25fr] md:gap-8" key={item.role}><p className="text-sm font-bold text-coral">{item.years}</p><div><h3 className="font-serif text-xl">{item.role}</h3><p className="mt-1 text-sm font-semibold text-ink/50">{item.company}</p></div><p className="text-ink/65">{item.summary}</p></article>)}</div></div>
      </section>

      <section className="section bg-ink text-ivory">
        <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow text-coral-light">Professional development</p><h2>Building toward what&apos;s next.</h2></div><div className="grid gap-3">{credentials.map((item) => <div className="flex flex-col justify-between gap-2 rounded-2xl border border-ivory/15 p-5 sm:flex-row sm:items-center" key={item.name}><h3 className="font-serif text-xl">{item.name}</h3><p className="text-sm font-bold uppercase tracking-wider text-coral-light">{item.detail}</p></div>)}</div></div>
      </section>

      <section className="section"><div className="shell rounded-[2.25rem] bg-coral px-7 py-14 text-center text-white sm:px-14"><p className="eyebrow text-white/80">Let&apos;s work together</p><h2 className="mx-auto mt-3 max-w-3xl">Need someone who can turn complexity into execution?</h2><div className="mt-8 flex flex-wrap justify-center gap-3"><Link className="button bg-ink text-white" href="/contact">Start a conversation</Link><a className="button border border-white/50 bg-transparent text-white" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></div></section>
    </main>
  );
}
