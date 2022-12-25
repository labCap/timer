import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Clock } from "../Clock/Clock";
import { StopWatch } from "../StopWatch/StopWatch";
import "./Main.scss";

export const Main = ({
  ctime,
  stopWatchTime,
  stopWatchStatus,
  stopWatchStart,
  stopWatchStop,
  stopWatchReset,
  stopWatchResume,
}) => {
  return (
    <main>
      <div className="container">
        <div className="inner">
          <Routes>
            <Route path="/" element={<Clock ctime={ctime} />} />
            <Route
              path="/stopwatch"
              element={
                <StopWatch
                  time={stopWatchTime}
                  status={stopWatchStatus}
                  start={stopWatchStart}
                  stop={stopWatchStop}
                  reset={stopWatchReset}
                  resume={stopWatchResume}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </main>
  );
};
