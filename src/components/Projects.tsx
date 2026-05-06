const projects = [
  {
    title: "Project 1",
    description:
      "プロジェクトの説明をここに書きます。技術的な挑戦やデザインのこだわりなど。",
    tags: ["React", "TypeScript"],
    link: "#",
  },
  {
    title: "Project 2",
    description:
      "プロジェクトの説明をここに書きます。技術的な挑戦やデザインのこだわりなど。",
    tags: ["Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Project 3",
    description:
      "プロジェクトの説明をここに書きます。技術的な挑戦やデザインのこだわりなど。",
    tags: ["Node.js", "PostgreSQL"],
    link: "#",
  },
];

const cardStyles = [
  "rotate-[-2deg] translate-y-0",
  "rotate-[1.5deg] translate-y-4",
  "rotate-[-1deg] -translate-y-2",
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 px-6 lg:px-12 bg-accent-subtle/50">
      <p className="text-sm font-mono tracking-[0.25em] uppercase text-accent mb-2">
        Projects
      </p>
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-16">
        プロジェクト
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.link}
            className={`group block rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:rotate-0 hover:translate-y-0 hover:-translate-y-1 ${cardStyles[i % cardStyles.length]}`}
          >
            <div className="h-32 rounded-lg bg-accent-subtle mb-5 flex items-center justify-center">
              <span className="text-4xl text-accent/40 font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/20 px-3 py-1 text-xs font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
