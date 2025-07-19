import React from "react";

const projects = [
  {
    id: 1,
    image:
      "https://ik.imagekit.io/pavanagulla19/Screenshot%202025-07-18%20123637.png?updatedAt=1752910902975",
    title: "KubeCraft - PaaS Deployment Platform",
    description:
      "Heroku-like PaaS with Docker, Kubernetes, GitHub CI/CD, and custom domain routing.",
  },
  {
    id: 2,
    image:
      "https://ik.imagekit.io/pavanagulla19/Screenshot%202025-07-19%20135528.png?updatedAt=1752913548679",
    title: "Developer Portfolio Website",
    description:
      "Minimalistic personal website built with React and Tailwind showcasing projects and blogs.",
  },
  {
    id: 3,
    image:
      "https://ik.imagekit.io/pavanagulla19/Screenshot%202025-07-19%20144145.png?updatedAt=1752916329680",
    title: "MG Library System",
    description:
      "Spring Boot + PostgreSQL library management platform with email alerts and role-based access.",
  },
  {
    id: 4,
    image:
      "https://ik.imagekit.io/pavanagulla19/Screenshot%202025-07-19%20191440.png?updatedAt=1752932715703",
    title: "HR-Management",
    description:
      "A robust HR management backend featuring resume filtering, role-based access control with Spring Security, and secure authentication using JWT.",
  },
  {
    id: 5,
    image:
      "https://ik.imagekit.io/pavanagulla19/finledger.webp?updatedAt=1752931380352",
    title: "FinLedger Microservices App",
    description:
      "Finance tracking system with Kafka, Redis caching, and Prometheus/Grafana observability.",
  },
  {
    id: 6,
    image:
      "https://ik.imagekit.io/pavanagulla19/quiz-vault.jpg?updatedAt=1752931514521",
    title: "Quiz Vault Mobile App",
    description:
      "Cross-platform quiz app with offline support and Firebase authentication.",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-12 lg:px-24 py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Portfolio
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        Explore a curated collection of real-world projects showcasing expertise
        in full-stack development, backend APIs, frontend design, and database
        integration. Each project highlights practical problem-solving, modern
        tech stacks, and clean, scalable code architecture.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain bg-gray-50"
            />

            <div className="p-4 text-left">
              <p className="text-xs text-gray-400 font-medium mb-1">
                Web Application
              </p>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {project.description}
              </p>
              <button className="px-4 py-1.5 text-sm text-purple-600 border border-purple-600 rounded hover:bg-purple-50 transition font-medium flex items-center space-x-1">
                <span>Case Study</span>
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-purple-600 text-white text-sm px-6 py-2 rounded hover:bg-purple-700 transition font-medium">
          More Project
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
