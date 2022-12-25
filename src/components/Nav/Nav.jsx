import React from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

export const Nav = ({ menuOpen }) => {
  return (
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
  );
};
