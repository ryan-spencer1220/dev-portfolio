import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18">
        <div className="#e9f1ff w-full md:w-1/2 h-screen">
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
            <div className="flex mt-16 font-light text-gray-500 ml-20"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
