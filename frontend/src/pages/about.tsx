import React from "react";
import {
  Facebook,
  Linkedin,
  Palette,
  Code,
  Server,
  Settings,
  Github,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-[#fef9ff] to-[#e1f7f4] px-4 md:px-10 py-16">
      {/* About Me Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Profile Image and Socials */}
        <div className="flex flex-col items-center">
          <img
            src="https://ik.imagekit.io/pavanagulla19/WhatsApp%20Image%202025-07-19%20at%2011.45.07%20AM.jpeg?updatedAt=1752905934440"
            alt="Profile"
            className="w-[180px] h-[220px] object-cover rounded-md"
          />
          {/* Social Links */}
          <div className="mt-4 flex items-center gap-3">
            {[
              {
                icon: <Facebook className="w-5 h-5" />,
                label: "Facebook",
              },
              {
                icon: <Github className="w-5 h-5" />,
                label: "Instagram",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                label: "LinkedIn",
              },
            ].map((item, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-purple-100 text-purple-600 shadow-sm hover:bg-purple-100 hover:text-purple-800 transition-all duration-200"
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Description & Buttons */}
        <div className="text-center lg:text-left max-w-xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            I am a Fullstack Developer <br /> & Freelancer
          </h2>
          <p className="text-gray-600 text-sm">
            I specialize in building robust backend systems with Java and Spring
            Boot, and crafting responsive UIs using React and Tailwind CSS. I
            enjoy solving complex technical challenges and bringing fullstack
            solutions to life.
          </p>
          <p className="text-gray-600 text-sm">
            As a freelancer, I collaborate with clients to build scalable web
            platforms, APIs, and deployment pipelines tailored to business
            needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
            <button className="px-5 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition">
              My Projects
            </button>
            <button className="px-5 py-2 border border-purple-600 text-purple-600 text-sm font-semibold rounded hover:bg-purple-600 hover:text-white transition">
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20 max-w-6xl mx-auto px-2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Skill Set
        </h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          Below is a breakdown of my technical expertise and strengths across
          frontend, backend, and DevOps stacks.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "UI/UX",
              desc: "Figma, XD, Wireframing, Prototyping",
              icon: (
                <Palette className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              ),
            },
            {
              title: "Frontend",
              desc: "React, Next.js, Tailwind, Redux",
              icon: <Code className="w-8 h-8 text-purple-600 mx-auto mb-3" />,
            },
            {
              title: "Backend",
              desc: "Java, Spring Boot, Fastify, Node.js",
              icon: <Server className="w-8 h-8 text-purple-600 mx-auto mb-3" />,
            },
            {
              title: "DevOps",
              desc: "Docker, GitHub Actions, Kubernetes",
              icon: (
                <Settings className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              ),
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center"
            >
              {skill.icon}
              <h3 className="font-bold text-lg text-gray-800 mb-1">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-500">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
