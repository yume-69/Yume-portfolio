export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 lg:px-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Yume. All rights reserved.
        </p>
        <div className="flex gap-5 lg:hidden">
          <a
            href="https://github.com/yume-69"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://x.com/dream_ota_69"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            X / Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
