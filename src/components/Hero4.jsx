import React from "react";


const Hero4 = () => {
    return(
        <div className="mt-10 p-20 block sm:hidden md:hidden lg:block">
            <div>
                <div>
                    <p className="text-xl font-bold text-blue-600 text-center" style={{fontFamily: 'Arsenal SC'}}>Plan And Pricing</p>
                    <div>
                        <p className="text-center text-4xl pt-5">Helping You Make Smart <br/>Financial Choices</p>
                    </div>
                </div>
                <div className="mt-10 space-y-10">
                    <div className="flex transition duration-300 group hover:bg-blue-600 cursor-pointer flex-row items-center justify-between border-2 border-gray-500 rounded-lg p-3">
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Bank Transfer</p>
                            <p className="group-hover:text-white">*Fees (excl VAT)</p>
                        </div>
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Online Payment</p>
                            <p className="group-hover:text-white">3.5% plus USD 1.00</p>
                        </div>
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Payout</p>
                            <p className="group-hover:text-white">3.5% plus USD 1.00</p>
                        </div>
                        <div>
                            <img src="./card.png" alt="Card" className="w-auto h-auto"/>
                        </div>
                    </div>
                    <div className="flex transition duration-300 group hover:bg-blue-600 cursor-pointer flex-row items-center justify-between border-2 border-gray-500 rounded-lg p-3">
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>e-Wallet</p>
                            <p className="group-hover:text-white">*Need verification</p>
                        </div>
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Online Payment</p>
                            <p className="group-hover:text-white">3.5% plus USD 1.00</p>
                        </div>
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Payout</p>
                            <p className="group-hover:text-white">3.5% plus USD 1.00</p>
                        </div>
                        <div>
                            <img src="./card.png" alt="Card" className="w-auto h-auto"/>
                        </div>
                    </div>
                    <div className="flex transition duration-300 group hover:bg-blue-600 cursor-pointer flex-row items-center justify-between border-2 border-gray-500 rounded-lg p-3">
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Credit Card</p>
                            <p className="group-hover:text-white">*Fees (excl VAT)</p>
                        </div>
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Online Payment</p>
                            <p className="group-hover:text-white">3.5% plus USD 1.00</p>
                        </div>
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Payout</p>
                            <p className="group-hover:text-white">3.5% plus USD 1.00</p>
                        </div>
                        <div>
                            <img src="./card.png" alt="Card" className="w-auto h-auto"/>
                        </div>
                    </div>
                    <div className="flex transition duration-300 group hover:bg-blue-600 cursor-pointer flex-row items-center justify-between border-2 border-gray-500 rounded-lg p-3">
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Cardless Credit</p>
                            <p className="group-hover:text-white">*Fees (excl VAT)</p>
                        </div>
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Online Payment</p>
                            <p className="group-hover:text-white">3.5% plus USD 1.00</p>
                        </div>
                        <div>
                            <p className="text-xl text-blue-600 group-hover:text-white" style={{ fontFamily: 'Josefin Sans' }}>Payout</p>
                            <p className="group-hover:text-white">3.5% plus USD 1.00</p>
                        </div>
                        <div>
                            <img src="./card.png" alt="Card" className="w-auto h-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero4;