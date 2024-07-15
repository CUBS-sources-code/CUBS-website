'use client'

import { useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';
import styles from './homebanner.module.css'

export default function HomeBanner() {
    
    const router = useRouter();
    const { data: session } = useSession()
    
    console.log(session?.user.token);

    return (
        <div className={styles.banner}>
            <Image src= {'/img/HomeCUBS.png'}
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