import React from "react";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Wishlist() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <header>
          <div className=" py-1">
            <div className="container flex justify-between items-center text-white">
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
              >
                {/* your <path> and <circle> here */}
              </svg>
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
              <CiHeart size={30} />
              <span className="text-gray-400 mx-2 text-2xl">|</span>
              <IoBagOutline size={30} />
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

          {/* Icon on the left side */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center space-x-2">
            <IoMdHome className="text-white text-xl ml-32" />
            <IoIosArrowForward className="text-white text-xl" />
            <p>Wishlist</p>
          </div>
        </div>
        <div className="w-full px-4 py-6 bg-white">
          {/* Heading */}
          <div className="flex justify-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">My Wishlist</h1>
          </div>

          {/* Table */}
          <div className="flex justify-center">
            <table className="w-full max-w-5xl text-sm shadow-md bg-white">
              <thead className="bg-gray-100 text-black">
                <tr>
                  <th className="px-4 py-2 text-left">Product</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/wishlist_veg.png"
                        width={50}
                        height={50}
                        alt="Product"
                        className="w-12 h-12"
                      />
                      <p className="text-gray-800 font-medium">
                        Green Capsicum
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-gray-800">1499</td>
                  <td className="px-4 py-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-medium">
                      In Stock
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-center items-center space-x-3">
                      <button className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-1 rounded-full">
                        Add to Cart
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 text-xl leading-none">
                        ×
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/wishlist_veg.png"
                        width={50}
                        height={50}
                        alt="Product"
                        className="w-12 h-12"
                      />
                      <p className="text-gray-800 font-medium">
                        Fresh Sujapuri Mango
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-gray-800">89.99</td>
                  <td className="px-4 py-2">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded text-xs font-medium">
                      Out of Stock
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-center items-center space-x-3">
                      <button
                        className="bg-gray-300 text-gray-500 text-xs font-semibold px-4 py-1 rounded-full cursor-not-allowed"
                        disabled
                      >
                        Add to Cart
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 text-xl leading-none">
                        ×
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Place Order Button on Last Border */}
                <tr className="border-t border-gray-200">
                  <td colSpan={4} className="py-6">
                    <div className="flex justify-center">
                      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md">
                        Place Order
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
          {/* Logo & Description */}
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

export default Wishlist;
