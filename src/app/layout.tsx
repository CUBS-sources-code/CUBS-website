import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import Footer from '@/components/Global/Footer';
import Header from '@/components/Global/Header';
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

  const nextAuthSession = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ReduxProvider>
          <NextAuthProvider session={nextAuthSession}>
            <Header />
            <div className="w-full h-[12vh] bg-gradient-to-b from-black via-[#0F082C] to-[#0F082C]">
              </div>
              {children}
            <Footer />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-black text-black">
              <AnimatedFooter />
            </div>
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
