import type { CaseStudy } from "@/content/site";

export function ThinkingLayer({ items }: { items: CaseStudy["thinking"] }) {
  return (
    <details className="thinking group">
      <summary>
        <span>See my thinking</span>
        <span className="text-xl transition group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <div className="grid gap-4 border-t border-ink/10 px-5 py-5 sm:grid-cols-2">
        {items.map((item) => (
          <div className="rounded-2xl bg-ivory p-4" key={item.label}>
            <h4 className="text-sm font-extrabold text-coral">{item.label}</h4>
            <p className="mt-2 text-sm leading-6 text-ink/70">{item.text}</p>
          </div>
        ))}
      </div>
    </details>
  );
}
