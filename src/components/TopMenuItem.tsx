import styles from './topmenu.module.css'
import Link from 'next/link';

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
    return (
        <Link className="${styles.itemcontainer} text-white px-5 text-lg font-md" href={pageRef}>
            {title}
        </Link>
    );
}