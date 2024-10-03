import Image from "next/image";

import Link from "next/link";
import LearnMore from "./LearnMore";
import Container from "../Common/Container";

import Blockchain from "@/assets/blockchain-info/blockchain.svg";
import Coin from "@/assets/blockchain-info/coin.svg";

const BlockchainInfo = () => {
  return (
    <div className="space-y-32 bg-gradient-to-b from-black via-[#0F082C] to-[#0F082C]">
      <Container className="flex flex-col md:grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full aspect-video">
            <Image
              src={Blockchain}
              alt="blockchain"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex justify-center">
            <h2 className="text-3xl text-center font-semibold bg-gradient-to-r from-[#EE0099] to-[#00D4FF] bg-clip-text text-transparent">
              What is Blockchain?
            </h2>
          </div>
          <p className="lg:text-lg text-white text-center">
            A blockchain is a type of{" "}
            <span className="text-pink-500">distributed ledger technology</span>{" "}
            that securely records transactions across many computers in a way
            that ensures the data cannot be altered.
          </p>
          <div className="mt-5 flex justify-center hover:scale-105 duration-300">
            <Link href={`learnmore`}>
              <LearnMore />
            </Link>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col-reverse md:grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex justify-center">
            <h2 className="text-3xl text-center font-semibold bg-gradient-to-r from-[#EE0099] to-[#00D4FF] bg-clip-text text-transparent">
              What are Cryptocurrencies?
            </h2>
          </div>
          <p className="lg:text-lg text-white text-center">
            Cryptocurrencies are digital or virtual currencies that use
            cryptography for security. Cryptocurrencies operate on{" "}
            <span className="text-pink-500">decentralized</span> networks based
            on <span className="text-pink-500">blockchain technology.</span>
          </p>
          <div className="mt-5 flex justify-center hover:scale-105 duration-300">
            <Link href={`learnmore`}>
              <LearnMore />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-full aspect-video">
            <Image
              src={Coin}
              alt="bitcoin image"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlockchainInfo;
