import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message sent",
  alternates: { canonical: "/success" },
  openGraph: { url: "/success" },
  robots: { index: false, follow: false },
};

export default function SuccessPage(){return <main className="section"><div className="shell max-w-3xl text-center"><p className="eyebrow">Message sent</p><h1 className="mt-5 font-serif text-6xl tracking-tight">Thank you.</h1><p className="mt-6 text-lg text-ink/60">I&apos;ll be in touch soon.</p><Link className="button button-coral mt-8" href="/">Return home</Link></div></main>}
