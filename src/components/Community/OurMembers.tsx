"use client"

import React from 'react';

const OurMembers: React.FC = () => {
    return (
        <div className="w-full bg-gradient-to-b from-black via-[#0F082C] to-[#0F082C] py-16 relative overflow-hidden">
            <style jsx>{`
        .gradientText {
          background: linear-gradient(to right, #311B92, #7102C8, #F8BBD0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
            <div className="container mx-auto text-center relative z-10">
                <h1 className="text-8xl font-bold gradientText opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Members
                </h1>
                <h2 className="text-5xl font-bold text-white mb-5 mt-0 relative z-20">
                    Our Members
                </h2>
                <div className="flex justify-center items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-16 h-1 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
            </div>
            <div className='text-white font-sm mt-10'>
                <h2 className='text-2xl font-sm text-center'>CUBS is a community consisting of more than <span className='text-orange-700'>55</span> members, bringing together individuals</h2>
                <h2 className='text-2xl font-sm text-center mb-20'>who share a keen interest in blockchain technology.</h2>
            </div>
        </div>
    );
};

export default OurMembers;
