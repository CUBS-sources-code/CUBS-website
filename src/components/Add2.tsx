import Image from "next/image";

export default function Add2() {
    return (
        <div className="flex flex-row w-full justify-center">
            <div className="m-5 flex-grow-0 flex-shrink-0 w-1/4">
                <div className="aspect-w-4 aspect-h-3">
                    <Image 
                        src="/img/res01.jpg"
                        alt='Product Picture'
                        width={300}
                        height={200}
                        layout="responsive"
                        className="rounded-lg bg-black"
                        objectFit="cover"
                    />
                </div>
                <br />
            </div>
            <div className="m-5 flex-grow-0 flex-shrink-0 w-1/4">
                <div className="aspect-w-4 aspect-h-3">
                    <Image 
                        src="/img/res02.jpg"
                        alt='Product Picture'
                        width={300}
                        height={200}
                        layout="responsive"
                        className="rounded-lg bg-black"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="m-5 flex-grow-0 flex-shrink-0 w-1/4">
                <div className="aspect-w-4 aspect-h-3">
                    <Image 
                        src="/img/res03.jpg"
                        alt='Product Picture'
                        width={300}
                        height={200}
                        layout="responsive"
                        className="rounded-lg bg-black"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
}
