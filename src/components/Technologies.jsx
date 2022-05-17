import React from "react";
import javascriptLogo from "../assets/technologies/javascript.png";
import mongoLogo from "../assets/technologies/mongodb.png";
import csharpLogo from "../assets/technologies/csharp.png";
import mysqlLogo from "../assets/technologies/mysql.png";
import nodeLogo from "../assets/technologies/node-js.png";
import reactLogo from "../assets/technologies/react.png";

const Technologies = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18 bg-neutral-content">
        <div className="w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold m-20 pt-18 text-center text-secondary underline underline-offset-8">
              Technologies
            </h1>
            <div className="flex flex-col w-full lg:flex-row mt-20">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-72 w-72 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={reactLogo}
                      alt="React Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-2xl font-bold">React / Redux</p>
                  <label
                    htmlFor="my-modal-1"
                    className="btn modal-button btn-primary"
                  >
                    Learn More
                  </label>

                  <input
                    type="checkbox"
                    id="my-modal-1"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-1"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">React / Redux</h3>
                      <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-72 w-72 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={csharpLogo}
                      alt="C# Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-2xl font-bold">C# / ASP.NET</p>

                  <label
                    htmlFor="my-modal-2"
                    className="btn modal-button btn-primary"
                  >
                    Learn More
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-2"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-2"
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
                <div className="grid flex-grow h-72 w-72 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={nodeLogo}
                      alt="JavaScript Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-2xl font-bold">Node.js</p>

                  <label
                    htmlFor="my-modal-3"
                    className="btn modal-button btn-primary"
                  >
                    Learn More
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-3"
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
              </div>
            </div>

            <div className="divider mt-20"></div>

            <div className="flex flex-col w-full lg:flex-row mt-20">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-72 w-72 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={javascriptLogo}
                      alt="JavaScript Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-2xl font-bold">JavaScript</p>

                  <label
                    htmlFor="my-modal-4"
                    className="btn modal-button btn-primary"
                  >
                    Learn More
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-4"
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
                <div className="grid flex-grow h-72 w-72 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={mysqlLogo}
                      alt="MySQL Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-2xl font-bold">MySQL</p>

                  <label
                    htmlFor="my-modal-5"
                    className="btn modal-button btn-primary"
                  >
                    Learn More
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-5"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-5"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <div className="grid flex-grow place-items-center">
                        <h3 className="text-lg font-bold text-center">MySQL</h3>
                        <p className="py-4">
                          MySQL was a core technology of the Epicodus curiculum.
                          During our C# module our cohort worked closely with
                          one-to-one, one-to-many, and many-to-many
                          relationships with MySQL. Our C# team week project
                          utilized MySQL to collect and store user progress for
                          an educational web application.
                        </p>
                        <div className="btn-secondary btn">
                          Check Out A Project!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-72 w-72 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={mongoLogo}
                      alt="Mongo DB Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-2xl font-bold">MongoDB</p>

                  <label
                    htmlFor="my-modal-6"
                    className="btn modal-button btn-primary"
                  >
                    Learn More
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-6"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <div className="grid flex-grow place-items-center">
                        <h3 className="text-lg font-bold text-center">
                          MongoDB
                        </h3>
                        <p className="py-4">
                          While MongoDB was not a core technology represented in
                          the Epicodus curriculim, the database platform has
                          been my go-to option for personal projects and the
                          subject of several courses I've completed outside of
                          Epicodus!
                        </p>
                        <div className="btn-secondary btn">
                          Check Out A Project!
                        </div>
                      </div>
                    </div>
                  </div>
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
