import React from 'react';
import MapInfo from './MapInfo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BottomBar from './BottomBar';
import Link from 'next/link';

export default function InfoBanner() {
    return (
        <div className='flex flex-col w-full'>
            {/* Updated background with gradient */}
            <div className="bg-gradient-to-b from-black via-black to-#1C052E text-[#FFFFFF] pt-10 pb-[100px] px-7 sm:px-10 flex justify-center items-start">
                <div className="grid grid-cols-1 gap-y-[90px] gap-x-[10px] md:grid-cols-2 xl:grid-cols-7 mx-auto">

                    <div className="flex flex-col text-left col-span-1">
                        <div className="text-2xl font-bold mb-10 ">INSERT LOGO HERE</div>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>logo</div>
                        </Link>
                    </div>

                    <div className="flex flex-col text-left col-span-1">
                        <div className="text-2xl font-bold mb-10 ">HOME</div>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>CUBS Chula</div>
                        </Link>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>Contest</div>
                        </Link>
                    </div>

                    <div className="flex flex-col text-left col-span-1">
                        <div className="text-2xl font-bold mb-10">CONTENTS</div>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>Blog and news</div>
                        </Link>
                    </div>


                    <div className="flex flex-col text-left col-span-1">
                        <div className="text-2xl font-bold mb-10">ACTIVITY</div>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>Photo Gallery</div>
                        </Link>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>Our Activities</div>
                        </Link>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>Feedback</div>
                        </Link>
                    </div>

                    <div className="flex flex-col text-left col-span-1">
                        <div className="text-2xl font-bold mb-10">COMMINUTY</div>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>Reviews</div>
                        </Link>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>Benefits</div>
                        </Link>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>Members</div>
                        </Link>
                    </div>

                    <div className="flex flex-col text-left col-span-1">
                        <div className="text-2xl font-bold mb-10">JOIN US</div>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>JOURNEY</div>
                        </Link>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>CONTACT US</div>
                        </Link>
                    </div>

                    <div className="flex flex-col text-left col-span-1">
                        <div className="text-2xl font-bold mb-10">CONTACTS</div>
                        <Link href={`/`}>
                            <div className='mt-2 text-md font-semibold'>CHOOSE LANGUAGE</div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};
