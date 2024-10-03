import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const menus = [
    { title: "Home", link: "/" },
    // { title: "Content", link: "/content" },
    // { title: "Activity", link: "/activity" },
    { title: "Community", link: "/community" },
  ];

  return (
    <div className="sticky top-0 bg-background text-white z-50 flex flex-row justify-between items-center gap-8 px-8 py-2">
      <Link href="/">
        <div className="relative size-16">
          <Image
            src="/img/Logo/CUBSlogo.png"
            alt="logo"
            fill
            className="object-contain object-center"
          />
        </div>
      </Link>

      <div className="flex flex-row items-center gap-8">
        {menus.map(({ title, link }) => (
          <Link key={title} href={link}>
            <div className="text-lg font-medium hover:text-gray-400 transition-colors">
              {title}
            </div>
          </Link>
        ))}
      </div>

      <div></div>
    </div>
  );
}
