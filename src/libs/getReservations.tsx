export default async function getReservations(token: string) {

    const response = await fetch("https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/reservations", {
        cache: 'no-store', 
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // const response = await fetch("https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/reservations")
    // const response = await fetch("http://localhost:5000/api/v1/reservations")

    if (!response.ok) {
        throw new Error("Failed to fetch Reservation")
    }

    return await response.json()
}