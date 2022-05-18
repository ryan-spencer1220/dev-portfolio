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
      <div class="modal">
        <div class="modal-box w-11/12 max-w-5xl">
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
                    Full-time student at Epicodus specializing in JavaScript,
                    React, and C#. Looking for an opportunity to combine my
                    background in business management with my experience in
                    software development. Prior to Epicodus I was an active
                    member of the craft beer industry as the general manager of
                    Bailey's Taproom in Portland, Oregon. I am a communicative,
                    detail oriented, team player who presents technical
                    information effectively with a passion for education and
                    personal growth. Take a look at my work or get in touch!
                  </p>
                  <p>
                    Full-time student at Epicodus specializing in JavaScript,
                    React, and C#. Looking for an opportunity to combine my
                    background in business management with my experience in
                    software development.
                  </p>
                  <div className="grid grid-flow-col gap-4">
                    <button className="btn btn-secondary my-10">
                      View Live Site
                    </button>
                    <button className="btn btn-secondary my-10">
                      View Source Code
                    </button>
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
