import { useState } from "react";
import { BiMenu, BiPhoneCall, BiWifi } from "react-icons/bi";
import { FaInternetExplorer } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import { FaTv } from "react-icons/fa6";
import { FcElectricity } from "react-icons/fc";
import { IoNotifications } from "react-icons/io5";
import { Menu } from "lucide-react";
import { PiLessThan, PiNotepad } from "react-icons/pi";
import HomeNav from "../components/HomeNav";
import DesktopIcons from "../components/DesktopIcons";
import { useNavigate } from "react-router-dom";
const PayBills = () => {
  const [opennav, setopennav] = useState(false);
  const [isopen, setisopen] = useState(false);
  const click = () => {
    setisopen(!isopen);
  };

  const openNav = () => {
    setopennav(!opennav);
  };

  const closeNav = () => {
    setopennav(false);
  };

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      {opennav && <HomeNav closeNav={closeNav} />}
      <div className=" lg:flex lg:justify-between lg:w-full">
        <h1 className="text-2xl hidden lg:flex lg:mb-2 text-[#002444] font-semibold">
          Pay Bills
        </h1>

        <IoNotifications color="blue" fill="blue" size={28} />
      </div>
      <div
        className={`flex-1 transition-filter duration-300 ease-in-out ${
          opennav ? "blur-sm" : ""
        }`}
      >
        <div className="text-sm font-bold flex flex-row items-center justify-between mb-4 ">
          <div className="flex flex-row items-center space-x-2 lg:hidden">
            {!opennav ? (
              <Menu color="blue" size={25} onClick={openNav} />
            ) : (
              <X color="red" size={30} onClick={openNav} />
            )}
            <p>Welcome, mrmr</p>
          </div>
        </div>
        {/* Available balance starts here */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex flex-row justify-between items-center py-10">
            <div>
              <p className="text-gray-700 mb-2 text-center text-sm">
                Available Balance
              </p>
              <div className="flex flex-row items-center space-x-2">
                <div className="border-white border bg-white rounded-full w-12 h-12 flex items-center justify-center">
                  <p className="text-2xl text-green-600">&#8358;</p>
                </div>
                {isopen ? (
                  <p className="text-2xl text-green-600 font-bold">0.00</p>
                ) : (
                  <p className="text-2xl text-green-600 font-bold">*****</p>
                )}
              </div>
            </div>
            <div
              className="cursor-pointer flex items-center mt-6"
              onClick={click}
            >
              {isopen ? (
                <Eye color="black" size={30} />
              ) : (
                <EyeOff color="black" size={30} />
              )}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p
            className="text-sm text-gray-400 p-2 lg:font-semibold lg:text-[#002444]"
            style={{ fontSize: 11 }}
          >
            Okay... Let's pay some bills
          </p>
          {/* Desktop Nav */}
          <div className="hidden  lg:flex flex-col w-full  lg:flex-row  lg:items-center lg:justify-evenly gap-[2%] space-y-6 flex-wrap">
            <DesktopIcons
              text={"Airtime"}
              icons={<BiPhoneCall color="white" size={21} />}
              style2={"border border-blue-600 bg-blue-600"}
              style1={
                "border border-blue-100 bg-gradient-to-r from-blue-300 to-blue-200"
              }
            />
            <DesktopIcons
              text={"Mobile Data"}
              icons={<BiWifi color="white" size={21} />}
              style2={"border border-green-600 bg-green-600"}
              style1={
                "border border-green-100 bg-gradient-to-r from-green-300 to-green-200"
              }
            />
            <DesktopIcons
              text={"Internet"}
              icons={<FaInternetExplorer color="white" size={21} />}
              style2={"border border-blue-600 bg-blue-600"}
              style1={
                "border border-gray-200 bg-gradient-to-r from-gray-300 to-gray-200"
              }
            />
            <DesktopIcons
              text={"Electricity"}
              icons={<FcElectricity color="white" size={21} />}
              style2={
                "border border-purple-600 bg-gradient-to-r from-purple-800 to-purple-600"
              }
              style1={
                "border border-purple-200 bg-gradient-to-r from-purple-300 to-purple-200"
              }
            />
            <DesktopIcons
              text={"Cable Tv"}
              icons={<FaTv color="white" size={21} />}
              style2={"border border-blue-600 bg-blue-600"}
              style1={
                "border border-blue-100 bg-gradient-to-r from-blue-300 to-blue-200"
              }
            />
            <DesktopIcons
              text={"Betting Funding"}
              icons={<PiNotepad color="white" size={21} />}
              style2={"border border-red-600 bg-red-600"}
              style1={
                "border border-red-200 bg-gradient-to-r from-red-300 to-red-200"
              }
            />
          </div>
          {/* Mobile Nav */}
          <div className="lg:hidden grid grid-cols-2 gap-4 px-4 pb-4">
            <div className="border border-blue-100 bg-gradient-to-r from-blue-300 to-blue-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
              <div className="border border-blue-600 bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
                <BiPhoneCall color="white" size={21} />
              </div>
              <p
                className="text-sm font-bold text-gray-600"
                style={{ fontSize: 12 }}
              >
                Airtime
              </p>
            </div>
            <div className="border border-green-100 bg-gradient-to-r from-green-300 to-green-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
              <div className="border border-green-600 bg-green-600 w-8 h-8 flex items-center justify-center rounded-full">
                <BiWifi color="white" size={21} />
              </div>
              <p
                className="text-sm font-bold text-gray-600"
                style={{ fontSize: 12 }}
              >
                Mobile Data
              </p>
            </div>
            <div className="border border-gray-200 bg-gradient-to-r from-gray-300 to-gray-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
              <div className="border border-blue-600 bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
                <FaInternetExplorer color="black" size={21} />
              </div>
              <p
                className="text-sm font-bold text-gray-600"
                style={{ fontSize: 12 }}
              >
                Internet
              </p>
            </div>
            <div className="border border-purple-200 bg-gradient-to-r from-purple-300 to-purple-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
              <div className="border border-purple-600 bg-gradient-to-r from-purple-800 to-purple-600 w-8 h-8 flex items-center justify-center rounded-full">
                <FcElectricity color="white" size={21} />
              </div>
              <p
                className="text-sm font-bold text-gray-600"
                style={{ fontSize: 12 }}
              >
                Electricity
              </p>
            </div>
            <div className="border border-blue-100 bg-gradient-to-r from-blue-300 to-blue-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
              <div className="border border-blue-600 bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
                <FaTv color="white" size={21} />
              </div>
              <p
                className="text-sm font-bold text-gray-600"
                style={{ fontSize: 12 }}
              >
                Cable TV
              </p>
            </div>
            <div className="border border-red-200 bg-gradient-to-r from-red-300 to-red-200 shadow-sm rounded-lg p-4 flex flex-col items-left pb-12 space-y-2">
              <div className="border border-red-600 bg-red-600 w-8 h-8 flex items-center justify-center rounded-full">
                <PiNotepad color="white" size={21} />
              </div>
              <p
                className="text-sm font-bold text-gray-600"
                style={{ fontSize: 12 }}
              >
                Betting Funding
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayBills;
