import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from 'next-auth';
import getUserProfile from "@/libs/getUserProfile";
import Car from "@/db/models/Car";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import RestaurantAddBox from "@/components/RestaurantAddBox";
export default async function DashboardPage() {

    const addCar = async (addCarForm: FormData) => {
        // const model = addCarForm.get("model")
        // const description = addCarForm.get("desc")
        // const picture = addCarForm.get("picture")
        // const seats = addCarForm.get("seats")
        // const doors = addCarForm.get("doors")
        // const largebags = addCarForm.get("largebags")
        // const smallbags = addCarForm.get("smallbags")
        // const automatic = true
        // const dayRate = addCarForm.get("dayRate")

        // try {
        //     await dbConnect()
        //     const car = await Car.create({
        //         "model": model,
        //         "description": description,
        //         "picture": picture,
        //         "seats": seats,
        //         "doors": doors,
        //         "largebags": largebags,
        //         "smallbags": smallbags,
        //         "automatic": automatic,
        //         "dayRate": dayRate
        //     })
        // } catch (error) {
        //     console.log(error);
        // }
        // revalidateTag("cars")
        // redirect("/car")
    }
    
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return (
        <main className="bg-slate-100 m-5 p-5">
            <div className="text-2xl">Hello {profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2" >
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td>{profile.data.email}</td>
                    </tr >
                    <tr>
                        <td>Tell</td>
                        <td>{profile.data.telephone}</td>
                    </tr>
                    <tr>
                        <td>Member Since</td>
                        <td>{createdAt.toString()}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />
            {
                (profile.data.role == "admin") ?
                   <RestaurantAddBox></RestaurantAddBox>
                    : null
            }
        </main>
    );
}