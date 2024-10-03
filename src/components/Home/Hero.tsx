import Container from "../Common/Container";
import Image from "next/image";

import ToTheMoonLogo from "@/assets/hero/to-the-moon-logo.png";
import Moon from "@/assets/hero/Moon.png";
import CloudLeft from "@/assets/hero/CloudLeft.png";
import CloudRight from "@/assets/hero/CloudRight.png";
import Star from "@/assets/hero/Star.png";
import Light from "@/assets/hero/Light.png";

const Hero = () => {
  const stars = [
    { top: "4%", left: "10%", width: 50, height: 50 },
    { top: "10%", left: "3%", width: 100, height: 150, rotate: 50 },
    { top: "31%", left: "2%", width: 75, height: 75 },
    { top: "20%", left: "25%", width: 100, height: 150 },
    { top: "7%", left: "30%", width: 50, height: 50 },
    { top: "0%", right: "3%", width: 150, height: 150 },
    { top: "25%", right: "10%", width: 100, height: 150 },
    { top: "5%", right: "20%", width: 100, height: 150 },
    { top: "20%", right: "28%", width: 100, height: 150 },
    { top: "40%", right: "30%", width: 80, height: 80, rotate: 20 },
  ];

  return (
    <div className="relative h-svh">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-30">
        <div className="relative size-48">
          <Image
            className="animate-[spin_20s_linear_infinite] object-contain object-center"
            src={Moon}
            alt="Moon"
            fill
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 h-full w-full z-50 flex flex-col gap-y-8">
        <Container className="flex flex-col items-center justify-center gap-y-8 pt-36 2xl:pt-64 z-20">
          <div className="flex">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center bg-gradient-to-r from-[#EE0099] to-[#00D4FF] bg-clip-text text-transparent">
              CU Blockchain Society
            </h1>
          </div>

          <p className="text-center text-sm md:text-base lg:text-lg font-light">
            We act as a central point connecting all parties interested in
            blockchain technology, from enterprise users to general public. Our
            goal is to fully optimize the value of the blockchain sector.
          </p>
        </Container>

        <Container className="flex-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-start md:justify-center gap-4 md:pt-48">
            <h2 className="text-2xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#EE0099] to-[#00D4FF] bg-clip-text text-transparent">
              Core Value
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-center font-light">
              Learn, Develop, Communicate and Take action.
            </p>
          </div>
          <div className="hidden md:block">
            {/* Leave it blank to show CUBS Logo */}
          </div>
          <div className="flex flex-col items-center justify-start md:justify-center gap-4 md:pb-48">
            <h2 className="text-2xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#EE0099] to-[#00D4FF] bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-center font-light">
              Making Blockchain simple and easy to accessed by all genders and
              all ages.
            </p>
          </div>
        </Container>
      </div>

      <>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
              <Image
                className="w-[540px]"
                src={Light}
                alt="Light"
                width={300}
                height={621}
              />
            </div>
            <div className="relative size-[900px] z-[-1]">
              <Image
                src={ToTheMoonLogo}
                alt="logo"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </>

      {stars.map((star, index) => (
        <Image
          key={index}
          className={`absolute ${
            star.rotate ? `rotate-[${star.rotate}deg]` : ""
          }`}
          src={Star}
          alt="Star"
          width={star.width}
          height={star.height}
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
          }}
        />
      ))}

      <>
        <div className="absolute top-1/3 transform -translate-y-1/3 left-0">
          <div className="relative h-[450px] w-[600px]">
            <Image
              src={CloudLeft}
              alt="Left Cloud"
              fill
              className="object-contain object-left"
            />
          </div>
        </div>

        <div className="absolute top-1/3 transform -translate-y-1/3 right-0">
          <div className="relative h-[450px] w-[600px]">
            <Image
              src={CloudRight}
              alt="Right Cloud"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default Hero;
