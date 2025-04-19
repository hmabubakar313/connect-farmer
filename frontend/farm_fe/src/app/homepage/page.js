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
    <div className="flex flex-wrap justify-center gap-4 p-10">


<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

      </div>
    </>
  );
};

export default Landing;
