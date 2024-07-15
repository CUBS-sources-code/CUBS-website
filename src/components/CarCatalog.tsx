import Link from "next/link";
import ProductCard from "./ProductCard";
import { CarItem, CarJson, RestaurantItem, RestaurantJson } from "../../interfaces";

export default async function CarCatalog({ restaurantJson }: { restaurantJson: RestaurantJson }) {

    const restaurantJsonReady = await restaurantJson
    
    return (
        <>
            Explore {restaurantJsonReady.count} restaurant in our site !
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around", justifyContent: "space-around", flexWrap: "wrap", padding: "10px" }}>
                {
                    restaurantJsonReady.data.map((restaurantItem: RestaurantItem) => (
                        <Link href={`/restaurant/${restaurantItem.id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 lg:p-8">
                            <ProductCard carName={restaurantItem.name} imgSrc={restaurantItem.picture} averageStar={restaurantItem.averageStar}/>
                        </Link>
                    )
                    )
                }
            </div>
        </>
    )
}



