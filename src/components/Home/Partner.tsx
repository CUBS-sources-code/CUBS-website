import { partners } from "@/constants/partners";
import Container from "../Common/Container";

import Image from "next/image";

const Partner = () => {
  return (
    <Container className="space-y-12">
      <h3 className="text-lg text-center">
        Trusted by 100+ Companies across the globe!
      </h3>
      <div className="flex flex-wrap gap-x-12 gap-y-8 items-center justify-center">
        {partners.map(({ name, image }) => (
          <div key={name} className="relative h-20 aspect-video">
            <Image
              src={image}
              alt={name}
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
