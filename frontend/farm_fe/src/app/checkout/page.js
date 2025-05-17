import React from "react";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Checkout() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <header>
          <div className="">
            <div className="bg-black w-full px-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-4 ml-32">
                <MdLocationPin />
                <span className="text-gray-400">Somewhere in Pakistan</span>
              </div>
              <div className="flex items-center text-sm text-gray-200 mr-16"></div>
              <div className="flex items-center space-x-4 mr-16 text-sm text-gray-200">
                <button
                  type="button"
                  className="hover:underline focus:outline-none"
                >
                  Hindi
                </button>
                <button
                  type="button"
                  className="hover:underline focus:outline-none"
                >
                  Urdu
                </button>

                <span className="text-gray-500">|</span>

                <div className="flex items-center space-x-2">
                  <a
                    href="/signup"
                    className="hover:text-white focus:outline-none"
                  >
                    Signup
                  </a>
                  <span className="text-gray-500">/</span>
                  <a
                    href="/login"
                    className="hover:text-white focus:outline-none"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto p-4 flex items-center">
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 504.125 504.125"
              ></svg>
              <span className="text-2xl font-semibold text-black">
                AgriConnect
              </span>
            </div>

            <div className="flex-1 flex justify-start px-24">
              <div className="w-full max-w-md">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 text-black"
                    placeholder="Search..."
                  />
                  <button className="bg-green-700 text-white absolute inset-y-0 right-0 flex items-center justify-center pr-3 pl-3">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 ml-auto mr-56">
              <CiHeart size={30} color="black" />
              <span className="text-gray-400 mx-2 text-2xl">|</span>
              <IoBagOutline size={30} color="black" />
              <div className="flex flex-col ml-1 leading-tight text-black">
                <p>Shopping Cart:</p>
                <p>570</p>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl px-4 py-3 mx-auto text-black ml-32">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                  <a
                    href="#"
                    className="text-black hover:underline"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:underline">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:underline">
                    Pages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:underline">
                    About US
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:underline">
                    Contact US
                  </a>
                </li>
              </ul>
              <div className="flex items-center space-x-4 ml-auto mr-[356px]">
                <IoCallOutline size={20} />
                <p>1231</p>
              </div>
            </div>
          </div>
        </nav>
        <div className="relative w-full h-[100px]">
          <Image
            src="/wishlist_verticle_bg.jpg"
            alt="Wishlist"
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center space-x-2">
            <IoMdHome className="text-white text-xl ml-32" />
            <IoIosArrowForward className="text-white text-xl" />
            <p className="bg-green">Shopping Cart</p>
            <IoIosArrowForward className="text-white text-xl" />
            <p>Checkout</p>
          </div>
        </div>
        <p className="text-black  text-center mt-2">Billing Information</p>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-row justify-between items-start gap-8">
            <div className="w-2/3">
              <form className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstName"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Your First Name"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="lastName"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Your Last Name"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="company"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company Name"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>

                <div className="flex space-x-4">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="country"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="Country"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="state"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      placeholder="State"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="zip"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Zip Code
                    </label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      placeholder="Zip Code"
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label
                    htmlFor="phone"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Your Phone Number"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    id="ship-different"
                    name="shipDifferent"
                    type="checkbox"
                    className="accent-green-500"
                  />
                  <label htmlFor="ship-different" className="text-gray-800">
                    Ship to Different Address
                  </label>
                </div>
              </form>
            </div>

            <div className="w-1/3 bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/wishlist_veg.png"
                      alt="Green Capsicum"
                      className="w-12 h-12 object-cover rounded"
                      width={50}
                      height={50}
                    />
                    <span className="ml-2 text-gray-800">
                      Green Capsicum <span className="font-medium">x5</span>
                    </span>
                  </div>
                  <span className="font-medium text-gray-900">70.00</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/wishlist_veg.png"
                      alt="Red Capsicum"
                      className="w-12 h-12 object-cover rounded"
                      width={50}
                      height={50}
                    />
                    <span className="ml-2 text-gray-800">
                      Red Capsicum <span className="font-medium">x1</span>
                    </span>
                  </div>
                  <span className="font-medium text-gray-900">14.00</span>
                </li>
              </ul>

              <div className="mt-4 space-y-1 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>84.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="border-t pt-1 flex justify-between text-lg font-semibold text-gray-900">
                  <span>Total:</span>
                  <span>84.00</span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    className="h-5 w-5 accent-green-500"
                  />
                  <span className="text-gray-800">Cash on Delivery</span>
                </label>
              </div>

              <button
                type="button"
                className="mt-4 w-full py-2 rounded-full bg-green-500 text-white font-semibold"
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="mt-8 text-black w-full">
  <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
  <br className="" />
  <label htmlFor="order-notes" className="block mb-2 text-sm font-medium text-gray-700">
    Order Notes (optional)
  </label>
  <textarea
    id="order-notes"
    className="border border-gray-300 rounded-lg p-2 w-full h-24"
    placeholder="Notes about your order, e.g. special notes for delivery."
  ></textarea>
</div>

        </div>

      </div>

      <footer className="bg-black text-gray-300">
        <div
          className="
      max-w-7xl mx-auto px-6 py-12
      grid grid-cols-1 md:grid-cols-4 gap-8
      items-start
      text-center md:text-left
    "
        >
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <svg
                className="w-8 h-8 text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 504.125 504.125"
              >
                <path
                  fill="#3A7F0D"
                  d="M339.772,0c0,0,44.536,108.954-146.337,182.138C89.719,221.893,10.059,323.789,105.173,481.193
               c7.877-70.357,41.653-225.485,186.888-260.884c0,0-135.176,50.546-147.117,279.347c69.459,9.752,232.361,16.305,280.726-125.062
               C489.536,187.817,339.772,0,339.772,0z"
                />
                <path
                  fill="#49A010"
                  d="M145.007,498.704c147.456-58.849,254.748-196.71,269.556-361.283C384.418,56.107,339.772,0,339.772,0
               s44.536,108.954-146.337,182.138C89.719,221.893,10.059,323.789,105.173,481.193c7.877-70.357,41.653-225.485,186.888-260.884
               C292.053,220.31,157.279,270.73,145.007,498.704z"
                />
                <circle fill="#3A7F0D" cx="90.459" cy="171.985" r="13.785" />
                <g fill="#49A010">
                  <circle cx="133.782" cy="158.2" r="9.846" />
                  <circle cx="124.921" cy="64.662" r="24.615" />
                  <circle cx="200.736" cy="120.785" r="7.877" />
                  <circle cx="266.713" cy="76.477" r="22.646" />
                </g>
              </svg>
              <span className="text-white text-xl font-semibold">
                AgriConnect HUB
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Agricultural Products Rural Entrepreneurship Management System:
              AgriConnect Hub
            </p>
          </div>

          <div>
            <div className="text-left">
              <ul className="space-y-2 text-sm text-white">
                <li className="pb-2">My Account</li>
                <li>Order History</li>
                <li>Shopping Cart</li>
                <li>Wishlist</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-left">
              <ul className="space-y-2 text-sm text-white">
                <li className="pb-2">My Account</li>
                <li>Order History</li>
                <li>Shopping Cart</li>
                <li>Wishlist</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="text-left">
              <ul className="space-y-2 text-sm text-white">
                <li className="pb-2">My Account</li>
                <li>Order History</li>
                <li>Shopping Cart</li>
                <li>Wishlist</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mx-6" />
      </footer>
    </>
  );
}

export default Checkout;
