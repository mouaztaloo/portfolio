import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./styles/theme";
import TopBar from "./components/TopBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Job from "./pages/Job";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode === "light" || savedMode === "dark") {
      setMode(savedMode);
    }
  }, []);

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <TopBar onToggleTheme={toggleMode} mode={mode} />
      <div id="welcome">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="job">
        <Job />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </ThemeProvider>
  );
}
