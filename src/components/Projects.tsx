import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./icons";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" label="Projeler" title="Neler Yaptım" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 0.08}
              className={p.featured ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-bg-elevated p-7 transition-colors hover:border-accent/60"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl uppercase leading-none">
                      {p.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-fg/60 transition-all group-hover:border-accent group-hover:text-accent group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-fg/50">
                  <GithubIcon size={14} />
                  GitHub&apos;da görüntüle
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
