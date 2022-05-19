import React from "react";
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
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";

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
                      src={languageQuiz}
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
                        <DiJqueryLogo />
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
                  <h2 className="card-title">Programming Language Quiz</h2>
                  <p>
                    Theis application was one of our first code review projects
                    at Epicouds. Users can navigate through a list of multiple
                    choice questions. Based on the answers given by the user, a
                    programming language is presented to the user and the
                    specific language presented is dependent upon the user
                    answers.
                  </p>
                  <p>
                    This was a very simple and early project in my programming
                    career. However I felt that it was important to highlight
                    since it showcases growth and provides context within the
                    larger picutre of other projects highlighted in this
                    portfolio.
                  </p>
                  <div className="grid grid-flow-col gap-4">
                    <a
                      href="https://ryan-spencer1220.github.io/programming-language-selector/"
                      className="btn btn-secondary my-10"
                      target="_blank"
                    >
                      View Live Site
                    </a>
                    <a
                      href="https://github.com/ryan-spencer1220/programming-language-selector"
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
            htmlFor="my-modal-12"
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
