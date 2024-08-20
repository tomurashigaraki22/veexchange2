import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import BottomNav from "../components/BottomNav";
import { CgArrowLeft } from "react-icons/cg";
import { BsBank, BsCoin } from "react-icons/bs";
import { Eye, EyeOff } from "lucide-react";
import HomeNav from "../components/HomeNav"; // Make sure to import the navbar component

const Transactions = () => {
    const txhistory = [
        {
            'type': 'Sell',
            'date': 'Sun Jun 30th, 2024',
            'amount': 5550,
            'status': 500
        },
        {
            'type': 'Withdrawal',
            'date': 'Fri May 24th, 2024',
            'amount': 1135,
            'status': 200,
        },
        {
            'type': 'Sell',
            'date': 'Sun Jun 30th, 2024',
            'amount': 5550,
            'status': 500
        },
        {
            'type': 'Withdrawal',
            'date': 'Fri May 24th, 2024',
            'amount': 1135,
            'status': 200,
        },
        {
            'type': 'Sell',
            'date': 'Sun Jun 30th, 2024',
            'amount': 5550,
            'status': 500
        },
        {
            'type': 'Withdrawal',
            'date': 'Fri May 24th, 2024',
            'amount': 1135,
            'status': 200,
        },
        {
            'type': 'Sell',
            'date': 'Sun Jun 30th, 2024',
            'amount': 5550,
            'status': 500
        },
        {
            'type': 'Withdrawal',
            'date': 'Fri May 24th, 2024',
            'amount': 1135,
            'status': 200,
        },
    ]

    const [eyeopen, seteyeopen] = useState(true);
    const [opennav, setopennav] = useState(false); // State for managing navbar visibility

    const click = () => {
        seteyeopen(!eyeopen);
    };

    const openNav = () => {
        setopennav(true);
    };

    const closeNav = () => {
        setopennav(false);
    };

    return (
        <div className="relative p-3 min-h-screen bg-gray-100">
            {opennav && <HomeNav closeNav={closeNav} />} {/* Render the navbar conditionally */}
            <div className={`transition-filter duration-300 ease-in-out ${opennav ? "blur-sm" : ""}`}>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center space-x-4 lg:hidden">
                        <BiMenu color="blue" size={28} onClick={openNav} /> {/* Open navbar */}
                        <p className="text-gray-700 text-md" style={{ fontFamily: 'Ubuntu' }}>Transactions</p>
                    </div>
                    <div>
                        <IoNotifications color="blue" size={30} />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-8">
                    <div className="flex flex-row items-center space-x-5">
                        <CgArrowLeft color="black" size={30} />
                        <div className="flex flex-row items-center space-x-2">
                            <p className="text-green-600 font-bold text-lg">&#8358;</p>
                            {eyeopen ? <p className="text-blue-900 font-bold text-lg" style={{ fontFamily: 'Ubuntu' }}>***</p> : <p className="text-blue-900 font-bold text-lg" style={{ fontFamily: 'Ubuntu' }}>0.00</p>}
                            {!eyeopen ? <Eye color="black" size={20} onClick={click}/> : <EyeOff color="black" size={20} onClick={click}/>}
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400" style={{ fontFamily: 'Ubuntu' }}>Available Balance</p>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-blue-900 mb-5">Transaction History</p>
                    <div className="overflow-y-auto max-h-[400px] scrollbar-hide space-y-4">
                        {txhistory.map((tx, index) => (
                            <div key={index} className="shadow-md flex flex-row items-center justify-between p-2 mb-2 border-b border-gray-200">
                                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                                    {tx.type === 'Sell' ? (
                                        <BsCoin color="brown" size={30} />
                                    ) : (
                                        <BsBank color="black" size={30} />
                                    )}
                                </div>
                                <div className="flex flex-col ml-4">
                                    <p className="font-semibold">{tx.type}</p>
                                    <p className="text-gray-500">{tx.date}</p>
                                </div>
                                <div className="flex flex-col items-end ml-auto">
                                    <p className="font-semibold">&#8358; {tx.amount.toLocaleString()}</p>
                                    <p className={`text-sm ${tx.status === 200 ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {tx.status === 200 ? 'Approved' : 'Pending'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-blue-300 border-b text-md text-center pt-4 mb-12">View Full History</p>
                </div>
            </div>
            <BottomNav />
        </div>
    );
};

export default Transactions;
