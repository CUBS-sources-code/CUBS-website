"use client"

export default function RestaurantAddBox() {

    const addRestaurant = async (restaurantForm: FormData) => {
        // alert("Adding")
        // "use server"
        const name = restaurantForm.get("name")
        const address = restaurantForm.get("address")
        const telephone = restaurantForm.get("telephone")
        const picture = restaurantForm.get("picture")
        const open = restaurantForm.get("open")
        const close = restaurantForm.get("close")
        
        // alert(name)
        // alert(address)
        // alert(telephone)
        // alert(picture)
        // alert(open)
        // alert(close)

        try {
            const response = await fetch('https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/restaurants/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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

            if (response.ok) {
                // Handle success, maybe show a success message or redirect
                alert('Restaurant added successfully');
            } else {
                // Handle error
                alert('Failed to add restaurant');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    }

    return (
        <form action={addRestaurant}>
            <div className="text-xl text-blue-700">Add restaurant</div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="name">
                    Name
                </label>
                <input type="text" required id="name" name="name" placeholder="Reestaurant Name"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2
                text-gray-700 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="address">
                    Address
                </label>
                <input type="text" required id="address" name="address" placeholder="Restaurant Address"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="telephone">
                    Telephone
                </label>
                <input type="text" required id="telephone" name="telephone" placeholder="Telephone"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">
                    Picture
                </label>
                <input type="text" required id="picture" name="picture" placeholder="Picture Link"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-5" htmlFor="open">
                    Open Time
                </label>
                <input type="text" required id="open" name="open" placeholder="Open Time"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-3" htmlFor="close">
                    Closed Time
                </label>
                <input type="text" required id="close" name="close" placeholder="Closed Time"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                Create New Restaurant
            </button>

        </form>
    )
}