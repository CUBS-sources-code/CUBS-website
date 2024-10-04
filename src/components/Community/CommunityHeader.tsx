import React from "react";
import Container from "../Common/Container";

const CommunityHeader: React.FC = () => {
  return (
    <div className="bg-[#0F082C] from-purple-900 via-purple-800 to-purple-950 py-16">
      <Container className="space-y-8">
        <div className="relative">
          <h2 className="text-5xl md:text-8xl font-bold text-center bg-gradient-to-br from-[#311B92] via-[#7102C8] to-[#F8BBD0] bg-clip-text text-transparent opacity-50">
            COMMUINITY
          </h2>

          <div className="space-y-4 -mt-6 md:-mt-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center relative z-20">
              Be part of something amazing!
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full z-10"></div>
              <div className="w-16 h-1 bg-white rounded-full z-10"></div>
              <div className="w-2 h-2 bg-white rounded-full z-10"></div>
            </div>
          </div>
        </div>

        <p className="text-lg font-sm text-center">
          Explore new interests, make friends, and enjoy exciting activities.
          There&#39;s always something happening at our club. Be part of the
          blockchain adventure!
        </p>
      </Container>
    </div>
  );
};

export default CommunityHeader;
