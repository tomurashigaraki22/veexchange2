import { Eye, EyeOff, Menu, Plus, X } from "lucide-react";
import React, { useState } from "react";
import bg2 from '../../public/bg2.png';
import HomeNav from "./HomeNav";

const HomeMobile = () => {
    const [eyeOpen, seteyeOpen] = useState(true);
    const [open, setopen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const transactions = [
        { id: 1, amount: 5000, description: 'Transaction 1' },
        { id: 2, amount: 15000, description: 'Transaction 2' },
        { id: 3, amount: 25000, description: 'Transaction 3' },
        { id: 4, amount: 40000, description: 'Transaction 4' },
        // Add more transactions here...
    ];

    const filteredTransactions = transactions.filter(transaction =>
        transaction.amount.toString().includes(searchQuery)
    );

    const click = () => {
        seteyeOpen(!eyeOpen);
    };

    return (
        <div className="p-5 min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white relative">
            <div className="flex flex-row items-center space-x-3 z-20 relative">
                <div>
                    {!open ? <Menu color="white" size={30} onClick={() => setopen(!open)} /> : <X color='white' size={30} onClick={() => setopen(!open)} />}
                </div>
                <p className="text-2xl font-bold" style={{ fontFamily: 'Josefin Sans' }}>VeeXchange</p>
            </div>
            {open && <div className="fixed w-full top-5 pt-10 z-10">
                <HomeNav />
            </div>}
            <div className="mt-10">
                <div>
                    <p className="text-lg font-bold" style={{ fontFamily: 'Montserrat' }}>Total Balance (NGN):</p>
                    <div className="flex flex-row items-center justify-between">
                        {eyeOpen ? (
                            <p className="text-4xl font-bold" style={{ fontFamily: 'Arsenal SC' }}>NGN 150,000.00</p>
                        ) : (
                            <p className="text-4xl font-bold" style={{ fontFamily: 'Arsenal SC' }}>NGN ******</p>
                        )}
                        {eyeOpen ? (
                            <Eye color="white" size={30} onClick={click} />
                        ) : (
                            <EyeOff color="white" size={30} onClick={click} />
                        )}
                    </div>
                </div>
                <div className="group hover:text-white hover:bg-orange-600 transition duration-300 cursor-pointer w-1/2 self-center border border-white bg-orange-500 px-4 py-2 rounded-lg mt-5 font-bold flex flex-row items-center space-x-4">
                    <p className="group-hover:text-white">Deposit Money</p>
                    <Plus color="white" size={30} />
                </div>
            </div>
            <div>
                <p className="text-2xl font-bold mt-10" style={{ fontFamily: 'Montserrat' }}>Transactions</p>
                <div className="p-6 bg-white rounded-lg shadow-lg mt-5">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-lg font-bold text-black">Recent</p>
                        <input
                            type="text"
                            placeholder="Search by amount"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border border-gray-300 rounded-lg px-2 py-1"
                        />
                    </div>
                    <div className="mt-5 h-64 overflow-y-auto">
                        {filteredTransactions.map(transaction => (
                            <div key={transaction.id} className="bg-gray-200 rounded-lg hover:shadow-lg transition duration-300 p-3 my-2">
                                <div className="p-2">
                                    <p className="font-bold text-black">Amount: NGN {transaction.amount}</p>
                                    <p className="text-black">{transaction.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMobile;
