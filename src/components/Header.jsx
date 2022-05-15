import "../index.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function Header({ Component, pageProps }) {
  const themeValues = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  useEffect(() => {
    themeChange(false);
  });

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLineCap="round"
                strokeLineJoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p>Homepage</p>
            </li>
            <li>
              <p>Portfolio</p>
            </li>
            <li>
              <p>About</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <p className="btn btn-ghost normal-case text-xl">Ryan Spencer</p>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary">Contact</button>
        <div className="dropdown dropdown-end dropdown-secondary">
          <select
            className="text-primary btn btn-secondary m-1"
            data-choose-theme
          >
            <option className="text-primary dropdown" option value="">
              Themes
            </option>
            {themeValues.map((value) => (
              <option
                className="text-primary"
                key={value.toLowerCase()}
                value={value.toLowerCase()}
              >
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
