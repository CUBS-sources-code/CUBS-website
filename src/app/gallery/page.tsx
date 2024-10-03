import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center py-20">
        <main className="flex flex-col items-center justify-center py-20">
          <p
            className="mt-1 flex flex-col items-center space-y-12 text-4xl font-bold text-center
                                text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          >
            Photo Gallery
          </p>

          <p className="mt-3 text-center text-xl max-w-2xl">
            These pictures are like treasure boxes that store our memories. When
            we look at these images, we travel back to the moments that have
            passed. The various activities we have shared together are captured
            in there photos.
          </p>

          <div className="mt-16 flex flex-col space-y-12">
            <div className="text-left">
              <h2 className="mt-10 text-3xl text-white font-bold">
                SCB x CUBS
              </h2>
              <p className="mt-1 text-sm max-w-2xl text-pink-500">
                May 20, 2024
              </p>
            </div>

            <Link href={`/gallery`}>
              <button
                //onClick={handleLogin}
                className=" mt-5 w-20 bg-purple-800 text-white py-2 rounded-full 
                        hover:bg-pink-500 transition duration-300"
              >
                view all
              </button>
            </Link>

            <div className="text-left">
              <h2 className="mt-10 text-3xl text-white font-bold">
                Stockerday x CUBS
              </h2>
              <p className="mt-1 text-sm max-w-2xl text-pink-500">
                May 20, 2024
              </p>
            </div>

            <Link href={`/gallery`}>
              <button
                //onClick={handleLogin}
                className=" mt-5 w-20 bg-purple-800 text-white py-2 rounded-full 
                        hover:bg-pink-500 transition duration-300"
              >
                view all
              </button>
            </Link>

            <div className="text-left">
              <h2 className="mt-10 text-3xl text-white font-bold">
                KTB x CUBS
              </h2>
              <p className="mt-1 text-sm max-w-2xl text-pink-500">
                May 20, 2024
              </p>
            </div>

            <Link href={`/gallery`}>
              <button
                //onClick={handleLogin}
                className=" mt-5 w-20 bg-purple-800 text-white py-2 rounded-full 
                        hover:bg-pink-500 transition duration-300"
              >
                view all
              </button>
            </Link>
          </div>
        </main>
      </div>

      <div className="text-center"></div>
    </div>
  );
}
