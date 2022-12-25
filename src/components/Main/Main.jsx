import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import "./Main.scss";

export const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <div className="container">
        <div className="inner">
          {/* <h1>This is a site with the ability to change the subject</h1>
          <h2 className="light">{theme ? "Dark" : "Light"}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            enim, fuga qui eos iure omnis unde. Et quod iure velit quasi, libero
            sapiente esse nulla? Qui eaque odit laborum doloremque.
          </p>
        */}
        </div>
      </div>
    </main>
  );
};
