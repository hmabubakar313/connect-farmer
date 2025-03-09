import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header/page";


const Landing = () => {
  return (
    <>
      <Header/>
      <div
        className="relative w-screen h-[95vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/landing.jpg')" }}
      >
        <div className="flex flex-col">
          <div className="flex flex-col items-start pl-10 pt-10 text-white">
            <p>
              Welcome to Agricultural Products Rural <br /> Entrepreneurship
              Management System.
            </p>
            <h1 className="pt-2 text-5xl">
              Agriconnect <br /> Hub
            </h1>
          </div>
          <div className="flex flex-col text-white pl-10 pt-2">
            <p>
              Empowering Rural Dreams, Nurturing Agricultural Growth – <br />
              AgriConnect Hub cultivates prosperity from the roots up.
            </p>
            <div className="flex mt-3">
              <button
                type="button"
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 
            focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm 
            px-2 py-3 mt-4 ml-5 w-20 dark:focus:ring-yellow-900"
              >
                Sell Here
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 
            focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm 
            px-2 py-2 mt-4 ml-5 w-20 dark:focus:ring-yellow-900"
              >
                Buy Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
