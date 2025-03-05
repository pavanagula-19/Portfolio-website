import React from "react";
import Github from "./git-hub";
import Techstack from "./tech-stack";
import AboutCard from "./about-card";
import Toolstack from "./tool-stack";
import laptopImg from "../../Assets/about.png";
import StarrySkySVG from "../particles";

const About: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      <StarrySkySVG />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-14">
          <div className="md:w-6/12 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl font-bold text-purple-500 mb-6">
              Know Who <span className="text-white">I'M</span>
            </h1>
            <AboutCard />
          </div>

          <div className="md:w-6/12 flex justify-center animate-fade-in">
            <img
              src={laptopImg}
              alt="about"
              className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold text-purple-500 mb-6">
            Professional <span className="text-white">Skillset</span>
          </h1>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <Techstack />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold text-purple-500 mb-6">
            <span className="text-white">Tools</span> I Use
          </h1>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <Toolstack />
          </div>
        </div>

        <div className="mt-16 text-center">
          <Github />
        </div>
      </div>
    </div>
  );
};

export default About;
