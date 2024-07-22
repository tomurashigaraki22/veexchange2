import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FooterMobile from "../components/FooterMobile";
import FooterLarge from "../components/FooterLarge";
import { Eye, EyeOff } from "lucide-react";
import logo from '../assets/money.png'
import Navbar2 from "../components/Navbar2";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar2 />
            <div className="flex flex items-center justify-center bg-gray-100 py-10 md:py-20">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Sign Up</h2>
                    <form className="space-y-6">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="fullname" className="text-lg font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="username" className="text-lg font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className="text-lg font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="password" className="text-lg font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="p-4 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                    {showPassword ? (
                                        <EyeOff onClick={togglePasswordVisibility} className="h-6 w-6 text-gray-700 cursor-pointer" />
                                    ) : (
                                        <Eye onClick={togglePasswordVisibility} className="h-6 w-6 text-gray-700 cursor-pointer" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="confirmPassword" className="text-lg font-medium text-gray-700">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="p-4 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Confirm your password"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                    {showConfirmPassword ? (
                                        <EyeOff onClick={toggleConfirmPasswordVisibility} className="h-6 w-6 text-gray-700 cursor-pointer" />
                                    ) : (
                                        <Eye onClick={toggleConfirmPasswordVisibility} className="h-6 w-6 text-gray-700 cursor-pointer" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="nin" className="text-lg font-medium text-gray-700">NIN</label>
                            <input
                                type="text"
                                id="nin"
                                name="nin"
                                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your NIN"
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="age" className="text-lg font-medium text-gray-700">Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your age"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center bg-black text-white py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium hover:bg-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <a href="/#/login" className="font-medium text-blue-600 hover:text-blue-500">Login</a>
                        </p>
                    </div>
                </div>
            </div>
            <FooterMobile />
            <FooterLarge />
        </div>
    );
}

export default Signup;
