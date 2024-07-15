
import LinearProgress from '@mui/material/LinearProgress';
import { getServerSession } from 'next-auth/next';
import { Suspense } from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import ReservationBox from '@/components/ReservationBox';


export default async function reservation() {
    const session = await getServerSession(authOptions);
    let userInfo = null;
    if (session) userInfo = await getUserProfile(session.user.token);

    return (
        <main>
            <Suspense fallback={<p className='text-black text-xl text-center'>Loading ... <LinearProgress /></p>}><ReservationBox userInfo={userInfo}></ReservationBox></Suspense>
        </main>
    );
}