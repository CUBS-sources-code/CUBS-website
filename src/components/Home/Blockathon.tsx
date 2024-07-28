import SpeakerBox from "./SpeakerBox";
import FlareComponent from "./FlareComponent";
import ReadMore from "./ReadMore";

import Link from "next/link";

const Blockathon = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                    Blockathon
                </h1>
                <div className="flex inset-0 flex justify-center items-center mb-10">
                    <FlareComponent />
                </div>
                <p className="mt-4 text-lg">
                    CUBS BLOCKATHON 2024 CUBS BLOCKATHON 2024 CUBS BLOCKATHON 2024 CUBS BLOCKATHON 2024 CUBS BLOCKATHON 2024 CUBS BLOCKATHON 2024
                </p>
                <p className="mt-6 text-4xl font-bold">
                    Speaker
                </p>
                <div className="mt-10 flex justify-between items-center">
                    <div className="w-1/12" />
                    <SpeakerBox speakerName="HELLO" speakerInfo="HELLO HELLO HELLO" color="Pink"/>
                    <SpeakerBox speakerName="WORLD" speakerInfo="HELLO HELLO HELLO" color="Purple"/>
                    <SpeakerBox speakerName="1234" speakerInfo="HELLO HELLO HELLO" />
                    <div className="w-1/12" />
                </div>

                <div className="mt-10 flex justify-center hover:scale-105 duration-300">
                    <Link href={`readMore`}>
                        <ReadMore />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blockathon;
