import Hero from "@/src/components/Hero";
import InterestSection from "@/src/components/InterestSection";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col m-0">
      <Hero />
      <InterestSection />
    </main>
  );
}