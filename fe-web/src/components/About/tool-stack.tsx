import React from "react";
import { VscVscode } from "react-icons/vsc";
import { SiPostman, SiSlack, SiVercel, SiMacos } from "react-icons/si";
import { IconType } from "react-icons";

const Toolstack: React.FC = () => {
  const tools: IconType[] = [SiMacos, VscVscode, SiPostman, SiSlack, SiVercel];

  return (
    <div className="flex flex-wrap justify-center gap-8 pb-12">
      {tools.map((Icon, index) => (
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

export default Toolstack;
