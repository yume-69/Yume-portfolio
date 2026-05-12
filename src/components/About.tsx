import Image from "next/image";
import icon from "@/images/icon.png";

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
        <Image
          src={icon}
          alt="icon"
          className="size-32 rounded-full border border-border/40 bg-background object-cover"
          sizes="128px"
          priority
        />
        <h3 className="text-2xl font-bold tracking-tight mb-4">太田 夢</h3>
        <p>岩手県大槌町出身</p>
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
