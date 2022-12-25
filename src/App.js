import { useContext, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ThemeContext } from "./context/ThemeProvider";

function App() {
  const { theme } = useContext(ThemeContext);

  // logic for clock
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
    setTimeout(updateTime, 1000);
  };

  setTimeout(updateTime, 1000);

  //логіка для секундоміра

  return (
    <div className={`wrapper ${theme ? "dark" : "light"}`}>
      <Header />

      <Main ctime={ctime} />

      <Footer />
    </div>
  );
}

export default App;
