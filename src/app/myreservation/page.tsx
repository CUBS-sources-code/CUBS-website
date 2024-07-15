import getUserProfile from "@/libs/getUserProfile";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ReservationList from "@/components/ReservationList";
import getReservations from "@/libs/getReservations";
// import { Suspense } from "react";
// import { LinearProgress } from "@mui/material";
import { ReservationJson } from "../../../interfaces";
import { Reservation } from "../../../interfaces";

export default async function MyReservationPage() {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)

    const reservations = getReservations(session.user.token)

    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <main>
            <div className="text-3xl font-bold text-center my-4">{capitalizeFirstLetter(profile.data.name)}'s reservation</div>
            <div>
                {
                    profile.data.role === "admin" ? <div className="text-large font-bold text-center">Admin Page</div> : null
                }
            </div>
            <ReservationList reservationJson={reservations} userId={profile.data._id} userRole={profile.data.role} />
        </main>
    );
}