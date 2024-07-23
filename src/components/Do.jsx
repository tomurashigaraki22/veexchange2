import React from "react";

const Do = () => {
    return (
        <div className="mt-10 mb-20">
            <div>
                <div className="space-y-4">
                    <p className="text-green-500 text-2xl text-center font-bold" style={{ fontFamily: 'Arsenal SC' }}>What We Do</p>
                    <p className="text-center lg:text-xl text-lg font-bold text-blue-800">Get Ready To Have The Best Smart Payments In The World</p>
                </div>
                <div className="mt-10 p-3 lg:flex lg:flex-row items-stretch justify-center lg:space-x-5 space-y-10 lg:space-y-0">
                    <div className="lg:pt-10 flex flex-col items-center space-y-3 rounded-lg border border-gray-400 p-2 bg-white">
                        <img src="./p2p.png" alt="currency exchange" className="w-auto h-auto transform transition duration-300 hover:-translate-y-2"/>
                        <p className="text-blue-700 text-xl mt-3 font-bold" style={{ fontFamily: 'Arsenal SC' }}>Currency Exchange</p>
                        <div className="text-center p-2 text-gray-500">
                            <p>Easily convert your Nigerian Naira (NGN) to Benin Republic CFA (XOF) and vice versa. Whether you are traveling, conducting business, or need to transfer money, our platform ensures a quick and secure currency exchange process..</p>
                        </div>
                    </div>
                    <div className="lg:pt-10 flex flex-col items-center space-y-3 rounded-lg border border-gray-400 p-2 bg-white">
                        <img src="./adbundle.png" alt="airtime and data" className="w-auto h-auto transform transition duration-300 hover:-translate-y-2"/>
                        <p className="text-blue-700 text-xl mt-3 font-bold" style={{ fontFamily: 'Arsenal SC' }}>Airtime And Data Purchase</p>
                        <div className="text-center p-2 text-gray-500">
                            <p>Stay connected with ease. Buy airtime and data bundles for both Nigerian and Benin Republic mobile networks directly from our platform. Never run out of talk time or internet data again.</p>
                        </div>
                    </div>
                    <div className="lg:pt-10 flex flex-col items-center space-y-3 rounded-lg border border-gray-400 p-2 bg-white">
                        <img src="./mtpur.png" alt="meter token purchase" className="w-auto h-auto transform transition duration-300 hover:-translate-y-2"/>
                        <p className="text-blue-700 text-xl mt-3 font-bold" style={{ fontFamily: 'Arsenal SC' }}>Meter Token Purchase</p>
                        <div className="text-center p-2 text-gray-500">
                            <p>Manage your electricity needs effortlessly. Purchase meter tokens for your home or business in Nigeria and Benin Republic with just a few clicks.</p>
                        </div>
                    </div>
                    <div className="lg:pt-10 flex flex-col items-center space-y-3 rounded-lg border border-gray-400 p-2 bg-white">
                        <img src="./p2p.png" alt="P2P currency exchange" className="w-auto h-auto transform transition duration-300 hover:-translate-y-2"/>
                        <p className="text-blue-700 text-xl mt-3 font-bold" style={{ fontFamily: 'Arsenal SC' }}>Peer-to-Peer (P2P) Currency Exchange</p>
                        <div className="text-center p-2 text-gray-500">
                            <p>Our P2P platform allows you to connect with registered merchants for currency exchange. Vendors from various locations are available to provide competitive rates, making currency exchange convenient and beneficial for all users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Do;
