import { Dayjs } from "dayjs"


export default async function createdReservation(id: string, token: string, apptDate: string, user: string) {
    // apptDate = apptDate.add(7, 'hour');

    const response = await fetch(`https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/restaurants/${id}/reservations`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
            apptDate: apptDate,
            user: user
        })
    });

    if (!response.ok) {
        throw new Error("Cannot add reservation");
    }

    return await response.json();
}
