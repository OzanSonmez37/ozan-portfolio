import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  title,
  label,
}: {
  index: string;
  title: string;
  label: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px flex-1 bg-border" />
        <span className="text-sm uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      </div>
      <h2 className="font-display mt-4 text-5xl uppercase leading-[0.95] sm:text-6xl md:text-7xl">
        {title}
      </h2>
    </Reveal>
  );
}
