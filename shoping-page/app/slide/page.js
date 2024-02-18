"use client";
// import { useState } from "react";

// const Carousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative mx-auto ml-[80px]">
//       <div className="overflow-hidden  rounded-lg">
//         <img
//           className="w-[1100px] h-[500px]"
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//         />
//       </div>

//       <div className=" flex item-center justify-between absolute top-1/2 left-4 transform -translate-y-1/2">
//         <div>
//           <button
//             className="bg-gray-400 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-4"
//             onClick={prevImage}
//           >
//             Prev
//           </button>
//         </div>
//         <div>
//           <button
//             className="bg-gray-400 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shaddow-lg "
//             onClick={nextImage}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// components/Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
