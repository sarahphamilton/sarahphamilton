import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/content/site";

export const metadata: Metadata = { title: "Work", description: "Case studies showing Sarah Hamilton's approach to program and operations leadership." };

export default function WorkPage(){return <main><section className="section"><div className="shell"><p className="eyebrow">Selected work</p><h1 className="mt-5 max-w-5xl font-serif text-[clamp(3.8rem,9vw,7rem)] leading-[.9] tracking-[-.06em]">The system behind the outcome.</h1><p className="mt-7 max-w-3xl text-xl leading-8 text-ink/60">Completed case studies showing how I diagnose friction, create structure, coordinate stakeholders, weigh tradeoffs, and improve execution.</p></div></section><section className="section border-y border-ink/10 bg-paper"><div className="shell grid gap-6">{caseStudies.map(study=><CaseStudyCard study={study} key={study.slug}/>)}</div></section></main>}
