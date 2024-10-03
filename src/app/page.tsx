import Blockathon from "@/components/Home/Blockathon";
import BlockchainInfo from "@/components/Home/BlockchainInfo";
import Hero from "@/components/Home/Hero";
import Partner from "@/components/Home/Partner";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-32">
      <Hero />
      <Partner />
      <Blockathon />
      <BlockchainInfo />
    </main>
  );
}
