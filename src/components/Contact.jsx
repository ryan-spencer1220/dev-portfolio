import React from "react";
import "../index.css";
import { Box, TextField } from "@mui/material";

const Contact = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-20 bg-neutral-content">
        <div className="w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold my-20 pt-18 text-center text-secondary">
              Contact
            </h1>
            <div className="container items-center text-center">
              <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">Get In Touch</h2>
                  <form>
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered input-secondary input-md w-full max-w-xs m-6"
                    />
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered input-md w-full max-w-xs m-6"
                    />
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered input-md w-full max-w-xs m-6"
                    />
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered input-md w-full max-w-xs m-6"
                    />
                    <div class="card-actions justify-end">
                      <div className="mt-16 font-light text-center items-center">
                        <button className="btn btn-lg btn-secondary">
                          Contact
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
