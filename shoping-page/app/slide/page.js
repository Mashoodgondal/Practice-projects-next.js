"use client";
import React from "react";

const Carousel = ({ src, alt, text }) => {
  return (
    <>
      <div className="relative overflow-hidden group">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto transition-all duration-300 group-hover:scale-110 group-hover:opacity-75"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-white text-center">{text}</p>
        </div>
      </div>
      <div className="bg-gray-200 py-6 px-4">
        <marquee
          direction="left"
          className="text-lg text-blue-600 bg-white p-2 rounded-lg shadow-md"
        >
          This is a flowing text created using the Marquee tag in Next.js with
          Tailwind CSS! This is a flowing text created using the Marquee tag in
          Next.js with Tailwind CSS! This is a flowing text created using the
          Marquee tag in Next.js with Tailwind CSS!
        </marquee>
      </div>
    </>
  );
};

export default Carousel;
