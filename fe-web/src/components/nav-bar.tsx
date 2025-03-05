import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const NavBar: React.FC = () => {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navColour ? "bg-gray-900 shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-10" alt="brand" />
        </Link>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setExpand(!expand)}
        >
          ☰
        </button>
        <div
          className={`md:flex items-center space-x-6 ${expand ? "block" : "hidden"}`}
        >
          <Link
            to="/"
            className="text-white flex items-center gap-2"
            onClick={() => setExpand(false)}
          >
            <AiOutlineHome /> Home
          </Link>
          <Link
            to="/about"
            className="text-white flex items-center gap-2"
            onClick={() => setExpand(false)}
          >
            <AiOutlineUser /> About
          </Link>
          <Link
            to="/project"
            className="text-white flex items-center gap-2"
            onClick={() => setExpand(false)}
          >
            <AiOutlineFundProjectionScreen /> Projects
          </Link>
          <Link
            to="/resume"
            className="text-white flex items-center gap-2"
            onClick={() => setExpand(false)}
          >
            <CgFileDocument /> Resume
          </Link>
          <a
            href="https://github.com/pavanagula-19/Portfolio-website"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <CgGitFork className="text-xl" /> <AiFillStar className="text-lg" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
