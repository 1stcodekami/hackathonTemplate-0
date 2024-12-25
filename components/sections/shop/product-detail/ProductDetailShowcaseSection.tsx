"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import ReactStars from "react-stars";
import Image from "next/image";

import MainButton from "@/components/common/MainButton";
import { MinusIcon, PlusIcon } from "lucide-react";
import { PRODUCTS } from "@/app/lib/constants";
import { useAtom } from "jotai";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { cartAtom } from "@/app/lib/storage/jotai";

export default function ProductDetailShowcaseSection({
  productId,
}: {
  productId: string;
}) {
  const MAX_QUANTITY = 10;
  const [selectedSize, setSelectedSize] = useState<string | null>("XS");
  const sizeOptions = ["XS", "L", "XL"];


    // Set the initial state to the first color
    const [selectedColor, setSelectedColor] = useState<string | null>(null); // Tracks the selected color
    const colorOptions = [
      { color: "#816DFA" },
      { color: "#000000" },
      { color: "#CDBA7B" },
    ];
  


  const mini = [
    "/images/s2p1c1r1.png",
    "/images/s2p1c1r2.png",
    "/images/s2p1c1r3.png",
    "/images/Maya sofa three seater (1) 1.png",
  ];

  const extraDetailsData = [
    {
      item: "SKU",
      value: "SS001",
    },
    {
      item: "Category",
      value: "Sofas",
    },
    {
      item: "Tags",
      value: "Sofa, Chair, Home, Shop",
    },
    {
      item: "Share",
      value: (
        <div className="flex gap-[23px]">
          <div>
            <img src="/images/facebook.png" alt="facebook" />
          </div>
          <div>
            <img src="/images/linkedin.png" alt="linkedin" />
          </div>
          <div>
            <img src="/images/twitter.png" alt="twitter" />
          </div>
        </div>
      ),
    },
  ];

  const [quantity, setQuantity] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  const [cart, setCart] = useAtom(cartAtom);

  const handleQuantityDecrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };
  const handleQuantityIncrement = () => {
    if (quantity === MAX_QUANTITY) return;
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const productInCart = cart.find((product) => product.id === productId);
  
    if (productInCart) {
      // If the product is already in the cart, update its details
      const updatedProducts = cart.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: product.quantity + quantity,
              unitPrice: product.unitPrice, // Existing price
            }
          : product
      );
  
      setCart(updatedProducts);
    } else {
      // If the product is not in the cart, add it as a new item
      const product = PRODUCTS.find((product) => product.id === productId);
  
      // Debugging log
      // console.log("Adding product to cart:", product);
  
      if (product && product.price) {
        // Remove commas and convert the price to a number
        const cleanedPrice = parseFloat(product.price.replace(/,/g, ""));
  
        const productObject = {
          id: productId,
          productImageUrl: product.imageUrl,
          productName: product.title,
          quantity,
          unitPrice: cleanedPrice, // Corrected price
        };
  
        setCart((prevProducts) => [...prevProducts, productObject]);
      } else {
        console.error("Product price is missing or invalid:", product);
        toast({
          title: "Error",
          description: "Failed to add product to cart due to invalid price.",
          action: <ToastAction altText="Retry">Retry</ToastAction>,
        });
      }
    }
  
    toast({
      title: "",
      description: "Product added to cart successfully",
      action: <ToastAction altText="Goto schedule to undo">Close</ToastAction>,
    });
  };
  

  const specificProduct = PRODUCTS.find((product) => {
    return product.id === productId;
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
 
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LHS */}
      <div className="flex gap-8 ">
        <div className="hidden md:inline-flex flex-col gap-8">
          {mini.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4"
            >
               <Image
                          src={item}
                          alt="Product 1"
                          width={150}
                          height={150}
                          className="object-contain mx-auto bg-[#FFF9E5]"
                        />
             
            </div>
          ))}
        </div>
        <div className=" flex flex-col bg-[#FFF9E5]  rounded-[8px] h-[650px] justify-center items-center">
          <img
            src={specificProduct?.imageUrl}
            alt="product"
            className="w-[550px] h-[500px] object-cover rounded-[10px]"
          />
        </div>
      </div>
      {/* RHS */}
      <div>
        <p className="text-[42px]">{specificProduct?.title}</p>
        <p className="text-customGray text-[24px] font-medium">
          Rs. {specificProduct?.price}
        </p>
        <div className="flex items-center gap-[22px]">
          <ReactStars count={5} color1="#FFC700" size={24} color2={"#FFC700"} />
          <Separator
            orientation="vertical"
            className="h-[40px] border border-customGray2"
          />
          <p>5 Customer Review</p>
        </div>

        <p className="mt-4">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>

        <div>
         

  {/* Size Options */}
  <div className="mt-4">
  <div className="flex items-center">
    <span className="font-poppins text-sm font-normal text-[#9F9F9F]">Size</span>
  </div>
  <div className="flex flex-wrap items-center gap-2 mt-2">
    {sizeOptions.map((size) => (
      <button
        key={size}
        className={`px-4 py-2 border rounded-md ${
          selectedSize === size ? "bg-[#FBEBB5] text-black" : "bg-[#FAF4F4]"
        }`}
        onClick={() => setSelectedSize(size)}
      >
        {size}
      </button>
    ))}
  </div>
</div>



          {/* Color Options */}
          <div className="mt-4">
      <div className="flex items-center">
        <span className="font-poppins text-sm font-normal text-[#9F9F9F]">Color</span>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-2">
        {colorOptions.map(({ color }, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full border ${selectedColor === color ? "ring-2 ring-offset-2 ring-[#91876a]" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></button>
        ))}
      </div>
    </div>
        



        </div>

        <div className="flex gap-[18px] items-center mt-32">
          <div className="inline-flex h-[64px] px-[15px] gap-[35px] items-center border border-customGray2 rounded-[10px]">
            <MinusIcon
              className="cursor-pointer"
              onClick={handleQuantityDecrement}
            />
            <p className="font-semibold text-normal select-none">{quantity}</p>
            <PlusIcon
              className="cursor-pointer"
              onClick={handleQuantityIncrement}
            />
          </div>
          <div>
            <MainButton
              text="Add to Cart"
              classes="bg-white text-black hover:bg-white border border-black rounded-[15px]"
              action={handleAddToCart}
            />
          </div>
        </div>

        <div className="my-[41px]">
          <Separator className="border border-[#D9D9D9]" />
        </div>

        <div className="flex flex-col gap-4">
          {extraDetailsData.map((item, index) => (
            <div key={index} className="flex gap-4">
              <p className="text-[#9F9F9F] font-poppins text-base font-normal">{item.item}</p>
              <p className="text-[#9F9F9F] font-poppins text-base font-normal">:</p>
              <div className="text-[#9F9F9F] font-poppins text-base font-normal">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
