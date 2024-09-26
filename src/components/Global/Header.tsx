'use client'; // Client component

import styles from './header.module.css';
import Image from 'next/image';
import TopMenuItem from './HeaderItem';
import { Link } from '@mui/material';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Session } from 'next-auth';

interface HeaderProps {
  session: Session | null;
}

export default function Header({ session }: HeaderProps) {
  const [account, setAccount] = useState<string | null>(null); // State to store connected account
  const router = useRouter(); // Initialize router

  useEffect(() => {
    // Check if MetaMask is already connected
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' }).then((accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          localStorage.setItem('connectedAccount', accounts[0]); // Store connected account in localStorage
        }
      });
    }
  }, []);

  // Function to handle MetaMask connection
  const connectMetaMask = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]); // Set the connected account
        localStorage.setItem('connectedAccount', accounts[0]); // Store connected account in localStorage
        console.log('Connected to MetaMask:', accounts[0]);
        router.push('/userinfo'); // Navigate to the userinfo page upon successful connection
      } catch (error) {
        console.error('MetaMask connection failed:', error);
      }
    } else {
      alert('MetaMask not detected! Please install MetaMask.');
    }
  };

  return (
    <div className={styles.menucontainer}>
      <Link className="pt-1 pl-2" href="/" underline="none">
        <div className={styles.logoWrapper}>
          <Image
            src='/img/Logo/CUBSlogo.png'
            alt='logo'
            layout='fill'
            objectFit='contain' // or 'cover', depending on the effect you want
          />
        </div>
      </Link>
      <div className='flex flex-row items-center absolute right-10 h-full text-white text-sm'>
        <TopMenuItem title='Home' pageRef='/' />
        <TopMenuItem title='Content' pageRef='/content' />
        <TopMenuItem title='Activity' pageRef='/activity' />
        <TopMenuItem title='Community' pageRef='/community' />
        {
          session ? (
            <Link href="/api/auth/signout">
              <div className='flex items-center h-full px-2 text-white text-lg font-md'>
                Sign-Out
              </div>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <div className='flex items-center h-full px-2 text-white text-lg font-md'>
                Join-Us
              </div>
            </Link>
          )
        }
        {/* MetaMask Connect Button */}
        <button
          onClick={connectMetaMask}
          className='ml-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
          {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect MetaMask'}
        </button>
      </div>
    </div>
  );
}