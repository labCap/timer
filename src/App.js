import { useContext, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ThemeContext } from "./context/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);

  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const [stopWatchTime, setStopWatchTime] = useState({
    ms: 0,
    s: 0,
    m: 0,
    h: 0,
  });
  const [stopWatchInterv, setStopWatchInterv] = useState();
  const [stopWatchStatus, setStopWatchStatus] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  // logic for clock
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
    setTimeout(updateTime, 1000);
  };

  setTimeout(updateTime, 1000);

  // Logic for the stopwatch
  let updateMs = stopWatchTime.ms;
  let updateS = stopWatchTime.s;
  let updateM = stopWatchTime.m;
  let updateH = stopWatchTime.h;

  const stopWatchRun = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 99) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;

    return setStopWatchTime({
      ms: updateMs,
      s: updateS,
      m: updateM,
      h: updateH,
    });
  };

  const stopWatchStart = () => {
    stopWatchRun();
    setStopWatchStatus(1);
    setStopWatchInterv(setInterval(stopWatchRun, 10));
  };

  const stopWatchStop = () => {
    clearInterval(stopWatchInterv);
    setStopWatchStatus(2);
  };

  const stopWatchReset = () => {
    clearInterval(stopWatchInterv);
    setStopWatchTime({
      ms: 0,
      s: 0,
      m: 0,
      h: 0,
    });
    setStopWatchStatus(0);
  };

  const stopWatchResume = () => stopWatchStart();

  const handleClickToMenuBtn = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("_lock");
  };

  return (
    <Router>
      <div className={`wrapper ${theme ? "dark" : "light"}`}>
        <Header
          menuOpen={menuOpen}
          handleClickToMenuBtn={handleClickToMenuBtn}
        />

        <Main
          ctime={ctime}
          stopWatchTime={stopWatchTime}
          stopWatchStatus={stopWatchStatus}
          stopWatchStart={stopWatchStart}
          stopWatchStop={stopWatchStop}
          stopWatchReset={stopWatchReset}
          stopWatchResume={stopWatchResume}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
