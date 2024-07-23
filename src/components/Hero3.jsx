import React from "react";

const Hero3 = () => {
    return (
        <div className="p-4 ml-10 " style={{ alignSelf: 'center'}}>
            <div className="flex flex-col items-stretch justify-center lg:flex-row lg:items-stretch space-y-5 lg:space-y-0 lg:space-x-10">
                <div className="hover:shadow-lg hover:shadow-gray-400 hover:border hover:border-gray-400 text-center flex flex-col items-center space-y-3 p-4 flex-grow h-full transition-shadow duration-300">
                    <img src="./pman.png" alt="Payment Management" className="w-auto h-auto pb-5" />
                    <p className="font-bold text-lg">Payment Management</p>
                    <p className="flex-grow text-gray-400">At VeeExchange, we provide a comprehensive payment management system to ensure your financial transactions are seamless and secure. Whether you need to exchange currency, purchase utilities, or manage withdrawals, our platform offers you the convenience and reliability you need.</p>
                </div>
                <div className="hover:shadow-lg hover:shadow-gray-400 hover:border hover:border-gray-400 text-center flex flex-col items-center space-y-3 p-4 flex-grow h-full transition-shadow duration-300">
                    <img src="./dash.png" alt="Personal Dashboard" className="w-auto h-auto pb-5" />
                    <p className="font-bold text-lg">Personal Dashboard</p>
                    <p className="flex-grow text-gray-400">At VeeExchange, we prioritize your convenience and control over your financial activities. Our Personal Dashboard offers you a user-friendly interface to manage all your transactions in one place, providing you with a seamless and efficient experience.</p>
                </div>
                <div className="hover:shadow-lg hover:shadow-gray-400 hover:border hover:border-gray-400 text-center flex flex-col items-center space-y-3 p-4 flex-grow h-full transition-shadow duration-300">
                    <img src="./intpay.png" alt="Integrated Payments" className="w-auto h-auto pb-5" />
                    <p className="font-bold text-lg">Integrated Payments</p>
                    <p className="flex-grow text-gray-400">VeeExchange offers integrated payment solutions designed to simplify your financial transactions. Our platform provides a seamless and secure way to manage your payments, ensuring efficiency and peace of mind.</p>
                </div>
            </div>
            <div className="flex flex-col items-stretch mt-20 lg:flex-row lg:items-stretch space-y-5 lg:space-y-0 lg:space-x-10">
                <div className="hover:shadow-lg hover:shadow-gray-400 hover:border hover:border-gray-400 text-center flex flex-col items-center space-y-3 p-6 flex-grow h-full transition-shadow duration-300 bg-white rounded-lg">
                    <img src="./bntrack.png" alt="Business Tracking" className="w-24 h-24 pb-5 object-contain" />
                    <p className="font-bold text-xl text-gray-800">Business Tracking</p>
                    <p className="flex-grow text-gray-600">With VeeExchange, keep your business finances organized and transparent. Our business tracking feature helps you monitor your transactions, manage your funds, and analyze your financial performance with ease.</p>
                </div>
                <div className="hover:shadow-lg hover:shadow-gray-400 hover:border hover:border-gray-400 text-center flex flex-col items-center space-y-3 p-6 flex-grow h-full transition-shadow duration-300 bg-white rounded-lg">
                    <img src="./card.png" alt="Credit And Debit Card" className="w-24 h-24 pb-5 object-contain" />
                    <p className="font-bold text-xl text-gray-800">Credit And Debit Card</p>
                    <p className="flex-grow text-gray-600">VeeExchange offers seamless integration with credit and debit cards, providing you with a convenient and secure way to manage your financial transactions. Whether you’re exchanging currency, purchasing utilities, or redeeming gift cards, our platform ensures a smooth and efficient process.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero3;
