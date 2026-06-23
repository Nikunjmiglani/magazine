import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroIssue";
import FeaturedArticles from "@/components/featured-articles";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedArticles />
    </main>
  );
}