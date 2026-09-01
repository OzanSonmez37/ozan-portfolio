import { ArrowUpRight } from "lucide-react";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" label="Deneyim" title="Nerede Çalıştım" />

        <div className="flex flex-col">
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.1}>
              <div className="group grid grid-cols-1 gap-3 border-t border-border py-8 last:border-b md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-8">
                <div className="flex items-center gap-3">
                  {item.current && (
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                    </span>
                  )}
                  <span className="font-mono text-sm text-muted">
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl uppercase sm:text-3xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-accent">
                    {item.company} · {item.location}
                  </p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {item.points.map((p) => (
                      <li key={p} className="text-sm leading-relaxed text-muted">
                        — {p}
                      </li>
                    ))}
                  </ul>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm text-fg/80 underline decoration-border underline-offset-4 transition-colors hover:text-accent"
                    >
                      {item.link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <span className="font-display hidden text-6xl text-fg/5 transition-colors group-hover:text-accent/10 md:block">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
