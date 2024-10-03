import Container from "../Common/Container";

import Image from "next/image";

import SCBX from "@/assets/partners/scb-x.png";
import BitkubExchange from "@/assets/partners/bitkub-exchange.png";
import ETHPadThai from "@/assets/partners/ethpadthai.png";
import CryptoMind from "@/assets/partners/cryptomind.png";
import IC from "@/assets/partners/ic.png";
import Velo from "@/assets/partners/velo.png";
import BinanceTH from "@/assets/partners/binance-th.png";

const Partner = () => {
  const partners = [
    {
      name: "SCBx",
      image: SCBX,
    },
    {
      name: "Bitkub Exchange",
      image: BitkubExchange,
    },
    {
      name: "ETHPadThai",
      image: ETHPadThai,
    },
    {
      name: "CryptoMind",
      image: CryptoMind,
    },
    {
      name: "IC",
      image: IC,
    },
    {
      name: "Velo",
      image: Velo,
    },
    {
      name: "Binance TH",
      image: BinanceTH,
    },
  ];

  return (
    <Container className="space-y-12">
      <h3 className="text-lg text-center">
        Trusted by 100+ Companies across the globe!
      </h3>
      <div className="flex flex-wrap gap-12 items-center justify-center">
        {partners.map((partner) => (
          <div key={partner.name} className="relative h-20 aspect-video">
            <Image
              src={partner.image}
              alt={partner.name}
              fill
              className="object-center object-contain"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Partner;
