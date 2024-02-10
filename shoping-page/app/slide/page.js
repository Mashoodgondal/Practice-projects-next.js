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

import React from "react";
// import imag1 from "../../public/images/1.jpg";
import Image from "next/image";
import coatimg from "@/app/image/down.jpg";
import woatimg from "@/app/image/coat1.jpg";
import eoatimg from "@/app/image/comp1.jpg";
// import qoatimg from "@/app/image/coat2.jpg";
import uoatimg from "@/app/image/lg2.jpg";

const Slide = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <Image
        src={coatimg}
        alt="Image 1"
        width={96}
        height={96}
        className="w-full h-full object-cover rounded"
      /> */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="relative">
          <Image
            src={coatimg}
            alt="Image 1"
            width={96}
            height={96}
            // className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
            Text for Image 1
          </div>
        </div>
        <div className="relative">
          <Image
            src={woatimg}
            alt="Image 2"
            width={96}
            height={96}
            // className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
            Text for Image 2
          </div>
        </div>
        <div className="relative">
          <Image
            src={eoatimg}
            alt="Image 3"
            width={96}
            height={96}
            // className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
            Text for Image 3
          </div>
        </div>
        <div className="relative">
          <Image
            src={uoatimg}
            alt="Image 4"
            width={96}
            height={96}
            // className="w-full h-full object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
            Text for Image 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
