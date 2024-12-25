import React from 'react'
import Link from 'next/link'
import Banner from '@/components/banner';
import F_banner from '@/components/footerbanner';
import { IoIosArrowForward } from 'react-icons/io';

const Checkout = () => {
  return (
    <div>
      {/* First Section Banner Start */}

      <div className="relative">
        <Banner />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          {/* Adjust spacing and positioning */}
          <div className="mt-20"> {/* Push text down */}
            <h1 className="text-xl text-black sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins">
              Checkout
            </h1>

            {/* Breadcrumb */}
            <p className="text-sm flex text-black sm:text-base md:text-lg lg:text-xl mt-2 font-poppins">
              <Link href="/" className="font-semibold hover:underline">
                Home
              </Link>{' '}
              <IoIosArrowForward className='mt-1' /> Checkout
            </p>
          </div>
        </div>
      </div>
      {/* First Section Banner End */}


      <div className=" min-h-screen p-6 lg:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

      {/* Billing Details and Product Information Start */}

          <div className='font-poppins'>
            <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-3 block w-full rounded-md border border-[#9F9F9F]"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-3 block w-full rounded-md border border-[#9F9F9F]"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border border-[#9F9F9F]"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Country / Region
                </label>
                <select className="mt-1 p-3 block w-full text-[#9F9F9F] rounded-md border border-[#9F9F9F]">
                  <option>Sri Lanka</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Street Address
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border border-[#9F9F9F]"
                  placeholder="Street Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Town / City
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-md border border-[#9F9F9F]"
                  placeholder="Town / City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Province
                </label>
                <select className="mt-1 p-3 block w-full text-[#9F9F9F] rounded-md border border-[#9F9F9F]">
                  <option>Western Province</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-3 block w-full rounded-md border border-[#9F9F9F]"
                    placeholder="ZIP Code"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-3 block w-full rounded-md border border-[#9F9F9F]"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 p-3 block w-full rounded-md border border-[#9F9F9F]"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Additional Information
                </label>
                <textarea
                  className="mt-1 p-3 block w-full rounded-md border border-[#9F9F9F]"
                  placeholder="Additional Information"
                />
              </div>
            </form>
          </div>
           {/* Billing Details and Product Information End */}




          {/* Product Section Start */}
          <div>
            <h2 className="text-2xl ml-6  font-semibold pt-8">Product</h2>
            <div className="p-6 rounded-lg space-y-6">
              <div className="flex justify-between text-black">
                <div> <span className='text-[#9F9F9F]'>Asgaard Sofa </span>
                <span className='font-medium'>x</span>  1
                </div>
                <span>Rs. 250,000.00</span>
              </div>
           
              <div className="flex justify-between text-black">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-black">
                <span>Total</span>
                <span className="text-[#b88E2F]">Rs. 250,000.00</span>
            
              </div>
              <hr />
              <div>
                {/* <p className="font-semibold mb-4">Payment Method</p> */}
                <div className="space-y-4 ">
                  <div className=''>
                    <input
                      type="radio"
                      name="payment"
                      id="bank-transfer"
                      className="mr-2"
                    />
                    <label htmlFor="bank-transfer">Direct Bank Transfer</label>
                    <p className="text-sm text-[#9F9F9F] mt-1">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>
                  </div>




                  <div>
                    <input
                      type="radio"
                      name="payment"
                      id="bank-transfer"
                      className="mr-2"
                    />
                    <label htmlFor="bank-transfer" className="text-[#9F9F9F]">Direct Bank Transfer</label>
                    
                  </div>

                  <div>
                    <input
                      type="radio"
                      name="payment"
                      id="cod"
                      className="mr-2"
                    />
                    <label htmlFor="cod" className="text-[#9F9F9F] ">Cash on Delivery</label>
                    <p className="text-sm text-black py-6">
                      Your personal data will be used to support your experience
                      throughout this website. to manage access to your account
                      and for other purposes described in our <br />
                      <strong>Privacy Policy</strong>
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-[45%] ml-[25%] text-black border border-[#222] py-2 rounded-xl">
                Place Order
              </button>
            </div>
          </div>
          {/* Product Section End */}

        </div>


      </div>





      {/* Concept Posts */}

      <F_banner />
      {/* Concept Posts */}

    </div>
  )
}

export default Checkout
