import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarDashboard from '../components/NavbarDashboard';

const UserTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/transaction/logs/${userId}`);
                setTransactions(response.data.transactions);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch transactions',error);
                setLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    if (loading) return <div className="text-center py-10 text-gray-500">Loading transactions...</div>;
    if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

    return (
<div className="container mx-auto p-4">
    <div>
        <NavbarDashboard />
    </div>
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Transaction Logs</h2>
    {transactions.length > 0 ? (
        <div className="space-y-6">
            {transactions.map((transaction, index) => (
                <div key={transaction._id} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-600">Transaction ID:</span>
                            <span className="text-gray-800 font-medium">{transaction.transactionId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-600">Amount:</span>
                            <span className="text-red-600 font-medium">${transaction.amount}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-green-800">Eco Coins:</span>
                            <span className="text-green-600 font-medium">{transaction.greenCredits}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-600">Date:</span>
                            <span className="text-yellow-500 font-medium">{new Date(transaction.transactionDate).toLocaleString()}</span>
                        </div>
                    </div>
                    {index < transactions.length - 1 && (
                        <hr className="border-t border-gray-200 my-4" />
                    )}
                </div>
            ))}
        </div>
    ) : (
        <div className="text-center text-gray-500 py-10">No transactions available.</div>
    )}
</div>


    );
};

export default UserTransactions;
