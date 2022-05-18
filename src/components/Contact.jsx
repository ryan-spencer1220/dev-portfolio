import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <>
      <div
        className="flex flex-wrap md items-center h-screen pt-20 bg-neutral-content"
        id="contact"
      >
        <div className="w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold my-20 pt-18 text-center text-secondary underline underline-offset-8">
              Contact
            </h1>
            <div class="py-12 card shadow-xl p-20 bg-base-300">
              <h2 class="text-2xl font-bold mx-10">Get In Touch</h2>
              <div class="mt-8 max-w-md mx-10">
                <div class="grid grid-cols-1 gap-6">
                  <label class="block">
                    <span class="text-gray-700 block">Name</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered input-info w-full max-w-s"
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700 block">Email</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered input-info w-full max-w-s"
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700 block">Phone Number</span>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered input-info w-full max-w-s"
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700 block">Message</span>
                    <input
                      type="text-area"
                      placeholder="Type here"
                      class="input input-bordered input-info w-full max-w-s"
                    />
                  </label>
                </div>
                <button className="btn btn-secondary mt-6">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
