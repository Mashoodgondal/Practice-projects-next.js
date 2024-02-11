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
    <div>
      <h1 className="text-center hover:text-4xl text-3xl text-indigo-600 mt-10 font-bold underline cursor-pointer ">
        Slider
      </h1>
    </div>
  );
};

export default Slide;

/* <Swiper
//         spaceBetween={50}
//         slidesPerView={3}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//          ...
//       </Swiper> 
//       <Swiper
//         // install Swiper modules
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={50}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         ...
//       </Swiper>*/
