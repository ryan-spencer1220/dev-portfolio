import React from "react";
import javascriptLogo from "../assets/javascript.png";
import mongoLogo from "../assets/mongodb.png";
import csharpLogo from "../assets/csharp.png";
import mysqlLogo from "../assets/mysql.png";
import nodeLogo from "../assets/node-js.png";
import reactLogo from "../assets/react.png";

const Technologies = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18 bg-neutral-content">
        <div className="w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold m-20 pt-18 text-center">
              Technologies
            </h1>
            <div className="flex flex-col w-full lg:flex-row mt-20">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  <figure>
                    <img
                      src={reactLogo}
                      alt="React Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <label for="my-modal-3" className="btn modal-button">
                    open modal
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        for="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">
                        Congratulations random Interner user!
                      </h3>
                      <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  <figure>
                    <img
                      src={csharpLogo}
                      alt="C# Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  C#
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  <figure>
                    <img
                      src={nodeLogo}
                      alt="JavaScript Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  Node.js
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full lg:flex-row mt-20">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  <figure>
                    <img
                      src={javascriptLogo}
                      alt="JavaScript Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  JavaScript
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  <figure>
                    <img
                      src={mysqlLogo}
                      alt="MySQL Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  MySQL
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center">
                  <figure>
                    <img
                      src={mongoLogo}
                      alt="Mongo DB Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
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
