import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/page";
import { MdLocationPin } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { FaCarSide } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

const Landing = () => {
  return (
    <>
      <div className="bg-gray-100 py-1">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <MdLocationPin />
            <span className="text-gray-400">Somewhere in Pakistan</span>
          </div>
          <div className="flex items-center space-x-4">
            <p>Urdu</p>
            <p>English</p>
          </div>
        </div>
      </div>

      <nav className="bg-white text-black w-full z-20 border-gray-200">
        <div className="max-w-screen-xl mx-auto px-5 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <ul className="flex items-center space-x-8 font-medium mb-0">
              <li>
                <button className="flex items-center py-2 px-3 hover:bg-gray-700 rounded-sm">
                  Home
                </button>
              </li>
              <li>
                <button className="flex items-center py-2 px-3 hover:bg-gray-700 rounded-sm">
                  Shops
                </button>
              </li>
              <li>
                <button className="flex items-center py-2 px-3 hover:bg-gray-700 rounded-sm">
                  About
                </button>
              </li>
              <li>
                <button className="flex items-center py-2 px-3 hover:bg-gray-700 rounded-sm">
                  Contact
                </button>
              </li>
            </ul>
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="ml-5"
            />
          </div>

          <div className="flex items-center space-x-6">
            <p>0123451</p>
            <div className="flex items-center space-x-4 text-xl">
              <CiSearch />
              <CiHeart />
              <IoBagOutline />
              <GoPerson />
            </div>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="https://picsum.photos/1920/600?random=1"
              alt="Slide 1"
              width={1920}
              height={600}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://picsum.photos/1920/600?random=2"
              alt="Slide 2"
              width={1920}
              height={600}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <Image
              src="https://picsum.photos/1920/600?random=3"
              alt="Slide 3"
              width={1920}
              height={600}
              className="d-block w-100"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center mb-4">
            <Image
              src={"fast-delivery.svg"}
              alt="Fast Delivery"
              width={50}
              height={30}
              className="rounded-lg"
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center mb-4">
            <Image
              src={"support.svg"}
              alt="Fast Delivery"
              width={50}
              height={30}
              className="rounded-lg"
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center mb-4">
            <Image
              src={"security.svg"}
              alt="Fast Delivery"
              width={50}
              height={30}
              className="rounded-lg"
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-center mb-4">
            <Image
              src={"package-box.svg"}
              alt="Fast Delivery"
              width={50}
              height={30}
              className="rounded-lg"
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the
          </p>
        </a>
      </div>

      <h1 className="ml-10">Heello</h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center gap-4 p-10">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src="/f.jpg"
                alt=""
                width={"500"}
                height={"200"}
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-normal  text-black-700 dark:text-black-700">
                Best Fruits
              </p>
              <b>195</b>
              <p>⭐⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-10">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src="/f.jpg"
                alt=""
                width={"500"}
                height={"200"}
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-normal  text-black-700 dark:text-black-700">
                Best Fruits
              </p>
              <b>195</b>
              <p>⭐⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-10">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src="/f.jpg"
                alt=""
                width={"500"}
                height={"200"}
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-normal  text-black-700 dark:text-black-700">
                Best Fruits
              </p>
              <b>195</b>
              <p>⭐⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-8">
        <h1 className="text-lg font-semibold mb-4 ml-5">Hello Section</h1>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-wrap justify-center gap-3 px-6">
            <div
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm
                 dark:bg-gray-800 dark:border-gray-700
                 flex flex-col items-center text-center p-4"
            >
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/f.jpg"
                  alt="Vegetables"
                  width={128} // w-32
                  height={80} // h-20
                />
              </a>
              <div className="mt-3">
                <p className="text-sm font-medium">Vegetables</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  145 products
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 px-6">
            <div
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm
                 dark:bg-gray-800 dark:border-gray-700
                 flex flex-col items-center text-center p-4"
            >
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/f.jpg"
                  alt="Vegetables"
                  width={128} // w-32
                  height={80} // h-20
                />
              </a>
              <div className="mt-3">
                <p className="text-sm font-medium">Vegetables</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  145 products
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 px-6">
            <div
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm
                 dark:bg-gray-800 dark:border-gray-700
                 flex flex-col items-center text-center p-4"
            >
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src="/f.jpg"
                  alt="Vegetables"
                  width={128} // w-32
                  height={80} // h-20
                />
              </a>
              <div className="mt-3">
                <p className="text-sm font-medium">Vegetables</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  145 products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
};

export default Landing;
