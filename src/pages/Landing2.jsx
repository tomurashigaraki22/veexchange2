import React from "react";
import Navbar2 from "../components/Navbar2";
import Header from "../components/Header";
import Do from "../components/Do";
import WWD2 from "../components/WWD2";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Footer from "../components/Footer";

const Landing2 = () => {
    return (
        <div className="bg-gray-100 min-h-screen max-w-screen">
            <Header />
            <Navbar2 />
            <div className="container mx-auto px-4 flex flex-col items-center justify-center w-full">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-10 w-full lg:pl-20 mb-20">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center lg:items-start w-full">
                        <div className="mb-8">
                            <p className="font-bold text-lg text-gray-400 text-center lg:text-left">Welcome To VeeXchange</p>
                            <p style={{ fontFamily: 'Arsenal SC'}} className="hidden lg:block text-blue-900 text-6xl text-left">Your premier<br/> <span className="text-orange-500 font-bold">currency <br/> Exchange and</span><br/> Utility</p>
                            <p style={{ fontFamily: 'Arsenal SC'}} className="lg:hidden text-blue-900 text-3xl text-center">Your premier <span className="text-orange-500 font-bold">currency <br/> Exchange and</span> Utility</p>
                        </div>
                        <div className="leading-relaxed text-center lg:text-left">
                            <p className="lg:text-2xl font-bold text-gray-400" style={{ fontFamily: 'Josefin Sans' }}>
                                At VeeExchange, we simplify your financial transactions,
                                providing a seamless and reliable platform to manage your currency exchanges
                                and utility payments across Nigeria and Benin Republic. Exchange currencies
                                at affordable rates, trade gift cards, get virtual dollar cards,
                                and connect with P2P merchants for the best deals.
                            </p>
                        </div>
                        <div className="border border-white bg-orange-600 hover:bg-orange-800 rounded-lg p-3 mt-5 cursor-pointer">
                            <p className="text-white text-md" style={{ fontFamily: 'Barlow'}}>Open A Free Account</p>
                        </div>
                    </div>
                    <div className="relative lg:w-1/2 flex justify-center items-center mb-10 lg:pb-10 lg:ml-10 p-2">
                        <img src="./home2.png" alt="Home2" className="w-full lg:w-3/4 h-auto" style={{ zIndex: 1 }} />
                        <img src="./home.png" alt="Home" className="absolute w-1/2 h-auto" style={{ zIndex: 2 }} />
                    </div>
                </div>
            </div>
            <div className="sm:hidden md:hidden lg:block hidden">
                <img src="./wwd.png" alt="What we do" className="block lg:w-auto lg:h-auto pl-4 md:hidden lg:block sm:hidden"/>
            </div>
            <Do/>
            <WWD2/>
            <Hero2/>
            <div className="container pr-10 flex flex-col items-center justify-center w-full">
                <Hero3 />
            </div>
            <div className="sm:hidden md:hidden lg:block hidden">
                <img src="./wwd.png" alt="What we do" className="block lg:w-auto lg:h-auto pl-4 md:hidden lg:block sm:hidden"/>
            </div>
            <div className="w-screen">
                <Hero4/>
            </div>
            <Footer/>
        </div>
    );
}

export default Landing2;
