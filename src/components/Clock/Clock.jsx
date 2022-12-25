import React, { useState } from "react";
import "./Clock.scss";

export const Clock = ({ ctime }) => {
  return <h1 className="clock">{ctime}</h1>;
};
