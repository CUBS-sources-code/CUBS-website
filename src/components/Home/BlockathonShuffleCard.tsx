"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Blockathon } from "@/constants/blockathon";

const HorizontalGallery = () => {
    const images = Blockathon;

    const generateRandomRotations = () => {
        return images.map(() => Math.floor(Math.random() * 16) - 8);
    };

    const [imageRotations, setImageRotations] = useState(generateRandomRotations());

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center w-full h-[420px] p-4 overflow-hidden relative">
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentIndex * 440}px)`,
                }}
            >
                {images.map((img, index) => {
                    return (
                        <div
                            key={index}
                            className={`w-[400px] h-[400px] mx-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-2xl`}
                            style={{
                                transform: `rotate(${imageRotations[index]}deg)`,
                            }}
                        >
                            <Image
                                src={img.image}
                                alt={`Blockathon ${index + 1}`}
                                style={{
                                    objectPosition: "center",
                                    borderRadius: "8px",
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