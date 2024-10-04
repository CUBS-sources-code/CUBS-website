import React from "react";
import Container from "../Common/Container";

const OurMembers: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black via-[#0F082C] to-[#0F082C] py-16 relative overflow-hidden">
      <Container>
        <div className="relative">
          <h2 className="text-8xl font-bold bg-gradient-to-br from-[#311B92] via-[#7102C8] to-[#F8BBD0] bg-clip-text text-transparent opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Members
          </h2>

          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-white text-center relative z-20">
              Our Members
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full z-10"></div>
              <div className="w-16 h-1 bg-white rounded-full z-10"></div>
              <div className="w-2 h-2 bg-white rounded-full z-10"></div>
            </div>
          </div>
        </div>

        <div className="text-white mt-10">
          <p className="lg:text-lg text-center">
            CUBS is a community consisting of more than{" "}
            <span className="text-orange-700">55</span> members, bringing
            together individuals
            <br />
            who share a keen interest in blockchain technology.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default OurMembers;
