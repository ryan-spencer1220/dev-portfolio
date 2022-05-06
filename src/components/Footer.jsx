import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:justify-between md:p-6">
      <ul class="flex flex-wrap mt-3 text-sm  dark:text-gray-400 sm:mt-0 ">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            GitHub
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Medium
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
