
export default async function deleteReservation(id: string) {

    // const response = await fetch(`http://localhost:5000/api/v1/reservations/${id}`, {
    const response = await fetch(`https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/reservations/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json" 
        }
    });
    if (!response.ok) {
        throw new Error("Cannot delete reservation");
    }

    alert("The reservation has been deleted");

    return await response.json();
}