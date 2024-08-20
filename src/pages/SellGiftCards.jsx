import { Menu, Image } from "lucide-react";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { Eye, EyeOff } from "lucide-react";
import HomeNav from "../components/HomeNav";
import { MdImage } from "react-icons/md";

const SellGiftCards = () => {
  const [isopen, setisopen] = useState(false);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [opennav, setopennav] = useState(false);
  const [image, setImage] = useState(null);
  const [favorites, setFavorites] = useState({
    category: "Amazon",
    subCategory: "E-code",
    amount: "100",
  });

  const click = () => {
    setisopen(!isopen);
  };
  const openNav = () => {
    setopennav(!opennav);
  };

  const closeNav = () => {
    setopennav(false);
  };

  const handleAutoFill = () => {
    setCategory(favorites.category);
    setSubCategory(favorites.subCategory);
    setAmount(favorites.amount);
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const categories = ["Amazon", "iTunes", "Google Play"];
  const subCategories = {
    Amazon: ["Physical", "E-code"],
    iTunes: ["Physical", "E-code"],
    GooglePlay: ["Physical", "E-code"],
  };

  return (
    <div className="relative bg-gray-100 lg:bg-white min-h-screen p-2">
      {opennav && <HomeNav closeNav={closeNav} />}
      <div className="flex flex-row items-center justify-between">
        <div className="py-2 pl-2 border-2 border-white bg-white rounded-md flex flex-row items-center space-x-2 pr-10 lg:hidden">
          <Menu color="blue" size={21} onClick={openNav} />
          <p className="text-sm" style={{ fontFamily: "Ubuntu" }}>
            Sell Gift Card
          </p>
        </div>
        <div className="flex lg:justify-between lg:items-center">
          <h1 className="hidden lg:flex font-semibold text-[#002444]">
            Sell Cards
          </h1>
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
      <p
        className="mt-5 text-md lg:font-semibold lg:text-[#002444]"
        style={{ fontFamily: "Josefin Sans" }}
      >
        Kindly provide correct gift card details
      </p>
      <div className="flex flex-row items-center justify-between lg:justify-start lg:gap-3 mt-2">
        <p style={{ fontFamily: "Josefin Sans" }}>Filter by: </p>
        <div className="flex flex-row items-center space-x-1">
          <div className=" cursor-pointer hover:brightness-75 border-2 border-gray-100 transition-all duration-300 ease-in-out bg-gray-200 py-2 px-8 text-center lg:rounded-full lg:font-semibold lg:text-gray-600 rounded-lg text-sm">
            <p style={{ fontFamily: "Josefin Sans" }}>Physical</p>
          </div>
          <div className="  hover:brightness-75 cursor-pointer transition-all duration-300 ease-in-out border-2 border-gray-100 bg-gray-200 py-2 px-8 text-center lg:rounded-full lg:font-semibold lg:text-gray-600 rounded-lg text-sm">
            <p style={{ fontFamily: "Josefin Sans" }}>E-code</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label
          className="block text-gray-700 text-sm lg:font-semibold lg:text-[#002444]"
          style={{ fontFamily: "Josefin Sans" }}
        >
          Select Gift Card Category:
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full  p-2 mt-1 border rounded-md text-sm lg:text-lg lg:text-gray-400 lg:font-semibold lg:w-2/3 lg:bg-[#F7F7F7] lg:py-6 lg:rounded-3xl lg:pl-4  lg:border-0"
          style={{ fontFamily: "Josefin Sans" }}
        >
          <option value="">Select Category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label
          className="block text-gray-700 text-sm lg:font-semibold lg:text-[#002444]"
          style={{ fontFamily: "Josefin Sans" }}
        >
          Select Gift Card Sub-Category:
        </label>
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="w-full p-2 mt-1 border rounded-md text-sm lg:font-semibold lg:w-2/3 lg:bg-[#F7F7F7] lg:py-6 lg:rounded-3xl lg:pl-4  lg:border-0 lg:text-gray-400"
          style={{ fontFamily: "Josefin Sans" }}
          disabled={!category}
        >
          <option value="">Select Sub-Category</option>
          {category &&
            subCategories[category].map((subCat, idx) => (
              <option key={idx} value={subCat}>
                {subCat}
              </option>
            ))}
        </select>
      </div>

      <div className="mt-4">
        <label
          className="block text-gray-700 text-sm lg:font-semibold lg:text-[#002444]"
          style={{ fontFamily: "Josefin Sans" }}
        >
          Enter Gift Card Amount:
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ fontFamily: "Josefin Sans" }}
          className="w-full p-2 mt-1 border rounded-md text-sm lg:w-2/3 lg:bg-[#F7F7F7] lg:py-6 lg:rounded-3xl lg:pl-4  lg:border-0"
          placeholder="Enter amount"
        />
      </div>

      <button
        onClick={handleAutoFill}
        className="mt-4 lg:w-1/3 lg:bg-[#EFF6F8] lg:text-[#002444] lg:py-3 lg:rounded-full lg:font-semibold w-full bg-gray-400 text-sm text-white py-2 rounded-lg hover:bg-black hover:text-white cursor-pointer transition duration-300"
        style={{ fontFamily: "Josefin Sans" }}
      >
        Auto Fill from Favorites
      </button>

      <div className="mt-4 lg:bg-[#F7F7F7] lg:p-4 lg:rounded-full lg:flex lg:justify-center lg:items-center lg:w-fit lg:brightness-75 cursor-pointer">
        <label
          className=""
          htmlFor="image"
          style={{ fontFamily: "Josefin Sans" }}
        >
          <MdImage size={24} fill="#002444" />
        </label>
        <label
          className="block text-gray-700 text-sm lg lg:hidden"
          style={{ fontFamily: "Josefin Sans" }}
        >
          Upload Gift Card Image:
        </label>
        <input
          id="image"
          type="file"
          onChange={handleImageUpload}
          style={{ fontFamily: "Josefin Sans" }}
          className="w-full p-2 mt-1 border rounded-md text-sm lg:hidden"
        />
        {image && <p className="mt-2 text-gray-500 text-sm">{image.name}</p>}
      </div>
    </div>
  );
};

export default SellGiftCards;
