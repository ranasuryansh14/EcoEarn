import NavbarDashboard from "../components/NavbarDashboard"

export default function TransactionLogs() {
    const transactions = [
        { id: "TXN12345", date: "2024-11-01", amount: 550, status: "Completed" },
        { id: "TXN12346", date: "2024-11-02", amount: 200, status: "Pending" },
        { id: "TXN12347", date: "2024-11-03", amount: 750, status: "Completed" },
        { id: "TXN12348", date: "2024-11-04", amount: 400, status: "Failed" },
    ]

    return (
        <>
            <div className="overflow-x-hidden">
                <NavbarDashboard />
                <div className="flex flex-col items-center">
                    <div className="text-[3rem] font-medium mt-10">Transaction Logs</div>
                    <div className="border-t-2 border-black w-[80%] h-[50rem] overflow-y-auto mt-5 p-4">
                        {transactions.map((transaction) => (
                            <div key={transaction.id} className="flex flex-col p-4 mb-4 border-b border-gray-300">
                                <div className="flex justify-between">
                                    <div className="font-semibold">Transaction ID:</div>
                                    <div>{transaction.id}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-semibold">Date:</div>
                                    <div>{transaction.date}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-semibold">Amount:</div>
                                    <div>${transaction.amount.toFixed(2)}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="font-semibold">Status:</div>
                                    <div
                                        className={
                                            transaction.status === "Completed"
                                                ? "text-green-500"
                                                : transaction.status === "Pending"
                                                ? "text-yellow-500"
                                                : "text-red-500"
                                        }
                                    >
                                        {transaction.status}
                                    </div>
                                </div>
                                {transaction.status === "Completed" && transaction.amount > 500 && (
                                    <div className="flex justify-between mt-2">
                                        <div className="font-semibold text-green-500">Green Credits:</div>
                                        <div className="text-green-500">30 Credits</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
