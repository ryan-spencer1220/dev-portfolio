import React from "react";
import "../index.css";

const Intro = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18">
        <div className="bg-white w-full md:w-1/2 h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold mt-14 pt-48">Ryan</h1>
            <h1 className="text-6xl font-bold mt-8">Spencer</h1>
            <div className="flex mt-16 font-light text-gray-500">
              <div className="pr-4">
                <span className="uppercase">Country</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2">
                  Japan
                </p>
              </div>
              <div className="pr-4">
                <span className="uppercase">Region</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2">
                  Kanto
                </p>
              </div>
              <div className="pr-4">
                <span className="uppercase">island</span>
                <p className="text-2xl text-gray-900 font-semibold pt-2">
                  Honshu
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-600 w-full md:w-1/2 h-screen">
          <img
            src="https://wallpaperaccess.com/full/109538.jpg"
            className="h-screen w-full"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
