import Link from "next/link";

const links = [
  ["/", "Home"],
  ["/work", "Work"],
  ["/resume", "Résumé"],
  ["/contact", "Contact"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/90 backdrop-blur-xl">
      <div className="shell flex min-h-20 items-center justify-between gap-6">
        <Link className="font-serif text-xl font-semibold tracking-tight" href="/">
          Sarah Hamilton
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/70 md:flex" aria-label="Primary navigation">
          {links.map(([href, label]) => <Link className="transition hover:text-coral" href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className="button button-coral hidden sm:inline-flex" href="/contact">Let&apos;s talk</Link>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-ink/15 px-4 py-2 text-sm font-bold">Menu</summary>
          <nav className="absolute right-0 top-12 grid min-w-44 gap-1 rounded-2xl border border-ink/10 bg-paper p-3 shadow-xl" aria-label="Mobile navigation">
            {links.map(([href, label]) => <Link className="rounded-xl px-4 py-2 font-semibold hover:bg-sage/15" href={href} key={href}>{label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
