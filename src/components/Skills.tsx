const skills = [
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Node.js", icon: "⬢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "⎇" },
  { name: "Docker", icon: "🐳" },
  { name: "Figma", icon: "🎯" },
  { name: "Vercel", icon: "▲" },
];

function HexCell({
  skill,
}: {
  skill: { name: string; icon: string };
}) {
  return (
    <div className="group flex flex-col items-center">
      <div className="clip-hexagon w-24 h-28 bg-accent-subtle flex items-center justify-center transition-colors group-hover:bg-accent">
        <span className="text-2xl group-hover:scale-110 transition-transform">
          {skill.icon}
        </span>
      </div>
      <span className="mt-2 text-xs font-medium tracking-wide text-muted group-hover:text-foreground transition-colors">
        {skill.name}
      </span>
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
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 -mt-4 ml-14">
          {bottomRow.map((skill) => (
            <HexCell key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
