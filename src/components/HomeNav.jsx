import { Banknote, CreditCard, Home, Wallet, Wallet2 } from "lucide-react";
import React from "react";


const HomeNav = () => {
    return(
        <div className="w-1/2 bg-white h-full">
            <div className="flex flex-col items-left p-3 space-y-10 pb-10">
                <div className="flex flex-row items-center space-x-3">
                    <Home color="black" size={30}/>
                    <p className="text-black">Home</p>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <Wallet color="black" size={30}/>
                    <p className="text-black">NGN Wallet</p>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <Wallet2 color="black" size={30}/>
                    <p className="text-black">CFA Wallet</p>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <Banknote color="black" size={30}/>
                    <p className="text-black">Withdraw</p>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <CreditCard color="black" size={30}/>
                    <p className="text-black">Deposit</p>
                </div>
            </div>
        </div>
    )
}

export default HomeNav;