export default async function addRestaurant(name: string, address: string, telephone: string, picture: string, open: string, close: string) {
    // apptDate = apptDate.add(7, 'hour');

    const response = await fetch(`https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/restaurants/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            address: address,
            telephone: telephone,
            picture: picture,
            open: open,
            close: close
        })
    });

    if (!response.ok) {
        throw new Error("Cannot add reservation");
    }

    return await response.json();
}
