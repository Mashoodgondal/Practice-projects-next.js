// import React from "react";

// import img1 from "@/app/image/coat2.jpg";
// import img2 from "@/app/image/coat1.jpg";
// import img3 from "@/app/image/comp2.jpg";
// import img4 from "@/app/image/comp1.jpg";
// import img5 from "@/app/image/lg1.jpg";
// import img6 from "@/app/image/lg2.jpg";
// import Card from "../(components)/card/page";

// const Hero = () => {
//   return (
//     <div className="p-6 md:p-4 grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6 md:text-center  ">
//       <div>
//         <Card
//           img={img5}
//           title="Boost your business"
//           para=" Here are the biggest enterprise technology acquisitions of 2021 so
//             far, in reverse chronological order"
//         />
//       </div>
//       <div>
//         <Card
//           img={img4}
//           title="Labtop: Desire genaration "
//           para=" Here are the biggest enterprise technology acquisitions of 2021 so
//             far, in reverse chronological order"
//         />
//       </div>
//       <div>
//         <Card
//           img={img3}
//           title="PC for progress"
//           para=" Here are the biggest enterprise technology acquisitions of 2021 so
//             far, in reverse chronological order"
//         />
//       </div>
//       <div className="   h-[500px]  ">
//         <Card
//           img={img1}
//           title="Ladies Shopping"
//           para=" Here are the biggest enterprise technology acquisitions of 2021 so
//             far, in reverse chronological order"
//         />
//       </div>
//       <div>
//         <Card
//           img={img1}
//           title="Find your dress"
//           para=" Here are the biggest enterprise technology acquisitions of 2021 so
//             far, in reverse chronological order"
//         />
//       </div>
//       <div>
//         <Card
//           img={img6}
//           title="Bag detaile shopping"
//           para="  Here are the biggest enterprise technology acquisitions of 2021 so
//           far, in reverse chronological order"
//         />
//       </div>
//       <div class="snap-x ...">
//         <div class="snap-start ...">
//           <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//         </div>
//         <div class="snap-start ...">
//           <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//         </div>
//         <div class="snap-start ...">
//           <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//         </div>
//         <div class="snap-start ...">
//           <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//         </div>
//         <div class="snap-start ...">
//           <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//         </div>
//         <div class="snap-start ...">
//           <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import { useEffect, useRef } from "react";

const Hero = () => {
  const snapContainerRef = useRef(null);

  useEffect(() => {
    const snapContainer = snapContainerRef.current;

    let isSnapping = false;
    let snapStartX = 0;

    const handleTouchStart = (e) => {
      if (!isSnapping) {
        snapStartX = e.touches[0].clientX;
      }
    };

    const handleTouchMove = (e) => {
      if (!isSnapping) {
        const currentX = e.touches[0].clientX;
        const deltaX = currentX - snapStartX;

        if (Math.abs(deltaX) > 50) {
          isSnapping = true;
          snapStartX = currentX;
          const direction = deltaX > 0 ? -1 : 1;
          snapContainer.scrollLeft += direction * snapContainer.offsetWidth;
        }
      }
    };

    const handleTouchEnd = () => {
      isSnapping = false;
    };

    snapContainer.addEventListener("touchstart", handleTouchStart);
    snapContainer.addEventListener("touchmove", handleTouchMove);
    snapContainer.addEventListener("touchend", handleTouchEnd);

    return () => {
      snapContainer.removeEventListener("touchstart", handleTouchStart);
      snapContainer.removeEventListener("touchmove", handleTouchMove);
      snapContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      className="snap-x  flex flex-wrap p-4 justify-between item-center mb-8"
      ref={snapContainerRef}
    >
      <div className="snap-start">
        <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
      <div className="snap-start">
        <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
      <div className="snap-start">
        <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
      <div className="snap-start">
        <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
      <div className="snap-start">
        <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
      <div className="snap-start">
        <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
      </div>
    </div>
  );
};

export default Hero;
