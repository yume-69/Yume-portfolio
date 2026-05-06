const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Vercel"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-mono tracking-widest uppercase text-accent mb-2">
          Skills
        </h2>
        <h3 className="text-3xl font-bold tracking-tight mb-12">
          スキル
        </h3>
        <div className="grid gap-8 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-4">
                {group.category}
              </h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted text-sm flex items-center gap-2"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
