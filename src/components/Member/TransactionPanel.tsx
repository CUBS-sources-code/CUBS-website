"use client";

import React, { useEffect, useState } from 'react';
import getAllTransactions from '@/lib/getAllTransactions';

interface Transaction {
    transaction_id: string;
    sender: string;
    receiver: string;
    amount: number;
    created_at: string;
}

const TransactionPanel: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await getAllTransactions();
                // console.log('Fetched data:', response); // Log the raw response
                const { transactions } = response; // Extract the transactions array
                setTransactions(transactions); // Set the transactions array in state
                setLoading(false);
                // alert("Transactions fetched successfully");
            } catch (error) {
                console.error('Error fetching transactions:', error);
                setLoading(false);
                // alert("Failed to fetch transactions");
            }
        };

        fetchTransactions();
    }, []);

    // useEffect(() => {
    //     console.log('Rendering with transactions:', transactions);
    // }, [transactions]);

    return (
        <div className="flex items-center justify-center h-[50vh]">
            <div className="transaction-panel p-4 bg-[#0F082C] rounded-lg shadow-md w-[70vw] flex flex-col">
                <h2 className="text-xl font-semibold mb-4 text-white">Transaction History</h2>

                {loading ? (
                    <div className="text-white">Loading transactions...</div>
                ) : (
                    <table className="transaction-table min-w-full bg-gray-100 rounded-lg overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-4 text-left text-black">ID</th>
                                <th className="py-3 px-4 text-left text-black">Sender</th>
                                <th className="py-3 px-4 text-left text-black">Receiver</th>
                                <th className="py-3 px-4 text-left text-black">Amount</th>
                                <th className="py-3 px-4 text-left text-black">Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(transactions) && transactions.length > 0 ? (
                                transactions.map((transaction) => (
                                    <tr key={transaction.transaction_id} className="bg-white">
                                        <td className="py-3 px-4 text-left text-black">{transaction.transaction_id}</td>
                                        <td className="py-3 px-4 text-left text-black">{transaction.sender}</td>
                                        <td className="py-3 px-4 text-left text-black">{transaction.receiver}</td>
                                        <td className="py-3 px-4 text-left text-black">{transaction.amount}</td>
                                        <td className="py-3 px-4 text-left text-black">{transaction.created_at}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="py-3 px-4 text-center text-black">No transactions available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default TransactionPanel;