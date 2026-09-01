const items = [
  "FULL-STACK DEVELOPER",
  "COMPUTER ENGINEERING STUDENT",
  "NEXT.JS",
  "REACT",
  "FLUTTER",
  "NESTJS",
  "ASP.NET",
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border bg-bg-elevated py-5">
      <div className="flex w-max animate-marquee gap-10">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-10">
            {track.map((item, i) => (
              <div key={`${copy}-${i}`} className="flex items-center gap-10">
                <span className="font-display whitespace-nowrap text-3xl uppercase text-fg/80 sm:text-4xl">
                  {item}
                </span>
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
