import React from "react";
import logo from '../assets/money.png';

const FooterLarge = () => {
    return (
        <div className="hidden md:block mt-20 mb-10">
            <div className="md:flex md:flex-row md:items-center md:justify-between px-2 mb-[50px]">
                <div className="flex items-center space-x-3 pl-2">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <p className="md:text-3xl text-2xl font-bold text-black">VeeXchange</p>
                </div>
                <div className="md:flex md:flex-row md:items-center md:justify-between space-x-10 mr-20">
                    <p className="text-gray-400 hover:text-black transition-300 cursor-pointer">Gift Cards</p>
                    <p className="text-gray-400 hover:text-black transition-300 cursor-pointer">Products</p>
                    <p className="text-gray-400 hover:text-black transition-300 cursor-pointer">Explore</p>
                </div>
                <div className="group border-2 border-black px-3 py-2 rounded-full text-center w-[150px] hover:bg-black transition duration-300 cursor-pointer">
                    <p className="text-black group-hover:text-white">Get Started</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start justify-between px-10 md:px-20 mb-20 w-full md:w-4/5 lg:w-4/5 mx-auto">
                <div className="flex flex-col">
                    <p className="text-xl font-bold text-black mb-5">Products</p>
                    <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Buy Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Sell Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Bill Payments</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Currency Exchange</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Bank Accounts</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl font-bold text-black mb-5">Available Gift Cards</p>
                    <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Travel Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">LifeStyle Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Music Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">SuperMarket Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Gaming Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Streaming Gift Cards</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl font-bold text-black mb-5">Resources</p>
                    <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Help Center</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Blog</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Support</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Get In Touch</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl font-bold text-black mb-5">Company</p>
                    <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Partners</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Privacy Policy</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Terms Of Service</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-xl font-bold text-black mb-5">Connect</p>
                    <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Get In Touch</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">veexchange_support@gmail.com</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">+234 (0) 80 1 234 5678</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">+234 (0) 80 8 765 4321</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterLarge;
