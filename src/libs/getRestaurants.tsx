export default async function getRestaurants() {

    // add timeout for loading delay testing
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // const response = await fetch(`https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/restaurants`) 
    const response = await fetch(`https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/restaurants`, { cache: 'no-store', }) 
    
    if (!response.ok) {
        console.log("No no ok");
        // console.log(response);
        throw new Error("Failed to fetch cars")
    } 

    return await response.json();
}