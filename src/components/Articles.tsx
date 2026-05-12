const articles = [
  {
    title: "【図解】Webの仕組み",
    description:
      "プロジェクトの説明をここに書きます。技術的な挑戦やデザインのこだわりなど。",
    tags: ["Web", "初心者向け"],
    link: "https://qiita.com/gonzaemon/items/11d7837e8dbff0bb1d99",
  },
  {
    title: "【図解】メールの仕組み",
    description:
      "プロジェクトの説明をここに書きます。技術的な挑戦やデザインのこだわりなど。",
    tags: ["mail", "初心者向け"],
    link: "https://qiita.com/gonzaemon/items/4175779c01bcbdddf857",
  },
  {
    title: "【図解】Djangoチュートリアル備忘録 - プロジェクト構造とデータフローについて",
    description:
      "プロジェクトの説明をここに書きます。技術的な挑戦やデザインのこだわりなど。",
    tags: ["Django", "チュートリアル","備忘録"],
    link: "https://qiita.com/gonzaemon/items/54cca866b337a4912d28",
  },
];

const cardStyles = [
  "rotate-[-2deg] translate-y-0",
  "rotate-[1.5deg] translate-y-4",
  "rotate-[-1deg] -translate-y-2",
];

export default function Articles() {
  return (
    <section id="articles" className="py-24 lg:py-32 px-6 lg:px-12 bg-accent-subtle/50">
      <p className="text-sm font-mono tracking-[0.25em] uppercase text-accent mb-2">
        Articles
      </p>
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-16">
        記事
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        {articles.map((article, i) => (
          <a
            key={article.title}
            href={article.link}
            className={`group block rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:rotate-0 hover:translate-y-0 hover:-translate-y-1 ${cardStyles[i % cardStyles.length]}`}
          >
            <div className="h-32 rounded-lg bg-accent-subtle mb-5 flex items-center justify-center">
              <span className="text-4xl text-accent/40 font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
              {article.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {article.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
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
