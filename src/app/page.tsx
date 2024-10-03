import Banner from "@/components/Banner";
import Blockathon from "@/components/Home/Blockathon";
import BottomBanner from "@/components/Home/BottomBanner";
import MainBackground from "@/components/Home/Background/MainBackground";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      {/* <Banner />
      <Blockathon />
      <BottomBanner /> */}

      {/* <div className="absolute inset-0 -z-10">
        <MainBackground />
      </div> */}
    </main>
  );
}
