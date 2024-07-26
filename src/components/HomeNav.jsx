import { GoHomeFill } from "react-icons/go";
import { IoRocket } from "react-icons/io5";
import { IoMegaphoneSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { X } from "lucide-react";
import React from "react";


const HomeNav = ({ closeNav }) => {
    return (
        <div className="absolute top-0 pt-4 left-0 w-2/3 bg-white h-full shadow-lg z-50 transform translate-x-0 transition-transform duration-300">
            <div className="flex flex-col items-left p-3 space-y-10 pb-10">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-lg" style={{ fontFamily: 'Ubuntu'}}>Vincent</p>
                    <X color="red" size={30} onClick={closeNav} />
                </div>
                <div className="space-y-10">
                    <div className="flex items-center space-x-2">
                        <GoHomeFill color="black" size={30} />
                        <p className="text-gray-500" style={{ fontFamily: 'Montserrat'}}>Home</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <IoRocket color="black" size={30} />
                        <p className="text-gray-500" style={{ fontFamily: 'Montserrat'}}>User Level</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <IoMegaphoneSharp color="black" size={30} />
                        <p className="text-gray-500" style={{ fontFamily: 'Montserrat'}}>Set Rate Target</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <IoIosStar color="black" size={30} />
                        <p className="text-gray-500" style={{ fontFamily: 'Montserrat'}}>Favourites</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaHeart color="black" size={30} />
                        <p className="text-gray-500" style={{ fontFamily: 'Montserrat'}}>Show Love</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaShare color="black" size={30} />
                        <p className="text-gray-500" style={{ fontFamily: 'Montserrat'}}>Log Out</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNav;
