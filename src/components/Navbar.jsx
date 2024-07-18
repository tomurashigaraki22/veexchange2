import React from "react";
import logo from '../assets/money.png'
import { Menu } from "lucide-react";

const Navbar = () => {
    return(
        <div>
            <div className="flex flex-row items-center justify-between py-4 max-w-screen-2xl mx-auto">
                <div className="flex items-center space-x-3 pl-2">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <p className="md:text-3xl text-2xl font-bold text-black">VeeXchange</p>
                </div>
                <div className="md:hidden pr-2">
                    <Menu color='black' size={30}/>
                </div>
                <div className="md:flex md:flex-row md:items-center md:space-x-8 md:pr-10 hidden">
                    <div>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Home</p>
                    </div>
                    <div>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">About</p>
                    </div>
                    <div>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Services</p>
                    </div>
                    <div className="text-lg border-2 border-white py-2 px-5 rounded-md hover:bg-gray-400 hover:text-black transition duration-300 cursor-pointer bg-black group">
                        <p className="text-white group-hover:text-black">Sign In</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;