import React from "react";
import barChart from "../assets/projects/bar-chart.png";
import goals from "../assets/projects/goal.png";
import coding from "../assets/projects/web-development.png";
import course from "../assets/projects/online-course.png";
import beer from "../assets/projects/beer-mug.png";
import quiz from "../assets/projects/quiz.png";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { BsMedium } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18 bg-accent-content">
        <div className="w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold text-accent m-20 pt-18 text-center">
              Projects
            </h1>
            <div className="flex flex-col w-full lg:flex-row mt-20">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-72 w-72 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img src={goals} alt="Goal Logo" height={120} width={120} />
                  </figure>
                  <p className="text-xl font-bold text-accent">
                    Goal Tracker Application
                  </p>
                  <label for="my-modal-7" class="btn modal-button">
                    open modal
                  </label>

                  <input type="checkbox" id="my-modal-7" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box w-11/12 max-w-5xl">
                      <div className="flex flex-row gap-4">
                        <div className="basis-1/2">
                          <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                              <h2 className="card-title">About Me</h2>
                              <p>
                                Full-time student at Epicodus specializing in
                                JavaScript, React, and C#. Looking for an
                                opportunity to combine my background in business
                                management with my experience in software
                                development. Prior to Epicodus I was an active
                                member of the craft beer industry as the general
                                manager of Bailey's Taproom in Portland, Oregon.
                                I am a communicative, detail oriented, team
                                player who presents technical information
                                effectively with a passion for education and
                                personal growth. Take a look at my work or get
                                in touch!
                              </p>
                              <div className="card-actions justify-end"></div>
                            </div>
                          </div>
                        </div>
                        <div className="basis-1/2">
                          <div className="card bg-base-100 shadow-xl">
                            <div className="card-body items-center">
                              <div className="grid grid-flow-col gap-4">
                                <a href="https://github.com/ryan-spencer1220">
                                  <IconContext.Provider
                                    value={{
                                      size: "3em",
                                      className:
                                        "global-class-name text-accent",
                                    }}
                                  >
                                    <div>
                                      <GoMarkGithub />
                                    </div>
                                  </IconContext.Provider>
                                </a>
                                <a href="https://www.linkedin.com/in/ryan-spencer-pdx/">
                                  <IconContext.Provider
                                    value={{
                                      size: "3em",
                                      className:
                                        "global-class-name text-accent",
                                    }}
                                  >
                                    <div>
                                      <GrLinkedin />
                                    </div>
                                  </IconContext.Provider>
                                </a>
                                <a href="https://medium.com/@ryan.spencer1220">
                                  <IconContext.Provider
                                    value={{
                                      size: "3em",
                                      className:
                                        "global-class-name text-accent",
                                    }}
                                  >
                                    <div>
                                      <BsMedium />
                                    </div>
                                  </IconContext.Provider>
                                </a>
                              </div>
                              <button className="btn btn-secondary my-10">
                                View Resume
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-action">
                        <label for="my-modal-7" class="btn">
                          Yay!
                        </label>
                      </div>
                    </div>
                  </div>
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
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-8"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg text-center font-bold text-accent">
                        Goal Tracker Application
                      </h3>
                      <p className="py-4">What?</p>
                      <p className="py-4">Why?</p>
                    </div>
                  </div>
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
                      src={course}
                      alt="Online Course"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p className="text-xl font-bold text-accent">
                    Learn To React
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
