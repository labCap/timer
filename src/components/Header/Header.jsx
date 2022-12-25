import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
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
          <Button className={"theme-btn"} onClick={() => setTheme(!theme)}>
            {theme ? <FaSun /> : <FaMoon />}
          </Button>
        </div>
      </div>
    </header>
  );
};
