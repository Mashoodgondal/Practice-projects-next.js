// import React from "react";
// const images = [
//   "https://via.placeholder.com/400x200",
//   "https://via.placeholder.com/400x200",
//   "https://via.placeholder.com/400x200",
//   "https://via.placeholder.com/400x200",
// ];

// const Slider = () => {
//   return (
//     <div>
//       Sloder page
//       <div className="flex justify-between">
//         {images.map((imageUrl, index) => (
//           <div key={index} className="w-1/4">
//             <img src={imageUrl} alt={`Image ${index + 1}`} className="w-full" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
// Slide.js

// import React from "react";
// // import imag1 from "../../public/images/1.jpg";
// import Image from "next/image";
// import coatimg from "@/app/image/down.jpg";
// import woatimg from "@/app/image/coat1.jpg";
// import eoatimg from "@/app/image/comp1.jpg";
// // import qoatimg from "@/app/image/coat2.jpg";
// import uoatimg from "@/app/image/lg2.jpg";

// const Slide = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       {/* <Image
//         src={coatimg}
//         alt="Image 1"
//         width={96}
//         height={96}
//         className="w-full h-full object-cover rounded"
//       /> */}
//       <div className="grid grid-cols-2 grid-rows-2 gap-4">
//         <div className="relative">
//           <Image
//             src={coatimg}
//             alt="Image 1"
//             width={96}
//             height={96}
//             // className="w-full h-full object-cover rounded"
//           />
//           <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
//             Text for Image 1
//           </div>
//         </div>
//         <div className="relative">
//           <Image
//             src={woatimg}
//             alt="Image 2"
//             width={96}
//             height={96}
//             // className="w-full h-full object-cover rounded"
//           />
//           <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
//             Text for Image 2
//           </div>
//         </div>
//         <div className="relative">
//           <Image
//             src={eoatimg}
//             alt="Image 3"
//             width={96}
//             height={96}
//             // className="w-full h-full object-cover rounded"
//           />
//           <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
//             Text for Image 3
//           </div>
//         </div>
//         <div className="relative">
//           <Image
//             src={uoatimg}
//             alt="Image 4"
//             width={96}
//             height={96}
//             // className="w-full h-full object-cover rounded"
//           />
//           <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
//             Text for Image 4
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Slide;
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Slide = () => {
  return (
    <div className="p-6  text-center ">
      <h1 className="text-center hover:text-4xl text-3xl text-indigo-600 mt-10 font-bold underline cursor-pointer ">
        Slider
      </h1>
      <button type="button" className="bg-indigo-500 mt-20" disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </button>
      <svg className="bg-gray-800 mt-20 animate-bounce w-10 h-10 mx-auto text-white">
        Alfmf
      </svg>
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-600 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-600 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-600 rounded col-span-2"></div>
                <div class="h-2 bg-slate-600 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
