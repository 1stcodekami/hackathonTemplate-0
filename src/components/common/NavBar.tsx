'use client';

import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import CartSection from "../sections/shop/CartSection";
import { RemoveScroll } from "react-remove-scroll";
import { useAtomValue } from "jotai";
import { Badge } from "../ui/badge";
import { cartAtom } from "@/lib/storage/jotai";
import Image from "next/image";

function NavBar() {
  const [showCart, setShowCart] = useState(false);
  const [menu, setMenu] = useState(false);
  const cartValue = useAtomValue(cartAtom);

  const pathname = usePathname(); // Get the current path

  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const icons = [
    {
      iconUrl: "/images/user_icon.png",
      alt: "user icon",
      action: () => console.log("You just clicked on the user icon"),
    },
    {
      iconUrl: "/images/search_icon.png",
      alt: "search icon",
      action: () => console.log("You just clicked on the search icon"),
    },
    {
      iconUrl: "/images/heart_icon.png",
      alt: "heart icon",
      action: () => console.log("You just clicked on the heart icon"),
    },
    {
      iconUrl: "/images/cart_icon.png",
      alt: "cart icon",
      action: () => setShowCart(!showCart),
      badgeValue: cartValue?.length,
    },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const navBarBackground = pathname === "/" ? "bg-[#FBEBB5]" : "bg-white"; // Dynamic background

  return (
    <div className="relative">
      <div className={`md:sticky font-poppins pt-2 md:top-0 md:shadow-none z-20 relative ${navBarBackground}`}>
        {/* DESKTOP */}
        <div className="hidden lg:block animate-in fade-in zoom-in p-4">
          <div className="flex justify-between mx-[41px] items-center">
            <div></div>
            <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
              {links.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray`}
                >
                  <p>{link.title}</p>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-[40px] select-none">
              {icons.map((icon, index) => (
                <div key={index} className="relative">
                  <Image
                    src={icon.iconUrl}
                    onClick={icon.action}
                    alt={icon.alt}
                    width={25}
                    height={25}
                    className="cursor-pointer"
                  />
                  {icon?.badgeValue ? (
                    <Badge
                      variant="destructive"
                      className="absolute -top-3 -right-5"
                    >
                      {icon?.badgeValue}
                    </Badge>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* MOBILE */}
        <div
          className={`block lg:hidden shadow-sm font-poppins fixed top-0 w-full z-[999] py-4 animate-in fade-in zoom-in ${menu ? "!bg-[#FFF3E3] py-2" : ""}`}
        >
          <div className="flex justify-between mx-[10px]">
            <div className=""></div>
            <div className="flex items-center gap-[40px]">
              {menu ? (
                <X
                  className="cursor-pointer animate-in fade-in zoom-in text-black"
                  onClick={toggleMenu}
                />
              ) : (
                <MenuIcon
                  onClick={toggleMenu}
                  className="cursor-pointer animate-in fade-in zoom-in"
                />
              )}
            </div>
          </div>
          {menu && (
            <div className="my-8 select-none animate-in slide-in-from-right">
              <div className="flex flex-col gap-8 mt-8 mx-4">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.link}
                    className="text-black cursor-pointer"
                  >
                    <p>{link.title}</p>
                  </Link>
                ))}
                <div className="flex flex-col gap-[40px] select-none">
                  {icons.map((icon, index) => (
                    <Image
                      src={icon.iconUrl}
                      onClick={icon.action}
                      alt={icon.alt}
                      key={index}
                      width={30}
                      height={30}
                      className="cursor-pointer w-[28px] h-[28px] object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showCart && (
        <div
          className="hidden md:block absolute animate-out left-0 right-0 top-0 h-screen bg-black/20 z-[99]"
          onClick={() => setShowCart(!showCart)}
        ></div>
      )}
      <div className="hidden md:block md:absolute top-0 right-0 z-[100]">
        {showCart && (
          <RemoveScroll>
            <CartSection toggleShowCart={() => setShowCart(!showCart)} />
          </RemoveScroll>
        )}
      </div>
    </div>
  );
}

export default NavBar;
