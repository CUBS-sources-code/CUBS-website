import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import InfoBanner from "@/components/Home/InfoBanner";
import AnimatedFooter from "@/components/Home/AnimatedFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CUBS",
  description: "Chulalongkorn University Blockchain Society",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const nextAuthSession = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NextAuthProvider session={nextAuthSession}>
            <TopMenu />
            {children}
            <InfoBanner />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-black text-black">
              {/* 1F0532 */}
              <AnimatedFooter />
            </div>
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
