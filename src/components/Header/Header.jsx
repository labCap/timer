import React, { useContext, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";

import "./Header.scss";

export const Header = ({ menuOpen, handleClickToMenuBtn = (f) => f }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className="container">
        <div className="inner">
          <Logo />

          <Nav menuOpen={menuOpen} />

          <Button className={"theme-btn"} onClick={() => setTheme(!theme)}>
            {theme ? <FaSun /> : <FaMoon />}
          </Button>

          <div
            className={`menu-btn ${menuOpen && "open"}`}
            onClick={handleClickToMenuBtn}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};
