'use client'
import { useState } from 'react';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {

            // Call your API route to sign up the user
            const res = await fetch('https://presentation-day-1-mafia-hat-yai.vercel.app/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name, telephone }),
            });

            if (res.ok) {
                
                window.location.href = '/';
            }

        } catch (err) {
            console.log("ERROR CANNOT REGISTER");
            console.log(err);
        } 
        
        // if (res.ok) {
        // // Redirect the user after successful sign-up
        //     // Replace '/dashboard' with the desired destination
        //     window.location.href = '/';
        // } else {
        //     // Handle sign-up error
        //     console.error('Sign-up failed');
        // }
    };

    return (
        <div className="max-w-xs mx-auto p-4 border border-gray-300 rounded-lg mt-8">
    <h1 className="mb-4 text-center font-bold">Sign Up Now!</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border border-gray-300 rounded-md p-2">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="w-full px-2 py-1"
            />
        </div>
        <div className="border border-gray-300 rounded-md p-2">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-2 py-1"
            />
        </div>
        <div className="border border-gray-300 rounded-md p-2">
            <input
                type="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="Telephone"
                required
                className="w-full px-2 py-1"
            />
        </div>
        <div className="border border-gray-300 rounded-md p-2">
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full px-2 py-1"
            />
        </div>
        <button type="submit" className="block w-full rounded-md bg-gray-600 hover:bg-gray-500 px-3 py-2 text-white shadow-sm">Sign Up</button>
    </form>
    </div>

    );
}
