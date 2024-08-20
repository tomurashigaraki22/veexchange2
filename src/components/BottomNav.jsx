import { Home, LucideUser2, NotepadTextDashed, Wallet2 } from "lucide-react";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoWallet } from "react-icons/io5";
import { PiNotepadFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="flex flex-row items-center justify-between bottom-0 border-t border-gray-400 pt-3 left-0 fixed w-full bg-white lg:hidden">
      <Link to="/home" className="flex flex-col items-center w-1/4">
        <GoHomeFill color="#000435" size={24} />
        <p
          style={{ fontSize: 11, fontFamily: "Ubuntu Sans" }}
          className="text-sm"
        >
          Home
        </p>
      </Link>
      <Link to="/wallet" className="flex flex-col items-center w-1/4">
        <IoWallet color="#000435" size={24} />
        <p
          style={{ fontSize: 11, fontFamily: "Ubuntu Sans" }}
          className="text-sm"
        >
          Wallet
        </p>
      </Link>
      <Link to="/transactions" className="flex flex-col items-center w-1/4">
        <PiNotepadFill color="#000435" size={24} />
        <p
          style={{ fontSize: 11, fontFamily: "Ubuntu Sans" }}
          className="text-sm"
        >
          Transactions
        </p>
      </Link>
      <Link to="/settings" className="flex flex-col items-center w-1/4">
        <FaUserAlt color="#000435" size={24} />
        <p
          style={{ fontSize: 11, fontFamily: "Ubuntu Sans" }}
          className="text-sm"
        >
          Settings
        </p>
      </Link>
    </div>
  );
};

export default BottomNav;
