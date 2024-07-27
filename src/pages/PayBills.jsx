import React, { useState } from "react";
import { BiMenu, BiPhoneCall, BiWifi } from "react-icons/bi";
import { FaInternetExplorer } from "react-icons/fa";
import { FaTv } from "react-icons/fa6";
import { FcElectricity } from "react-icons/fc";
import { IoNotifications } from "react-icons/io5";
import { PiLessThan, PiNotepad } from "react-icons/pi";
import HomeNav from "../components/HomeNav";

const PayBills = () => {
    const [opennav, setopennav] = useState(false);

    const openNav = () => {
        setopennav(!opennav);
    };

    const closeNav = () => {
        setopennav(false);
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-gray-100">
            {opennav && <HomeNav closeNav={closeNav} />}
            <div className={`flex-1 transition-filter duration-300 ease-in-out ${opennav ? "blur-sm" : ""}`}>
                <div className="flex flex-row items-center justify-between p-2">
                    <div className="flex flex-row items-center space-x-3 border border-gray-100 py-1 px-2 bg-gray-100 rounded-lg">
                        {!opennav ? (
                            <BiMenu color="blue" size={23} onClick={openNav} className="cursor-pointer"/>
                        ) : (
                            <PiLessThan color="black" size={21} onClick={closeNav} />
                        )}
                        <p>Bill Payment</p>
                    </div>
                    <div className="flex flex-row items-center space-x-3 border border-gray-100 py-1 px-2 bg-gray-100 rounded-full">
                        <IoNotifications color="blue" size={23} />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between p-2">
                    <div className="border border-gray-100 bg-gray-100 px-1 py-4 rounded-lg shadow-sm">
                        <PiLessThan color="black" size={21} />
                    </div>
                    <div className="mr-5 shadow-sm flex flex-row items-center justify-between w-[80%] border border-gray-100 bg-gray-100 px-3 py-3 rounded-lg">
                        <div className="flex flex-row items-center space-x-2">
                            <p className="text-green-800 text-xl">&#8358;</p>
                            <p>*****</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400" style={{ fontSize: 12 }}>Available Balance</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-sm text-gray-400 p-2" style={{ fontSize: 11 }}>Okay... Let's pay some bills</p>
                    <div className="grid grid-cols-2 gap-4 px-4 pb-4">
                        <div className="border border-blue-100 bg-gradient-to-r from-blue-300 to-blue-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
                            <div className="border border-blue-600 bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
                                <BiPhoneCall color="white" size={21} />
                            </div>
                            <p className="text-sm font-bold text-gray-600" style={{ fontSize: 12}}>Airtime</p>
                        </div>
                        <div className="border border-green-100 bg-gradient-to-r from-green-300 to-green-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
                            <div className="border border-green-600 bg-green-600 w-8 h-8 flex items-center justify-center rounded-full">
                                <BiWifi color="white" size={21} />
                            </div>
                            <p className="text-sm font-bold text-gray-600" style={{ fontSize: 12}}>Mobile Data</p>
                        </div>
                        <div className="border border-gray-200 bg-gradient-to-r from-gray-300 to-gray-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
                            <div className="border border-blue-600 bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
                                <FaInternetExplorer color="black" size={21} />
                            </div>
                            <p className="text-sm font-bold text-gray-600" style={{ fontSize: 12}}>Internet</p>
                        </div>
                        <div className="border border-purple-200 bg-gradient-to-r from-purple-300 to-purple-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
                            <div className="border border-purple-600 bg-gradient-to-r from-purple-800 to-purple-600 w-8 h-8 flex items-center justify-center rounded-full">
                                <FcElectricity color="white" size={21} />
                            </div>
                            <p className="text-sm font-bold text-gray-600" style={{ fontSize: 12}}>Electricity</p>
                        </div>
                        <div className="border border-blue-100 bg-gradient-to-r from-blue-300 to-blue-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
                            <div className="border border-blue-600 bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
                                <FaTv color="white" size={21} />
                            </div>
                            <p className="text-sm font-bold text-gray-600" style={{ fontSize: 12}}>Cable TV</p>
                        </div>
                        <div className="border border-red-200 bg-gradient-to-r from-red-300 to-red-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
                            <div className="border border-red-600 bg-red-600 w-8 h-8 flex items-center justify-center rounded-full">
                                <PiNotepad color="white" size={21} />
                            </div>
                            <p className="text-sm font-bold text-gray-600" style={{ fontSize: 12}}>Betting Funding</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayBills;
