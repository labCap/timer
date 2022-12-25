import React, { useState } from "react";
import "./Clock.scss";

export const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(updateTime, 1000);

  return <h1 className="clock">{ctime}</h1>;
};
