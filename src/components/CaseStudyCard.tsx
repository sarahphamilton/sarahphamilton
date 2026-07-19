import type { CaseStudy } from "@/content/site";
import { ThinkingLayer } from "./ThinkingLayer";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="card flex h-full flex-col">
      <p className="eyebrow">{study.type}</p>
      <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight">{study.title}</h3>
      <p className="mt-4 text-ink/65">{study.summary}</p>
      <div className="my-6 border-l-2 border-coral pl-4">
        <p className="text-xs font-extrabold uppercase tracking-widest text-ink/45">Result</p>
        <p className="mt-2 font-semibold">{study.result}</p>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        {study.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <ThinkingLayer items={study.thinking} />
    </article>
  );
}
