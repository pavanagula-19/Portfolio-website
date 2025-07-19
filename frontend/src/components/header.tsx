import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Process", path: "/process" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Services", path: "/services" },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleContact = () => {
    setIsOpen(false);
    navigate("/contact");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-6 py-3 border-b border-gray-200 bg-white z-50 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
            P
          </div>
          <span className="text-lg font-semibold text-gray-900">Pavan</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative transition duration-200 ease-in-out hover:text-black ${
                  isActive ? "text-black" : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 bg-purple-500 transition-all duration-300 transform ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    } origin-left`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button
            className="px-4 py-1.5 bg-purple-500 text-white text-sm font-medium rounded hover:bg-purple-600 transition"
            onClick={handleContact}
          >
            Contact
          </button>
        </div>

        {/* Hamburger for Mobile */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-xl backdrop-blur-lg border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-start px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium w-full text-left transition-colors duration-200 ${
                      isActive ? "text-purple-600" : "text-gray-800"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <button
                onClick={handleContact}
                className="mt-2 w-full bg-purple-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-purple-600 transition"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
