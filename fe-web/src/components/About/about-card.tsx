import React from "react";
import { ImPointRight } from "react-icons/im";

const AboutCard: React.FC = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white max-w-lg mx-auto">
      <blockquote className="text-justify">
        <p className="mb-4">
          Hi Everyone, I am <span className="text-purple-400">Pavan Agula</span>
          from <span className="text-purple-400">Telangana, India.</span>
          <br />
          I am current a fresher.
          <br />
          I have completed Integrated B.Tech in Computer Science and Engineering.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="list-none space-y-2">
          <li className="flex items-center">
            <ImPointRight className="text-purple-400 mr-2" /> Playing Games
          </li>
          <li className="flex items-center">
            <ImPointRight className="text-purple-400 mr-2" /> Writing Tech Blogs
          </li>
          <li className="flex items-center">
            <ImPointRight className="text-purple-400 mr-2" /> Travelling
          </li>
        </ul>

        <p className="text-purple-300 mt-4 italic">
          "Strive to build things that make a difference!"
        </p>
        <footer className="mt-2 text-gray-400">Pavan</footer>
      </blockquote>
    </div>
  );
};

export default AboutCard;
