import React, { useState } from "react";
import Button from "./Button";
import "../index.css";

function Header() {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-5">
        <div className="space-y-2">
          <span className="block w-5 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-8 h-0.5 bg-gray-600"></span>
        </div>
        <div className="font-bold text-2xl cursor-pointer font-[Poppins] text-gray-800">
          Ryan Spencer
        </div>
        <Button>Contact</Button>
      </div>
    </div>
  );
}

export default Header;
