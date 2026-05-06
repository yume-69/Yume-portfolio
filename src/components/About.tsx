export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-mono tracking-widest uppercase text-accent mb-2">
          About
        </h2>
        <h3 className="text-3xl font-bold tracking-tight mb-8">
          自己紹介
        </h3>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            Webの技術が好きなエンジニアです。フロントエンドを中心に、
            使いやすくて美しいプロダクトを作ることに情熱を持っています。
          </p>
          <p>
            新しい技術を学ぶこと、デザインとコードの交差点で
            最高のユーザー体験を追求することを大切にしています。
          </p>
        </div>
      </div>
    </section>
  );
}
