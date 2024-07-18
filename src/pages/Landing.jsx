import React from "react";
import img from '../assets/bghud.jpg';
import img2 from '../assets/purplehd.jpg'
import p1 from '../assets/person1.jpg'
import p2 from '../assets/person2.jpg'
import p3 from '../assets/person3.jpg'
import p4 from '../assets/person4.jpg'
import p5 from '../assets/person5.jpg'
import p6 from '../assets/person6.jpg'
import logo from '../assets/money.png'; // Adjust the path if necessary
import ssr from '../assets/ssr.png';
import { Banknote, Bitcoin, Coins, CoinsIcon, CreditCard, FastForward, FileLock, LockIcon, Phone, Settings, User2, Wifi } from "lucide-react";
import Navbar from "../components/Navbar";

const Landing = () => {
    return (
        <div className="w-full max-w-screen-full bg-black text-white min-h-screen bg-cover bg-center p-1 bg-white">
            {/* Navigation */}
            <Navbar/>
            
            {/* Main Content */}
            <div className="flex flex-col items-center justify-center mt-[70px] pb-[40px]">
                <div className="w-full max-w-screen-2xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:ml-[100px]">
                        {/* Left Section */}
                        <div className="md:hidden flex flex-row self-center justify-center">
                            <img src={logo} alt="Logo" className="h-auto max-w-[200px] md:w-[200px] md:h-auto rounded-lg shadow-lg" style={{ objectFit: 'cover' }}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <h1 className="md:text-6xl font-bold md:mb-4 mb-4 md:text-left text-black text-2xl text-center">VeeXchange</h1>
                                <p className="text-xl text-gray-700 mb-6 text-center md:text-left">Your number one exchange service for <br /> <span className="font-bold">CFA to NGN</span></p>
                                <div className="text-gray-500">
                                    <p className="text-center md:text-left">At VeeXchange, we simplify your financial transactions, providing a seamless and reliable platform to manage your currency exchanges and utility payments across Nigeria and Benin Republic</p>
                                    <p className="md:text-left hidden">Exchange currencies at affordable rates, trade gift cards, get virtual dollar cards, and connect with P2P merchants for the best deals.</p>
                                </div>
                                <div className="md:flex md:flex-row md:items-center md:justify-between flex flex-row items-center justify-between w-full">
                                    <div className="bg-white md:bg-gray-400 transition duration-300 cursor-pointer mt-10 border-2 border-gray-600 md:w-[50%] text-center px-3 py-2 rounded-lg group hover:bg-black ">
                                        <p className="group-hover:text-white text-black">Explore Now</p>
                                    </div>
                                    <div className="md:mr-20 transition duration-300 cursor-pointer mt-10 bg-black border-2 border-purple md:w-[50%] text-center px-3 py-3 rounded-lg group hover:bg-gray-400 ">
                                        <p className="group-hover:text-black text-white">Register</p>
                                    </div>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                        
                        {/* Right Section */}
                        <div className="md:flex md:items-center md:justify-center md:ml-40 hidden">
                            <img src={logo} alt="Hand Coin type shii" className="h-auto max-w-full md:w-[500px] md:h-auto rounded-lg shadow-lg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    
                    {/* Additional Content */}
                    
                </div>
            </div>
            <div className="bg-blue-100 pt-12 pb-20 md:pt-48">
            <p className="text-center text-2xl md:text-4xl font-bold text-black">About Us</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-full px-6 md:px-40">
                <div className="max-w-full md:max-w-[400px] bg-gray-800 p-6 rounded-lg flex flex-col items-center space-y-5 mx-auto">
                    <LockIcon color="white" size={80} className="pt-2 md:pt-5" />
                    <div>
                        <h2 className="text-white text-xl font-bold mb-2 text-center">Maximum Security of Funds</h2>
                        <p className="text-gray-400 text-center mt-4 md:mt-10">
                            At VeeXchange, we prioritize the safety of your transactions with state-of-the-art security measures, ensuring your funds are always protected.
                        </p>
                    </div>
                </div>
                <div className="max-w-full md:max-w-[400px] bg-gray-800 p-6 rounded-lg flex flex-col items-center space-y-5 mx-auto">
                    <FastForward color="white" size={80} className="pt-2 md:pt-5" />
                    <div>
                        <h2 className="text-white text-xl font-bold mb-2 text-center">Fast And Reliable</h2>
                        <p className="text-gray-400 text-center mt-4 md:mt-10">
                            Our platform is designed for speed and efficiency, ensuring that all your transactions are completed without delay.
                        </p>
                    </div>
                </div>
                <div className="max-w-full md:max-w-[400px] bg-gray-800 p-6 rounded-lg flex flex-col items-center space-y-5 mx-auto">
                    <Settings color="white" size={80} className="pt-2 md:pt-5" />
                    <div>
                        <h2 className="text-white text-xl font-bold mb-2 text-center">User-Friendly</h2>
                        <p className="text-gray-400 text-center mt-4 md:mt-10">
                            Our intuitive interface makes it easy for anyone to navigate and use our services.
                        </p>
                    </div>
                </div>
                <div className="max-w-full md:max-w-[400px] bg-gray-800 p-6 rounded-lg flex flex-col items-center space-y-5 mx-auto">
                    <User2 color="white" size={80} className="pt-2 md:pt-5" />
                    <div>
                        <h2 className="text-white text-xl font-bold mb-2 text-center">Comprehensive Support</h2>
                        <p className="text-gray-400 text-center mt-4 md:mt-10">
                            Our dedicated support team is always available to assist you with any queries or issues.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-12 md:pt-36 bg-blue-400 pb-20">
            <p className="text-center text-2xl md:text-4xl font-bold text-white">Our Services</p>
            <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full px-6 md:px-40">
                <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md">
                    <Wifi color="white" size={80} className="pt-2 md:pt-5"/>
                    <div>
                        <h2 className="text-white text-xl font-bold mb-2 text-center">Currency Exchange</h2>
                        <p className="text-white text-center mt-4 md:mt-10">Easily convert your Nigerian Naira (NGN) to Benin Republic CFA (XOF) and vice versa. Whether you are travelling, conducting business or need to transfer money, our platform ensures a quick and secure currency exchange process.</p>
                    </div>
                </div>
                <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md">
                    <Phone color="white" size={80} className="pt-2 md:pt-5"/>
                    <div>
                        <h2 className="text-white text-xl font-bold mb-2 text-center">Airtime And Data Purchases</h2>
                        <p className="text-white text-center mt-4 md:mt-10">Stay connected with ease. Buy airtime and data bundles for both Nigerian and Benin Republic mobile networks directly from our platform. Never run out of talk time or internet data again.</p>
                    </div>
                </div>
                <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md">
                    <CoinsIcon color="white" size={80} className="pt-2 md:pt-5"/>
                    <div>
                        <h2 className="text-white text-xl font-bold mb-2 text-center">Meter Token Purchase</h2>
                        <p className="text-white text-center mt-4 md:mt-10">Manage your electricity needs effortlessly. Purchase meter tokens for your home or business in Nigeria and Benin Republic with just a few clicks.</p>
                    </div>
                </div>
                <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md">
                    <Bitcoin color="white" size={80} className="pt-2 md:pt-5"/>
                    <div>
                        <h2 className="text-white text-xl font-bold mb-2 text-center">P2P Crypto Exchange</h2>
                        <p className="text-white text-center mt-4 md:mt-10">Our P2P platform allows you to connect with registered merchants for currency exchange. Vendors from various locations are available to provide competitive rates, making currency exchange convenient and beneficial for all users.</p>
                    </div>
                </div>
                <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md">
                    <CreditCard color="white" size={80} className="pt-2 md:pt-5"/>
                    <div>
                        <h2 className="text-white text-xl font-bold mb-2 text-center">Gift Card Redemption</h2>
                        <p className="text-white text-center mt-4 md:mt-10">Got gift cards? Redeem any type of gift card on VeeExchange at competitive rates. Convert your gift cards into usable funds quickly and efficiently.</p>
                    </div>
                </div>
                <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md">
                    <Banknote color="white" size={80} className="pt-2 md:pt-5"/>
                    <div>
                        <h2 className="text-white text-xl font-bold mb-2 text-center">Secure Withdrawals</h2>
                        <p className="text-white text-center mt-4 md:mt-10">Withdraw your funds seamlessly to either a Nigerian Bank Account or a Benin Republic mobile money account (MoMo or Moov). Choose the option that best suits your needs and enjoy fast, reliable transfers.</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="pt-12 md:pt-36 bg-white pb-20">
            <p className="text-center text-2xl md:text-4xl font-bold text-black">Testimonials</p>
            <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full px-6 md:px-40">
                <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                    <img src={p1} alt="Person 1" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
                    <div>
                        <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">John Doe</h2>
                        <p className="text-gray-600 text-center mt-4 md:mt-10">"This platform has revolutionized how I manage my data and airtime. Highly recommended!"</p>
                    </div>
                </div>
                <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                    <img src={p2} alt="Person 2" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
                    <div>
                        <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">Jane Smith</h2>
                        <p className="text-gray-600 text-center mt-4 md:mt-10">"Fast and efficient service. I love the ease of paying my bills through this platform."</p>
                    </div>
                </div>
                <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                    <img src={p3} alt="Person 3" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
                    <div>
                        <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">Alice Johnson</h2>
                        <p className="text-gray-600 text-center mt-4 md:mt-10">"Great customer service and a very user-friendly interface. Highly satisfied!"</p>
                    </div>
                </div>
                <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                    <img src={p4} alt="Person 4" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
                    <div>
                        <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">Robert Brown</h2>
                        <p className="text-gray-600 text-center mt-4 md:mt-10">"The international transfer feature is a game-changer for me. I can send money to my family effortlessly."</p>
                    </div>
                </div>
                <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                    <img src={p5} alt="Person 5" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
                    <div>
                        <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">Emily Davis</h2>
                        <p className="text-gray-600 text-center mt-4 md:mt-10">"I love the currency exchange feature. It's transparent and offers great rates."</p>
                    </div>
                </div>
                <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                    <img src={p6} alt="Person 6" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
                    <div>
                        <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">Michael Wilson</h2>
                        <p className="text-gray-600 text-center mt-4 md:mt-10">"Mobile banking has never been this easy. The app is secure and user-friendly."</p>
                    </div>
                </div>
            </div>
        </div>


            <div className="pt-[150px] bg-blue-100 pb-20">
                <p className="text-center text-4xl font-bold text-black">Contact Us</p>
                <div className="mt-[100px] max-w-screen-md mx-auto px-20">
                    <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name" className="text-lg font-bold text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="text-lg font-bold text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="message" className="text-lg font-bold text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>




            
            
            {/* Footer */}
            <footer className="py-4 bg-gray-900 text-gray-400 text-center">
                <p>&copy; 2024 VeeXchange. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;
