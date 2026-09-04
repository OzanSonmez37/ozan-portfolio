"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `Portfolio message — ${name || "Anonymous"}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex max-w-xl flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-muted">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like to talk about?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wide text-bg transition-transform hover:-translate-y-0.5"
      >
        Send Message
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>
      <p className="text-xs text-muted">
        Hitting send opens your mail app with a draft ready to go to {profile.email}.
      </p>
    </form>
  );
}
