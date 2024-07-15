import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import DetailBanner from "@/components/DetailBanner";
import Link from "next/link";
import BottomBar from "@/components/BottomBar";
import InfoBanner from "@/components/InfoBanner";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner/>
      <DetailBanner />
      <InfoBanner/>
    </main>
  );
}