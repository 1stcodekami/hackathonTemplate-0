import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/banner";
import F_banner from "@/components/footerbanner";
import { CiSearch } from "react-icons/ci";
import { FaTag ,FaCalendar } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

const Blog = () => {
  return (
    <div>
      {/* First Section with Tailwind Background */}
      {/* Banner Section Start  */}
      <div className="relative">
        <Banner />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          {/* Adjust spacing and positioning */}
          <div className="mt-20">
            {" "}
            {/* Push text down */}
            <h1 className="text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
              Blog
            </h1>
            {/* Breadcrumb */}
            <p className="text-sm text-black sm:text-base md:text-lg lg:text-xl mt-2 font-poppins">
              <Link href="/" className="font-semibold hover:underline">
                Home
              </Link>{" "}
              &gt; Blog
            </p>
          </div>
        </div>
      </div>
      {/* Banner Section End  */}

      {/* 2nd Section: Blog Content with Two Columns (65:35 Ratio) */}
      <section className="bg-white mx-auto pt-16 pb-10 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* First Column (65% width) */}
            <div className="md:col-span-3 space-y-6">
              {/* First Post */}
              <div className="pb-6">
                <Image
                  src="/images/blog2.jpg"
                  alt="Going All"
                  width={300}
                  height={300}
                  className="w-full rounded-lg object-cover"
                />
                <div className="flex pt-4 font-poppins text-[#9F9F9F] text-base font-normal gap-8"> 
                  <span className="flex gap-3"><IoPersonSharp className="mt-1"/>Admin</span>
                  <span className="flex gap-3"><FaCalendar className="mt-1"/>14 Oct 2022 </span> 
                  <span className="flex gap-3"><FaTag className="mt-1"/>Wood</span></div>
            
                <h1 className="text-3xl font-semibold mt-4">
                  Going all-in with millenial design
                </h1>
                <p className="text-[#9F9F9F] text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <Link
                  href="/"
                  className="text-black hover:underline mt-4 block"
                >
                  <span className="relative pb-2">
  Read More
  <span className="absolute left-1 bottom-0 h-[1px] bg-black w-[80%]"></span>
</span>

                  {/* <span className="border-b pb-2 border-black">Read More</span> */}
                </Link>
              </div>

              {/* Second Post */}
              <div className="pb-6">
                <Image
                  src="/images/blg2.jpg"
                  alt="Exploring New"
                  width={300}
                  height={300}
                  className="w-full rounded-lg object-cover"
                />
                 <div className="flex pt-4 font-poppins text-[#9F9F9F] text-base font-normal gap-8"> 
                  <span className="flex gap-3"><IoPersonSharp className="mt-1"/>Admin</span>
                  <span className="flex gap-3"><FaCalendar className="mt-1"/>14 Oct 2022 </span> 
                  <span className="flex gap-3"><FaTag className="mt-1"/>Wood</span></div>
                <h1 className="text-3xl font-semibold mt-4">
                  Exploring New ways of decorating
                </h1>
                <p className="text-[#9F9F9F] text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <Link
                  href="/"
                  className="text-black hover:underline mt-4 block"
                >
                  <span className="relative pb-2">
  Read More
  <span className="absolute left-1 bottom-0 h-[1px] bg-black w-[80%]"></span>
</span>
                </Link>
              </div>

              {/* Third Post */}
              <div className="mt-12">
                <Image
                  src="/images/2.jpeg"
                  alt="Hand Made"
                  width={300}
                  height={300}
                  className="w-full rounded-lg object-cover"
                />
                 <div className="flex pt-4 font-poppins text-[#9F9F9F] text-base font-normal gap-8"> 
                  <span className="flex gap-3"><IoPersonSharp className="mt-1"/>Admin</span>
                  <span className="flex gap-3"><FaCalendar className="mt-1"/>14 Oct 2022 </span> 
                  <span className="flex gap-3"><FaTag className="mt-1"/>Wood</span></div>
                <h1 className="text-3xl font-semibold mt-4">
                  Hand made pieces that took time to make
                </h1>
                <p className="text-[#9F9F9F] text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <Link
                  href="/blog"
                  className="text-black hover:underline mt-4 block"
                >
                  <span className="relative pb-2">
  Read More
  <span className="absolute left-1 bottom-0 h-[1px] bg-black w-[80%]"></span>
</span>
                </Link>
              </div>
            </div>

            {/* Second Column (35% width) for Recent Posts */}
            <div className="md:col-span-2 space-y-6 pl-8">
              <div className="max-w-80 font-poppins">
                {/* Search Box */}
                <div className="flex px-4 py-3 mb-10 rounded-md border border-[#9F9F9F] overflow-hidden max-w-md mx-auto font-poppins">
                  <input
                    type="email"
                    placeholder="Search..."
                    className="w-full outline-none bg-transparent text-gray-600 text-sm"
                  />
                  <CiSearch className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                {/* Search Box */}

                {/* Categories */}
                <div className="max-w-64 mx-auto font-poppins">
                  <h2 className="text-2xl font-bold mb-6">Categories</h2>
                  <ul className="list-none space-y-6 text-[#9F9F9F]">
                    <li className="flex justify-between mb-2">
                      <span className="text-base font-medium">Crafts</span>
                      <span className="text-base font-medium">2</span>
                    </li>
                    <li className="flex justify-between mb-2">
                      <span className="text-base font-medium">Design</span>
                      <span className="text-base font-medium">8</span>
                    </li>
                    <li className="flex justify-between mb-2">
                      <span className="text-base font-medium">Handmade</span>
                      <span className="text-base font-medium">7</span>
                    </li>
                    <li className="flex justify-between mb-2">
                      <span className="text-base font-medium">Interior</span>
                      <span className="text-base font-medium">1</span>
                    </li>
                    <li className="flex justify-between mb-2">
                      <span className="text-base font-medium">Wood</span>
                      <span className="text-base font-medium">6</span>
                    </li>
                  </ul>
                </div>
                {/* Categories */}

                <div className="max-w-64 mx-auto font-poppins space-y-10 py-28">
                  <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>

                  {/* Recent Post 1 */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/b1.png"
                      alt="Recent Post 1"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <h2 className="text-black font-normal text-sm">
                        Going all-in one with millenial design
                      </h2>
                      <p className="text-[#9F9F9F] text-xs font-normal">03 Aug 2022</p>
                    </div>
                  </div>

                  {/* Recent Post 2 */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/b2.png"
                      alt="Recent Post 2"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <h2 className="text-black font-normal text-sm">
                        Exploring new ways of decorating
                      </h2>
                      <p className="text-[#9F9F9F] text-xs font-normal">03 Aug 2022</p>
                    </div>
                  </div>

                  {/* Recent Post 3 */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/b3.png"
                      alt="Recent Post 3"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <h2 className="text-black font-normal text-sm">
                        Hand made pieces that took time to make
                      </h2>
                      <p className="text-[#9F9F9F] text-xs font-normal">03 Aug 2022</p>
                    </div>
                  </div>

                  {/* Recent Post 4 */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/b4.png"
                      alt="Recent Post 4"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <h2 className="text-black font-normal text-sm">
                        Modern home in Milan
                      </h2>
                      <p className="text-[#9F9F9F] text-xs font-normal">03 Aug 2022</p>
                    </div>
                  </div>

                  {/* Recent Post 5 */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/b5.png"
                      alt="Recent Post 5"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                    <div>
                      <h2 className="text-black font-normal text-sm">
                        Colorful office redesign 5
                      </h2>
                      <p className="text-[#9F9F9F] text-xs font-normal">03 Aug 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Pagination Section Start*/}
       <section className="pt-10 text-center">
        <div className="flex justify-center gap-7">
          <Link href={`/shop?page=1`}>
            <div className="w-12 h-12 flex items-center justify-center  rounded-md bg-[#FBEBB5] hover:bg-[#FBEBB5] text-black">
              1
            </div>
          </Link>
          <Link href={`/shop?page=2`}>
            <div className="w-12 h-12 flex items-center justify-center  rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5] text-black">
              2
            </div>
          </Link>
          <Link href={`/shop?page=3`}>
            <div className="w-12 h-12 flex items-center justify-center  rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5] text-black">
              3
            </div>
          </Link>
          <Link href={`/shop?page=next`}>
            <div className="w-12 h-12 flex items-center px-8 justify-center  rounded-md bg-[#FFF9E5] hover:bg-[#FBEBB5] text-black">
              Next
            </div>
          </Link>
        </div>
      </section>
      {/* Pagination Section End */}

      {/* Concept Posts Start */}

      <F_banner />
      {/* Concept Posts End */}
    </div>
  );
};

export default Blog;
