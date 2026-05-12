"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#skills", label: "Skills" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
];

export default function FixedHero() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight">Yume Ota</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation"
          >
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
        {mobileOpen && (
          <nav className="border-t border-border bg-background/95 backdrop-blur-md px-6 py-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm tracking-widest uppercase text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Desktop fixed left panel */}
      <aside className="hidden lg:flex fixed top-0 left-0 w-[42%] h-screen flex-col justify-between bg-hero-bg px-12 xl:px-16 py-16 border-r border-border">
        <div>
          <p className="text-sm font-mono tracking-[0.25em] uppercase text-accent mb-6">
            Portfolio
          </p>
          <h1 className="text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]">
            Yume
          </h1>
          <p className="mt-4 text-xl text-muted leading-relaxed max-w-sm">
            Web Engineer
          </p>
        </div>

        <nav>
          <ul className="space-y-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors"
                >
                  <span className="block h-px w-6 bg-border group-hover:w-10 group-hover:bg-accent transition-all" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            X / Twitter
          </a>
          <a
            href="https://qiita.com/gonzaemon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Qiita
          </a>
        </div>
      </aside>

      {/* Mobile hero */}
      <section className="lg:hidden flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center bg-hero-bg">
        <p className="text-sm font-mono tracking-[0.25em] uppercase text-accent mb-4">
          Portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Yume
        </h1>
        <p className="mt-3 text-lg text-muted leading-relaxed">
          Web Developer &amp; Designer
        </p>
        <p className="mt-2 text-base text-muted/70 leading-relaxed max-w-sm">
          美しく、使いやすいWebサイトをつくります。
        </p>
        <a
          href="#about"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          View More
        </a>
      </section>
    </>
  );
}
