import React from "react";
import { IconContext } from "react-icons";
import weatherAPI from "../assets/screenshots/weather-api.png";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
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
                      src={weatherAPI}
                      alt="Weather Screenshot"
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
                        <FaCss3Alt />
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
                  <h2 className="card-title">Weather API App</h2>
                  <p>
                    This application utilizes the AccuWeather API and allows
                    users to enter in a location and return the temperature and
                    weather of that area. Main image changes based on the
                    current time within the area entered by the user. The
                    application is styled with Bootstrap and plain CSS.
                  </p>
                  <p>
                    This was an early web application that was built as part of
                    the Epicodus curriculum. While relatively simple, the
                    project does showcase my ability to work with APIs and
                    maniupulate data from a third party source. In the context
                    of my remaining projects I think this application shows
                    personal growth as many of my recent projects are
                    significantly more complex.
                  </p>
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://thriving-genie-e3c8de.netlify.app/"
                      target="_blank"
                      className="btn btn-secondary my-10"
                    >
                      View Live Site
                    </a>
                    <a
                      href="https://github.com/ryan-spencer1220/weather-api-application"
                      target="_blank"
                      className="btn btn-secondary my-10"
                    >
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="my-modal-10"
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
