import React from "react";
import { IconContext } from "react-icons";
import epicodusTaproom from "../assets/screenshots/epicodus-taproom.png";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const GitHubFinder = () => {
  return (
    <>
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
          <div className="flex flex-row gap-4">
            <div className="basis-1/2">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Preview</h2>
                  <figure>
                    <img
                      src={epicodusTaproom}
                      alt="Github Logo"
                      height={1060}
                      width={1060}
                    />
                  </figure>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl mt-4">
                <div className="card-body">
                  <h2 className="card-title">Tech Stack</h2>

                  <div className="grid grid-flow-col">
                    <IconContext.Provider
                      value={{
                        size: "3em",
                        className: "global-class-name text-accent",
                      }}
                    >
                      <div>
                        <DiReact />
                      </div>
                    </IconContext.Provider>

                    <IconContext.Provider
                      value={{
                        size: "3em",
                        className: "global-class-name text-accent",
                      }}
                    >
                      <div>
                        <SiJavascript />
                      </div>
                    </IconContext.Provider>

                    <IconContext.Provider
                      value={{
                        size: "3em",
                        className: "global-class-name text-accent",
                      }}
                    >
                      <div>
                        <FaBootstrap />
                      </div>
                    </IconContext.Provider>

                    <IconContext.Provider
                      value={{
                        size: "3em",
                        className: "global-class-name text-accent",
                      }}
                    >
                      <div>
                        <FaHtml5 />
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center">
                  <h2 className="card-title">Epicodus Taproom</h2>
                  <p>
                    This project was built for our final code review in our
                    React module at Epicouds. The application functions as
                    taproom keg management system. The app was built with React,
                    Bootstrap, and CSS, it showcases full CRUD functionality
                    alowing users to add, edit, and delete kegs. Users can also
                    update keg volumes by increasing/decreasing keg volume.
                  </p>
                  <p>
                    I felt it was important to include this project since it was
                    an early project in my porfolio that utilizes React. It
                    showcases CRUD functionality and also has a clean, easy to
                    navigate UI.
                  </p>
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://628450874a6fbe0c46645359--singular-panda-4a364a.netlify.app/"
                      className="btn btn-secondary my-10"
                      target="_blank"
                    >
                      View Live Site
                    </a>
                    <a
                      href="https://github.com/ryan-spencer1220/tap-room "
                      className="btn btn-secondary my-10"
                      target="_blank"
                    >
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="my-modal-11"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
        </div>
      </div>
    </>
  );
};

export default GitHubFinder;
