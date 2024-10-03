import Image from "next/image";

export default function MainBackground() {
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
    <div className="bg-background flex items-center justify-between h-[135vh] relative overflow-hidden">
      <Image
        className="mr-10"
        src={`/img/Home/CloudLeft.png`}
        alt="Left Cloud"
        width={600}
        height={450}
      />

      {stars.map((star, index) => (
        <Image
          key={index}
          className={`absolute ${
            star.rotate ? `rotate-[${star.rotate}deg]` : ""
          }`}
          src={`/img/Home/Star.png`}
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

      <div className="absolute top-[-50vh] left-[calc(50%-10px)] transform -translate-x-1/2 z-20">
        <Image
          className="w-[540px]"
          src={`/img/Home/Light.png`}
          alt="Light"
          width={300}
          height={621}
        />
      </div>

      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 z-30">
        <Image
          className="animate-[spin_20s_linear_infinite]"
          src={`/img/Home/Moon.png`}
          alt="Moon"
          width={200}
          height={200}
        />
      </div>

      <div className="absolute top-[50vh] left-[calc(50%-10px)] transform -translate-x-1/2 z-10">
        <Image
          // className="w-[540px]"
          src={`/img/Home/CenterLogo.png`}
          alt="Logo"
          width={300}
          height={621}
        />
      </div>

      <div className="absolute top-[90vh] left-[calc(50%-10px)] transform -translate-x-1/2 z-10">
        <Image
          // className="w-[540px]"
          src={`/img/Home/LogoReflect.png`}
          alt="Logo"
          width={290}
          height={35}
        />
      </div>

      <div className="absolute top-[25vh] left-[calc(50%-10px)] transform -translate-x-1/2 z-0">
        <Image
          src={`/img/Home/Shadow.png`}
          alt="Logo"
          width={989}
          height={1029}
        />
      </div>

      <Image
        className="absolute right-[0%] top-[15%]"
        src={`/img/Home/CloudRight.png`}
        alt="Right Cloud"
        width={600}
        height={450}
      />
    </div>
  );
}
