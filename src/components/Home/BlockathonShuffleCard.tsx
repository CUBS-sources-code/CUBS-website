"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Blockathon } from "@/constants/blockathon";

const HorizontalGallery = () => {
    const images = Blockathon;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length + 0));
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex justify-start items-center w-full h-[420px] p-4 overflow-hidden relative">
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentIndex * 432}px)`,
                    position: "relative",
                }}
            >
                {images.map((img, index) => {
                    const rotation = Math.floor(Math.random() * 10) - 5;
                    return (
                        <div
                            key={index}
                            className={`w-[400px] h-[400px] mx-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-110`}
                            style={{
                                transform: `rotate(${rotation}deg)`,
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        >
                            <Image
                                src={img.image}
                                alt={`Blockathon ${index + 1}`}
                                style={{
                                    objectPosition: "center",
                                    borderRadius: "8px",
                                    objectFit: "cover",
                                    // height: "auto",
                                    // width: "auto",
                                }}
                                width={400}
                                height={400}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HorizontalGallery;