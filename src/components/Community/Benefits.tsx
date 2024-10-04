import React from "react";
import FlareComponent from "../Home/FlareComponent";
import Connection from "./Logo/Connection";
import Coupon from "./Logo/Coupon";
import Internship from "./Logo/Internship";
import Experience from "./Logo/Experience";
import Idea from "./Logo/Idea";
import Expert from "./Logo/Expert";
import Container from "../Common/Container";

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
          <div className="flex flex-col items-center">
            <Connection />
            <h3 className="mt-4 text-xl font-bold text-white">Connection</h3>
            <p className="text-gray-300 text-center mt-2">
              Our partners provide valuable connections that can help broaden
              your professional network. By collaborating with us.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Coupon />
            <h3 className="mt-4 text-xl font-bold text-white">Coupon</h3>
            <p className="text-gray-300 text-center mt-2">
              As part of our collaboration, you will receive exclusive coupons
              that offer special privileges to join the event or special
              discount.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Internship />
            <h3 className="mt-4 text-xl font-bold text-white">Internship</h3>
            <p className="text-gray-300 text-center mt-2">
              We offer opportunities for internships with leading blockchain
              companies.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Experience />
            <h3 className="mt-4 text-xl font-bold text-white">Experience</h3>
            <p className="text-gray-300 text-center mt-2">
              Working with blockchain followers provides a unique experience in
              Community Engagement.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Idea />
            <h3 className="mt-4 text-xl font-bold text-white">
              Idea to Impact
            </h3>
            <p className="text-gray-300 text-center mt-2">
              Collaborating with us gives you the chance to create and develop
              new projects.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Expert />
            <h3 className="mt-4 text-xl font-bold text-white">
              Expert Insight
            </h3>
            <p className="text-gray-300 text-center mt-2">
              Benefit from the opportunity to receive valuable advice from
              industry experts and speakers.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
