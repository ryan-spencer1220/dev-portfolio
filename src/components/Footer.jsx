import React from "react";
import "../index.css";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/ryan-spencer1220">
            <IconContext.Provider
              value={{
                size: "3em",
                className: "global-class-name text-accent",
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
                className: "global-class-name text-accent",
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
                className: "global-class-name text-accent",
              }}
            >
              <div>
                <BsMedium />
              </div>
            </IconContext.Provider>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - Ryan Spencer</p>
      </div>
    </footer>
  );
};

export default Footer;
