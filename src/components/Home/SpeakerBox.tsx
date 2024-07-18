

export default function SpeakerBox({ speakerName, speakerInfo }: { speakerName: string, speakerInfo: string}) {

    return (
        <div className="mt-10 w-1/5 h-40 bg-gradient-to-b from-pink-500 to-black">
            <div className="mt-5 text-2xl font-bold ">
                {speakerName}
            </div>
            <div className="mt-10 text-xl font-md">
                {speakerInfo}
            </div>
        </div>
    )
}