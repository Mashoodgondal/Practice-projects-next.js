import React from "react";
import Image from "next/image";
import img from "@/app/image/mall.jpg";

const Front = () => {
  return (
    <div>
      <div className="relative m-8">
        <Image
          src={img}
          alt="shopping image"
          className="w-[1100px] h-[400px] mt-8 mx-auto  "
        />
        <div className="absolute bottom-9  left-1/2 transform -translate-x-1/2 text-red-600 cursor-pointer hover:font-bold hover:text-red-700 text-3xl">
          "Discover your style, one click at a time."
        </div>
      </div>
      <h1>ali </h1>
      <h2>asghar</h2>
      <h3>sdfhiuew</h3>
      <h1>ali </h1>
      <h2>asghar</h2>
      <h3>sdfhiuew</h3>
      <h1>ali </h1>
      <h2>asghar</h2>
      <h3>sdfhiuew</h3>
    </div>
  );
};

export default Front;
