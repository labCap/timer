import { useContext } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ThemeContext } from "./context/ThemeProvider";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`wrapper ${theme ? "dark" : "light"}`}>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
