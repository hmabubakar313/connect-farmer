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
      <div className="relative w-full px-14 py-10">
  <div className="relative ml-20">
    <Image src="/buyers_bg.jpg" width={850} height={100} />
    <p className="absolute top-2 left-8 text-black text-lg">
      Aggriconnect Hub
    </p>
  </div>
</div>

    </>
  );
};

export default Header;
