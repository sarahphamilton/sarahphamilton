import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Sarah Hamilton about senior program and operations opportunities." };

export default function ContactPage(){return <main><section className="section"><div className="shell"><p className="eyebrow">Contact</p><h1 className="mt-5 max-w-5xl font-serif text-[clamp(3.8rem,9vw,7rem)] leading-[.9] tracking-[-.06em]">Let&apos;s make complex work easier to run.</h1><p className="mt-7 max-w-3xl text-xl leading-8 text-ink/60">I&apos;m open to senior program, strategy and operations, product operations, implementation, and AI transformation opportunities.</p></div></section><section className="section border-y border-ink/10 bg-paper"><div className="shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><h2>Start a conversation.</h2><div className="mt-8 grid gap-3 font-bold text-sage-deep"><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={site.calendly} target="_blank" rel="noreferrer">Schedule with Calendly</a></div></div><ContactForm /></div></section></main>}
