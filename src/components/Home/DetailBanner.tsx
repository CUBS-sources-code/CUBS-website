import Image from 'next/image';
import styles from "./detailbanner.module.css";

export default function DetailBanner() {
    return (
        <main className="w-full min-h-screen flex flex-col bg-gray-200 mt-20">
            <div className="mt-20 text-4xl font-bold mb-4 text-center">
                CUBS FRONTEND HEREERERER
            </div>
            <div className="mt-9 flex justify-center gap-8">
                <div className="image-wrapper">
                    <Image src="/img/detail.jpg"
                        alt="Image 1"
                        width={500}
                        height={200}
                    />
                </div>
                <div className="image-wrapper">
                    <Image src="/img/detail2.jpg"
                        alt="Image 2"
                        width={500}
                        height={200} />
                </div>
                <div className="image-wrapper">
                    <Image src="/img/detail2.jpg"
                        alt="Image 3"
                        width={500}
                        height={200}
                    />
                </div>
            </div>

            <div className="mt-10 text-center w-full">
                <div className={styles.lineOffice}></div>
                <h1 className="text-3xl font-bold mb-4">Office Hours</h1>
                <p className="text-lg font-bold mb-2">
                    lorem ipsum 1
                </p>
                <p className="text-lg font-bold mb-2">
                    lorem ipsum 1
                </p>
                <p className="text-lg font-bold mb-2">
                    lorem ipsum 1
                </p>
                <div className='mb-1vh'></div>
            </div>

            <div className="mt-8 text-center bg-white w-full">
                {/* <hr className="border-opacity-50 border-black border-b-2 bg-white" /> */}
                <h2 className="my-10 text-4xl font-bold mb-4">คำถามที่พบบ่อย</h2>
                <div className={styles.lineFAQ}></div>
                <div className="mt-15">
                    <h3 className="text-xl font-bold mb-2">
                        Q: สามารถใช้ห้องประชุมได้กี่ชั่วโมง ?
                    </h3>
                    <p className="text-lg font-bold mb-2 text-orange-800">
                        A: ผู้ใช้บริการสามารถใช้ห้องประชุมได้ครั้งละ 2 ชั่วโมง
                    </p>
                </div>
                <div className="mt-10">
                    <h3 className="text-xl font-bold mb-2">
                        Q: กรณีจองใช้ห้องประชุมต้องมาก่อนกี่นาที?
                    </h3>
                    <p className="text-lg font-bold mb-2 text-orange-800">
                        Q: กรณีจองใช้ห้องประชุมต้องมาก่อนกี่นาที?
                    </p>
                </div>
                <div className="mt-10">
                    <h3 className="text-xl font-bold mb-2">
                        Q: สามารถนำอาหารเข้ามารับประทานได้ไหม?
                    </h3>
                    <p className="text-lg font-bold mb-2 text-orange-800">
                        A: ไม่อนุญาตให้นำอาหารและเครื่องดื่มเข้ามารับประทานในห้อง
                    </p>
                </div>
                <div className="mt-10">
                    <h3 className="text-xl font-bold mb-2">
                        Q: ใครสามารถจองห้องประชุมได้บ้าง?
                    </h3>
                    <p className="text-lg font-bold mb-2 text-orange-800">
                        A: ต้องเป็นบุคคลากรของคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัยเท่านั้น
                    </p>
                </div>
                <br />
                <br />
            </div>
        </main>
    );
}
