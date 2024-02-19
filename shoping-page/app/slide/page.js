"use client";
import React from "react";

const Carousel = ({ src, alt, text }) => {
  return (
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
  );
};

export default Carousel;
