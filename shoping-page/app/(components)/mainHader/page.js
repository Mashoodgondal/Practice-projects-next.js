import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoBagHandle } from "react-icons/io5";
const Hader = () => {
  return (
    <div className="border border-gray-300 px-6 py-2 mt-1 flex item-center">
      <div className="text-indigo-800 text-4xl ">
        <h1>Logo</h1>
      </div>
      <div className="mx-auto flex item-center justify-center mt-2 border border-gray-400 rounded-lg sm:w-[50%] lg:w-[70%]">
        <input
          type="text"
          placeholder="Enter any product name..."
          className="p-2 w-full border-gray-200"
        />
        <FaSearch className=" mr-3  mt-3 text-gray-400" size={20} />
      </div>
      <div className="flex item-cenetr justify-center lg:gap-6 sm:gap-2 mt-3 sm:mr-2 lg:mr-6">
        <FaUserPlus size={25} />
        <FcLike size={25} />
        <IoBagHandle size={25} />
      </div>
    </div>
  );
};

export default Hader;
