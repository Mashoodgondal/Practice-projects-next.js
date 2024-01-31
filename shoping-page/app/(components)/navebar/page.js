import React from "react";

const Nave = () => {
  return (
    <div>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center justify-center ">
            <ul class="flex flex-row font-bold mt-0 space-x-12 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                >
                  COMPANY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                >
                  TEAM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                >
                  FEATURES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:text-red-700 hover:border-b hover:border-red-700"
                >
                  HOT OFFERS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nave;
