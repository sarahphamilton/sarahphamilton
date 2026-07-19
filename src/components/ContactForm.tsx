"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) throw new Error("Submission failed");
      router.push("/success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="card grid gap-5" name="contact" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Do not fill this out: <input name="bot-field" /></label>
      </p>
      <label className="grid gap-2 text-sm font-bold">
        Name
        <input className="rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal outline-none focus:border-coral" type="text" name="name" autoComplete="name" required />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Email
        <input className="rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal outline-none focus:border-coral" type="email" name="email" autoComplete="email" required />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        Message
        <textarea className="min-h-40 resize-y rounded-xl border border-ink/15 bg-white px-4 py-3 font-normal outline-none focus:border-coral" name="message" required />
      </label>
      <button className="button button-coral justify-self-start disabled:cursor-wait disabled:opacity-60" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && <p role="alert" className="text-sm font-semibold text-coral">The message did not send. Please try again or email me directly.</p>}
    </form>
  );
}
