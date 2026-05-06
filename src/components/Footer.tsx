export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Yume. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            X / Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
