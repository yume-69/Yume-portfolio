export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12">
      <p className="text-sm font-mono tracking-[0.25em] uppercase text-accent mb-2">
        About
      </p>
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-10">
        自己紹介
      </h2>
      <div className="space-y-5 text-muted text-base lg:text-lg leading-relaxed max-w-xl">
        <p>
          Webの技術が好きなエンジニアです。フロントエンドを中心に、
          使いやすくて美しいプロダクトを作ることに情熱を持っています。
        </p>
        <p>
          新しい技術を学ぶこと、デザインとコードの交差点で
          最高のユーザー体験を追求することを大切にしています。
        </p>
      </div>
    </section>
  );
}
