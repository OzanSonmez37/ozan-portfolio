import { GraduationCap, MapPin, Mail } from "lucide-react";
import { profile, education, certifications } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" label="Hakkımda" title="Kim Bu Ozan?" />

        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <Reveal delay={0.1}>
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-bg-elevated">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(214,255,63,0.25), transparent 45%), radial-gradient(circle at 80% 80%, rgba(214,255,63,0.12), transparent 40%)",
                }}
              />
              <span className="font-display relative text-[9rem] uppercase leading-none text-fg/10 sm:text-[12rem]">
                OS
              </span>
              <span className="font-display absolute bottom-6 left-6 text-lg uppercase text-fg/70">
                Ozan Sönmez —{" "}
                <span className="text-accent">Full-Stack Dev</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-muted">
              {profile.summary}
            </p>

            <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <div className="flex items-center gap-3 text-muted">
                <MapPin size={16} className="text-accent" />
                {profile.location}
              </div>
              <div className="flex items-center gap-3 text-muted">
                <Mail size={16} className="text-accent" />
                {profile.email}
              </div>
              <div className="flex items-center gap-3 text-muted">
                <GraduationCap size={16} className="text-accent" />
                {education.period}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-bg-elevated p-6">
              <p className="font-display text-xl uppercase">{education.school}</p>
              <p className="mt-1 text-sm text-muted">
                {education.degree} · {education.note}
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">
                Sertifikalar
              </p>
              <ul className="flex flex-col gap-2">
                {certifications.map((c) => (
                  <li
                    key={c.title}
                    className="flex items-baseline justify-between gap-4 border-b border-border py-2 text-sm"
                  >
                    <span>
                      {c.title}{" "}
                      <span className="text-muted">— {c.issuer}</span>
                    </span>
                    <span className="shrink-0 font-mono text-xs text-accent">
                      {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
