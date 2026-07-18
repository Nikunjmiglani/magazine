import Navbar from "@/components/Navbar";
import HeroLanding from "@/components/HeroLanding";
import AboutSplit from "@/components/AboutSplit";
import IssueShowcase from "@/components/IssueShowcase";
import CategoryCarousel from "@/components/CategoryCarousel";
import { readItems } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroLanding />
      <AboutSplit />
      <IssueShowcase />
      <CategoryCarousel label="Poetry & Articles" items={readItems} />
    </main>
  );
}