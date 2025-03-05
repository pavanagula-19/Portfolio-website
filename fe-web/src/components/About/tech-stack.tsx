import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

const Techstack: React.FC = () => {
  const techIcons = [
    CgCPlusPlus,
    DiJavascript1,
    SiTypescript,
    DiNodejs,
    DiReact,
    DiMongodb,
    SiNextdotjs,
    DiGit,
    SiFirebase,
    SiRedis,
    SiPostgresql,
    DiPython,
    DiJava,
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 pb-12">
      {techIcons.map((Icon, index) => (
        <div
          key={index}
          className="text-6xl text-white p-6 bg-gray-700 rounded-lg shadow-lg hover:scale-110 transition-transform"
        >
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default Techstack;
