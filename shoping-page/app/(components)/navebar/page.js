"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RiCloseCircleFill } from "react-icons/ri";

const Nave = () => {
  const [nav, setnav] = useState(false);
  const handleNave = () => {
    setnav(!nav);
  };
  return (
    <div>
      <nav className=" sticky bg-gray-400 shadow-lg shadow-gray-600 dark:bg-gray-800">
        <div className="max-w-screen-xl flex justify-between px-4 py-3 mx-auto">
          <div>
            <a href="#" className="text-indigo-600 text-3xl font-bold">
              Name
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
      {/* MOBILE Nave */}
      <div className="md:hidden p-6 bg-whitw w-full">
        <div className=" p-8 border-b border-green-300   flex item-center justify-between">
          <div>
            <a href="#" className="text-indigo-600  text-3xl font-bold">
              Logo
            </a>
          </div>
          <div
            onClick={handleNave}
            className=" rounded-full shadow-lg shadow-gray-500"
          >
            <RiCloseCircleFill size={35} />
          </div>
        </div>
        <ul className="flex flex-col uppercase space-y-2 mt-6 font-bold text-gray-600 ml-8 ">
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 dark:text-white "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 dark:text-white "
            >
              Company
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 dark:text-white  "
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 dark:text-white "
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 dark:text-white "
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 dark:text-white "
            >
              HOT OFFERS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nave;
