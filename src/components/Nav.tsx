"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-display text-2xl tracking-wide">
          OS<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-wide text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-fg/20 px-5 py-2 text-sm uppercase tracking-wide transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={14} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-block rounded-full bg-accent px-5 py-2 text-sm font-medium uppercase tracking-wide text-bg transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        <button
          aria-label="Open menu"
          className="text-fg md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 flex flex-col bg-bg px-6 py-10 md:hidden">
          <ul className="flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.cvUrl}
            download
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-fg/20 px-5 py-3 text-sm uppercase tracking-wide"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
