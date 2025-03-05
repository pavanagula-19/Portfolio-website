import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { CgGitFork } from "react-icons/cg";
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
  const location = useLocation();

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navColour ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-10" alt="brand" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setExpand(!expand)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex items-center space-x-6 ${expand ? "block" : "hidden"}`}
        >
          {[
            { to: "/", label: "Home", icon: <AiOutlineHome /> },
            { to: "/about", label: "About", icon: <AiOutlineUser /> },
            {
              to: "/project",
              label: "Projects",
              icon: <AiOutlineFundProjectionScreen />,
            },
            { to: "/resume", label: "Resume", icon: <CgFileDocument /> },
          ].map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`relative text-white flex items-center gap-2 transition-all duration-300 ${
                location.pathname === to
                  ? "text-purple-500"
                  : "hover:text-purple-400"
              }`}
              onClick={() => setExpand(false)}
            >
              {icon} {label}
              {/* Animated Underline Effect */}
              <span
                className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-purple-500 transition-all duration-300 ${
                  location.pathname === to ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}

          {/* GitHub Button */}
          <a
            href="https://github.com/pavanagula-19/Portfolio-website"
            target="_blank"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center gap-2 transition-all duration-300"
          >
            <CgGitFork className="text-xl" /> <AiFillStar className="text-lg" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
