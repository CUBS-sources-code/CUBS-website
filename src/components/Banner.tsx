"use client";

import Image from "next/image";

import Binance from "./Home/Sponsors/Binance";
import ICP from "./Home/Sponsors/ICP";
import VELO from "./Home/Sponsors/VELO";
import CryptoMind from "./Home/Sponsors/CryptoMind";

export default function Banner() {
  return (
    <div className="min-h-screen text-white">
      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="mt-20 text-7xl font-bold text-center text-gradient">
          CU Blockchain Society
        </h1>

        <p className="mt-8 text-center text-xl max-w-3xl">
          We act as a central point connecting all parties interested in
          blockchain technology, from enterprise users to general public. Our
          goal is to fully optimize the value of the blockchain sector.
        </p>

        <div className="mt-16 flex flex-col items-center space-y-12">
          <div className="absolute right-[10vw] top-[40vh] text-center">
            <h2 className="text-4xl font-bold text-gradient">Our Mission</h2>
            <p className="mt-4 text-lg">
              Making Blockchain simple <br />
              and easy to accessed by all <br />
              genders and all ages.
            </p>
          </div>

          <div className="absolute left-[10vw] top-[55vh] text-center">
            <h2 className="text-4xl font-bold text-gradient">Core Value</h2>
            <p className="mt-4 text-lg">
              Learn, Develop, Communicate and Take action.
            </p>
          </div>
        </div>

        <div className="mt-[50vh] text-center text-lg text-white">
          <p className="mt-[5vh]">
            Trusted by 100+ Companies across the globe!{" "}
          </p>
        </div>
        <div className="flex justify-around items-center mt-[5vh]">
          <Image
            className="mr-10"
            src={`/img/Sponsors/SCBx.png`}
            alt="SCBX"
            width={150}
            height={100}
          />
          <Image
            className="mr-10"
            src={`/img/Sponsors/Bitkub.png`}
            alt="Bitkub"
            width={150}
            height={100}
          />
          <Image
            className="mr-10"
            src={`/img/Sponsors/ETHPadthai.png`}
            alt="ETHPadthai"
            width={100}
            height={100}
          />
          <ICP />
          <CryptoMind />
          <VELO />
        </div>
        <div className="flex justify-around items-center mt-10">
          <Binance />
        </div>
      </main>
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(
            90deg,
            rgba(238, 0, 153, 1) 0%,
            rgba(0, 212, 255, 1) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
