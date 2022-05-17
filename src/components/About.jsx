import React from "react";
import "../index.css";

const About = () => {
  return (
    <>
      <div className="mx-auto flex flex-wrap md items-center h-screen pt-18 bg-accent-content">
        <div className=" w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold mt-20 mb-10 text-center text-neutral-content">
              About
            </h1>
            <div className="flex flex-row gap-4">
              <div className="basis-1/2">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">About Me</h2>
                    <p>
                      Full-time student at Epicodus specializing in JavaScript,
                      React, and C#. Looking for an opportunity to combine my
                      background in business management with my experience in
                      software development. Prior to Epicodus I was an active
                      member of the craft beer industry as the general manager
                      of Bailey's Taproom in Portland, Oregon. I am a
                      communicative, detail oriented, team player who presents
                      technical information effectively with a passion for
                      education and personal growth. Take a look at my work or
                      get in touch!
                    </p>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">Social Links</h2>
                    <p>
                      Full-time student at Epicodus specializing in JavaScript,
                      React, and C#. Looking for an opportunity to combine my
                      background in business management with my experience in
                      software development. Prior to Epicodus I was an active
                      member of the craft beer industry as the general manager
                      of Bailey's Taproom in Portland, Oregon. I am a
                      communicative, detail oriented, team player who presents
                      technical information effectively with a passion for
                      education and personal growth. Take a look at my work or
                      get in touch!
                    </p>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-6xl font-bold mt-20 mb-10 pt-18 text-center text-neutral-content">
              Hobbies
            </h1>
            <div className="flex flex-row gap-4">
              <div className="basis-1/2 flex flex-col justify-center items-center">
                <h6 className="text-3xl font-bold mt-10 pt-18 text-center text-neutral-content">
                  Chess
                </h6>
                <p className="text-center mb-8 text-neutral-content">
                  Data provided via the Chess.com API
                </p>
                <div class="stats shadow">
                  <div class="stat place-items-center">
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">
                      From January 1st to February 1st
                    </div>
                  </div>

                  <div class="stat place-items-center">
                    <div class="stat-title">Users</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                  </div>

                  <div class="stat place-items-center">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 flex flex-col justify-center items-center">
                <h6 className="text-3xl font-bold mt-10 pt-18 text-center text-neutral-content">
                  Running
                </h6>
                <p className="text-center mb-8 text-neutral-content">
                  Data provided via the MapMyRun API
                </p>

                <div class="stats shadow">
                  <div class="stat place-items-center">
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">
                      From January 1st to February 1st
                    </div>
                  </div>

                  <div class="stat place-items-center">
                    <div class="stat-title">Users</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                  </div>

                  <div class="stat place-items-center">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 content-centeritems-center">
              <div className="basis-full flex flex-col justify-center items-center">
                <h6 className="text-3xl font-bold mt-10 pt-18 text-center text-neutral-content">
                  Coding
                </h6>
                <p className="text-center mb-8 text-neutral-content">
                  Data provided via the GitHub API
                </p>
                <div class="stats shadow">
                  <div class="stat place-items-center">
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">
                      From January 1st to February 1st
                    </div>
                  </div>

                  <div class="stat place-items-center">
                    <div class="stat-title">Users</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                  </div>

                  <div class="stat place-items-center">
                    <div class="stat-title">Users</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                  </div>

                  <div class="stat place-items-center">
                    <div class="stat-title">Users</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                  </div>

                  <div class="stat place-items-center">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
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

export default About;
