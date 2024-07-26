import { Eye, EyeOff, Menu, ShoppingBag, BellDot, CreditCard, BookmarkPlusIcon, X } from "lucide-react";
import React, { useState } from "react";
import BottomNav from "./BottomNav";
import HomeNav from "./HomeNav";
import { IoNotifications } from "react-icons/io5";

const HomeMobile = () => {
    const [isopen, setisopen] = useState(false);
    const [opennav, setopennav] = useState(false);

    const click = () => {
        setisopen(!isopen);
    };

    const openNav = () => {
        setopennav(!opennav);
    };

    const closeNav = () => {
        setopennav(false);
    };

    return (
        <div className="relative flex flex-col min-h-screen p-4">
            {opennav && <HomeNav closeNav={closeNav} />}
            <div className={`flex-1 transition-filter duration-300 ease-in-out ${opennav ? "blur-sm" : ""}`}>
                <div className="text-sm font-bold flex flex-row items-center justify-between mb-4">
                    <div className="flex flex-row items-center space-x-2">
                        {!opennav ? (
                            <Menu color="blue" size={25} onClick={openNav} />
                        ) : (
                            <X color="red" size={30} onClick={openNav} />
                        )}
                        <p>Welcome, mrmr</p>
                    </div>
                    <div>
                        <IoNotifications color="blue" fill="blue" size={28} />
                    </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="flex flex-row justify-between items-center py-10">
                        <div>
                            <p className="text-gray-700 mb-2 text-center text-sm">Available Balance</p>
                            <div className="flex flex-row items-center space-x-2">
                                <div className="border-white border bg-white rounded-full w-12 h-12 flex items-center justify-center">
                                    <p className="text-2xl text-green-600">&#8358;</p>
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
                <div className="mt-3 border-2 border-blue-100 bg-gradient-to-r from-blue-100 via-blue-200 to-white rounded-lg shadow-md">
                    <div className="flex flex-col items-left space-y-3 p-3 pb-20">
                        <div
                            className="border border-white bg-blue-600 rounded-full p-1 flex items-center justify-center"
                            style={{ width: "50px", height: "50px" }}
                        >
                            <ShoppingBag color="white" size={18} />
                        </div>
                        <div>
                            <p style={{ fontFamily: "Ubuntu" }} className="text-sm text-gray-500">
                                Sell Gift Cards
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex flex-row items-center space-x-5 justify-between w-full">
                    <div className="p-3 flex flex-col items-left space-y-1 pb-10 w-1/2 bg-gradient-to-r from-red-200 to-red-100 shadow-md rounded-lg">
                        <div
                            className="border-red-200 border bg-red-600 p-2 flex items-center justify-center rounded-full"
                            style={{ width: "50px", height: "50px" }}
                        >
                            <CreditCard color="white" size={18} />
                        </div>
                        <p className="text-sm text-gray-500" style={{ fontFamily: "Ubuntu" }}>
                            CFA to NGN
                        </p>
                    </div>
                    <div className="p-3 flex flex-col items-left space-y-1 w-1/2 pb-10 bg-gradient-to-r from-blue-200 to-blue-100 shadow-md rounded-lg">
                        <div
                            className="border-blue-200 border bg-blue-600 p-2 flex items-center justify-center rounded-full"
                            style={{ width: "50px", height: "50px" }}
                        >
                            <BookmarkPlusIcon color="white" size={18} />
                        </div>
                        <p className="text-sm text-gray-500" style={{ fontFamily: "Ubuntu Sans" }}>
                            CFA wallet
                        </p>
                    </div>
                </div>
            </div>
            <BottomNav />
        </div>
    );
};

export default HomeMobile;
