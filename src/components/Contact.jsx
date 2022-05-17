import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-20 bg-neutral-content">
        <div className="w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold my-20 pt-18 text-center text-secondary underline underline-offset-8">
              Contact
            </h1>
            <div class="py-12 card shadow-xl p-20 bg-base-300">
              <h2 class="text-2xl font-bold">Get In Touch</h2>
              <div class="mt-8 max-w-md">
                <div class="grid grid-cols-1 gap-6">
                  <label class="block">
                    <span class="text-gray-700">Full name</span>
                    <input
                      type="text"
                      class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                      placeholder=""
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700">Email address</span>
                    <input
                      type="email"
                      class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                      placeholder="john@example.com"
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700">When is your event?</span>
                    <input
                      type="date"
                      class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700">What type of event is it?</span>
                    <select
                      class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                    >
                      <option>Corporate event</option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label class="block">
                    <span class="text-gray-700">Additional details</span>
                    <textarea
                      class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                      rows="3"
                    ></textarea>
                  </label>
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
