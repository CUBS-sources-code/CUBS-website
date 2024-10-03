import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import AnimatedFooter from "@/components/Global/AnimatedFooter";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CUBS",
  description: "Chulalongkorn University Blockchain Society",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Header />
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-[8vh] bg-gradient-to-b from-black to-transparent z-30" />
          <div className="relative z-20">{children}</div>
        </div>
        <Footer />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-black text-black">
          <AnimatedFooter />
        </div>
      </body>
    </html>
  );
}
