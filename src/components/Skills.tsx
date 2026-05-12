const skills = [
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "Git", icon: "⎇" },
  { name: "Docker", icon: "🐳" },
  { name: "MySQL", icon: "🐬" },
  { name: "AWS", icon: "🌐" },
];

function HexCell({
  skill,
}: {
  skill: { name: string; icon: string };
}) {
  return (
    <div className="group flex flex-col items-center">
      <div
        className="clip-hexagon flex h-[8.75rem] w-[7.25rem] flex-col items-center justify-center gap-1 bg-accent-subtle px-2 py-3 text-center transition-colors group-hover:bg-accent sm:h-[9.25rem] sm:w-[7.75rem]"
        aria-label={skill.name}
      >
        <span className="shrink-0 text-xl leading-none transition-transform group-hover:scale-110 sm:text-2xl">
          {skill.icon}
        </span>
        <span className="max-w-[5.5rem] text-[9px] font-medium leading-tight tracking-wide text-muted transition-colors group-hover:text-white sm:max-w-[6rem] sm:text-[10px]">
          {skill.name}
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  const topRow = skills.filter((_, i) => i % 2 === 0);
  const bottomRow = skills.filter((_, i) => i % 2 === 1);

  return (
    <section id="skills" className="py-24 lg:py-32 px-6 lg:px-12">
      <p className="text-sm font-mono tracking-[0.25em] uppercase text-accent mb-2">
        Skills
      </p>
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-16">
        スキル
      </h2>

      <div className="flex flex-col items-center gap-0">
        {/* Honeycomb row 1 */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {topRow.map((skill) => (
            <HexCell key={skill.name} skill={skill} />
          ))}
        </div>
        {/* Honeycomb row 2 — offset */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 -mt-4 ml-9 sm:ml-0.5">
          {bottomRow.map((skill) => (
            <HexCell key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
