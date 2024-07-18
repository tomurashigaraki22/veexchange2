import React, { useState } from "react";
import img from '../assets/bghud.jpg';
import img2 from '../assets/purplehd.jpg'
import p1 from '../assets/rachel.jpeg'
import p2 from '../assets/hassan.jpeg'
import p3 from '../assets/fabzi.jpeg'
import p4 from '../assets/may.jpeg'
import p5 from '../assets/haleemah.jpeg'
import p6 from '../assets/convenant.jpeg'
import logo from '../assets/money.png'; // Adjust the path if necessary
import ssr from '../assets/ssr.png';
import { Banknote, Bitcoin, Coins, CoinsIcon, CreditCard, FastForward, FileLock, LockIcon, MinusCircle, Phone, PlusCircle, Settings, User2, Wifi } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


const Landing = () => {
    const [openResource, setopenResource] = useState(false)
    const [openCompany, setopenCompany] = useState(false)
    const [openConnect, setopenConnect] = useState(false)
    const [openGift, setopenGift] = useState(false)
    const [openProducts, setopenProducts] = useState(true)
    const navigate = useNavigate();

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

    return (
        <div className="w-full max-w-screen-full bg-black text-white min-h-screen bg-cover bg-center p-1 bg-white">
            {/* Navigation */}
            <Navbar/>
            
            {/* Main Content */}
            <div className="flex flex-col items-center justify-center mt-[70px] pb-[40px]">
                <div className="w-full max-w-screen-2xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:ml-[50px]">
                        {/* Left Section */}
                        <div className="md:hidden flex flex-row self-center justify-center">
                            <img src={logo} alt="Logo" className="h-auto max-w-[200px] md:w-[200px] md:h-auto rounded-lg shadow-lg" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="flex flex-col items-center">
                            <div>
                                <h1 className="md:text-6xl font-bold md:mb-4 mb-4 md:text-left text-black text-2xl text-center">VeeXchange</h1>
                                <p className="text-xl text-gray-700 mb-6 text-center md:text-left">Your number one exchange service for <br /> <span className="font-bold">CFA to NGN</span></p>
                                <div className="text-gray-500">
                                    <p className="text-center md:text-left">At VeeXchange, we simplify your financial transactions, providing a seamless and reliable platform to manage your currency exchanges and utility payments across Nigeria and Benin Republic</p>
                                    <p className="md:text-left hidden md:block">Exchange currencies at affordable rates, trade gift cards, get virtual dollar cards, and connect with P2P merchants for the best deals.</p>
                                </div>
                                <div className="md:flex md:flex-row md:items-center md:justify-between flex flex-row items-center justify-between w-full">
                                    <div className="bg-white md:bg-white transition duration-300 cursor-pointer mt-10 border-2 border-gray-600 md:w-[50%] text-center px-3 py-2 rounded-lg group hover:bg-black">
                                        <p className="group-hover:text-white text-black">Explore Now</p>
                                    </div>
                                    <div onClick={() => navigate('/login')} className="lg:mr-20 transition duration-300 cursor-pointer mt-10 bg-black border-2 border-purple md:w-[50%] text-center px-3 py-3 rounded-lg group hover:bg-gray-400">
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
                </div>
            </div>

            <div className="bg-blue-100 pt-12 pb-20 md:pt-24">
                <p className="text-center text-2xl md:text-4xl font-bold text-black">About Us</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full px-6 md:px-20 lg:px-40">
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
    <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full px-6 md:px-20">
        <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md w-full md:w-80 lg:w-96 mx-auto">
            <Wifi color="white" size={80} className="pt-2 md:pt-5"/>
            <div>
                <h2 className="text-white text-xl font-bold mb-2 text-center">Currency Exchange</h2>
                <p className="text-white text-center mt-4 md:mt-10">Easily convert your Nigerian Naira (NGN) to Benin Republic CFA (XOF) and vice versa. Whether you are travelling, conducting business or need to transfer money, our platform ensures a quick and secure currency exchange process.</p>
            </div>
        </div>
        <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md w-full md:w-80 lg:w-96 mx-auto">
            <Phone color="white" size={80} className="pt-2 md:pt-5"/>
            <div>
                <h2 className="text-white text-xl font-bold mb-2 text-center">Airtime And Data Purchases</h2>
                <p className="text-white text-center mt-4 md:mt-10">Stay connected with ease. Buy airtime and data bundles for both Nigerian and Benin Republic mobile networks directly from our platform. Never run out of talk time or internet data again.</p>
            </div>
        </div>
        <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md w-full md:w-80 lg:w-96 mx-auto">
            <CoinsIcon color="white" size={80} className="pt-2 md:pt-5"/>
            <div>
                <h2 className="text-white text-xl font-bold mb-2 text-center">Meter Token Purchase</h2>
                <p className="text-white text-center mt-4 md:mt-10">Manage your electricity needs effortlessly. Purchase meter tokens for your home or business in Nigeria and Benin Republic with just a few clicks.</p>
            </div>
        </div>
        <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md w-full md:w-80 lg:w-96 mx-auto">
            <Bitcoin color="white" size={80} className="pt-2 md:pt-5"/>
            <div>
                <h2 className="text-white text-xl font-bold mb-2 text-center">P2P Crypto Exchange</h2>
                <p className="text-white text-center mt-4 md:mt-10">Our P2P platform allows you to connect with registered merchants for currency exchange. Vendors from various locations are available to provide competitive rates, making currency exchange convenient and beneficial for all users.</p>
            </div>
        </div>
        <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md w-full md:w-80 lg:w-96 mx-auto">
            <CreditCard color="white" size={80} className="pt-2 md:pt-5"/>
            <div>
                <h2 className="text-white text-xl font-bold mb-2 text-center">Gift Card Redemption</h2>
                <p className="text-white text-center mt-4 md:mt-10">Got gift cards? Redeem any type of gift card on VeeExchange at competitive rates. Convert your gift cards into usable funds quickly and efficiently.</p>
            </div>
        </div>
        <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5 bg-gray-800 shadow-md w-full md:w-80 lg:w-96 mx-auto">
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
    <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full px-6 md:px-20">
        <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5 w-full md:w-80 lg:w-96 mx-auto">
            <img src={p1} alt="Person 1" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
            <div>
                <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">Ogumola Racheal, Ekiti State, Nigeria</h2>
                <p className="text-gray-600 text-center mt-4 md:mt-10">"VeeExchange has made my currency exchanges so seamless and fast. I can easily convert my Naira to CFA from the comfort of my home without any hassle and at the best rates! Highly recommend this platform to anyone in need of reliable financial services."</p>
            </div>
        </div>
        <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5 w-full md:w-80 lg:w-96 mx-auto">
            <img src={p2} alt="Person 2" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
            <div>
                <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">Salawu Hassan, Osun State, Nigeria</h2>
                <p className="text-gray-600 text-center mt-4 md:mt-10">"I frequently travel between Nigeria and Benin Republic for business, and VeeExchange has been a lifesaver. Their P2P platform connects me with trustworthy merchants, making currency exchanges quick and secure. Plus, I can manage all this from the comfort of my home."</p>
            </div>
        </div>
        <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5 w-full md:w-80 lg:w-96 mx-auto">
            <img src={p3} alt="Person 3" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
            <div>
                <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">Fabzi, Lagos, Nigeria</h2>
                <p className="text-gray-600 text-center mt-4 md:mt-10">"Purchasing airtime and data bundles for both Nigeria and Benin Republic has never been easier. VeeExchange allows me to buy airtime from any country with any currency I have, all from the comfort of my home. This platform is truly a game-changer!"</p>
            </div>
        </div>
        <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5 w-full md:w-80 lg:w-96 mx-auto">
            <img src={p4} alt="Person 4" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
            <div>
                <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">May, Porto-Novo, Cotonou, Benin Republic</h2>
                <p className="text-gray-600 text-center mt-4 md:mt-10">"I was able to redeem my gift cards at competitive rates on VeeExchange. The process was straightforward and efficient. It’s great to have a platform that offers such versatility in financial services. Plus, I can withdraw my funds to my Naira or CFA account effortlessly from my home."</p>
            </div>
        </div>
        <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5 w-full md:w-80 lg:w-96 mx-auto">
            <img src={p5} alt="Person 5" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
            <div>
                <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">Bukola, Edo State, Nigeria</h2>
                <p className="text-gray-600 text-center mt-4 md:mt-10">"VeeExchange is a fantastic platform for P2P crypto exchange. The interface is user-friendly, and I can easily connect with merchants for my cryptocurrency needs. The security measures in place also give me peace of mind. Highly recommend this platform!"</p>
            </div>
        </div>
        <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5 w-full md:w-80 lg:w-96 mx-auto">
            <img src={p6} alt="Person 6" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"/>
            <div>
                <h2 className="text-black text-lg md:text-xl font-bold mb-2 text-center">Qumson, Ketu, Lagos, Nigeria</h2>
                <p className="text-gray-600 text-center mt-4 md:mt-10">"Managing my electricity needs has never been easier. VeeExchange allows me to purchase meter tokens effortlessly from home. This platform offers a wide range of services that cater to my needs and provides a seamless experience."</p>
            </div>
        </div>
    </div>
</div>



        <div className="pt-12 md:pt-36 bg-blue-100 pb-20">
            <p className="text-center text-2xl md:text-4xl font-bold text-black">Contact Us</p>
            <div className="mt-12 md:mt-24 max-w-md md:max-w-screen-md mx-auto px-4 md:px-20">
                <form className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-lg font-bold text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="p-3 md:p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-lg font-bold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="p-3 md:p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="message" className="text-lg font-bold text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="p-3 md:p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-gray-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-black transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className="sm:hidden lg:block md:hidden mt-20 mb-10">
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start justify-between px-10 md:px-20 mb-20">
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
        <div className="block md:block lg:hidden bg-white py-10 px-5">
            <div className="flex flex-col space-y-8">
                <div>
                    <div className="flex flex-row items-center justify-between mb-5">
                        <p className="text-xl md:text-2xl font-bold text-black">Products</p>
                        {openProducts ? <MinusCircle color="black" size={30} onClick={openPs}/>: <PlusCircle color="black" size={30} onClick={openPs}/>}
                    </div>
                    {openProducts && <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Buy Gift Cards</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Sell Gift Cards</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Bill Payments</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Currency Exchange</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Bank Accounts</p>
                    </div>}
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between mb-5">
                        <p className="text-xl md:text-2xl font-bold text-black">Available GiftCards</p>
                        {openGift ? <MinusCircle color="black" size={30} onClick={opengt}/>: <PlusCircle color="black" size={30} onClick={opengt}/>}
                    </div>
                    {openGift && <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Travel Gift Cards</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">LifeStyle Gift Cards</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Music Gift Cards</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">SuperMarket Gift Cards</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Gaming Gift Cards</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Streaming Gift Cards</p>
                    </div>}
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between mb-5">
                        <p className="text-xl md:text-2xl font-bold text-black">Resources</p>
                        {openResource ? <MinusCircle color="black" size={30} onClick={openr}/>: <PlusCircle color="black" size={30} onClick={openr}/>}
                    </div>
                    {openResource && <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Help Center</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Blog</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Support</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Get In Touch</p>
                    </div>}
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between mb-5">
                        <p className="text-xl md:text-2xl font-bold text-black">Company</p>
                        {openCompany ? <MinusCircle color="black" size={30} onClick={opency}/>: <PlusCircle color="black" size={30} onClick={opency}/>}
                    </div>
                    {openCompany && <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Partners</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Privacy Policy</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Terms Of Service</p>
                    </div>}                   
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between mb-5">
                        <p className="text-xl md:text-2xl font-bold text-black">Connect</p>
                        {openConnect ? <MinusCircle color="black" size={30} onClick={openct}/>: <PlusCircle color="black" size={30} onClick={openct}/>}
                    </div>
                    {openConnect && <div className="flex flex-col space-y-2">
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">Get In Touch</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">veexchange_support@gmail.com</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">+234 (0) 80 1 234 5678</p>
                        <p className="text-gray-400 md:text-xl md:font-bold hover:text-black transition duration-300 cursor-pointer">+234 (0) 80 8 765 4321</p>
                    </div>}
                </div>
            </div>
        </div>


            
            
            {/* Footer */}
        <footer className="py-4 bg-white text-gray-400 text-center">
            <p>&copy; 2024 VeeXchange. All rights reserved.</p>
        </footer>
        </div>
    );
};

export default Landing;
