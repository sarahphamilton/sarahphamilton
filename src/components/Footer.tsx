import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10 text-sm text-ink/60">
      <div className="shell flex flex-col justify-between gap-2 sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>{site.tagline}</p>
      </div>
    </footer>
  );
}
