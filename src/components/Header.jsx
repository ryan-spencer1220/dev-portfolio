import "../index.css";

function Header() {
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
        <button className="btn">Contact</button>
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn m-1">
            Themes
          </label>
          <ul
            tabindex="0"
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p>Item 1</p>
            </li>
            <li>
              <p>Item 2</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
