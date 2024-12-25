import React from 'react'
import Link from 'next/link'
import Banner from '@/components/banner'
import F_banner from '@/components/footerbanner'

import { IoIosArrowForward } from 'react-icons/io'

const Account = () => {
  return (
    <div>
 {/* Banner Section Start  */}
<div className="relative">
      <Banner />
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        {/* Adjust spacing and positioning */}
        <div className="mt-20"> {/* Push text down */}
          <h1 className="text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
            My Account
          </h1>

          {/* Breadcrumb */}
          <p className="text-sm flex text-black sm:text-base md:text-lg lg:text-xl mt-2 font-poppins">
            <Link href="/" className="font-semibold hover:underline">
              Home
            </Link>{' '}
            <IoIosArrowForward className='mt-1' /> My Account
          </p>
        </div>
      </div>
    </div>
 {/* Banner Section End  */}

     
    

      {/* 2nd Section: Login and Register */}
      <section className="bg-white font-poppins max-w-[1440] mx-auto py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Login Column */}
            <div className="max-w-xl space-y-10">
              <h1 className="text-4xl font-bold  ">Login</h1>
              <form className="space-y-4">
                {/* Username or Email */}
                <div>
                  <label className="block text-lg font-semibold mb-4" htmlFor="email">Username or Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-[#9F9F9F] rounded-md"
                  />
                </div>
                {/* Password */}
                <div>
                  <label className="block text-lg font-semibold mb-4 mt-8" htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-[#9F9F9F] rounded-md"
                  />
                </div>
                {/* Remember Me Checkbox */}
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-4 w-6 h-6" />
                  <label htmlFor="rememberMe" className="text-base py-4">Remember me</label>
                </div>
                {/* Login Button */}
                <div className="space-x-7">
                <button className="w-10000 py-2 px-14 bg-transparent border border-black rounded-lg text-black text-lg hover:bg-black hover:text-white transition">
                  Login
                </button>
                {/* Lost Password Link */}
                
                  <Link href="#" className="text-base text-black">Lost your password?</Link>
                </div>
              </form>
            </div>

            {/* Register Column */}
            <div className="max-w-xl space-y-10">
              <h1 className="text-4xl  font-bold ">Register</h1>
              <form className="space-y-4">
                {/* Email Address */}
                <div>
                  <label className="block text-lg mb-4 font-semibold" htmlFor="registerEmail">Email Address</label>
                  <input
                    type="email"
                    id="registerEmail"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-[#9F9F9F] rounded-md"
                  />
                </div>
                {/* Register Information */}
                <div className=" text-base text-gray-600 space-y-2 pt-3 pb-4">
                  <p>
                    A link to set a new password will be sent to your email address.
                  </p>
                  <p>
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span>
                  </p>
                </div>
                {/* Register Button */}
                <button className="w-100 py-2 px-14 bg-transparent border border-black rounded-lg text-black text-lg hover:bg-black hover:text-white transition">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Posts */}
      <F_banner/>
      
    </div>
  )
}

export default Account
