import React from "react";
import { Button } from "../Button/Button";

import "./StopWatch.scss";

export const StopWatch = ({ time, status, start, stop, reset, resume }) => {
  return (
    <div>
      <h1 className="display clock">
        {(time.h >= 10 ? time.h : "0" + time.h) +
          ":" +
          (time.m >= 10 ? time.m : "0" + time.m) +
          ":" +
          (time.s >= 10 ? time.s : "0" + time.s) +
          ":" +
          (time.ms >= 10 ? time.ms : "0" + time.ms)}
      </h1>

      {status === 0 ? (
        <div className="buttons">
          <Button className={"btn"} onClick={start}>
            start
          </Button>
        </div>
      ) : (
        ""
      )}

      {status === 1 ? (
        <div className="buttons">
          <Button className={"btn tomato"} onClick={stop}>
            stop
          </Button>
          <Button className={"btn gold"} onClick={reset}>
            reset
          </Button>
        </div>
      ) : (
        ""
      )}

      {status === 2 ? (
        <div className="buttons">
          <Button className={"btn"} onClick={resume}>
            resume
          </Button>
          <Button className={"btn gold"} onClick={reset}>
            reset
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
