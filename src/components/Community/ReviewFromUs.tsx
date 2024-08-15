"use client"

import React from 'react';
import FlareComponent from '../Home/FlareComponent';

const ReviewFromUs = () => {
  return (
    <div className="bg-[#0F082C] text-white p-10">
      <h2 className='text-2xl font-sm text-center'>Explore new interests, make friends, and enjoy exciting activities.</h2>
      <h2 className='text-2xl font-sm text-center mb-20'>There's always something happening at our club. Be part of the blockchain adventure!</h2>
      <h1 className="text-6xl font-bold text-center text-gradient">
        Review From Us
      </h1>
      <div className="flex inset-0 flex justify-center items-center mb-10">
        <FlareComponent />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg?w=2000"
              alt="Cat"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-5 font-bold">Cat cat</h2>
          <p className="text-gray-400">cat president</p>
          <p className="mt-5 text-center text-gray-400">
            Message balak balak Message balak balak Message balak balak
            Message balak balak Message balak balak Message balak balak
            Message balak balak Message
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg?w=2000"
              alt="Cat"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-5 font-bold">Cat cat</h2>
          <p className="text-gray-400">cat designer</p>
          <p className="mt-5 text-center text-gray-400">
            Message balak balak Message balak balak Message balak balak
            Message balak balak Message balak balak Message balak balak
            Message balak balak Message
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg?w=2000"
              alt="Cat"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-5 font-bold">Cat cat</h2>
          <p className="text-gray-400">cat president</p>
          <p className="mt-5 text-center text-gray-400">
            Message balak balak Message balak balak Message balak balak
            Message balak balak Message balak balak Message balak balak
            Message balak balak Message
          </p>
        </div>
      </div>
      <style jsx>{`
                .text-gradient {
                background: linear-gradient(90deg, rgba(238,0,153,1) 0%, rgba(0,212,255,1) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                }
            `}</style>
    </div>
  );
};

export default ReviewFromUs;
