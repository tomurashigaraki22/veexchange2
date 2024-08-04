import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import BottomNav from "../components/BottomNav";
import HomeNav from "../components/HomeNav";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import MoneyBagIcon from "../assets/icons/MoneyBagIcon";

const Exchange = () => {
    const [isopen, setisopen] = useState(false);
    const [opennav, setopennav] = useState(false);
    const [cfaAmount, setCfaAmount] = useState("");
    const [nairaAmount, setNairaAmount] = useState("");

    const click = () => {
        setisopen(!isopen);
    };

    const openNav = () => {
        setopennav(!opennav);
    };

    const closeNav = () => {
        setopennav(false);
    };

    const handleCfaChange = (e) => {
        const cfaValue = e.target.value;
        setCfaAmount(cfaValue);
        setNairaAmount((cfaValue * 0.67).toFixed(2)); // Assume 1 CFA = 0.67 NGN
    };

    const handleNairaChange = (e) => {
        const nairaValue = e.target.value;
        setNairaAmount(nairaValue);
        setCfaAmount((nairaValue / 0.67).toFixed(2)); // Assume 1 NGN = 1.49 CFA
    };

    const walletHistory = [
        {
            'type': 'Withdrawal',
            'amount': 1135,
            'date': 'Fri May 24th, 2024',
            'status': 404
        },
        {
            'type': 'Withdrawal',
            'amount': 2825,
            'date': 'Fri May 24th, 2024',
            'status': 200
        }
    ];

    return (
        <div className="relative flex flex-col min-h-screen p-3">
            {opennav && <HomeNav closeNav={closeNav} />}
            <div className={`flex-1 transition-filter duration-300 ease-in-out ${opennav ? "blur-sm" : ""}`}>
                <div className="flex flex-row items-center justify-between mb-4">
                    <div className="flex flex-row items-center space-x-5 bg-white border-white border rounded-full px-3 py-2">
                        <BiMenu color="blue" size={30} onClick={openNav} />
                        <p className="text-gray-700 text-md" style={{ fontFamily: 'Ubuntu' }}>Wallet</p>
                    </div>
                    <div className="flex flex-row items-center space-x-5 bg-white border-white border rounded-full px-3 py-2">
                        <IoNotifications color="blue" size={30} />
                    </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="flex flex-row justify-between items-center py-3">
                        <div>
                            <p className="text-gray-700 mb-2 text-center text-sm">Available Balance</p>
                            <div className="flex flex-row items-center space-x-2">
                                <div className="border-white border bg-white rounded-full w-12 h-12 flex items-center justify-center">
                                    <p className="text-2xl text-green-600">CFA</p>
                                </div>
                                {isopen ? (
                                    <p className="text-2xl text-green-600 font-bold">0.00</p>
                                ) : (
                                    <p className="text-2xl text-green-600 font-bold">*****</p>
                                )}
                            </div>
                        </div>
                        <div className="cursor-pointer flex items-center mt-6" onClick={click}>
                            {isopen ? <Eye color="black" size={30} /> : <EyeOff color="black" size={30} />}
                        </div>
                    </div>
                </div>
                
                {/* Currency Exchange Section */}
                <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow-md">
                    <p className="text-gray-700 mb-4 text-center text-lg">Currency Exchange</p>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-row items-center space-x-3">
                            <label htmlFor="cfa" className="text-gray-700 font-semibold">CFA:</label>
                            <input
                                id="cfa"
                                type="number"
                                value={cfaAmount}
                                onChange={handleCfaChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div className="flex flex-row items-center space-x-3">
                            <label htmlFor="naira" className="text-gray-700 font-semibold">Naira:</label>
                            <input
                                id="naira"
                                type="number"
                                value={nairaAmount}
                                onChange={handleNairaChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <p className="mb-5">Recent Wallet Activities</p>
                    <div className="max-h-64 shadow-md overflow-y-auto">
                        {walletHistory.map((hist, index) => (
                            <div key={index} className="flex flex-row items-center justify-between p-2 mb-2 border-b border-gray-200">
                                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                                    <ArrowLeft color="red" size={30} />
                                </div>
                                <div className="flex flex-col ml-4">
                                    <p className="font-semibold text-blue-900">{hist.type}</p>
                                    <p className="text-gray-400 font-semibold text-sm" style={{ fontSize: 11}}>{hist.date}</p>
                                </div>
                                <div className="flex flex-col items-end ml-auto">
                                    <p className="font-semibold text-green-500">&#8358; {hist.amount.toLocaleString()}.00</p>
                                    <p className={`text-sm ${hist.status === 200 ? 'text-green-600' : 'text-yellow-600'}`} style={{fontSize: 11}}>
                                        {hist.status === 200 ? 'Approved' : 'Pending'}
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
}

export default Exchange;
