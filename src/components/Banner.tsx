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
        <div className="min-h-screen bg-black text-white">
            <main className="flex flex-col items-center justify-center py-20">
                <h1 className="text-6xl font-bold text-center text-gradient">
                    CU Blockchain Society
                </h1>

                <p className="mt-8 text-center text-xl max-w-2xl">
                    We act as a central point connecting all parties interested in blockchain technology, from enterprise users to general public.  Our goal is to fully optimize the value of the blockchain sector.
                </p>

                <div className="mt-16 flex flex-col items-center space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Our Mission</h2>
                        <p className="mt-4 text-lg">
                            Making Blockchain simple and easy to  accessed by all genders and all ages.
                        </p>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Core Value</h2>
                        <p className="mt-4 text-lg">
                            Learn, Develop, Communicate and Take action.
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center text-lg text-red-400">
                    <p>Trusted by 100+ ????/ Companies across the globe! </p>
                </div>
            </main>

            <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, rgba(238,0,153,1) 0%, rgba(0,212,255,1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
        </div>
    )
}