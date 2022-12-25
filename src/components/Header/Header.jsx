import React, { useContext, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";

import "./Header.scss";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("_lock");
  };

  return (
    <header>
      <div className="container">
        <div className="inner">
          <Logo />

          <nav className={`nav ${menuOpen && "open"}`}>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to={"/"}>Clock</Link>
              </li>
              <li className="nav__item">
                <Link to={"/stopwatch"}>StopWatch</Link>
              </li>
            </ul>
          </nav>

          <Button className={"theme-btn"} onClick={() => setTheme(!theme)}>
            {theme ? <FaSun /> : <FaMoon />}
          </Button>

          <div
            className={`menu-btn ${menuOpen && "open"}`}
            onClick={handleClick}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};
