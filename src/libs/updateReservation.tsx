export default async function updateReservation(id:string, reserveDate: string) {

    const response = await fetch(`https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/reservations/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
            reserveDate: reserveDate
        })
    });

    if (!response.ok) {
        // throw new Error("Cannot add reservation");
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
            alert("Error parsing error message:" + error);
            throw new Error("Cannot create reservation");
        }
    }

    alert("Reservation Updated")

    return await response.json();
}
