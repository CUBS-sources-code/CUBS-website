import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import Logo from "@/assets/CUBSlogo.png";

export default function Footer() {
  const socials = [
    {
      icon: "fa6-brands:facebook",
      link: "https://www.facebook.com/chula.blockchain",
    },
    {
      icon: "fa6-brands:instagram",
      link: "https://www.instagram.com/cubs.chula/",
    },
    {
      icon: "fa6-brands:tiktok",
      link: "https://www.tiktok.com/@cubs.chula",
    },
    // {
    //   icon: "material-symbols:mail",
    //   link: "mailto:google@google.google",
    // },
  ];

  const menus = [
    {
      title: "HOME",
      items: [
        { title: "CUBS Chula", link: "/" },
        { title: "Contest", link: "#" },
      ],
    },
    {
      title: "CONTENTS",
      items: [{ title: "Blog and News", link: "#" }],
    },
    {
      title: "ACTIVITY",
      items: [
        { title: "Photo Gallery", link: "#" },
        { title: "Our Activities", link: "#" },
        { title: "Feedback", link: "#" },
      ],
    },
    {
      title: "COMMUNITY",
      items: [
        { title: "Reviews", link: "#" },
        { title: "Benefits", link: "#" },
        { title: "Members", link: "#" },
      ],
    },
    {
      title: "JOIN US",
      items: [
        { title: "Journey", link: "#" },
        { title: "Contact Us", link: "#" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white px-12 py-8 lg:py-20 lg:px-16">
      <div className="grid grid-cols-1 gap-y-10 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
        <div className="col-span-1 space-y-2">
          <div className="flex flex-row items-center">
            <div className="relative size-20">
              <Image
                src={Logo}
                alt="CUBS_LOGO"
                fill
                className="object-contain object-center"
              />
            </div>
            <div className="text-3xl">CUBS</div>
          </div>
          <div>
            <span className="whitespace-nowrap">Chulalongkorn University</span>{" "}
            <span className="whitespace-nowrap">Blockchain Society</span>
          </div>
        </div>

        {/* Menus */}
        {menus.map(({ title, items }, index) => (
          <div key={index} className="flex flex-col text-left col-span-1">
            <div className="text-2xl font-bold mb-4 text-purple-200">
              {title}
            </div>
            {items.map(({ title, link }, index) => (
              <Link key={index} href={link}>
                <div className="mt-2 hover:underline">{title}</div>
              </Link>
            ))}
          </div>
        ))}

        {/* Socials */}
        <div className="flex flex-col items-center md:items-start col-span-1">
          <div className="flex items-center justify-center md:justify-start gap-4">
            {socials.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-500 hover:scale-110 duration-300 ease-in-out"
              >
                <Icon icon={icon} className="text-black size-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
