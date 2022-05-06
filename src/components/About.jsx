import React from "react";
import "../index.css";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18">
        <div className="w-full md:w-1/2 h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold mt-40 pt-48">About</h1>
            <div className="flex mt-16 font-light text-gray-500">
              <div className="pr-4"></div>
            </div>
            <div className="flex mt-16 font-light text-gray-500 ml-20"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
