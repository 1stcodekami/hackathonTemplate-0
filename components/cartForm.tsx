import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";

const CartForm = () => {
  return (
    <div className="p-6 lg:p-12  font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 pt-8 gap-12">
        <div className="lg:col-span-2 ">
          <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 bg-white rounded-lg shadow-md">
  <thead>
    <tr className="bg-[#FFF9E5]">
      <th className="py-3 px-4 text-left pl-28 font-medium text-black text-base">
        Product
      </th>
      <th className="py-3 px-4 text-left font-medium text-black text-base">
        Price
      </th>
      <th className="py-3 px-4 text-left font-medium text-black text-base">
        Quantity
      </th>
      <th className="py-3 px-4 text-left font-medium text-black text-base">
        Subtotal
      </th>
      <th className="py-3 px-4 text-left font-medium text-[#FFF9E5] text-base">
        
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="py-12 px-4 flex items-center space-x-4">
        <div className="relative w-20 h-20">
          <Image
            src="/images/Asgaard sofa 1.png"
            alt="Product"
            layout="fill"
            style={{ objectFit: "cover" }}
            className="rounded-xl bg-[#FBEBB5]"
          />
        </div>
        <span className="font-medium hidden md:block text-[#9F9F9F]">
          Asgaard Sofa
        </span>
      </td>
      <td className="py-4 px-4 text-[#9F9F9F]">Rs. 250,000.00</td>
      <td className="py-4 px-4">
        <input
          type="number"
          defaultValue="1"
          className="w-12 border border-gray-300 rounded-md text-center"
        />
      </td>
      <td className="py-4 px-4 text-black font-semibold">Rs. 250,000.00</td>
      <td className="py-4 px-4 text-center">
        <button className="text-[#FBEBB5]">
          <AiFillDelete />
        </button>
      </td>
    </tr>
  </tbody>
</table>

          </div>
        </div>

        <div className="bg-[#FFF9E5] p-6 sm:p-8 md:p-10 rounded-lg shadow-md space-y-6 sm:space-y-8">
  <h2 className="text-xl sm:text-2xl md:text-3xl pb-8 text-center font-semibold text-black">
    Cart Totals
  </h2>
  <div className="flex justify-between text-sm sm:text-base">
    <span className="text-gray-700">Subtotal</span>
    <span className="text-[#9F9F9F] font-medium">Rs. 250,000.00</span>
  </div>
  <div className="flex justify-between pb-10 sm:pb-12 md:pb-16 text-sm sm:text-base">
    <span className="text-gray-700">Total</span>
    <span className="text-[#B88E2F] font-bold text-base sm:text-lg">
      Rs. 250,000.00
    </span>
  </div>
  <Link
    href="/checkout"
    className="block w-full sm:w-[70%] md:w-[50%] mx-auto font-poppins text-sm sm:text-base font-normal text-black border border-[#222] px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-center"
  >
    Check Out
  </Link>
</div>

      </div>
    </div>
  );
};

export default CartForm;