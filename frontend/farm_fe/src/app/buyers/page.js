import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <div className="bg-gray-100 py-2 flex">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <FaFacebook />
            <FaTwitter />
            <div>
              <FaLinkedin className="ml-10" />
            </div>
            <div>
              <span className="ml-5">Welcome to AgriConnect Hub</span>
            </div>
          </div>
          <div className="flex justify-end    pt-2 ">
            <FaPhone className="text-lg  mr-2" />
            <p className="text-lg leading-none">98101929</p>
          </div>
        </div>
      </div>

      <nav className="bg-black w-full z-20 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl mx-auto px-5 flex justify-between items-center">
          <ul className="flex items-center space-x-8 font-medium mb-0 pl-6">
            <li className="relative group">
              <button className="flex items-center py-2 px-3 text-white hover:bg-gray-700 rounded-sm">
                Home
              </button>
            </li>
            <li className="relative group">
              <button className="flex items-center py-2 px-3 text-white hover:bg-gray-700 rounded-sm">
                Shops
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:bg-gray-700 rounded-sm no-underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:bg-gray-700 rounded-sm no-underline"
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="flex items-center bg-transparent text-white px-3 py-2 rounded-md hover:text-gray-400">
            <CiSearch className="mr-1 text-lg" />
            Search
          </button>
        </div>
      </nav>
      <div className="flex justify-center items-start py-10 space-x-4 w-full">
        <div
          className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          style={{ width: "850px" }}
        >
          <Image
            src="/buyers_bg.jpg"
            width={850}
            height={100}
            className="rounded-lg"
            alt=""
          />
          <h2 className="absolute text-black font-bold top-1/4 left-8 -translate-y-2 text-xl">
            Aggriconnect Hub
          </h2>
          <div className="w-1 h-14 bg-gray-400 absolute left-6 top-1/3"></div>
          <h4 className="absolute top-1/3 left-8 -translate-y-1 text-lg">
            Sale up to{" "}
            <span className="text-red-500 font-semibold">30% OFF</span>
          </h4>
          <p className="absolute top-1/3 left-8 mt-4 text-lg">
            Free shipping on all your orders
          </p>
          <button className="absolute top-1/3 left-8 mt-16 px-6 py-3 text-green-500 bg-white border border-green-500 rounded-full">
            Shop Now ➝
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <div
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            style={{ width: "450px" }}
          >
            <Image
              src="/buyers_right.jpg"
              width={450}
              height={100}
              className="rounded-lg"
              alt=""
            />
            <h4 className="absolute left-6 top-6 text-lg">Summer Sale</h4>
            <h2 className="absolute top-14 left-6 text-lg">75% OFF</h2>
            <p className="absolute top-20 left-6 text-lg">
              Only vegetables and fruit
            </p>
            <button className="absolute top-28 left-6 text-lg text-green-800">
              Shop Now ➝
            </button>
          </div>

          <div
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
            style={{ width: "450px", height: "250px" }}
          >
            <Image
              src="/buyers_right.jpg"
              width={450}
              height={100}
              className="rounded-lg"
              alt=""
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-white">Best Deal</p>
              <h1 className="text-2xl text-white">
                Special Products <br></br> Deal of Month{" "}
              </h1>
              <p className="text-base text-white ">Fresh seasonal offers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8">
        <div className="flex gap-8 bg-white border border-gray-300 rounded-xl overflow-hidden items-center py-4 px-4 justify-center ml-4">
          <div className="flex flex-col gap-2 py-2">
            <p className="text-xl font-bold">Free Shipping</p>
            <p className="text-gray-500">Free shipping on all orders</p>
          </div>

          <div className="flex flex-col gap-2 py-2">
            <p className="text-xl font-bold">Customer Support 24/7</p>
            <p className="text-gray-500">Instant access to Support</p>
          </div>

          <div className="flex flex-col gap-2 py-2">
            <p className="text-xl font-bold">100% Secure Payment</p>
            <p className="text-gray-500">We ensure your money is safe</p>
          </div>

          <div className="flex flex-col gap-2 py-2">
            <p className="text-xl font-bold">Money-Back Guarantee</p>
            <p className="text-gray-500">30 Days Money-Back Guarantee</p>
          </div>
        </div>
      </div>
      <h1 className="flex justify-start px-14 py-8">Popular Categories</h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-6 gap-2 bg-white rounded-xl overflow-hidden ">
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-4">
        <div className="grid grid-cols-6 gap-2 bg-white rounded-xl overflow-hidden ">
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>

          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
            <Image
              className="rounded-md object-cover"
              src={"/ctg_1.jpg"}
              height={120}
              width={120}
              alt=""
            />
            <p className="text-lg font-semibold mt-3">Free Shipping</p>
          </div>
        </div>
      </div>
      <h1 className="flex justify-start px-14 py-8">Popular Products</h1>

      <div className="max-w-7xl mx-auto  overflow-x-auto">
        <div className="flex flex-nowrap gap-0">
          <div className="w-1/4 bg-white border  shadow-md p-4 relative">
            <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              Sale 50%
            </span>
            <Image
              className="w-full h-48 object-cover "
              src="/ctg_3.jpg"
              height={450}
              width={450}
              alt=""
            />
            <div className="mt-4">
              <h3 className="text-gray-700 text-lg font-medium">Green Apple</h3>
              <p className="text-black text-xl font-bold">100</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
              </div>
            </div>
            <button className="absolute bottom-4 right-4 bg-gray-100 p-3 rounded-full shadow-md">
              <HiOutlineShoppingBag />
            </button>
          </div>

          <div className="w-1/4 bg-white border  shadow-md p-4 relative">
            <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              Sale 50%
            </span>
            <Image
              className="w-full h-48 object-cover rounded-lg"
              src="/ctg_3.jpg"
              height={450}
              width={450}
              alt=""
            />
            <div className="mt-4">
              <h3 className="text-gray-700 text-lg font-medium">Green Apple</h3>
              <p className="text-black text-xl font-bold">100</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
              </div>
            </div>
            <button className="absolute bottom-4 right-4 bg-gray-100 p-3 rounded-full shadow-md">
              <HiOutlineShoppingBag />
            </button>
          </div>

          <div className="w-1/4 bg-white border  shadow-md p-4 relative">
            <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              Sale 50%
            </span>
            <Image
              className="w-full h-48 object-cover rounded-lg"
              src="/ctg_3.jpg"
              height={450}
              width={450}
              alt=""
            />
            <div className="mt-4">
              <h3 className="text-gray-700 text-lg font-medium">Green Apple</h3>
              <p className="text-black text-xl font-bold">100</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
              </div>
            </div>
            <button className="absolute bottom-4 right-4 bg-gray-100 p-3 rounded-full shadow-md">
              <HiOutlineShoppingBag />
            </button>
          </div>
          <div className="w-1/4 bg-white border  shadow-md p-4 relative">
            <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              Sale 50%
            </span>
            <Image
              className="w-full h-48 object-cover rounded-lg"
              src="/ctg_3.jpg"
              height={450}
              width={450}
              alt=""
            />
            <div className="mt-4">
              <h3 className="text-gray-700 text-lg font-medium">Green Apple</h3>
              <p className="text-black text-xl font-bold">100</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
              </div>
            </div>
            <button className="absolute bottom-4 right-4 bg-gray-100 p-3 rounded-full shadow-md">
              <HiOutlineShoppingBag />
            </button>
          </div>
          <div className="w-1/4 bg-white border  shadow-md p-4 relative">
            <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              Sale 50%
            </span>
            <Image
              className="w-full h-48 object-cover rounded-lg"
              src="/ctg_3.jpg"
              height={450}
              width={450}
              alt=""
            />
            <div className="mt-4">
              <h3 className="text-gray-700 text-lg font-medium">Green Apple</h3>
              <p className="text-black text-xl font-bold">100</p>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
              </div>
            </div>
            <button className="absolute bottom-4 right-4 bg-gray-100 p-3 rounded-full shadow-md">
              <HiOutlineShoppingBag />
            </button>
          </div>
        </div>
      </div>


      <div className="flex gap-4 px-6 py-16">
  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden"
    style={{ width: "424px", height: "536px" }}
  >
    <Image
      src="/buyers_right.jpg"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
      alt=""
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p className="text-white">Best Deal</p>
      <h1 className="text-2xl text-white">
        Special Products <br /> Deal of Month
      </h1>
      <p className="text-base text-white">Fresh seasonal offers</p>
    </div>
  </div>

  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden"
    style={{ width: "424px", height: "536px" }}
  >
    <Image
      src="/buyers_right.jpg"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
      alt=""
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p className="text-white">Best Deal</p>
      <h1 className="text-2xl text-white">
        Special Products <br /> Deal of Month
      </h1>
      <p className="text-base text-white">Fresh seasonal offers</p>
    </div>
  </div>

  <div
    className="relative bg-white shadow-lg rounded-lg overflow-hidden"
    style={{ width: "424px", height: "536px" }}
  >
    <Image
      src="/buyers_right.jpg"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
      alt=""
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p className="text-white">Best Deal</p>
      <h1 className="text-2xl text-white">
        Special Products <br /> Deal of Month
      </h1>
      <p className="text-base text-white">Fresh seasonal offers</p>
    </div>
  </div>
</div>

    </>
  );
};

export default Header;
