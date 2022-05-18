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
import GitHubFinder from "../modals/GithubFinder";
import DevPortfolio from "../modals/DevPortfolio";
import LanguageQuiz from "../modals/LanguageQuiz";
import SortingAlgo from "../modals/SortingAlgo";
import Taproom from "../modals/Taproom";
import WeatherAPI from "../modals/WeatherAPI";

const Projects = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18 bg-accent-content">
        <div className="w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold text-accent m-20 pt-18 text-center underline underline-offset-8">
              Projects
            </h1>
            <div className="flex flex-col w-full lg:flex-row mt-20">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-72 w-72 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={github}
                      alt="Goal Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-xl font-bold text-accent">GitHub Finder</p>
                  <label
                    for="my-modal-7"
                    class="btn btn-secondary modal-button"
                  >
                    View Project
                  </label>

                  <input type="checkbox" id="my-modal-7" class="modal-toggle" />
                  <GitHubFinder />
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="grid flex-grow h-72 w-72 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={barChart}
                      alt="Graph Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-xl font-bold text-accent">
                    Sorting Algorithm Visualizer
                  </p>
                  <label
                    htmlFor="my-modal-8"
                    className="btn modal-button btn-secondary"
                  >
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-8"
                    className="modal-toggle"
                  />
                  <SortingAlgo />
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="grid flex-grow h-72 w-72   card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={coding}
                      alt="Developer Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-xl font-bold text-accent">
                    Developer Portfolio
                  </p>
                  <label
                    htmlFor="my-modal-9"
                    className="btn modal-button btn-secondary"
                  >
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-9"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-9"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold text-accent">
                        Congratulations random Interner use
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

            <div className="flex flex-col w-full lg:flex-row mt-20">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-72 w-72 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={weather}
                      alt="Online Course"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-xl font-bold text-accent">
                    Weather API App
                  </p>
                  <label
                    htmlFor="my-modal-10"
                    className="btn modal-button btn-secondary"
                  >
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-10"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-10"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold text-accent">
                        Goal Tracker Application
                      </h3>
                      <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="grid flex-grow h-72 w-72   card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img src={beer} alt="Beer Mug" height={120} width={120} />
                  </figure>
                  <p className="text-xl font-bold text-accent">
                    Epicodus Taproom
                  </p>
                  <label
                    htmlFor="my-modal-11"
                    className="btn modal-button btn-secondary"
                  >
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-11"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-11"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold text-accent">
                        Goal Tracker Application
                      </h3>
                      <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="grid flex-grow h-72 w-72   card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img src={quiz} alt="Quiz" height={120} width={120} />
                  </figure>
                  <p className="text-xl font-bold text-accent">
                    Programming Language Quiz
                  </p>
                  <label
                    htmlFor="my-modal-12"
                    className="btn modal-button btn-secondary"
                  >
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-12"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-12"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold text-accent">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
