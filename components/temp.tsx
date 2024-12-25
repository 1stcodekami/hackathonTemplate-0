// "use client";
// import React, { useState } from "react";
// import { IoCartOutline, IoSearch } from "react-icons/io5";

// import { FiMenu, FiX } from "react-icons/fi";
// import Link from "next/link"; // Import Link for navigation

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   return (
//     <nav className="bg-yellow-100">
//       <div className="max-w-7xl mx-auto text-[#222] px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-2xl">
//               {isMenuOpen ? <FiX /> : <FiMenu />}
//             </button>
//           </div>

//          <div className="flex space-x-4">
//           <button onClick={toggleCart} className="text-2xl">
//               <IoCartOutline />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`fixed top-[8%] left-0 h-full w-50 bg-[#57774c] z-50 transform ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out md:hidden`}
//       >
       
//       </div>

//       <div
//         className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform ${
//           isCartOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <div className="p-4">
//           <button
//             onClick={toggleCart}
//             className="text-xl text-gray-600 hover:text-gray-800 float-right"
//           >
//             <FiX />
//           </button>
//           <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
//           <div className="flex items-center gap-4 border-b pb-4">
//             <img
//               src="/Asgaard sofa 1.png"
//               alt="Product"
//               className="w-16 h-16 object-cover"
//             />
//             <div>
//               <h3 className="text-sm font-medium text-gray-800">
//                 Product Name
//               </h3>
//               <p className="text-sm text-gray-600">Price: $50</p>
//               <p className="text-sm text-gray-600">Qty: 1</p>
//             </div>
//           </div>
//           <div className="mt-4 flex gap-4 justify-center">
//             <Link href="/cart" className="px-6 py-2 text-center text-black border-2 border-[#222] rounded-xl hover:bg-gray-100 transition-all" passHref>
//                 View Cart
//             </Link>
//             <Link href="/checkout" className="px-4 py-2 text-center text-black border-2 border-[#222] rounded-xl hover:bg-gray-100 transition-all" passHref>
//                 Checkout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;