"use client";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DateReserve from "@/components/DateReserve";
import getRestaurants from "@/libs/getRestaurants";
import addReservation from "@/libs/addReservation";
import ReservationReserve from "./ReservationReserve";
import { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";

export default function ReservationBox({ userInfo }: { userInfo: any }) {
  const [rp, setRp] = useState<any>(null);
  useEffect(() => {
    const getrest = async () => {
      const Restaurants = await getRestaurants();
      setRp(Restaurants);
    };
    getrest();
  }, []);
  const [dateReserve, setDateReserve] = useState();
  const [restaurant, setRestaurant] = useState("");
  const { data: session, status } = useSession();
  const makeReservation = async () => {
    if (dateReserve && restaurant && userInfo) {
      try {
        if (session) {
          const formattedDateReserve = dateReserve
            // .format()
          // alert(restaurant) // restID
          // alert(session.user.token) // user token
          // alert(dateReserve) // date
          // alert(userInfo?.data._id) // user id
          // alert(formattedDateReserve)
          const response = await fetch(
            `https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/restaurants/${restaurant}/reservations`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${session.user.token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                reserveDate: formattedDateReserve,
                user: userInfo.data._id,
              }),
            }
          );
          if (response.ok) {
            // alert("OK")
            window.location.href = '/myreservation';
          } else {
            alert("Failed")
          }
        }
        // console.log("Booking dispatched successfully.");
      } catch (error) {
        console.log("ERROR");
      }
    } else {
      console.log("Please fill the form");
    }
  };

  return (
    <main className="flex flex-col items-center pt-6 pl-6 w-full">
      <br />
      <br />
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 space-y-4 mt-4">
          <div>
            <label className="block text-sm font-4xl text-gray-700">
              Choose restaurant to reserve !!
            </label>
            <div className="mt-2">
              <Select
                variant="standard"
                name="restaurant"
                id="restaurant"
                className="h-[full] w-[320px]"
                value={restaurant}
                onChange={(e) => {
                  setRestaurant(e.target.value);
                }}
              >
                {rp?.data.map((RestaurantItem: any) => (
                  <MenuItem value={RestaurantItem._id}>
                    {RestaurantItem.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reserve your date
            </label>
            <div className="mt-2 ">
              <ReservationReserve
                onDateChange={(value: any) => {
                  setDateReserve(value);
                }}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-400 hover:bg-green-400"
              onClick={makeReservation}
              name="Reserve"
            >
              Reserve a seat.
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
