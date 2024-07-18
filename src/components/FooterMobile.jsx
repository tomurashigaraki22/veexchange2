import React, { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";


const FooterMobile = () => {
    const [openResource, setopenResource] = useState(false)
    const [openCompany, setopenCompany] = useState(false)
    const [openConnect, setopenConnect] = useState(false)
    const [openGift, setopenGift] = useState(false)
    const [openProducts, setopenProducts] = useState(true)

    const openr = () => {
        setopenResource(!openResource)
    }
    const opency = () => {
        setopenCompany(!openCompany)
    }
    const openct = () => {
        setopenConnect(!openConnect)
    }
    const opengt = () => {
        setopenGift(!openGift)
    }
    const openPs = () => {
        setopenProducts(!openProducts)
    }

    return(
        <div className="block md:hidden bg-white py-10 px-5">
            <div className="flex flex-col space-y-8">
                <div>
                    <div className="flex flex-row items-center justify-between mb-5">
                        <p className="text-xl font-bold text-black">Products</p>
                        {openProducts ? <MinusCircle color="black" size={30} onClick={openPs}/>: <PlusCircle color="black" size={30} onClick={openPs}/>}
                    </div>
                    {openProducts && <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Buy Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Sell Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Bill Payments</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Currency Exchange</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Bank Accounts</p>
                    </div>}
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between mb-5">
                        <p className="text-xl font-bold text-black">Available GiftCards</p>
                        {openGift ? <MinusCircle color="black" size={30} onClick={opengt}/>: <PlusCircle color="black" size={30} onClick={opengt}/>}
                    </div>
                    {openGift && <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Travel Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">LifeStyle Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Music Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">SuperMarket Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Gaming Gift Cards</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Streaming Gift Cards</p>
                    </div>}
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between mb-5">
                        <p className="text-xl font-bold text-black">Resources</p>
                        {openResource ? <MinusCircle color="black" size={30} onClick={openr}/>: <PlusCircle color="black" size={30} onClick={openr}/>}
                    </div>
                    {openResource && <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Help Center</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Blog</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Support</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Get In Touch</p>
                    </div>}
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between mb-5">
                        <p className="text-xl font-bold text-black">Company</p>
                        {openCompany ? <MinusCircle color="black" size={30} onClick={opency}/>: <PlusCircle color="black" size={30} onClick={opency}/>}
                    </div>
                    {openCompany && <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Partners</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Privacy Policy</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Terms Of Service</p>
                    </div>}                   
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between mb-5">
                        <p className="text-xl font-bold text-black">Connect</p>
                        {openConnect ? <MinusCircle color="black" size={30} onClick={openct}/>: <PlusCircle color="black" size={30} onClick={openct}/>}
                    </div>
                    {openConnect && <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Get In Touch</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">veexchange_support@gmail.com</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">+234 (0) 80 1 234 5678</p>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">+234 (0) 80 8 765 4321</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default FooterMobile;