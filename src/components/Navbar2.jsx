import { Menu, UserPlusIcon, X } from "lucide-react";
import React, { useState } from "react";

const Navbar2 = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <div className="flex flex-row items-center justify-between p-3">
                <div>
                    <p className="text-3xl font-bold" style={{ fontFamily: 'Josefin Sans' }}>VeeXchange</p>
                </div>
                <div className="flex flex-row items-center justify-between space-x-20 hidden md:hidden lg:flex">
                    <p className="hover:text-gray-400 transition duration-300 cursor-pointer">Home</p>
                    <p className="hover:text-gray-400 transition duration-300 cursor-pointer">Service</p>
                    <p className="hover:text-gray-400 transition duration-300 cursor-pointer">Contact Us</p>
                    <p className="hover:text-gray-400 transition duration-300 cursor-pointer">Pages</p>
                    <div className="flex hover:bg-orange-800 transition duration-300 cursor-pointer flex-row items-center space-x-3 bg-orange-600 px-3 py-2 rounded-lg">
                        <UserPlusIcon color="white" size={28} />
                        <p className="text-lg font-bold text-white" style={{ fontFamily: 'Josefin Sans' }}>Sign Up</p>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    {clicked ? <X color="black" size={30} onClick={() => setClicked(false)} /> : <Menu color="black" size={30} onClick={() => setClicked(true)} />}
                </div>
            </div>
            <div className={`transition-transform duration-2000 ${clicked ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden lg:hidden flex flex-col items-center space-y-3 p-3`}>
                <p className="hover:text-gray-400 transition duration-300 cursor-pointer">Home</p>
                <p className="hover:text-gray-400 transition duration-300 cursor-pointer">Service</p>
                <p className="hover:text-gray-400 transition duration-300 cursor-pointer">Contact Us</p>
                <p className="hover:text-gray-400 transition duration-300 cursor-pointer">Pages</p>
                <div className="flex flex-row items-center space-x-3 bg-orange-600 hover:bg-orange-800 cursor-pointer px-3 py-2 rounded-lg w-auto">
                    <UserPlusIcon color="white" size={28} />
                    <p className="text-lg font-bold text-white" style={{ fontFamily: 'Josefin Sans' }}>Sign Up</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar2;
