"use client"

import React, { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { FaTiktok, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

import styles from './footer.module.css';

export default function InfoBanner() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gradient-to-b from-black via-black to-black text-white pt-10 pb-[100px] px-7 sm:px-10 flex justify-center items-start">
            <div className="grid grid-cols-1 gap-y-10 gap-x-5 md:grid-cols-2 xl:grid-cols-7 mx-auto">
                <div className="flex flex-col text-left col-span-1 md:items-start">
                    <div className="flex text-md">
                        <Image
                            src="/img/Logo/CUBSlogo.png"
                            className={`${styles.logoimg} mx-auto md:mx-0`}
                            alt="CUBS_LOGO"
                            width={100}
                            height={100}
                            layout="fixed"
                        />
                        <div className="text-3xl font-bold mt-10">CUBS</div>
                    </div>
                    <div className='mt-2 text-md font-bold'>
                        Chulalongkorn University<br />
                        Blockchain Society
                    </div>
                </div>

                <div className="flex flex-col text-left col-span-1">
                    <div className="text-2xl font-bold mb-10 text-purple-200">HOME</div>
                    <Link href={`/`}>
                        <div className='mt-2 text-md font-semibold'>CUBS Chula</div>
                    </Link>
                    <Link href={`/contest`}>
                        <div className='mt-2 text-md font-semibold'>Contest</div>
                    </Link>
                </div>

                <div className="flex flex-col text-left col-span-1">
                    <div className="text-2xl font-bold mb-10 text-purple-200">CONTENTS</div>
                    <Link href={`/blog`}>
                        <div className='mt-2 text-md font-semibold'>Blog and news</div>
                    </Link>
                </div>

                <div className="flex flex-col text-left col-span-1">
                    <div className="text-2xl font-bold mb-10 text-purple-200">ACTIVITY</div>
                    <Link href={`/gallery`}>
                        <div className='mt-2 text-md font-semibold'>Photo Gallery</div>
                    </Link>
                    <Link href={`/activity`}>
                        <div className='mt-2 text-md font-semibold'>Our Activities</div>
                    </Link>
                    <Link href={`/feedback`}>
                        <div className='mt-2 text-md font-semibold'>Feedback</div>
                    </Link>
                </div>

                <div className="flex flex-col text-left col-span-1">
                    <div className="text-2xl font-bold mb-10 text-purple-200">COMMUNITY</div>
                    <Link href={`/reviews`}>
                        <div className='mt-2 text-md font-semibold'>Reviews</div>
                    </Link>
                    <Link href={`/benefits`}>
                        <div className='mt-2 text-md font-semibold'>Benefits</div>
                    </Link>
                    <Link href={`/members`}>
                        <div className='mt-2 text-md font-semibold'>Members</div>
                    </Link>
                </div>

                <div className="flex flex-col col-span-1 text-green">
                    <div className="text-2xl font-bold mb-10 text-purple-200">JOIN US</div>
                    <Link href={`/journey`}>
                        <div className='mt-2 text-md font-semibold'>Journey</div>
                    </Link>
                    <Link href={`/contact`}>
                        <div className='mt-2 text-md font-semibold'>Contact Us</div>
                    </Link>
                </div>

                <div className="flex flex-col items-center md:items-start col-span-1">
                    <div className="flex items-center justify-center md:justify-start space-x-3 mb-10">
                        <a href={`https://www.instagram.com/cubs.chula/`} target="_blank" rel="noopener noreferrer" className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-500 hover:scale-110 duration-300 ease-in-out">
                            <FaInstagram className="text-black w-6 h-6" />
                        </a>
                        <a href={`https://www.tiktok.com/@cubs.chula`} target="_blank" rel="noopener noreferrer" className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-500 hover:scale-110 duration-300 ease-in-out">
                            <FaTiktok className="text-black w-6 h-6" />
                        </a>
                        <a href={`https://www.facebook.com/chula.blockchain`} target="_blank" rel="noopener noreferrer" className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-500 hover:scale-110 duration-300 ease-in-out">
                            <FaFacebook className="text-black w-6 h-6" />
                        </a>
                        <a href={`mailto:google@google.google`} target="_blank" rel="noopener noreferrer" className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-500 hover:scale-110 duration-300 ease-in-out">
                            <FaEnvelope className="text-black w-6 h-6" />
                        </a>
                    </div>

                    <div>
                        <div className={`flex items-center mt-2 text-sm text-white font-semibold cursor-pointer bg-gray-600 border border-gray-200 rounded-lg px-4 py-2 transition-transform duration-300 ease-in-out hover:scale-105`} onClick={toggleDropdown}>
                            <FiGlobe className="mr-2 text-gray-700" />
                            <div>CHOOSE LANGUAGE</div>
                            <FiChevronDown className="ml-2" />
                        </div>

                        {isOpen && (
                            <div className="absolute mt-2 w-40 bg-gray-500 shadow-lg rounded-md border border-gray-200" ref={dropdownRef}>
                                <div className="py-1">
                                    <div className={`flex items-center px-4 py-2 cursor-pointer border-b border-gray-400`} onClick={() => alert("English - En")}>
                                        <FiGlobe className="mr-2 text-gray-700" />
                                        English - EN
                                    </div>
                                    <div className={`flex items-center px-4 py-2 cursor-pointer`} onClick={() => alert("Thai - Th")}>
                                        <FiGlobe className="mr-2 text-gray-700" />
                                        Thai - TH
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
