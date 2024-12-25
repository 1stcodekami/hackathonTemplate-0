'use client'
import React from "react";
import { useRouter } from "next/navigation"; 
import { PRODUCTS } from "@/app/lib/constants";

function OurProductSection() {
  const router = useRouter();

  const handleProductClick = (id: string) => {
    router.push(`/shop/product/${id}`);
  };

  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8">
        {PRODUCTS.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 md:gap-6 w-full md:w-1/4"
          >
            {/* Clickable image */}
            <div
              onClick={() => handleProductClick(item.id)}
              className="w-full flex justify-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="max-w-full h-auto"
              />
            </div>

            {/* Title and other information */}
            <div>
              <p
                onClick={() => handleProductClick(item.id)}
                className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center cursor-pointer hover:text-primary transition-transform duration-200 ease-in-out hover:scale-105"
              >
                {item.title}
              </p>
              <div className="flex justify-between items-center">
                <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center">
                  Rs. {item.price}.00
                </p>
                {item.otherPrice && (
                  <p className="line-through">
                    {item.otherPrice}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[32px]">
        {/* Optional show more button */}
      </div>
    </section>
  );
}

export default OurProductSection;
