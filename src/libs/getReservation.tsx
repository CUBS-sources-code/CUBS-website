export default async function getReservation(id:string,token:string){
    const response = await fetch(`https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/reservations/${id}`,{
        method : "GET",
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    if (!response.ok) {
        const errorMessage = await response.text();
        try {
            const errorJson = JSON.parse(errorMessage);
            if (errorJson.message) {
                alert(errorJson.message);
                throw new Error(errorJson.message);
            } else {
                throw new Error("Unknown error occurred");
            }
        } catch (error) {
            console.error("Error parsing error message:", error);
            throw new Error("Cannot find reservation");
        }
    }
    return await response.json()
}