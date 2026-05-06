const projects = [
  {
    title: "Project 1",
    description: "プロジェクトの説明をここに書きます。",
    tags: ["React", "TypeScript"],
    link: "#",
  },
  {
    title: "Project 2",
    description: "プロジェクトの説明をここに書きます。",
    tags: ["Next.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Project 3",
    description: "プロジェクトの説明をここに書きます。",
    tags: ["Node.js", "PostgreSQL"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-mono tracking-widest uppercase text-accent mb-2">
          Projects
        </h2>
        <h3 className="text-3xl font-bold tracking-tight mb-12">
          プロジェクト
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group block rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <h4 className="text-lg font-semibold group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
