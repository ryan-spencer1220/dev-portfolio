import React from "react";
import "../index.css";

const About = () => {
  return (
    <>
      <div className="mx-auto flex flex-wrap md items-center h-screen pt-18 bg-accent-content">
        <div className=" w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold m-20 pt-18 text-center text-neutral-content">
              About
            </h1>
            <div className="grid gap-50 grid-cols-2 justify-items-center gap-y-44">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Running</div>
                  <div className="stat-value">1,000 Miles</div>
                  <div className="stat-desc">Miles Ran Since 2014</div>
                </div>
              </div>
              <div class="card w-196 bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">About Me</h2>
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
                  <div class="card-actions justify-end"></div>
                </div>
              </div>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Chess.com</div>
                  <div className="stat-value">1600 Elo</div>
                  <div className="stat-desc">Current Rating</div>
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
