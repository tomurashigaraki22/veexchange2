import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Navbar2 from "../components/Navbar2";
import Header from "../components/Header";
import Do from "../components/Do";
import WWD2 from "../components/WWD2";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import { useNavigate } from "react-router-dom";
import img from '../assets/bghud.jpg';
import img2 from '../assets/purplehd.jpg'
import { Banknote, Bitcoin, Coins, CoinsIcon, CreditCard, FastForward, FileLock, LockIcon, MinusCircle, Phone, PlusCircle, Settings, User2, Wifi } from "lucide-react";
import p1 from '../assets/rachel.jpeg'
import p2 from '../assets/hassan.jpeg'
import p3 from '../assets/fabzi.jpeg'
import p4 from '../assets/may.jpeg'
import p5 from '../assets/haleemah.jpeg'
import p6 from '../assets/convenant.jpeg'
import logo from '../assets/money.png'; // Adjust the path if necessary
import ssr from '../assets/ssr.png';
import Footer from "../components/Footer";
import Ads from "../components/Ads";

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const slideInVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};

const AnimatedSection = ({ children, animationType }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <motion.div
            ref={ref}
            initial={animationType === 'fadeIn' ? fadeInVariants.hidden : slideInVariants.hidden}
            animate={inView ? (animationType === 'fadeIn' ? fadeInVariants.visible : slideInVariants.visible) : (animationType === 'fadeIn' ? fadeInVariants.hidden : slideInVariants.hidden)}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

const Landing2 = () => {

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
        <div className="bg-gray-100 min-h-screen max-w-screen">
            <Header />
            <Navbar2 />
            <div className=" mx-auto px-4 flex flex-col items-center justify-center w-full">
                <AnimatedSection animationType="fadeIn">
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
                </AnimatedSection>
            </div>
            <div className="container max-w-screen">
            <AnimatedSection animationType="fadeIn">
                <div className="sm:hidden md:hidden lg:block hidden">
                    <img src="./wwd.png" alt="What we do" className="block lg:w-auto lg:h-auto pl-4 md:hidden lg:block sm:hidden"/>
                </div>
            </AnimatedSection>
            <AnimatedSection animationType="slideInRight">
                <Do />
            </AnimatedSection>
            <AnimatedSection animationType="fadeIn">
                <WWD2 />
            </AnimatedSection>
            <Hero2 />
            </div>
           
            <AnimatedSection animationType="slideInRight">
                <div className="flex flex-col items-center justify-center space-y-3 w-full mb-10">
                    <p className="text-blue-400 text-xl" style={{ fontFamily: 'Arsenal SC'}}>Our Services</p>
                    <div className="mt-4 mb-5 text-center">
                        <p className="text-4xl text-violet-900" style={{ fontFamily: 'Josefin Sans' }}>Smart Solution For Your Payment</p>
                    </div>
                    <div className="px-5">
                        <img src="./smart.png" alt="Smart Solution" className="w-auto h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection animationType="slideInRight">
                <div className="container pr-10 flex flex-col items-center justify-center w-full">
                    <Hero3 />
                </div>
            </AnimatedSection>
            <AnimatedSection animationType="fadeIn">
                <div className="sm:hidden md:hidden lg:block hidden">
                    <img src="./wwd.png" alt="What we do" className="block lg:w-auto lg:h-auto pl-4 md:hidden lg:block sm:hidden"/>
                </div>
            </AnimatedSection>
            <AnimatedSection animationType="slideInRight">
                <div className="max-w-screen">
                    <Hero4 />
                </div>
            </AnimatedSection>

            <div className="sm:hidden lg:block md:hidden mt-20 mb-10 hidden">
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
            <Footer />
        </div>
    );
}

export default Landing2;
