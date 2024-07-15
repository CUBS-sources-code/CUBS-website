export default async function getCar(id: string) {
    const response = await fetch(`https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/restaurants/${id}`)

    if (!response.ok) {
        throw new Error("Failed to fetch restaurant")
    }
    
    return await response.json()
}