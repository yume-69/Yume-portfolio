export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12">
      <p className="text-sm font-mono tracking-[0.25em] uppercase text-accent mb-2">
        Contact
      </p>
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
        お問い合わせ
      </h2>
      <p className="text-muted text-base lg:text-lg leading-relaxed max-w-md mb-10">
        お仕事のご相談やご質問など、お気軽にお問い合わせください。
      </p>
      <div className="flex gap-4">
        <a
          href={`https://x.com/dream_ota_69`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          X
        </a>
        <a
          href={`https://github.com/yume-69`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          GitHub
        </a>
        <a
          href={'https://qiita.com/gonzaemon'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          Qiita
        </a>
      </div>
    </section>
  );
}
