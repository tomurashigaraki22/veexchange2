import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const filterOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full lg:w-auto flex items-center gap-2 mt-3 mb-3">
      Filter by:
      <button
        className="w-full lg:w-auto flex items-center justify-between px-4 py-1 border border-gray-300 bg-white text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Select an option"}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
          {filterOptions.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
