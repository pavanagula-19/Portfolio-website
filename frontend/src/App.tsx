import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Process from "./pages/process";
import Services from "./pages/services";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
