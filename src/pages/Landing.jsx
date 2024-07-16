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
import { Banknote, Bitcoin, Coins, CoinsIcon, CreditCard, FastForward, FileLock, LockIcon, Phone, Settings, Wifi } from "lucide-react";

const Landing = () => {
    return (
        <div className="w-full max-w-screen-full bg-black text-white min-h-screen bg-cover bg-center p-3 bg-white">
            {/* Navigation */}
            <div className="flex flex-row items-center justify-between py-6 max-w-screen-2xl mx-auto">
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <p className="text-3xl font-bold text-black">VeeXchange</p>
                </div>
                <div className="flex flex-row items-center space-x-8 pr-10">
                    <div>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Home</p>
                    </div>
                    <div>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">About</p>
                    </div>
                    <div>
                        <p className="text-gray-400 hover:text-black transition duration-300 cursor-pointer">Services</p>
                    </div>
                    <div className="text-lg border-2 border-white py-2 px-5 rounded-md hover:bg-gray-400 hover:text-black transition duration-300 cursor-pointer bg-black group">
                        <p className="">Sign In</p>
                    </div>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="flex flex-col items-center justify-center mt-[70px] pb-[40px]">
                <div className="w-full max-w-screen-2xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:ml-[100px]">
                        {/* Left Section */}
                        <div className="flex flex-col items-center">
                            <div>
                                <h1 className="text-6xl font-bold mb-4 text-left text-black">VeeXchange</h1>
                                <p className="text-xl text-gray-700 mb-6">Your number one exchange service for <br /> <span className="font-bold">CFA to NGN</span></p>
                                <div className="text-gray-500">
                                    <p>VeeXchange is the best platform to buy and sell gift cards, pay bills, buy gadgets, swap currencies, and get virtual dollar cards.</p>
                                    <p>We provide appropriate distribution of currency, at affordable rates</p>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                    <div className="bg-gray-400 transition duration-300 cursor-pointer mt-10 border-2 border-gray-600 w-[50%] md:w-[40%] text-center px-3 py-2 rounded-lg group hover:bg-black ">
                                        <p className="group-hover:text-white text-black">Explore Now</p>
                                    </div>
                                    <div className="mr-20 transition duration-300 cursor-pointer mt-10 bg-black border-2 border-purple w-[50%] md:w-[40%] text-center px-3 py-3 rounded-lg group hover:bg-gray-400 ">
                                        <p className="group-hover:text-black text-white">Register</p>
                                    </div>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                        
                        {/* Right Section */}
                        <div className="flex items-center justify-center md:ml-40">
                            <img src={logo} alt="Hand Coin type shii" className="h-auto max-w-full md:w-[500px] md:h-auto rounded-lg shadow-lg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    
                    {/* Additional Content */}
                    
                </div>
            </div>
            <div className="bg-blue-100 pt-[200px] pb-40">
                <p className="text-center text-4xl font-bold text-black">About Us</p>
                <div className="mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-full px-40">
                    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center space-y-5">
                        <LockIcon color="white" size={80} className="pt-5"/>
                        <div>
                            <h2 className="text-white text-xl font-bold mb-2 text-center">Maximum Security of Funds</h2>
                            <p className="text-gray-400 text-center mt-10">At VeeXchange, we prioritize the safety of your transactions with state-of-the-art security measures, ensuring your funds are always protected.</p>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center space-y-5">
                        <FastForward color="white" size={80} className="pt-5"/>
                        <div>
                            <h2 className="text-white text-xl font-bold mb-2 text-center">Fast And Efficient</h2>
                            <p className="text-gray-400 text-center mt-10">Our platform is designed to process your transactions quickly and efficiently, saving you time and providing a seamless experience.</p>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center space-y-5">
                        <Settings color="white" size={80} className="pt-5"/>
                        <div>
                            <h2 className="text-white text-xl font-bold mb-2 text-center">Easy Customization</h2>
                            <p className="text-gray-400 text-center mt-10">With VeeXchange, you can easily customize your exchange preferences to suit your unique needs, making currency swapping more convenient than ever.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-[150px] bg-blue-400 pb-40">
                <p className="text-center text-4xl font-bold text-white">Our Services</p>
                <div className="mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-full px-40">
                    <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5">
                        <Wifi color="white" size={80} className="pt-5"/>
                        <div>
                            <h2 className="text-white text-xl font-bold mb-2 text-center">Buy Data</h2>
                            <p className="text-white text-center mt-10">Get affordable data plans that suit your needs, available for various networks and devices.</p>
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5">
                        <Phone color="white" size={80} className="pt-5"/>
                        <div>
                            <h2 className="text-white text-xl font-bold mb-2 text-center">Buy Airtime</h2>
                            <p className="text-white text-center mt-10">Instantly purchase airtime for all major networks, ensuring you're always connected.</p>
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5">
                        <CoinsIcon color="white" size={80} className="pt-5"/>
                        <div>
                            <h2 className="text-white text-xl font-bold mb-2 text-center">Pay Bills</h2>
                            <p className="text-white text-center mt-10">Conveniently pay your utility bills, subscriptions, and other services with ease.</p>
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5">
                        <CreditCard color="white" size={80} className="pt-5"/>
                        <div>
                            <h2 className="text-white text-xl font-bold mb-2 text-center">Cash GiftCards</h2>
                            <p className="text-white text-center mt-10">Send and receive money globally at competitive rates with fast transaction times.</p>
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5">
                        <Bitcoin color="white" size={80} className="pt-5"/>
                        <div>
                            <h2 className="text-white text-xl font-bold mb-2 text-center">Currency Exchange</h2>
                            <p className="text-white text-center mt-10">Easily convert between multiple currencies with transparent rates and low fees.</p>
                        </div>
                    </div>
                    <div className="border-2 border-black p-6 rounded-lg flex flex-col items-center space-y-5">
                        <Banknote color="white" size={80} className="pt-5"/>
                        <div>
                            <h2 className="text-white text-xl font-bold mb-2 text-center">Mobile Banking</h2>
                            <p className="text-white text-center mt-10">Manage your finances on the go with our secure and user-friendly mobile banking services.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pt-[180px] bg-white pb-40">
                <p className="text-center text-4xl font-bold text-black">Testimonials</p>
                <div className="mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-full px-40">
                    <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                        <img src={p1} alt="Person 1" className="w-40 h-40 rounded-full object-cover"/>
                        <div>
                            <h2 className="text-black text-xl font-bold mb-2 text-center">John Doe</h2>
                            <p className="text-gray-600 text-center mt-10">"This platform has revolutionized how I manage my data and airtime. Highly recommended!"</p>
                        </div>
                    </div>
                    <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                        <img src={p2} alt="Person 2" className="w-40 h-40 rounded-full object-cover"/>
                        <div>
                            <h2 className="text-black text-xl font-bold mb-2 text-center">Jane Smith</h2>
                            <p className="text-gray-600 text-center mt-10">"Fast and efficient service. I love the ease of paying my bills through this platform."</p>
                        </div>
                    </div>
                    <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                        <img src={p3} alt="Person 3" className="w-40 h-40 rounded-full object-cover"/>
                        <div>
                            <h2 className="text-black text-xl font-bold mb-2 text-center">Alice Johnson</h2>
                            <p className="text-gray-600 text-center mt-10">"Great customer service and a very user-friendly interface. Highly satisfied!"</p>
                        </div>
                    </div>
                    <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                        <img src={p4} alt="Person 4" className="w-40 h-40 rounded-full object-cover"/>
                        <div>
                            <h2 className="text-black text-xl font-bold mb-2 text-center">Robert Brown</h2>
                            <p className="text-gray-600 text-center mt-10">"The international transfer feature is a game-changer for me. I can send money to my family effortlessly."</p>
                        </div>
                    </div>
                    <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                        <img src={p5} alt="Person 5" className="w-40 h-40 rounded-full object-cover"/>
                        <div>
                            <h2 className="text-black text-xl font-bold mb-2 text-center">Emily Davis</h2>
                            <p className="text-gray-600 text-center mt-10">"I love the currency exchange feature. It's transparent and offers great rates."</p>
                        </div>
                    </div>
                    <div className="border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-5">
                        <img src={p6} alt="Person 6" className="w-40 h-40 rounded-full object-cover"/>
                        <div>
                            <h2 className="text-black text-xl font-bold mb-2 text-center">Michael Wilson</h2>
                            <p className="text-gray-600 text-center mt-10">"Mobile banking has never been this easy. The app is secure and user-friendly."</p>
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
