import React from "react";
import barChart from "../assets/projects/bar-chart.png";
import goals from "../assets/projects/goal.png";
import coding from "../assets/projects/web-development.png";
import course from "../assets/projects/online-course.png";
import beer from "../assets/projects/beer-mug.png";
import quiz from "../assets/projects/quiz.png";

const Projects = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18 bg-accent-content">
        <div className="w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold m-20 pt-18 text-center text-secondary-content">
              Projects
            </h1>
            <div className="flex flex-col w-full lg:flex-row mt-20">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img src={goals} alt="Goal Logo" height={120} width={120} />
                  </figure>
                  <p class="text-xl font-bold">Goal Tracker Application</p>
                  <label for="my-modal-3" className="btn modal-button">
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        for="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg text-center font-bold">
                        Goal Tracker Application
                      </h3>
                      <p className="py-4">What?</p>
                      <p className="py-4">Why?</p>
                    </div>
                  </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={barChart}
                      alt="Graph Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p class="text-xl font-bold">Sorting Algorithm Visualizer</p>
                  <label for="my-modal-3" className="btn modal-button">
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        for="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg text-center font-bold">
                        Goal Tracker Application
                      </h3>
                      <p className="py-4">What?</p>
                      <p className="py-4">Why?</p>
                    </div>
                  </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={coding}
                      alt="Developer Logo"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p class="text-xl font-bold">Developer Portfolio</p>
                  <label for="my-modal-3" className="btn modal-button">
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        for="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">
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
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img
                      src={course}
                      alt="Online Course"
                      height={120}
                      width={120}
                    />
                  </figure>
                  <p class="text-xl font-bold">Learn To React</p>
                  <label for="my-modal-3" className="btn modal-button">
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        for="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">
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
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img src={beer} alt="Beer Mug" height={120} width={120} />
                  </figure>
                  <p class="text-xl font-bold">Epicodus Taproom</p>
                  <label for="my-modal-3" className="btn modal-button">
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        for="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">
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
                <div className="grid flex-grow h-96 w-96 card bg-base-300 rounded-box place-items-center shadow-2xl">
                  <figure>
                    <img src={quiz} alt="Quiz" height={120} width={120} />
                  </figure>
                  <p class="text-xl font-bold">Programming Language Quiz</p>
                  <label for="my-modal-3" className="btn modal-button">
                    View Project
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                      <label
                        for="my-modal-3"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
