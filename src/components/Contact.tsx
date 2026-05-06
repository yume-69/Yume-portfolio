export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-sm font-mono tracking-widest uppercase text-accent mb-2">
          Contact
        </h2>
        <h3 className="text-3xl font-bold tracking-tight mb-4">
          お問い合わせ
        </h3>
        <p className="text-muted mb-8 leading-relaxed">
          お仕事のご相談やご質問など、お気軽にお問い合わせください。
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          メールを送る
        </a>
      </div>
    </section>
  );
}
