import Blockathon from "@/components/Home/Blockathon";
import BottomBanner from "@/components/Home/BottomBanner";
import Hero from "@/components/Home/Hero";
import Partner from "@/components/Home/Partner";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      <Partner />
      <Blockathon />
      <BottomBanner />
    </main>
  );
}
