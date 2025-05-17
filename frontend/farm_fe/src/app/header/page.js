"use client"
import React, { useState } from "react";
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


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-100 py-2 flex">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <FaFacebook />
            <FaWhatsapp />
            <FaLinkedin />
            <FaTwitter />
            <span>Welcome to AgriConnect Hub</span>
          </div>
        </div>
      </div>

      <nav className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={"/logo.png"} alt="Logo" width={150} height={150} />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="pr-5 mt-3">
              <CiSearch />
            </div>
            <div className="pr-5 mt-3">
              <PiShoppingCartSimple />
            </div>
            <div className="flex">
              <button
                type="button"
                className="flex items-center gap-2 text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                <FaPhoneAlt />
                Call Anytime
                <br />
                0123456
              </button>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 bg-white"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-black">
              <li>
                <a
                  href="#"
                  className="px-3 md:p-0 text-black rounded-sm md:bg-transparent no-underline border-none"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 md:p-0 text-black rounded-sm hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 no-underline border-none"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 md:p-0 text-black rounded-sm hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 no-underline border-none"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 md:p-0 text-black rounded-sm hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 no-underline border-none"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
