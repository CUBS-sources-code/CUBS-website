import SpeakerBox from "./SpeakerBox";

const Blockathon = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                    Blockathon
                </h1>
                <p className="mt-4 text-lg">
                    BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON BLOCKATHON
                </p>
                <p className="mt-6 text-4xl font-bold">
                    Speaker
                </p>
                <div className="mt-10 flex justify-between"> 
                    <div className="flex-1"></div>
                    <SpeakerBox speakerName="HELLO" speakerInfo="HELLO HELLO HELLO" />
                    <div className="flex-1"></div>
                    <SpeakerBox speakerName="WORLD" speakerInfo="HELLO HELLO HELLO" />
                    <div className="flex-1"></div>
                    <SpeakerBox speakerName="1234" speakerInfo="HELLO HELLO HELLO" />
                    <div className="flex-1"></div>
                </div>
            </div>
        </div>
    );
};

export default Blockathon;
