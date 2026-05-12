const timeline = [
  { date: "2002/07/10", iso: "2002-07-10", label: "誕生" },
  { date: "2021/03/31", iso: "2021-03-31", label: "岩手県立釜石高校　卒業" },
  { date: "2021/04/01", iso: "2021-04-01", label: "岩手県立大学　入学" },
  { date: "2025/03/31", iso: "2025-03-31", label: "岩手県立大学　卒業" },
  { date: "2025/04/01", iso: "2025-04-01", label: "株式会社スカラ　入社" },
] as const;

export default function Career() {
  return (
    <section
      id="career"
      className="bg-accent-subtle/50 py-24 lg:py-32 px-6 lg:px-12"
    >
      <p className="text-sm font-mono tracking-[0.25em] uppercase text-accent mb-2">
        Career
      </p>
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-10">
        経歴
      </h2>
      <ul className="max-w-xl space-y-5">
        {timeline.map((item) => (
          <li
            key={item.iso}
            className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <time
              dateTime={item.iso}
              className="shrink-0 font-mono text-sm tabular-nums text-muted tracking-wide sm:min-w-[10.5ch] lg:text-base"
            >
              {item.date}
            </time>
            <span className="text-base leading-relaxed text-foreground lg:text-lg">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
