"use client"

import Link from 'next/link';
import LearnMore from './LearnMore';
import BlockchainSVG from './BlockchainSVG';

const BlockchainInfo = () => {
    return (
        <div>
            <div className="flex items-center p-4 bg-black rounded-lg shadow-md">
                <div className="w-1/2">
                    <BlockchainSVG />
                </div>
                <div className="w-1/2 pl-4 text-center">
                    <h2 className="text-4xl text-gradient font-semibold mb-2">What is Blockchain?</h2>
                    <p className="text-xl text-white mb-4">
                        A blockchain is a type of <span className="text-pink-500">distributed ledger technology</span> that securely records transactions across many computers in a way that ensures the data cannot be altered.
                    </p>
                    <div className="mt-10 flex justify-center hover:scale-105 duration-300">
                        <Link href={`learnmore`}>
                            <LearnMore />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-black rounded-lg shadow-md">
                <div className="w-1/2 pl-4 text-center">
                    <h2 className="text-4xl text-gradient font-semibold mb-2">What are Cryptocurrencies?</h2>
                    <p className="text-xl text-white mb-4">
                        Cryptocurrencies are digital or virtual currencies that use cryptography for security. Cryptocurrencies operate on <span className="text-pink-500">decentralized</span> networks based on <span className="text-pink-500">blockchain technology.</span>
                    </p>
                    <div className="mt-10 flex justify-center hover:scale-105 duration-300">
                        <Link href={`learnmore`}>
                            <LearnMore />
                        </Link>
                    </div>
                </div>
                <div className="w-1/2">
                    <BlockchainSVG />
                </div>
            </div>
            <style jsx>{`
                .text-gradient {
          background: linear-gradient(90deg, rgba(238,0,153,1) 0%, rgba(0,212,255,1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
        </div>
    );
};

export default BlockchainInfo;
