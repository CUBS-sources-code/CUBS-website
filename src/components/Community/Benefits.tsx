import React from "react";
import FlareComponent from "../Home/FlareComponent";
import Container from "../Common/Container";
import { benefits } from "@/constants/benefits";

const Benefits = () => {
  return (
    <div className="bg-gradient-to-b from-[#0F082C] via-black to-black py-16">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-7xl font-bold text-center bg-gradient-to-r from-[#EE0099] to-[#00D4FF] bg-clip-text text-transparent">
            Benefits
          </h2>
        </div>
        <div className="flex justify-center items-center mb-10">
          <FlareComponent />
        </div>
        <p className="text-lg font-md text-center mb-10">
          When you join our club, you&#39;ll gain unique experiences, build
          valuable connections, and much more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map(({ title, description, icon }, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="h-44">{icon}</div>
              <div className="flex flex-col items-center">
                <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-300 text-center mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
