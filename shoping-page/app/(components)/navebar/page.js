"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Nave = () => {
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };
  return (
    <div>
      <nav className=" sticky bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-center ">
            <ul className=" md:flex flex-row font-bold mt-0 space-x-12 rtl:space-x-reverse text-sm">
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
            <div onClick={navHandle} className="md:hidden">
              <IoMdMenu size={25} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nave;
