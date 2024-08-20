import {
  Eye,
  EyeOff,
  Menu,
  ShoppingBag,
  FileText,
  CreditCard,
  BookmarkPlusIcon,
  X,
} from "lucide-react";
import { useState } from "react";
import BottomNav from "./BottomNav";
import HomeNav from "./HomeNav";
import { IoNotifications } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import DesktopIcons from "./DesktopIcons";
import RecentTransactions from "./RecentTransactions";
import FilterDropdown from "./Filter";

const HomeMobile = () => {
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

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen p-4">
      {opennav && <HomeNav closeNav={closeNav} />}
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
          <div className=" lg:flex lg:justify-between lg:w-full">
            <h1 className="text-2xl hidden lg:flex lg:mb-2 text-[#002444] font-semibold">
              Dashboard
            </h1>

            <IoNotifications color="blue" fill="blue" size={28} />
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
        <div className=" flex flex-col w-full lg:flex-row lg:justify-between lg:gap-[2vw] flex-wrap">
          {/* Available balance ends here and gift card starts here */}
          <div className=" flex flex-col w-full  lg:flex-row  lg:items-center lg:justify-between gap-[5%] flex-wrap">
            {/* Available balance ends here and gift card starts here */}
            <DesktopIcons
              redirect={"/sellcards"}
              text={"Sell Gift Cards"}
              style1={
                "border-blue-100 bg-gradient-to-r from-blue-100 via-blue-200 to-white"
              }
              icons={
                <>
                  <ShoppingBag color="white" size={18} className="lg:hidden" />
                  <ShoppingBag
                    color="white"
                    size={12}
                    className="hidden lg:flex"
                  />
                </>
              }
            />
            {/* Giftcard ends here */}

            {/* Conversion starts here */}
            <DesktopIcons
              style1={"bg-gradient-to-r from-red-200 to-red-100 hidden lg:flex"}
              style2={"border-red-200 bg-red-600"}
              icons={
                <>
                  <CreditCard color="white" size={18} className="lg:hidden" />
                  <CreditCard
                    color="white"
                    size={14}
                    className=" hidden lg:flex"
                  />
                </>
              }
              text={"CFA to NGN"}
            />

            {/* Conversion ends here and CFA wallet starts here */}
            <DesktopIcons
              redirect={"/cfawallet"}
              style1={
                "bg-gradient-to-r from-blue-200 to-blue-100 hidden lg:flex"
              }
              style2={"border-blue-200 border bg-blue-600"}
              icons={
                <>
                  <BookmarkPlusIcon
                    color="white"
                    size={18}
                    className="lg:hidden"
                  />
                  <BookmarkPlusIcon
                    color="white"
                    size={14}
                    className=" hidden lg:flex"
                  />
                </>
              }
              text={"CFA wallet"}
            />
            <DesktopIcons
              redirect={"/cfawallet"}
              style1={
                "bg-gradient-to-r from-blue-200 to-blue-100 hidden lg:flex"
              }
              style2={"border-blue-200 border bg-blue-600"}
              icons={
                <>
                  <FileText color="white" size={18} className="lg:hidden" />
                  <FileText
                    color="white"
                    size={14}
                    className=" hidden lg:flex"
                  />
                </>
              }
              text={"Bills payment"}
            />
          </div>
          {/* Giftcard ends here */}
          {/* This is the mobile nav */}
          <div className="mt-5 flex flex-row items-center space-x-5 justify-between w-full lg:hidden">
            {/* Conversion starts here */}
            <div className="  cursor-pointer p-3 flex flex-col items-left space-y-1 pb-10 w-1/2 bg-gradient-to-r from-red-200 to-red-100 shadow-md rounded-lg">
              <div
                className="border-red-200 border bg-red-600 p-2 flex items-center justify-center rounded-full"
                style={{ width: "50px", height: "50px" }}
              >
                <CreditCard color="white" size={18} />
              </div>
              <p
                className="text-sm text-gray-500"
                style={{ fontFamily: "Ubuntu" }}
              >
                CFA to NGN
              </p>
            </div>
            {/* Conversion ends here and CFA wallet starts here */}
            <div
              onClick={() => navigate("/cfawallet")}
              className=" cursor-pointer p-3 flex flex-col items-left space-y-1 w-1/2 pb-10 bg-gradient-to-r from-blue-200 to-blue-100 shadow-md rounded-lg"
            >
              <div
                className="border-blue-200 border bg-blue-600 p-2 flex items-center justify-center rounded-full"
                style={{ width: "50px", height: "50px" }}
              >
                <BookmarkPlusIcon color="white" size={18} />
              </div>
              <p
                className="text-sm text-gray-500"
                style={{ fontFamily: "Ubuntu Sans" }}
              >
                CFA wallet
              </p>
            </div>
          </div>
        </div>
        {/* Filter */}
        <div className="hidden lg:flex justify-end mt-2">
          <FilterDropdown />
        </div>
        <div className="hidden lg:flex">
          <RecentTransactions />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default HomeMobile;
