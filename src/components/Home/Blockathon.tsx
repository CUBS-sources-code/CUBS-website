"use client";

import SpeakerBox from "./SpeakerBox";
import FlareComponent from "./FlareComponent";
import ReadMore from "./ReadMore";

import Link from "next/link";

const Blockathon = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0F082C] via-black to-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-center text-gradient">
          Blockathon
        </h1>
        <div className="flex inset-0 justify-center items-center mb-10">
          <FlareComponent />
        </div>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed
          posuere sem. Curabitur lorem massa, <br />
          vehicula sed maximus nec, dapibus a nulla. Maecenas lectus orci,
          maximus vitae tellus luctus, pellentesque pretium libero. <br />
          Ut sed urna vitae ipsum pellentesque egestas. Cras id orci nunc. Morbi
          placerat, lectus quis vulputate aliquam, dui libero semper odio,{" "}
          <br />
          sed dapibus justo lorem ut ipsum. Vivamus a est et lacus tincidunt
          interdum. Donec nec nisl congue, iaculis nulla id, porta felis. <br />
          Vestibulum id erat eu nunc tempus venenatis. Morbi gravida risus
          libero, ut molestie lorem egestas ut. Vivamus eu accumsan diam, <br />
          quis pulvinar enim. Donec id leo sed sapien ultrices rutrum sed id
          dui. Vivamus sed molestie neque. Aliquam posuere lectus nulla, <br />
          in auctor mi egestas in.
        </p>
        <p className="mt-6 text-5xl font-bold">Speaker</p>
        <div className="mt-10 flex justify-between items-center">
          <div className="w-1/12" />
          <SpeakerBox
            speakerName="HELLO"
            speakerInfo="HELLO HELLO HELLO"
            color="Pink"
          />
          <SpeakerBox
            speakerName="WORLD"
            speakerInfo="HELLO HELLO HELLO"
            color="Purple"
          />
          <SpeakerBox speakerName="1234" speakerInfo="HELLO HELLO HELLO" />
          <div className="w-1/12" />
        </div>

        <div className="mt-10 flex justify-center hover:scale-105 duration-300">
          <Link href={`readMore`}>
            <ReadMore />
          </Link>
        </div>
      </div>
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
};

export default Blockathon;
