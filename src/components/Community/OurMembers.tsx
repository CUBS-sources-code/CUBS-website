import React from "react";
import Container from "../Common/Container";

import { members } from "@/constants/members";
import Image from "next/image";

const OurMembers: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#0F082C] to-[#0F082C] py-16">
      <Container className="space-y-8">
        <div>
          <div className="relative">
            <h2 className="text-7xl md:text-8xl font-bold text-center bg-gradient-to-br from-[#311B92] via-[#7102C8] to-[#F8BBD0] bg-clip-text text-transparent opacity-50">
              MEMBERS
            </h2>

            <div className="space-y-4 -mt-10">
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
            <p className="text-lg text-center">
              CUBS is a community consisting of more than{" "}
              <span className="text-orange-700">{members.length}</span> members,
              bringing together individuals
              <br />
              who share a keen interest in blockchain technology.
            </p>
          </div>
        </div>

        {/* member chips */}
        <div className="flex flex-wrap gap-4 justify-center">
          {members.map((member, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 bg-gray-800 rounded-full p-3 pr-5"
            >
              <div className="relative size-8 md:size-12">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-base md:text-lg font-semibold whitespace-nowrap">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurMembers;
