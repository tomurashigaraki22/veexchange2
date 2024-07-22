import React from "react";
import bg2 from '../../public/bg2.png'

const Hero2 = () => {
    return (
        <div
            className="mt-10 mb-20 flex flex-col items-center justify-center mx-auto pb-10"
            style={{
                backgroundImage: `url(${bg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container flex flex-col items-center lg:flex-row lg:justify-between mx-auto p-4 lg:p-0">
                <div className="relative lg:w-1/2 flex justify-center items-center lg:pb-10 lg:ml-10 p-2">
                    <img src="./doc.png" alt="Doctor type shii" className="w-full lg:w-3/4 h-auto" style={{ zIndex: 1 }} />
                    <img src="./doc2.png" alt="Doctor Circle stuff" className="absolute w-1/2 h-auto" style={{ zIndex: 2 }} />
                </div>
                <div className="pt-20">
                    <div className="text-left">
                        <p className="text-2xl font-bold text-blue-800" style={{ fontFamily: 'Arsenal SC' }}>Why Choose VeeXchange?</p>
                        <p className="text-4xl font-bold text-black pt-5" style={{ fontFamily: 'Josefin Sans' }}>We Have The Most Users All Over The World</p>
                    </div>
                    <div className="mt-10 space-y-4 px-4 lg:px-0">
                        <p className="text-gray-400 font-bold" style={{ fontFamily: 'Josefin Sans' }}>Fast and Reliable: Our platform is designed for speed and efficiency, ensuring that all your transactions are completed without delay.</p>
                        <p className="text-gray-400 font-bold" style={{ fontFamily: 'Josefin Sans' }}>Secure: We prioritize your security, using the latest encryption technologies to protect your personal and financial information.</p>
                        <p className="text-gray-400 font-bold" style={{ fontFamily: 'Josefin Sans' }}>User-Friendly: Our intuitive interface makes it easy for anyone to navigate and use our services.</p>
                        <p className="text-gray-400 font-bold" style={{ fontFamily: 'Josefin Sans' }}>Competitive Rates: Benefit from some of the best rates in the market for currency exchange and gift card redemption.</p>
                        <p className="text-gray-400 font-bold" style={{ fontFamily: 'Josefin Sans' }}>Comprehensive Support: Our dedicated support team is always available to assist you with any queries or issues.</p>
                    </div>
                    <div className="mt-10 flex flex-col items-center space-y-5 lg:flex-row lg:space-x-10">
                        <div className="flex flex-row items-center space-x-5">
                            <img src="./cust.png" alt="Customer Happy" className="w-auto h-auto" />
                            <div>
                                <p className="text-3xl text-orange-600 font-bold" style={{ fontFamily: 'Arsenal SC'}}>55k+</p>
                                <p className="text-blue-800 text-xl font-bold" style={{ fontFamily: 'Josefin Sans'}}>Happy Customers</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-5">
                            <img src="./transactions.png" alt="Transactions" className="w-auto h-auto"/>
                            <div>
                                <p className="text-3xl text-orange-600 font-bold" style={{ fontFamily: 'Arsenal SC'}}>$249M+</p>
                                <p className="text-blue-800 text-xl font-bold" style={{ fontFamily: 'Josefin Sans'}}>Total Transactions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero2;
