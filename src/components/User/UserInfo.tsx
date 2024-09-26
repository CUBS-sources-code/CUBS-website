"use client"

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const logoPath = '/img/Logo/CUBSlogo.png';

export default function UserInfoPage() {
    const [account, setAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState<string | null>(null);
    const [network, setNetwork] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let provider: ethers.BrowserProvider | ethers.Provider;

                if (typeof window !== 'undefined' && (window as any).ethereum) {
                    provider = new ethers.BrowserProvider((window as any).ethereum);

                    // Directly assert that provider is BrowserProvider
                    const signer = await (provider as ethers.BrowserProvider).getSigner();

                    // Fetch the account
                    const accounts = await (window as any).ethereum.request({
                        method: 'eth_accounts',
                    });

                    if (accounts.length > 0) {
                        const account = accounts[0];
                        setAccount(account);
                        localStorage.setItem('connectedAccount', account);

                        // Fetch the balance using the provider
                        const balance = await provider.getBalance(account);
                        setBalance(ethers.formatEther(balance)); // Convert from wei to ether

                        // Fetch the network
                        const network = await provider.getNetwork();
                        setNetwork(network.name);
                    } else {
                        setAccount(null);
                    }
                } else {
                    console.log('MetaMask not installed; using read-only defaults');
                    provider = ethers.getDefaultProvider(); // No error here
                }
            } catch (error) {
                console.error('Error:', error);
                setError('Failed to fetch user information.');
            }
        };

        fetchData();
    }, []);

    const logoutMetaMask = () => {
        setAccount(null);
        setBalance(null);
        setNetwork(null);
        localStorage.removeItem('connectedAccount');
        console.log('Logged out from MetaMask');
    };

    const handleChangeAvatar = () => {
        alert('Change Avatar functionality is not implemented yet!');
    };

    if (!account) {
        return (
            <div className="bg-[#0F082C] text-white h-[80vh] flex items-center justify-center">
                Try reconnecting MetaMask again.
            </div>
        );
    }

    return (
        <div className="bg-[#0F082C] text-white flex h-[80vh] p-4">
            {/* Profile Section - First Column */}
            <div className="flex flex-col items-center w-1/3 p-4 border-r border-gray-600">
                <img
                    src={logoPath}
                    alt="CUBS Logo"
                    className="w-full max-w-[200px] h-auto mb-4 object-contain"
                />
                <button
                    onClick={handleChangeAvatar}
                    className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                    Change Avatar
                </button>
            </div>

            {/* User Information Section - Second and Third Columns */}
            <div className="flex flex-col items-center w-2/3 p-4">
                <h1 className="text-3xl font-bold mb-4">User Information</h1>
                {error && <p className="text-red-400 mb-4">{error}</p>}
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div>
                        <p className="text-xl mb-2">Connected Address:</p>
                        <p className="text-lg font-mono bg-gray-800 p-4 rounded mb-4">
                            {account}
                        </p>
                    </div>
                    <div>
                        <p className="text-xl mb-2">Balance:</p>
                        <p className="text-lg font-mono bg-gray-800 p-4 rounded mb-4">
                            {balance ? `${balance} ETH` : 'Fetching balance...'}
                        </p>
                    </div>
                    <div>
                        <p className="text-xl mb-2">Network:</p>
                        <p className="text-lg font-mono bg-gray-800 p-4 rounded">
                            {network || 'Fetching network...'}
                        </p>
                    </div>
                </div>

                {/* Logout Button */}
                <button
                    onClick={logoutMetaMask}
                    className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
                >
                    Log Out
                </button>
            </div>
        </div>
    );
}