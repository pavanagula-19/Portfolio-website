import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white py-4 fixed bottom-0 left-0">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center px-6">
        {/* Left Side - Copyright & Credits */}
        <div className="text-sm text-gray-400">
          <h3>Designed & Developed by Pavan Agulla</h3>
          <h3>Copyright © {year} AP</h3>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/pavanagula-19"
            className="text-white text-2xl hover:text-purple-500 transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/"
            className="text-white text-2xl hover:text-purple-500 transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/"
            className="text-white text-2xl hover:text-purple-500 transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-white text-2xl hover:text-purple-500 transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
