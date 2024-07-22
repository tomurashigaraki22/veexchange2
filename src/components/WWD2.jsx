import React from "react";


const WWD2 = () => {
    return(
        <div className="p-4">
            <img src="./wwd2.png" alt="wwd2" className="w-auto h-auto hidden sm:hidden md:hidden lg:flex"/>
            <div className="flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-20">
                <div className="cursor-pointer group hover:bg-blue-600 transition duration-300 px-6 py-4 rounded-lg border-2 border-gray-400 flex flex-row items-center space-x-4">
                    <img src="./pac.png" alt="Personal Account" className="w-auto h-auto"/>
                    <p className="group-hover:text-white text-2xl font-bold text-blue-900" style={{ fontFamily: 'Arsenal SC' }}>PERSONAL ACCOUNT</p>
                </div>
                <div className="cursor-pointer group hover:bg-blue-600 transition duration-300 px-6 py-4 rounded-lg border-2 border-gray-400 flex flex-row items-center space-x-4">
                    <img src="./mac.png" alt="Merchant Account" className="w-auto h-auto"/>
                    <p className="group-hover:text-white text-2xl font-bold text-blue-900" style={{ fontFamily: 'Arsenal SC' }}>MERCHANT ACCOUNT</p>
                </div>
            </div>
        </div>
    )
}

export default WWD2;