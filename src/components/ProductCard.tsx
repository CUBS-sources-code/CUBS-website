'use client'
import styles from './productcard.module.css'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard'
import { useState } from 'react';
import Rating from '@mui/material/Rating';

export default function ProductCard({ carName, imgSrc, onCompare, averageStar }: { carName: string, imgSrc: string, onCompare?: Function, averageStar: number }) {

    // function onCarSelected() {
    //     alert("You ssSelect " + carName);
    // }

    const [rating, setValue] = useState<number | null>(averageStar);

    return (
        <InteractiveCard contentName={carName}>
            <div className="w-full h-[65%] relative rounded-t-lg">
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className="w-full h-[15%] p-[10px]">
                <div>
                    {carName}
                </div>
                <Rating
                    value={averageStar}
                    name={carName + ' Rating'}
                    id={carName + ' Rating'}
                />
            </div>
            {
                onCompare ?
                    <button className="block text-sm h-[10%] rounded-md bg-sky-600 hover:bg-indigo-600 mx-2 px-1 py-1 shadow-sm text-white"
                        onClick={(e) => { e.preventDefault(); onCompare(carName) }}
                    >Compare</button> : ''
            }
        </InteractiveCard>
    );
}