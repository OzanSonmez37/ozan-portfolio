import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="px-6 pt-24 pb-10 md:px-10 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-accent">
            05 · İletişim
          </p>
          <h2 className="font-display max-w-4xl text-5xl uppercase leading-[0.95] sm:text-6xl md:text-7xl">
            Birlikte bir şeyler
            <br />
            inşa edelim.
          </h2>

          <ContactForm />

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <GithubIcon size={16} />
              github.com/OzanSonmez37
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border py-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Ozan Sönmez. Tüm hakları saklıdır.</p>
          <p>Next.js ile tasarlandı ve geliştirildi.</p>
        </div>
      </div>
    </section>
  );
}
