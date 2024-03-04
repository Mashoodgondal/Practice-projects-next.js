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
      {/* // Hoisting
// This is the by-default behavior of javascript
// // hoisting takes all declartions to top, not initilization
// console.log(num1);
// var num1 = 10;
// var num2 = 20;

// console.log(sum(num1, num2));
// function sum(n1, n2) { */}
      {/* //   // function declarations
//   return n1 + n2;
// }
// let sum2 = (n1, n2) => n1 + n2;
// sum2(3, 4);
// let sum3 = function (n1, n2) { */}
      {/* //   return n1 + n2;
// };
// sum3(3, 4);

// // (const, let)  VS Var     w.r.t Hoisting
// // Var
// // 1) - Var declarations can be hoisted to the top
// // 2) - variable declared with var can be accessed before where it is actually written.
// // let & const
// // 1) - let & const declarations can be hoisted to the top
// // 2) - variable declared with let & const can't be accessed before where it is actually written (initialized)
// //      because of "temporal dead zone". */}
    </div>
  );
};

export default Front;
