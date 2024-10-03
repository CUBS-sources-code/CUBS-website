import SpeakerBox from "./SpeakerBox";
import FlareComponent from "./FlareComponent";
import ReadMore from "./ReadMore";

import Link from "next/link";
import Container from "../Common/Container";

const Blockathon = () => {
  return (
    <div className="bg-gradient-to-b from-[#0F082C] via-black to-black py-32">
      <Container className="space-y-16">
        <div className="space-y-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-[#EE0099] to-[#00D4FF] bg-clip-text text-transparent">
              Blockathon
            </h2>
          </div>
          <div className="flex inset-0 justify-center items-center">
            <FlareComponent />
          </div>
          <p className="text-center">
            The CUBS Blockathon is a hackathon designed to bring together
            participants who will use blockchain technology to address
            real-world problems and create practical solutions. This event
            focuses on applying blockchain&#39;s capabilities to improve
            everyday life, aiming to turn these ideas into viable business
            models. Participants are encouraged to think creatively and
            collaboratively, exploring how blockchain can be integrated into
            various industries to revolutionize processes, enhance transparency,
            and build more efficient systems. The goal is to foster innovation
            and drive the development of blockchain-powered solutions that have
            a meaningful impact on people&#39;s lives.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#EE0099] to-[#00D4FF] bg-clip-text text-transparent">
              Speaker
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 px-8">
            <SpeakerBox
              speakerName="Steve Jobs"
              speakerInfo="CEO of Apple"
              color="Pink"
            />
            <SpeakerBox
              speakerName="Elon Musk"
              speakerInfo="CEO of Tesla"
              color="Purple"
            />
            <SpeakerBox
              speakerName="
            Bill Gates"
              speakerInfo="CEO of Microsoft"
            />
          </div>

          <div className="mt-10 flex justify-center hover:scale-105 duration-300">
            <Link href={`readMore`}>
              <ReadMore />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blockathon;
