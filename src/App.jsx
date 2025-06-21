import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light-theme"
  );

  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Router>
        <Navbar
          brandName="TextUtils"
          aboutText="About"
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-[80%] mx-auto my-5">
                <TextForm
                  heading="Enter Your Text Below To Make UPPERCASE"
                  theme={theme}
                />
              </div>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
