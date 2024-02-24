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
    <div>
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
      <table class="border-separate border border-slate-400 ...">
        <thead>
          <tr>
            <th class="border border-slate-300 ...">State</th>
            <th class="border border-slate-300 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 ...">Indiana</td>
            <td class="border border-slate-300 ...">Indianapolis</td>
          </tr>
          <tr>
            <td class="border border-slate-300 ...">Ohio</td>
            <td class="border border-slate-300 ...">Columbus</td>
          </tr>
          <tr>
            <td class="border border-slate-300 ...">Michigan</td>
            <td class="border border-slate-300 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hero;

{
  /* <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>


<section class="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
  <aside class="sm:h-full sm:w-16 w-full h-12 bg-gray-800 text-gray-200">
    <ul class="text-center flex flex-row sm:flex-col w-full">
      <li class="h-14 border-b border-gray-900 hidden sm:block">
        <a id="page-icon" href="/" class="h-full w-full hover:bg-gray-700 block p-3">
          <img class="object-contain h-full w-full" src="https://avatars1.githubusercontent.com/u/6157842?v=4"
            alt="open-source" />
        </a>
      </li>
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full" title="Inbox">
        <a id="page-icon" href="/" class="h-full w-full hover:bg-gray-700 block p-3">
          <i class="fas fa-inbox fill-current"> </i>
        </a>
      </li>
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full" title="Settings">
        <a id="page-icon" href="/" class="h-full w-full hover:bg-gray-700 block p-3">
          <i class="fas fa-cogs fill-current"> </i>
        </a>
      </li>
      <li class="sm:border-b border-gray-900 flex-1 sm:w-full" title="Users">
        <a id="page-icon" href="/" class="h-full  w-full hover:bg-gray-700 block p-3">
          <i class="fas fa-users fill-current"> </i>
        </a>
      </li>
    </ul>
  </aside>
  <main class="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
    <nav class="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
      <h1 class="font-semibold text-lg"></h1>
      <span class="flex-1"></span>
      <span class="mr-2">
        <input type="text" placeholder="Search"
          class="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100" />
      </span>
      <button
        class="ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
        <i class="fas fa-user fill-current"></i>
      </button>
    </nav>
    <section class="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
      <div class="flex flex-col lg:flex-row h-full w-full">
        
        <div class="border pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">
        
          <!-- control content left -->
          <div class="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4"></div>
          <div class="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4"></div>

        </div>
        
        <div class="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">

          <!-- overflow content right -->
          <div class="bg-green-200 w-full h-full min-h-0 min-w-0 overflow-auto">
            <div class="bg-pink-600 w-screen h-64"></div>
            <div class="bg-blue-600 w-full h-64"></div>
            <div class="bg-purple-600 w-screen h-64"></div>
            <div class="bg-red-600 w-full h-64"></div>
            <div class="bg-yellow-600 w-screen h-64"></div>
            <div class="bg-green-600 w-full h-64"></div>
          </div>

        </div>

      </div>
    </section>
    <footer class="px-6 py-3 border-t flex w-full items-end">
      <p class="text-gray-600">Made by @codingsafari</p>
      <div class="flex-1"></div>
      <button
        class="shadow-md ml-auto border rounded-full ml-2 w-14 h-14 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
        <i class="fas fa-question fill-current"></i>
      </button>
    </footer>
  </main>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

body {
  font-family: "Nunito", sans-serif;
}

main {
  font-size: clamp(0.9rem, 3vw, 1rem);
}

#page-icon img {
  -webkit-animation: cssfilter 3s infinite;
}


@-webkit-keyframes cssfilter {
  0%, 100%  {  
    filter: invert(75%) drop-shadow(0px 0px 2px blue) 
  }
  
  50% { 
    filter: invert(0%) drop-shadow(0px 0px 1px teal); 
  }
}
</style> */
}
