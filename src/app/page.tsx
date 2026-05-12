import FixedHero from "@/components/FixedHero";
import About from "@/components/About";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="lg:flex min-h-screen">
      <FixedHero />

      <main className="lg:ml-[42%] flex-1">
        <About />
        <Career />
        <Skills />
        <Articles />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
