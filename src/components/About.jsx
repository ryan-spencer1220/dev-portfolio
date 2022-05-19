import React from "react";
import "../index.css";
import GitHubResults from "../API/GitHubResults";
import RunningResults from "../API/RunningResults";
import ChessResults from "../API/ChessResults";

const About = () => {
  return (
    <>
      <div className="mx-auto flex flex-wrap md items-center h-screen pt-18 bg-accent-content">
        <div className=" w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold mt-20 mb-10 text-center text-accent underline underline-offset-8">
              About
            </h1>
            <div className="flex flex-row gap-4">
              <div className="basis-1/2">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body items-center">
                    <h2 className="card-title">Professional</h2>
                    <p>
                      Prior to Epicodus I was an active member of the craft beer
                      industry. Working in hospitality was a great opportunity
                      to develop my communication and problem-solving abilities.
                      Later I was able to continue to hone these skills as a
                      digital marketing specialist. In this role I had the
                      opportunity to work on a small team in a remote
                      environment and get a glimpse at what it might be like to
                      work as a developer.
                    </p>
                    <a href="#projects" className="btn btn-secondary">
                      View Resume
                    </a>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body items-center">
                    <h2 className="card-title">Educational</h2>
                    <p>
                      While at Epicodus, our time was spent pair programming for
                      full, eight-hour days. During The first third of our
                      program, we built a solid understanding of Javascript,
                      HTML and CSS. Next, we utilized strongly-typed languages
                      by spending six weeks with C#/.NET Core. Finally, we built
                      upon the fundamentals we learned in JavaScript by taking a
                      deep dive into React and Firebase. My conventional post
                      secondary education lies within Business Management, I
                      graduated from the Univeristy of Oregon with a B.S. in
                      business management.
                    </p>
                    <div className="card-actions justify-end"></div>

                    <a
                      href="https://www.epicodus.com/"
                      className="btn btn-secondary"
                      target="_blank"
                    >
                      Learn About Epicouds
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-6xl font-bold mt-20 mb-10 pt-18 text-center text-accent underline underline-offset-8">
              Hobbies
            </h1>
            <div className="flex flex-row gap-4">
              <div className="basis-1/2 flex flex-col justify-center items-center">
                <h6 className="text-3xl font-bold mt-10 pt-18 text-center text-accent">
                  Chess
                </h6>
                <p className="text-center mb-8 text-accent">
                  Data provided via the Chess.com API
                </p>

                <ChessResults />
              </div>
              <div className="basis-1/2 flex flex-col justify-center items-center">
                <h6 className="text-3xl font-bold mt-10 pt-18 text-center text-accent">
                  Running
                </h6>
                <p className="text-center mb-8 text-accent">
                  Data provided via the MapMyRun API
                </p>

                <RunningResults />
              </div>
            </div>
            <div className="flex flex-row gap-4 content-centeritems-center">
              <div className="basis-full flex flex-col justify-center items-center">
                <h6 className="text-3xl font-bold mt-10 pt-18 text-center text-accent">
                  Coding
                </h6>
                <p className="text-center mb-8 text-accent">
                  Data provided via the GitHub API
                </p>
                <GitHubResults />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
