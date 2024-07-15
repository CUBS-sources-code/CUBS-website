"use client"
import updateReservation from '@/libs/updateReservation';
import { useState } from 'react'; // Importing useState from React
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import deleteReservation from '@/libs/deleteReservation';
import DateReserve from '@/components/DateReserve';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ReservationReserve from '@/components/ReservationReserve';
import { reservationPr } from '../../../../interfaces';

export default function ReservationDetail({ params }: { params: reservationPr }) {
    // Define state to manage the new reservation date
    const [newDate, setNewDate] = useState('');
    const [dateReserve, setDateReserve] = useState<Dayjs | null>(null)
    
    // Function to handle changes in the input box
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewDate(e.target.value);
    };

    // Function to handle updating reservation
    const handleUpdateReservation = () => {
        try {
            // alert(dateReserve)
            // alert("New DATE " + newDate)
            // alert(params.rid)
            const response = updateReservation(params.rid, newDate);
            
            // if (response.ok) {
            //     alert("UPDATE OK")
            // } else {
            //     alert("update error")
            // }

        } catch (error) {
            console.error('Error updating reservation:', error);
            // You can add further error handling logic here, such as showing an error message to the user
        }
    };

    const handleDeleteReservation = () => {
        try {
            // alert(params.rid)
            const response = deleteReservation(params.rid);

            // if (response.ok) {
            //     alert("DELETE OK")
            // }
        } catch (error) {
            console.error('Error updating reservation:', error);
            // You can add further error handling logic here, such as showing an error message to the user
        }
    };

    // Return the JSX for the component
    return (
        <main className="text-center p-5">
            <div>
                {/* <div>
                    <ReservationReserve
                    onDateChange={(value: any) => {
                        setDateReserve(value);
                    }}/>
                </div> */}
                <input
                    type="text"
                    placeholder="New Reservation Date"
                    className="border border-gray-300 rounded-md px-3 py-1 my-3"
                    value={newDate}
                    onChange={handleDateChange}
                />
            </div>
            <br />
            <div className="flex justify-center">
                <button
                    className="block rounded-md bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white shadow-sm mx-2"
                    onClick={handleUpdateReservation}
                >
                    Update Reservation
                </button>
            </div>
            <br />
            <div className="flex justify-center">
                <button
                    className="block rounded-md bg-red-600 hover:bg-orange-500 px-3 py-1 text-white shadow-sm mx-2"
                    onClick={handleDeleteReservation}
                >
                    !! Delete Reservation !!
                </button>
            </div>
        </main>
    );
}