import React from "react";
import Button from "./Button";
import "../index.css";

const Intro = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18">
        <div className="bg-slate-100 w-full md:w-1/2 h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold mt-40 pt-48">Ryan</h1>
            <h1 className="text-6xl font-bold mt-8">Spencer</h1>
            <div className="flex mt-16 font-light text-gray-500">
              <div className="pr-4">
                <p className="text-2xl text-gray-900 font-semibold">
                  Software Engineer | Portland, OR
                </p>
              </div>
            </div>
            <div className="flex mt-16 font-light text-gray-500 ml-20">
              <Button>Projects</Button>
            </div>
          </div>
        </div>
        <div className="hero-image w-full md:w-1/2 rounded">
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
