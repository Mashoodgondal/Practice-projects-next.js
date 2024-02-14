"use client";
// import Image from "next/image";
import React, { useState } from "react";
// import img1 from "@/app/image/coat2.jpg";
// import img2 from "@/app/image/coat1.jpg";
// import img3 from "@/app/image/comp2.jpg";
// import img4 from "@/app/image/comp1.jpg";
// import img5 from "@/app/image/lg1.jpg";
// import img6 from "@/app/image/lg2.jpg";

const Slider = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };
  return (
    // <div className="p-6 md:p-4 grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 md:text-center  ">
    //   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <Image className="rounded-t-lg" src={img1} alt="" />
    //     </a>
    //     <div className="p-5">
    //       <a href="#">
    //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           Noteworthy technology acquisitions 2021
    //         </h5>
    //       </a>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Here are the biggest enterprise technology acquisitions of 2021 so
    //         far, in reverse chronological order.
    //       </p>
    //       <a
    //         href="#"
    //         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Read more
    //         <svg
    //           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns=""
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <Image className="rounded-t-lg mx-auto" src={img2} alt="" />
    //     </a>
    //     <div className="p-5">
    //       <a href="#">
    //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           Noteworthy technology acquisitions 2021
    //         </h5>
    //       </a>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Here are the biggest enterprise technology acquisitions of 2021 so
    //         far, in reverse chronological order.
    //       </p>
    //       <a
    //         href="#"
    //         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Read more
    //         <svg
    //           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns=""
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <Image className="rounded-t-lg mx-auto" src={img3} alt="" />
    //     </a>
    //     <div className="p-5">
    //       <a href="#">
    //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           Noteworthy technology acquisitions 2021
    //         </h5>
    //       </a>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Here are the biggest enterprise technology acquisitions of 2021 so
    //         far, in reverse chronological order.
    //       </p>
    //       <a
    //         href="#"
    //         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Read more
    //         <svg
    //           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns=""
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <Image className="rounded-t-lg mx-auto" src={img4} alt="" />
    //     </a>
    //     <div className="p-5">
    //       <a href="#">
    //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           Noteworthy technology acquisitions 2021
    //         </h5>
    //       </a>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Here are the biggest enterprise technology acquisitions of 2021 so
    //         far, in reverse chronological order.
    //       </p>
    //       <a
    //         href="#"
    //         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Read more
    //         <svg
    //           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns=""
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <Image className="rounded-t-lg mx-auto" src={img5} alt="" />
    //     </a>
    //     <div className="p-5">
    //       <a href="#">
    //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           Noteworthy technology acquisitions 2021
    //         </h5>
    //       </a>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Here are the biggest enterprise technology acquisitions of 2021 so
    //         far, in reverse chronological order.
    //       </p>
    //       <a
    //         href="#"
    //         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Read more
    //         <svg
    //           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns=""
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <Image className="rounded-t-lg mx-auto" src={img6} alt="" />
    //     </a>
    //     <div className="p-5">
    //       <a href="#">
    //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           Noteworthy technology acquisitions 2021
    //         </h5>
    //       </a>
    //       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Here are the biggest enterprise technology acquisitions of 2021 so
    //         far, in reverse chronological order.
    //       </p>
    //       <a
    //         href="#"
    //         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Read more
    //         <svg
    //           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns=""
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="container mt-10 mx-auto max-w-md p-4 bg-gray-200">
      <div className="mb-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          value={input}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          className="col-span-3 bg-gray-300 hover:bg-gray-400 p-2 rounded"
          onClick={clearInput}
        >
          C
        </button>
        <button
          className="bg-yellow-300 hover:bg-gray-400 p-2 rounded"
          onClick={() => handleClick("/")}
        >
          /
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9, "*"].map((number) => (
          <button
            key={number}
            className="bg-gray-300 hover:bg-gray-400 p-2 rounded"
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[4, 5, 6, "-"].map((number) => (
          <button
            key={number}
            className="bg-gray-300  hover:bg-gray-400  p-2 rounded"
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, "+"].map((number) => (
          <button
            key={number}
            className="bg-gray-300 hover:bg-gray-400 p-2 rounded"
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          className="col-span-2 bg-gray-300 hover:bg-gray-400 p-2 rounded"
          onClick={() => handleClick(0)}
        >
          0
        </button>
        <button
          className="bg-yellow-300 hover:bg-yellow-400 p-2 rounded"
          onClick={calculateResult}
        >
          =
        </button>
        <button
          className="bg-yellow-300 hover:bg-yellow-400 p-2 rounded"
          onClick={() => handleClick(".")}
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Slider;
