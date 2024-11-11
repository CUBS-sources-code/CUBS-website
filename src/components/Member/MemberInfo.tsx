"use client";

import React, { useEffect, useState } from 'react';
import getMyInfo from '@/lib/getMyinfo';
import dayjs from 'dayjs'; // Import dayjs
import utcPlugin from 'dayjs/plugin/utc'; // Import the utc plugin
dayjs.extend(utcPlugin); // Extend dayjs with the utc plugin

interface UserInfo {
    id: string;
    name: string;
    student_id: string;
    balance: number;
    created_at: string;
}

const MemberInfo: React.FC = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    useEffect(() => {
        const fetchInfo = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found');
                return;
            }

            try {
                const data = await getMyInfo(token);
                setUserInfo(data);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchInfo();
    }, []);

    const formatCreatedAt = (dateString: string | null) => {
        if (!dateString) return 'Invalid Date';

        // console.log("Original Date String: ", String(dateString));

        // // Parse the date string with Date
        // const date = new Date(dateString.replace(/( +UTC|[+-]\d{2}:\d{2})/, 'Z'));

        // // Check if the date is valid
        // if (isNaN(date.getTime())) {
        //     return 'Invalid Date';
        // }

        // // Define options for formatting
        // const options: Intl.DateTimeFormatOptions = {
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric',
        //     hour: 'numeric',
        //     minute: 'numeric',
        //     hour12: true,
        // };

        // Format the date using toLocaleString
        // return `Created At: ${date.toLocaleString('en-GB', options)}`;
        return String(dateString);
    };


    return (
        <div
            style={{
                width: '100vw',
                height: '65vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    width: '50vw',
                    height: '50vh',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    border: '5px solid transparent',
                    backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)',
                    backgroundClip: 'border-box',
                    position: 'relative',
                    overflowY: 'auto',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
                className="card2"
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '20px',
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                />

                <div
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        color: 'black',
                    }}
                >
                    {userInfo ? (
                        <>
                            <h2>Name: {userInfo.name}</h2>
                            <p>Student ID: {userInfo.student_id}</p>
                            <p>Balance: ${userInfo.balance.toFixed(2)}</p>
                            <p>Created At: {formatCreatedAt(userInfo.created_at)}</p>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MemberInfo;