import React, { useState, useEffect } from "react";
import Preloader from "../src/components/pre";
import Navbar from "./components/nav-bar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Footer from "./components/footer";
import Resume from "./components/Resume/resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/scroll-top";
import "./style.css";
import "./App.css";

const App: React.FC = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div
        className={`w-full min-h-screen ${load ? "overflow-hidden" : "overflow-auto"}`}
      >
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
