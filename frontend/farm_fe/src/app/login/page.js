import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/page";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Signup = () => {
  return (
    <>
      <Header />
      <div
        className="relative w-screen h-[95vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/signup.jpg')" }}
      >
        <div className="flex flex-col">

          <div className="flex justify-between items-center pl-10 pt-10 text-black w-full">
            <div className="w-1/2">
              <h1 className="text-4xl font-bold">Get started Now</h1>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <p className="text-1xl font-bold">Reach your <br/> customers faster,</p>
              <p className="text-3xl font-bold">With Us.</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col text-black pl-10 mt-2">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-80 text-black"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-80"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-80"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mt-4 flex items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree to the <u>terms &amp; policy</u>
                </label>
              </div>
            </form>
            <div className="mt-4">
              <button
                type="button"
                className="bg-blue-500 border border-blue-500 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-80"
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                type="button"
                className="flex items-center bg-transparent border border-gray-300 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 p-2.5 w-40 justify-center"
              >
                <FcGoogle className="mr-2" />
                Sign in with Google
              </button>
              <button
                type="button"
                className="flex items-center bg-transparent border border-gray-300 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 p-2.5 w-40 justify-center"
              >
                <FaApple className="mr-2" />
                Sign in with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
