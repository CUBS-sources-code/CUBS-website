import Header from './ServerHeader'; // Import the client component
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// This is a Server Component
export default async function ServerHeader() {
    const session = await getServerSession(authOptions); // Fetch session on the server side

    return <Header session={session} />; // Pass session as a prop to the client component
}