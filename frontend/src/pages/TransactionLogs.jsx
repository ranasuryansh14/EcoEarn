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
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Transactions Logs</h2>
            {transactions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {transactions.map((transaction) => (
                        <div key={transaction._id} className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-green-600">Transaction ID: {transaction.transactionId}</h3>
                            <p className="mt-2">
                                <span className="font-semibold">Amount:</span> ${transaction.amount}
                            </p>
                            <p className="mt-1">
                                <span className="font-semibold">Green Credits:</span> {transaction.greenCredits}
                            </p>
                            <p className="mt-1">
                                <span className="font-semibold">Date:</span> {new Date(transaction.transactionDate).toLocaleString()}
                            </p>
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
