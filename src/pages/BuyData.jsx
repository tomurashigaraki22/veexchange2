import { Menu } from "lucide-react";
import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { Tv } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { BiMobile } from "react-icons/bi";
import HomeNav from "../components/HomeNav";
const AirtimeSelect = ({ name }) => {
  return (
     <div className="flex flex-row mt-auto items-center justify-between hover:brightness-75 transition-all duration-300 ease-in-out cursor-pointer lg:px-8 lg:w-3/12 lg:flex-row-reverse lg:gap-1 p-2 border border-gray-300 rounded-lg bg-gray-300 w-full">
      <p style={{ fontFamily: "Josefin Sans" }}>{name}</p>
      <div className="border border-white bg-white p-2 rounded-full">
        <BiMobile color="black" size={15} />
      </div>
    </div>
  );
};

const BuyData = () => {
  const [isopen, setisopen] = useState(false);
  const [opennav, setopennav] = useState(false);

  const click = () => {
    setisopen(!isopen);
  };
  const openNav = () => {
    setopennav(!opennav);
  };

  const closeNav = () => {
    setopennav(false);
  };

  return (
    <div className=" lg:mt-4">
      <h1 className="text-2xl hidden lg:flex lg:mb-2 text-[#002444] font-semibold">
        Buy Data
      </h1>
      <div className="relative bg-gray-100 min-h-screen p-2">
        {opennav && <HomeNav closeNav={closeNav} />}

        <div className="flex flex-row items-center justify-between">
          <div className="py-2 pl-2 border-2 border-white bg-white rounded-md flex flex-row items-center space-x-2 pr-10 lg:hidden">
            <Menu color="blue" size={21} onClick={openNav} />
            <p>Mobile Data</p>
          </div>
          <div>
            <IoNotifications color="black" size={21} />
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex flex-row justify-between items-center py-3">
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
        <div className=" mt-5">
          <p
            className="text-sm lg:font-semibold lg:text-[#002444]"
            style={{ fontFamily: "Ubuntu" }}
          >
            Which Network Provider?
          </p>
          <div className="flex flex-col items-center space-y-3 p-4 lg:flex-row lg:items-center lg:gap-[5%] lg:justify-between lg:space-y-8 lg:flex-wrap ">
        {    <AirtimeSelect name={"MTN"} />}
            <AirtimeSelect name={"Airtel"} />
            <AirtimeSelect name={"GLO"} />
            <AirtimeSelect name={"9mobile"} />
            <AirtimeSelect name={"Spectrenet"} />
            <AirtimeSelect name={"Smile"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyData;
