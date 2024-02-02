import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Uper = () => {
  return (
    <div className="container  md:flex hidden sm:block  item-center border border-gray-400 p-4 mt-4 mx-auto  ">
      <div className="flex justify-left  item-center gap-6  ">
        <MdFacebook />
        <FaSquareInstagram />
        <FaSquareXTwitter />
      </div>
      <div className="text-center sm:text-3xl lg:text-2xl  text-gray-500 mx-auto  ">
        <h2>Free Shoping This Week</h2>
      </div>
      <div>
        <select id="cruncy" name="cars">
          <option value="USD">USD</option>
          <option value="PRS">PRs</option>
        </select>
        <select id="language" name="cars">
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
        </select>
      </div>
    </div>
  );
};

export default Uper;
