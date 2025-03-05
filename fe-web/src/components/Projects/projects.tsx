import React from "react";
import ProjectCard from "./project-card";
import StarrySkySVG from "../particles";

const Projects: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white py-12 px-6">
     <StarrySkySVG/>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          My Recent <span className="text-purple-500">Works</span>
        </h1>
        <p className="text-gray-300 mb-8">
          Here are a few projects I've worked on recently.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <ProjectCard
            imgPath="https://ik.imagekit.io/pavanagulla19/Screenshot%20from%202025-03-04%2016-50-09.png?updatedAt=1741112887621"
            isBlog={false}
            title="Presento-App"
            description="Personal Chat Room or Workspace built with React.js, Material-UI, and Firebase. Features include real-time messaging, image sharing, and message reactions."
            ghLink="https://github.com/pavanagula-19/Presento-App"
            demoLink="https://presento-notes-app.netlify.app"
          />
          <ProjectCard
            imgPath="https://ik.imagekit.io/pavanagulla19/Screenshot%20from%202025-03-04%2016-50-09.png?updatedAt=1741112887621"
            isBlog={false}
            title="Socio-Hub"
            description="Personal blog built with Next.js and Tailwind CSS. Uses markdown files for content, supports dark mode, and easy blogging."
            ghLink="https://github.com/pavanagula-19/Socio-Hub"
            demoLink="https://blogs.tech/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
