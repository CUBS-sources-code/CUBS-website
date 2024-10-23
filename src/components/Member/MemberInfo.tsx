"use client"

import React, { useEffect, useState } from 'react';
import getMyInfo from '@/lib/getMyinfo';

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
            try {
                const data = await getMyInfo(localStorage.getItem('token')!);
                setUserInfo(data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchInfo();
    }, []);

    return (
        <div
            style={{
                width: '100vw',
                height: '60vh',
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
                <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }} />

                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    color: 'black',
                }}>
                    {userInfo ? (
                        <>
                            <h2>Name: {userInfo.name}</h2>
                            <p>Student ID: {userInfo.student_id}</p>
                            <p>Balance: ${userInfo.balance}</p>
                            <p>Created At: {new Date(userInfo.created_at).toLocaleString()}</p>
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
