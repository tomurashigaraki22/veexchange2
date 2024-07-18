import React from "react";
import Navbar from "../components/Navbar";
import FooterMobile from "../components/FooterMobile";
import { MinusCircle, PlusCircle } from "lucide-react";
import FooterLarge from "../components/FooterLarge";
import logo from '../assets/money.png'

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Login</h2>
                    <form className="space-y-6">
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
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    color="black"
                                    className="h-4 w-4 text-black focus:ring-gray-900 border-gray-300 rounded-full"
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center bg-black text-white py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium hover:bg-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <a href="/#/signup" className="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
            <FooterMobile/>
            <FooterLarge/>
        </div>
    );
}

export default Login;
