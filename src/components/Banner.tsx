'use client'

import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';


export default function Banner() {
    const covers = ['/img/HomeCUBS.png', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const { data: session } = useSession()
    
    console.log(session?.user.token);

    return (
        <div className={styles.banner} onClick={() => setIndex(index + 1)}>
            <Image src={covers[0]}
                alt='cover'
                fill={true}
                priority
                objectFit='cover'
            />
            {
                session ?
                    <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>
                        Hello {session.user?.name}
                    </div>
                : null
            }
        </div>
    )
}