import React from 'react';

interface Transaction {
    id: string;
    sender: string;
    receiver: string;
    amount: number;
    timestamp: string;
}

const transactions: Transaction[] = [
    { id: '1', sender: 'Alice', receiver: 'Bob', amount: 100, timestamp: '2024-10-23 10:00' },
    { id: '2', sender: 'Charlie', receiver: 'David', amount: 200, timestamp: '2024-10-23 10:05' },
];

const TransactionPanel: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-[50vh]">
            <div className="transaction-panel p-4 bg-[#0F082C] rounded-lg shadow-md w-[70vw] flex flex-col">
                <h2 className="text-xl font-semibold mb-4 text-white">Transaction History</h2>
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
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b border-gray-200 text-black">{transaction.id}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-black">{transaction.sender}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-black">{transaction.receiver}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-black">${transaction.amount.toFixed(2)}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-black">{transaction.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionPanel;
