import React from "react";
import Button from "./Button";
import "../index.css";

const Intro = () => {
  return (
    <div class="hero min-h-screen bg-neutral-content">
      <div class="text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold text-accent">Ryan Spencer</h1>
          <p class="py-6 text-accent">Software Engineer | Portland, Oregon</p>
          <button class="btn btn-primary">Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
