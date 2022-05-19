import React from "react";
import barChart from "../assets/projects/bar-chart.png";
import weather from "../assets/projects/rain.png";
import coding from "../assets/projects/web-development.png";
import github from "../assets/projects/github-sign.png";
import beer from "../assets/projects/beer-mug.png";
import quiz from "../assets/projects/quiz.png";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { BsMedium } from "react-icons/bs";
import githubFinder from "../assets/screenshots/github-finder.png";
import epicodusTaproom from "../assets/screenshots/epicodus-taproom.png";
import languageQuiz from "../assets/screenshots/language-quiz.png";
import sortingVisualizer from "../assets/screenshots/sorting-visualizer.png";
import weatherAPI from "../assets/screenshots/weather-api.png";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const GitHubFinder = () => {
  return (
    <>
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex flex-row gap-4">
            <div className="basis-1/2">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Preview</h2>
                  <figure>
                    <img
                      src={githubFinder}
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
                        <SiFirebase />
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center">
                  <h2 className="card-title">GitHub Finder</h2>
                  <p>
                    GitHub Finder is an application utilizing React, Tailwind
                    CSS, and Firebase. This project was a component of a third
                    party React course availble on Udemy. Users can enter a
                    github user name and return a dashboard with statics about
                    the user including their avatar, repos, and general personal
                    information.
                  </p>
                  <p>
                    I thought it might be interesting to showcase this project
                    since it is a fullstack application and showcases my ability
                    to work with a database. This project also relies heavily on
                    the GitHub API and showcases my ability to integrate API
                    calls into a clean, user-friendly interface.
                  </p>
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://roaring-palmier-75761b.netlify.app/"
                      className="btn btn-secondary my-10"
                      target="_blank"
                    >
                      View Live Site
                    </a>
                    <a
                      href="https://github.com/ryan-spencer1220/github-finder"
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
            htmlFor="my-modal-7"
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
