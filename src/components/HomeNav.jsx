import { GoHomeFill } from "react-icons/go";
import { IoRocket } from "react-icons/io5";
import { IoMegaphoneSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaExchangeAlt, FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { X } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";



const HomeNav = ({ closeNav }) => {
    const navigate = useNavigate()
    return (
        <div className="absolute top-0 pt-4 left-0 w-2/3 bg-white h-full shadow-lg z-50 transform translate-x-0 transition-transform duration-300">
            <div className="flex flex-col items-left p-3 space-y-10 pb-10">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-lg" style={{ fontFamily: 'Ubuntu'}}>Vincent</p>
                    <X color="red" size={30} onClick={closeNav} className="cursor-pointer" />
                </div>
                <div className="space-y-10">
                    <div className="flex items-center space-x-2 group transition duration-300 cursor-pointer" onClick={() => navigate('/home')}>
                        <GoHomeFill className="text-gray-900 group-hover:text-gray-400" size={30} />
                        <p className="text-gray-500 group-hover:text-gray-400" style={{ fontFamily: 'Montserrat'}}>Home</p>
                    </div>
                    <div className="flex items-center space-x-2 group transition duration-300 cursor-pointer" onClick={() => navigate('/buydata')}>
                        <IoRocket className="text-gray-900 group-hover:text-gray-400" size={30} />
                        <p className="text-gray-500 group-hover:text-gray-400" style={{ fontFamily: 'Montserrat'}}>Mobile Data</p>
                    </div>
                    <div className="flex items-center space-x-2 group transition duration-300 cursor-pointer" onClick={() => navigate('/electricity')}>
                        <IoMegaphoneSharp className="text-gray-900 group-hover:text-gray-400" size={30} />
                        <p className="text-gray-500 group-hover:text-gray-400" style={{ fontFamily: 'Montserrat'}}>Electricity</p>
                    </div>
                    <div className="flex items-center space-x-2 group transition duration-300 cursor-pointer" onClick={() => navigate('/paybills')}>
                        <IoIosStar className="text-gray-900 group-hover:text-gray-400" size={30} />
                        <p className="text-gray-500 group-hover:text-gray-400" style={{ fontFamily: 'Montserrat'}}>Pay Bills</p>
                    </div>
                    <div className="flex items-center space-x-2 group transition duration-300 cursor-pointer" onClick={() => navigate('/betting')}>
                        <FaHeart className="text-gray-900 group-hover:text-gray-400" size={30} />
                        <p className="text-gray-500 group-hover:text-gray-400" style={{ fontFamily: 'Montserrat'}}>Betting</p>
                    </div>
                    <div className="flex items-center space-x-2 group transition duration-300 cursor-pointer" onClick={() => navigate('/exchange')}>
                        <FaExchangeAlt className="text-gray-900 group-hover:text-gray-400" size={30} />
                        <p className="text-gray-500 group-hover:text-gray-400" style={{ fontFamily: 'Montserrat'}}>CFA to NGN</p>
                    </div>
                    <div className="flex items-center space-x-2 group transition duration-300 cursor-pointer">
                        <FaShare className="text-gray-900 group-hover:text-gray-400" size={30} />
                        <p className="text-gray-500 group-hover:text-gray-400" style={{ fontFamily: 'Montserrat'}}>Log Out</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNav;
