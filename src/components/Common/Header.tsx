import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/CUBSlogo.png";

export default function Header() {
  const menus = [
    { title: "Home", link: "/" },
    // { title: "Content", link: "/content" },
    // { title: "Activity", link: "/activity" },
    { title: "Community", link: "/community" },
  ];

  return (
    <nav className="sticky top-0 bg-background text-white z-50 flex flex-row justify-between items-center gap-8 px-8 py-2">
      <Link href="/">
        <div className="relative size-16">
          <Image
            src={Logo}
            alt="logo"
            fill
            className="object-contain object-center"
          />
        </div>
      </Link>

      <div className="flex flex-row items-center gap-8">
        {menus.map(({ title, link }) => (
          <Link key={title} href={link}>
            <div className="text-base lg:text-lg font-medium hover:text-gray-400 transition-colors">
              {title}
            </div>
          </Link>
        ))}
      </div>

      <div className="hidden md:block">
        <Link href="https://www.instagram.com/cubs.chula/" target="_blank">
          <button className="flex flex-row gap-4 bg-accent-purple text-accent-purple-foreground px-6 py-1 rounded-full font-medium hover:bg-accent-purple/90">
            <span>Join us</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
