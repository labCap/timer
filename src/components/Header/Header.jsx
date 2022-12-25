import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";

import "./Header.scss";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className="container">
        <div className="inner">
          <Logo />

          <nav className="nav">
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
        </div>
      </div>
    </header>
  );
};
