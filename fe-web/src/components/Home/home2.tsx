import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Side - Intro Text */}
        <div className="md:w-7/12 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-6">
            LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />I am fluent in classics like
            <span className="text-purple-500">
              {" "}
              C++, Javascript, and TypeScript.
            </span>
            <br />
            <br />
            My field of interest is building new
            <span className="text-purple-500">
              {" "}
              Web Technologies and Products
            </span>{" "}
            and also areas related to
            <span className="text-purple-500"> Blockchain.</span>
            <br />
            <br />
            Whenever possible, I apply my passion for developing products with{" "}
            <span className="text-purple-500">Node.js</span> and
            <span className="text-purple-500">
              {" "}
              Modern Typescript Libraries & Frameworks
            </span>{" "}
            like
            <span className="text-purple-500"> React.js and Next.js.</span>
          </p>
        </div>

        {/* Right Side - Avatar Image */}
        <div className="md:w-5/12 flex justify-center">
          <Tilt>
            <img
              src={myImg}
              className="w-60 rounded-lg shadow-lg"
              alt="avatar"
            />
          </Tilt>
        </div>
      </div>

      {/* Social Media Section with Proper Spacing */}
      <div className="mt-16 text-center">
        {" "}
        {/* Adjusted mt-16 for clear visibility */}
        <h1 className="text-2xl font-semibold">FIND ME ON</h1>
        <p className="text-gray-300">
          Feel free to <span className="text-purple-500">connect</span> with me
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {" "}
          {/* Fixed spacing */}
          <a
            href="https://github.com/pavanagula-19"
            target="_blank"
            rel="noreferrer"
            className="text-4xl text-white hover:text-purple-500 transition-transform hover:scale-110"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/Pavan06516939"
            target="_blank"
            rel="noreferrer"
            className="text-4xl text-white hover:text-purple-500 transition-transform hover:scale-110"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/pavanagulla/"
            target="_blank"
            rel="noreferrer"
            className="text-4xl text-white hover:text-purple-500 transition-transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/pavan_agulla"
            target="_blank"
            rel="noreferrer"
            className="text-4xl text-white hover:text-purple-500 transition-transform hover:scale-110"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home2;
