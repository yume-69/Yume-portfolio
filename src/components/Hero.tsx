export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <p className="text-sm font-mono tracking-widest uppercase text-accent mb-4">
        Welcome to my portfolio
      </p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
        Hi, I&apos;m{" "}
        <span className="text-accent">Yume</span>
      </h1>
      <p className="mt-4 max-w-lg text-lg text-muted leading-relaxed">
        Web Developer &amp; Designer —
        美しく、使いやすいWebサイトをつくります。
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
