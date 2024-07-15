import getCars from "@/libs/getRestaurants";
import CarCatalog from "@/components/CarCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CarPanel from "@/components/CarPanel";
import { CarJson, RestaurantJson } from "../../../../interfaces";
import Add2 from "@/components/Add2";

export default async function Car() {
    const cars: RestaurantJson = await getCars()
    
    // console.log(cars);
    console.log("Fetched Cars");

    return (
        <main className="text-center p-5" >
            <h1 className='text-xl font-medium'>Reserve Your Table !!</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <CarCatalog restaurantJson={cars}/>
            </Suspense>
            <hr className="my-10" />
            <div className='text-center text-4xl font-bold'>
                Recommended Restaurant
            </div>
            <Add2 />
        </main>
    )
}