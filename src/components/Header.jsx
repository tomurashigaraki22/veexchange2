import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import React from "react";


const Header = () => {
    return(
        <div className="flex flex-row items-center lg:justify-between justify-center bg-blue-900 p-3">
            <div className="flex flex-row items-center space-x-3">
                <Mail color="white" size={28}/>
                <p className="text-sm text-white" style={{ fontFamily: 'Zain'}}>support@veexchange.com</p>
            </div>
            <div className="lg:flex hidden flex-row items-center space-x-4 md:hidden sm:hidden">
                <p className="text-sm text-white" style={{ fontFamily: 'Zain'}}>Follow us on: </p>
                <div>
                    <Facebook color="white" size={28}/>
                </div>
                <div>
                    <Twitter color="white" size={28}/>
                </div>
                <div>
                    <Instagram color="white" size={28}/>
                </div>
            </div>
        </div>
    );
}

export default Header;