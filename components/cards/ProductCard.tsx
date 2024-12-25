"use client";

import { cn } from "@/app/lib/utils";
import React from "react";
import MainButton from "../common/MainButton";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import Image from "next/image";

interface IProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  otherPrice: string;
  type: string;
  typeValue: string;
}

function ProductCard({
  id,
  imageUrl,
  title,
  description,
  price,
  otherPrice,
  type,
  typeValue,
}: IProps) {
  const router = useRouter();
  // const icons = [
  //   {
  //     iconUrl: "/images/share_icon.png",
  //     title: "Share",
  //     action: () => {},
  //   },
  //   {
  //     iconUrl: "/images/compare.png",
  //     title: "Compare",
  //     link: "/comparison",
  //     action: () => {},
  //   },
  //   {
  //     iconUrl: "/images/like_icon.png",
  //     title: "Like",
  //     action: () => {},
  //   },
  // ];

  return (
    <div className="relative">
      <div className="relative">
        <Image
          src={imageUrl}
          alt="product"
          width={500}
          height={300}
          className="h-[301px] w-full object-cover"
        />
        {typeValue && (
          <div
            className={cn(
              "absolute top-[24px] right-[24px] w-[48px] h-[48px] rounded-full text-normal font-medium px-2 text-white flex justify-center items-center",
              type === "DISCOUNTED"
                ? "bg-error"
                : type === "NEW"
                ? "bg-success"
                : ""
            )}
          >
            {typeValue}
          </div>
        )}
      </div>
      <div className="bg-[#F4F5F7] p-4">
        <p className="text-customBlack text-24 font-semibold">{title}</p>
        <p className="text-customGray font-medium text-normal py-[8px]">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-customBlack text-20 font-semibold">{price}</p>
          {otherPrice && (
            <p className="line-through text-customGray">{otherPrice}</p>
          )}
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3A3A3A]/80 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity">
        <div>
          <MainButton
            text="View product"
            classes="bg-white text-primary font-bold hover:bg-white"
            action={() => router.push(`/shop/product/${id}`)}
          />
        </div>
        {/* <div className="flex justify-center gap-5 mt-[24px]">
          {icons.map((icon, index) => (
            <div
              className="flex gap-1 items-center hover:cursor-pointer"
              key={index}
              onClick={icon.action}
            >
              <div>
                <Image src={icon.iconUrl} alt="icon" width={15} height={15} />
              </div>
              <Link href={icon.link ? icon.link : ""} className="text-white">
                {icon.title}
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default ProductCard;
