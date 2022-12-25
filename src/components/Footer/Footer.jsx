import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="inner">
          <div className="powered">
            Powered by
            <a href="https://github.com/labCap" target="_blank">
              labCap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
