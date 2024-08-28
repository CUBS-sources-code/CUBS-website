import styles from './header.module.css'
import Image from 'next/image';
import TopMenuItem from './HeaderItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material';

export default async function Header() {

    const session = await getServerSession(authOptions);

    return (
        <div className={styles.menucontainer}>
            <Link className="pt-1 pl-2" href="/" underline="none">
                <div className={styles.logoWrapper}>
                    <Image
                        src='/img/Logo/CUBSlogo.png'
                        alt='logo'
                        layout='fill'
                        objectFit='contain'  // or 'cover', depending on the effect you want
                    />
                </div>
            </Link>
            <div className='flex flex-row items-center absolute right-10 h-full absolute right-0 text-white text-sm'>
                <TopMenuItem title='Home' pageRef='/' />
                <TopMenuItem title='Content' pageRef='/content' />
                <TopMenuItem title='Activity' pageRef='/activity' />
                <TopMenuItem title='Community' pageRef='/community' />
                {
                    session ? (
                        <Link href="/api/auth/signout">
                            <div className='flex items-center h-full px-2 text-white text-lg font-md'>
                                {/* Sign-Out of {session.user?.name} */}
                                Sign-Out
                            </div>
                        </Link>
                    ) : (
                        <Link href="/api/auth/signin">
                            <div className='flex items-center h-full px-2 text-white text-lg font-md'>
                                Join-Us
                            </div>
                        </Link>
                    )
                }
            </div>
        </div >
    );
}