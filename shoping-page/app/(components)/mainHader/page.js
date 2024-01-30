import React from "react";

const Hader = () => {
  return (
    <div className="border border-gray-300 px-6 py-2 mt-1 flex item-center">
      <div className="text-gray-800 text-4xl ">
        <h1>Logo</h1>
      </div>
      <div className="mx-auto  mt-2 border border-gray-400 rounded-lg  w-[70%]">
        <input
          placeholder="Enter any product name..."
          className="outline-none"
        />
      </div>
    </div>
  );
};

export default Hader;
