import React from "react";

import { IconContext } from "react-icons";
import sortingVisualizer from "../assets/screenshots/sorting-visualizer.png";
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
                      src={sortingVisualizer}
                      alt="Screenshot"
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
                  <h2 className="card-title">Sorting Algorithm Visualizer</h2>
                  <p>
                    This project is a web application designed to help users
                    visualize how various common sorting algorithms function in
                    programming. The application visualizes quick sort, bubble
                    sort, merge sort, selection sort, and insertion sort.
                  </p>
                  <p>
                    I felt it was important to hightlight this project since
                    this was the culmination of our first team week project at
                    Epicodus. While it demonstrated our group's understanding of
                    technical concepts, it also demonstrated the ability to
                    collaborate, communicate effectively, and meet deadlines.
                  </p>
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://statuesque-platypus-d7f313.netlify.app/"
                      className="btn btn-secondary my-10"
                      target="_blank"
                    >
                      View Live Site
                    </a>
                    <a
                      href="https://github.com/ryan-spencer1220/sorting-algorithm-visualizer"
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
            htmlFor="my-modal-8"
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
