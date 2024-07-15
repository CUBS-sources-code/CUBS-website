import Image from "next/image"

export default async function Add() {

    return (
        <main className="text-center p-5 mt-5 m-5">
            <h1 className='text-lg font-medium'></h1>
            <div className="flex flex-row my-5">
                <Image src="/img/a01.jpg"
                    alt='Product Picture'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black" />
                <div className="text-md mx-5 text-left">
                    <div className="text-4xl font-bold m-5">Reservation Restaurant Platform</div>
                    <p className="m-5">A reservation restaurant platform provides users with a convenient way to book tables at their desired restaurants, streamlining the dining experience for both customers and restaurant staff. Through this platform, users can browse through a variety of restaurants, view their availability, and make reservations based on their preferences such as date, time, and party size. The platform typically offers features like real-time updates on table availability, special offers or promotions, and user reviews to help customers make informed decisions. For restaurant owners, the platform facilitates efficient table management, reduces no-shows through confirmation mechanisms, and allows them to showcase their offerings to a wider audience. Overall, a reservation restaurant platform enhances the dining experience by offering convenience, accessibility, and transparency for both customers and restaurant owners alike.</p>
                    
                </div>
            </div>
        </main>
    )
}