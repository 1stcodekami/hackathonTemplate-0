import Banner from '@/components/banner';
import React from 'react';
import Link from 'next/link';
import F_banner from '@/components/footerbanner';
import { HiLocationMarker,HiClock } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io';

const ContactSection = () => {
  // Form Submission Handler
 

  return (
    <>
      <div className="relative">
      <Banner />
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        {/* Adjust spacing and positioning */}
        <div className="mt-20"> {/* Push text down */}
          <h1 className="text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
            Contact
          </h1>

          {/* Breadcrumb */}
          <p className="text-sm flex text-black sm:text-base md:text-lg lg:text-xl mt-2 font-poppins">
            <Link href="/" className="font-semibold hover:underline">
              Home
            </Link>{' '}
           <IoIosArrowForward className='mt-1'/> Contact
          </p>
        </div>
      </div>
    </div>


      {/* Contact Section */}
      <section className="bg-white font-poppins py-16">
        <div className="container mx-auto px-4">
          {/* Heading and Paragraph */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-black">Get In Touch With Us</h1>
            <p className="text-[#9F9F9F] text-base mt-4">
              For More Information About Our Product & Services, Please Feel Free To Drop Us <br /> An Email. 
              Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 max-w-[1058px] mx-auto font-poppins md:grid-cols-2 gap-8">
            {/* First Column (Transparent with Dark Navy Blue Border) */}
            <div className=" p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold flex text-black"><HiLocationMarker/><span className='ml-5'>Address</span></h2>
                <p className="text-black ml-10 text-base">
                  236 5th SE Avenue, New <br /> York NY10000, United <br /> States
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold flex text-black"><FaPhoneAlt /><span className='ml-5'>Phone</span></h2>
                <p className="text-black ml-10 text-base">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold flex text-black"> <HiClock /><span className='ml-5'>Working Time</span></h2>
                <p className="text-black ml-10 text-base">
                  Monday-Friday: 9:00 - <br /> 22:00<br />
                  Saturday-Sunday: 9:00 - <br /> 21:00
                </p>
              </div>
            </div>

            {/* Second Column (Contact Form) */}
            <div className=" p-8 rounded-lg ">
              <form className="space-y-6" >
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Abc"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-base font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Abc@def.com"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-base font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="This is an optional"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-base font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Hi! I'd like to ask about"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="py-3 px-20 border border-black rounded-xl text-black text-base hover:bg-black hover:text-white transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Posts Section */}
      
      <F_banner/>
    </>
  );
};

export default ContactSection;
