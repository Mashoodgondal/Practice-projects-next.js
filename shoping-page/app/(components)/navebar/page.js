"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";

const Nave = () => {
  const [nav, setnav] = useState(false);
  const handleNave = () => {
    setnav(!nav);
  };
  return (
    <div>
      <nav className=" sticky bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl flex justify-between px-4 py-3 mx-auto">
          <div className="flex items-center">
            <a href="#" className="text-gray-600 text-xl font-bold">
              Logo
            </a>
          </div>

          <div className="flex items-center justify-center ">
            <ul className=" hidden md:flex flex-row font-bold mt-0 space-x-12 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                >
                  COMPANY
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                >
                  TEAM
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                >
                  FEATURES
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                >
                  HOT OFFERS
                </a>
              </li>
            </ul>
            <div onClick={handleNave} className="md:hidden">
              <IoMdMenu size={25} />
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center">
              <a href="#" className="text-white text-xl font-bold">
                Logo
              </a>
            </div>
            <div className="hidden md:flex">
              <a href="#" className="text-white mx-4">
                Home
              </a>
              <a href="#" className="text-white mx-4">
                About
              </a>
              <a href="#" className="text-white mx-4">
                Services
              </a>
              <a href="#" className="text-white mx-4">
                Contact
              </a>
            </div>
            <div className="md:hidden text-white">
              <IoMdMenu size={25} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nave;
