"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-accent"
          >
            {profile.location} · Computer Engineering
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display uppercase leading-[0.9] text-[15vw] sm:text-[11vw] md:text-[7.5vw]"
          >
            Hello, I&apos;m
            <br />
            Ozan
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="font-display mt-2 uppercase leading-[0.9] text-[15vw] text-transparent sm:text-[11vw] md:text-[7.5vw]"
            style={{ WebkitTextStroke: "1.5px var(--fg)" }}
          >
            Sönmez
          </motion.h2>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2.4}
          className="max-w-xs self-start pt-2 md:pt-8"
        >
          <p className="text-sm leading-relaxed text-muted">
            {profile.summary}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-fg/70 transition-colors hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-fg/70 transition-colors hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-fg/70 transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
          </div>
          <a
            href={profile.cvUrl}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-fg/20 px-4 py-2 text-xs uppercase tracking-wide text-fg/80 transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={14} />
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="mx-auto mt-16 flex w-full max-w-6xl items-center justify-between"
      >
        <a
          href="#projects"
          className="group flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-fg"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:text-accent">
            <ArrowDown size={16} className="animate-bounce" />
          </span>
          See My Work
        </a>
        <p className="hidden font-mono text-xs text-muted sm:block">
          Next.js · React · NestJS · Flutter · ASP.NET
        </p>
      </motion.div>
    </section>
  );
}
