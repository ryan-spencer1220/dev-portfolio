import React from "react";
import { IconContext } from "react-icons";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import DevPortfolio from "../assets/screenshots/dev-portfolio.png";

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
                      src={DevPortfolio}
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
                        <SiTailwindcss />
                      </div>
                    </IconContext.Provider>

                    <IconContext.Provider
                      value={{
                        size: "3em",
                        className: "global-class-name text-accent",
                      }}
                    >
                      <div>
                        <FaNode />
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center">
                  <h2 className="card-title">Developer Portfolio</h2>
                  <p>
                    This project functioned as my capstone project for Epicodus
                    and was primarily built with React. Several UI
                    libaries/frameworks were also used, including Tailwind CSS,
                    Daisy UI, and Animate.CSS. Users can view various personal
                    projects I've worked on, reach out with any inquiries, and
                    learn basic information about me as a developer.
                  </p>
                  <p>
                    My capstone project gave me the opportunity to work
                    independently on a decent sized project, as well as learn
                    new technologies outside of the Epicodus curriculum. The
                    project also demonstrates my ability to work with APIs and
                    designing an application with design and UX in mind.
                  </p>
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://en.wikipedia.org/wiki/Recursion"
                      className="btn btn-secondary my-10"
                      target="_blank"
                    >
                      View Live Site
                    </a>
                    <a
                      href="https://github.com/ryan-spencer1220/dev-portfolio"
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
            htmlFor="my-modal-9"
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
