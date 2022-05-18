import React from "react";
import "../index.css";
import "animate.css";

const Intro = () => {
  return (
    <div className="my-40">
      <div className="curved-div upper">
        <svg viewBox="0 0 1440 319">
          <path
            fill="hsl(var(--p))"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="curved-div">
        <h1 className="text-5xl font-bold text-accent animate__animated animate__bounceInLeft">
          Ryan Spencer
        </h1>
        <h6 className="py-8 text-2xl text-accent animate__animated animate__bounceInRight">
          Software Engineer | Portland, Oregon
        </h6>
        <a
          href="#projects"
          className="btn btn-secondary animate__animated animate__bounceInUp"
        >
          Projects
        </a>
        <svg viewBox="0 0 1440 319">
          <path
            fill="hsl(var(--b1))"
            fillOpacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Intro;
