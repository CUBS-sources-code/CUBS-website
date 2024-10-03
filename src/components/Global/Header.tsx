import styles from "./header.module.css";
import Image from "next/image";
import TopMenuItem from "./HeaderItem";
import { Link } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Header() {
  return (
    <div className={styles.menucontainer}>
      <Link className="pt-1 pl-2" href="/" underline="none">
        <div className={styles.logoWrapper}>
          <Image
            src="/img/Logo/CUBSlogo.png"
            alt="logo"
            layout="fill"
            objectFit="contain" // or 'cover', depending on the effect you want
          />
        </div>
      </Link>
      <div className="flex flex-row items-center absolute right-10 h-full text-white text-sm">
        <TopMenuItem title="Home" pageRef="/" />
        <TopMenuItem title="Content" pageRef="/content" />
        <TopMenuItem title="Activity" pageRef="/activity" />
        <TopMenuItem title="Community" pageRef="/community" />
      </div>
    </div>
  );
}
