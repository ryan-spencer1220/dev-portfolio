import React from "react";

const Technologies = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18">
        <div className=" bg-slate-100 w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold m-20 pt-18 text-center">
              Technologies
            </h1>
            <div className="flex flex-col w-full lg:flex-row mt-20">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  React
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  C#
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  Node.js
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full lg:flex-row mt-20">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  JavaScript
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  MySQL
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  MongoDB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
