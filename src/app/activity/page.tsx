import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";



export default function Gallery() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="flex flex-col items-center justify-center py-20">
            <main className="flex flex-col items-center justify-center py-20">
                <h1 className="text-center text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-500 to-pink-500">
                ACTIVITY
                </h1>

                <p className="flex flex-col items-center space-y-12 mt-1 text-4xl font-extrabold text-center">
                    What we have accomplished
                </p>

                <p className="mt-7 text-center text-xl max-w-2xl">
                    These pictures are like treasure boxes that store our memories. When we look at these images, we travel back to the moments that have passed. The various activities we have shared together are captured in there photos.
                </p>

                <Link href={`/gallery`}>
                    <button
                        //onClick={handleLogin}
                        className=" mt-5 w-20 bg-purple-800 text-white py-2 rounded-full 
                        hover:bg-pink-500 transition duration-300">
                        view all
                    </button>
                </Link>

                <div className="mt-16 flex flex-col items-center space-y-12">
                    <div className="text-center">
                        <h2 className="mt-10 text-4xl text-transparent bg-clip-text 
                        bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                            Within Our Club!</h2>
                        <p className="mt-4 text-lg max-w-2xl">
                            Discover a world of fascinating activities and thrilling experiences at our club. Whether you are looking to learn something new, meet amazing people, or simply have fun, we have something for everyone. Come and be part of our dynamic community! 
                        </p>
                    </div>

                    <Link href={`/gallery`}>
                    <button
                        //onClick={handleLogin}
                        className=" mt-5 w-20 bg-purple-800 text-white py-2 rounded-full 
                        hover:bg-pink-500 transition duration-300">
                        view all
                    </button>
                </Link>

                    <div className="text-center">
                        <h2 className="mt-10 text-4xl text-transparent bg-clip-text 
                        bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
                            Feedback From Our Collaborators</h2>
                    </div>
            
                </div>
            </main>

                
                
    


            </div>
            

            <div className="text-center">
            
            </div>
        </div>
        


    )
}