import React, { useEffect, useState } from "react";

const THEMES = [
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

function Header() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const handleThemeChange = (e) => {
    const themeVal = e.target.getAttribute("data-set-theme");
    setTheme(themeVal);
  };

  return (
    <header className="sticky top-0 z-50 py-2 bg-base-100">
      <div className="container">
        <div className="navbar px-0">
          <nav className="navbar-start">
            {/* Mobile view */}
            <div className="dropdown">
              <i
                tabIndex={0}
                className="bi bi-list btn btn-circle btn-primary mr-1 lg:hidden text-2xl"
              ></i>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-200 rounded-box w-60"
              >
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">Services</a>
                </li>
                <li>
                  <a href="#!">About</a>
                </li>
                <li>
                  <a href="#!">Case</a>
                </li>
              </ul>
            </div>
            <div className="">
              <a href="#!" className="btn btn-ghost normal-case text-2xl">
                Chippycode Universe
              </a>
            </div>
          </nav>
          <nav className="navbar-center lg:flex hidden">
            <ul className="menu menu-horizontal p-0 font-medium text-lg">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">Services</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Case</a>
              </li>
            </ul>
          </nav>
          <nav className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn">
                Choose a theme
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-200 rounded-box w-60 max-h-96 overflow-y-auto"
              >
                {THEMES.map((theme, i) => (
                  <li key={theme + i}>
                    <button data-set-theme={theme} onClick={handleThemeChange}>
                      {i + 1 + ". " + theme}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
