"use client"

import React from 'react';

const CommunityHeader: React.FC = () => {
  return (
    <div className="w-full bg-[#0F082C] from-purple-900 via-purple-800 to-purple-950 py-16 relative overflow-hidden">
      <style jsx>{`
        .gradientText {
          background: linear-gradient(to right, #311B92, #7102C8, #F8BBD0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      <div className="mt-[5vh] container mx-auto text-center relative z-10">
        <h1 className="text-8xl font-bold gradientText opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          COMMUNITY
        </h1>
        <h2 className="text-5xl font-black text-white mb-5 mt-5 relative z-20">
          Be part of something amazing!
        </h2>
        <div className="flex justify-center items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-16 h-1 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className='mt-[10vh]'>
        <h2 className="text-2xl font-sm text-center">
          Explore new interests, make friends, and enjoy exciting activities.
        </h2>
        <h2 className="text-2xl font-sm text-center mb-2">
          There&#39;s always something happening at our club. Be part of the
          blockchain adventure!
        </h2>
      </div>
    </div>
  );
};

export default CommunityHeader;
