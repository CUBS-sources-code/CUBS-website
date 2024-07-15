import Image from "next/image"
import getCar from "@/libs/getRestaurant"
import Link from "next/link"

export default async function CarDetailPage({ params }: { params: { cid: string } }) {

    const carDetail = await getCar(params.cid)

    return (
        <main className="text-center p-5">
            <h1 className='text-lg font-medium'>{carDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={carDetail.data.picture}
                    alt='Product Picture'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black" />
                <div className="text-md mx-5 text-left">{carDetail.data.address}
                    <div>Tel : {carDetail.data.telephone}</div>
                    <div>Opening Time : {carDetail.data.open}</div>
                    <div>Closed Time : {carDetail.data.close}</div>
                    <div>Stars: {carDetail.data.averageStar}</div>
                    <div>User reviews : {carDetail.data.numberOfReviews} reviews</div>
                    <br />
                    <Link href={`/reservation`}>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm">
                            Make Reservation
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{ cid: '001' }, { cid: '002' }, { cid: '003' }, { cid: '004' }]
}