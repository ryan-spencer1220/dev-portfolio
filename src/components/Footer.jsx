import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:justify-between md:p-6">
      <ul class="flex flex-wrap mt-3 text-sm  dark:text-gray-400 sm:mt-0 ">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
