import Image from "next/image";
import React from "react";

export default function Filter() {
  return (
    <div className="font-poppins bg-[#FAF4F4] py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-baseline mx-6 sm:mx-12 md:mx-24">
        {/* Header Section */}
        <div className="col-span-full flex flex-col sm:flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center gap-4 sm:gap-7">
            {/* Filter Icon and Label */}
            <div className="flex items-center gap-3 cursor-pointer">
              <Image
                src="/images/filter.png"
                alt="Filter icon"
                width={25}
                height={25}
                className="shrink-0"
              />
              <span className="hidden sm:block text-base sm:text-lg md:text-xl">Filter</span>
            </div>

            {/* Box and Vector Icons */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/box.png"
                alt="Box icon"
                width={25}
                height={25}
                className="cursor-pointer"
              />
              <Image
                src="/images/filterVector.png"
                alt="Vector icon"
                width={24}
                height={10}
                className="cursor-pointer"
              />
            </div>

            {/* Results Info (Hidden on small screens) */}
            <div className="hidden sm:block pl-5 border-l-2 border-l-[#9F9F9F] text-sm sm:text-base md:text-lg">
              Showing 1-6 results of 32 results
            </div>
          </div>

          {/* Show and Sort Section */}
          <div className="flex flex-row items-center gap-4 sm:gap-8 mt-4 sm:mt-0">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg md:text-xl">Show</span>
              <div className="text-gray-500 bg-white p-2 sm:p-3 rounded text-base sm:text-lg md:text-xl">
                16
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg md:text-xl">Sort by</span>
              <div className="text-gray-500 bg-white px-3 sm:pl-4 sm:pr-12 py-2 sm:py-3 rounded text-base sm:text-lg md:text-xl">
                Default
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Results Info */}
        <div className="col-span-full sm:hidden text-center text-xs sm:text-sm">
          Showing 1-6 results of 32 results
        </div>
      </div>
    </div>
  );
}
