import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-white">
            <h1 className="text-6xl font-bold mb-4 animate-pulse text-black">404</h1>
            <p className="text-2xl mb-8 text-gray-700" style={{ fontFamily: 'Ubuntu'}}>Page Not Found</p>
            <Link 
                to="/home" 
                className="px-4 py-2 bg-gray-600 hover:bg-gray-800 text-white font-semibold rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
