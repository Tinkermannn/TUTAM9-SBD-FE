import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import Item from "../Items/Item";

export default function Dashboard() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        balance: 0,
        created_at: "",
    });
    const [topUpAmount, setTopUpAmount] = useState("");
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");

        if (!token || !email) {
            toast.warning("You must login first!");
            navigate("/user/login");
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/${email}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUserData(response.data.payload);

                const transactionResponse = await axios.get("http://localhost:3000/transaction", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const userTransactions = transactionResponse.data.payload.filter(
                    (transaction) => transaction.user_id === response.data.payload.id
                );
                setTransactions(userTransactions);
            } catch (err) {
                toast.error("Failed to load user data");
                console.error(err);
                navigate("/user/login");
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        toast.info("Logged out successfully");
        navigate("/user/login");
    };

    const handleTopUp = async () => {
        const token = localStorage.getItem("token");
        const amount = parseFloat(topUpAmount);

        if (!amount || isNaN(amount) || amount <= 0) {
            toast.warn("Please enter a valid top-up amount");
            return;
        }

        try {
            const response = await axios.post(
                `http://localhost:3000/user/topUp?id=${userData.id}&amount=${amount}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success("Top up successful!");
            setUserData((prev) => ({
                ...prev,
                balance: response.data.payload.balance,
            }));
            setTopUpAmount("");
        } catch (err) {
            console.error(err);
            const errorMsg = err.response?.data?.message || "Top up failed";
            toast.error(errorMsg);
        }
    };

    return (
        <>
            <div className="w-full min-h-screen bg-gradient-to-br from-blue-700 via-sky-500 to-blue-400 flex justify-center px-20 pt-32">
                <div className="w-full max-w-screen-2xl bg-white rounded-2xl shadow-2xl p-10 flex flex-col gap-10">
                    <div className="flex gap-8">
                        <div className="w-1/2 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-blue-800 mb-6">
                                    Welcome, {userData.name}
                                </h2>
                                <div className="space-y-4 text-gray-800">
                                    <div>
                                        <label className="font-semibold">Email:</label>
                                        <p>{userData.email}</p>
                                    </div>
                                    <div>
                                        <label className="font-semibold">Balance:</label>
                                        <p>Rp {userData.balance.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <label className="font-semibold">Created At:</label>
                                        <p>
                                            {new Date(userData.created_at).toLocaleString("id-ID", {
                                                timeZone: "Asia/Jakarta",
                                                hour12: false,
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="mt-6 w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </div>

                        <div className="w-1/2 flex flex-col justify-center items-center border-l border-blue-200 pl-8">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                                Top Up Balance
                            </h3>
                            <input
                                type="number"
                                placeholder="Enter amount"
                                value={topUpAmount}
                                onChange={(e) => setTopUpAmount(e.target.value)}
                                className="w-full px-4 py-2 mb-4 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleTopUp}
                                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                            >
                                Top Up
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Transaction History</h3>
                        <div className="overflow-y-auto max-h-60 border border-blue-200 rounded-lg">
                            {transactions.length === 0 ? (
                                <p className="p-4 text-gray-600">No transactions found.</p>
                            ) : (
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-blue-100 text-blue-800">
                                        <tr>
                                            <th className="border-b p-2">Item</th>
                                            <th className="border-b p-2">Quantity</th>
                                            <th className="border-b p-2">Total</th>
                                            <th className="border-b p-2">Status</th>
                                            <th className="border-b p-2">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.map((transaction) => (
                                            <tr key={transaction.id} className="hover:bg-blue-50">
                                                <td className="border-b p-2">{transaction.item.name}</td>
                                                <td className="border-b p-2">{transaction.quantity}</td>
                                                <td className="border-b p-2">Rp {transaction.total.toLocaleString()}</td>
                                                <td className="border-b p-2">{transaction.status}</td>
                                                <td className="border-b p-2">
                                                    {new Date(transaction.created_at).toLocaleString("id-ID", {
                                                        timeZone: "Asia/Jakarta",
                                                        hour12: false,
                                                    })}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>

                    <ToastContainer position="top-center" autoClose={1500} limit={2} transition={Slide} />
                </div>
            </div>

            <Item />
        </>
    );
}
