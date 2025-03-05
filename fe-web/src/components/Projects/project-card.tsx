import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface ProjectCardsProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog = false,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white max-w-md mx-auto">
      <img src={imgPath} alt="card-img" className="w-full rounded-md mb-4" />
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 text-sm mb-4 text-justify">{description}</p>
        <div className="flex justify-center gap-4">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <BsGithub /> {isBlog ? "Blog" : "GitHub"}
          </a>
          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <CgWebsite /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;