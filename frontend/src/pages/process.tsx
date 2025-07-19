import React from "react";
import { motion } from "framer-motion";
const skills = [
  {
    category: "Languages",
    tools: [
      {
        name: "Java",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "TypeScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "SQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Bash",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
      {
        name: "C++",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    tools: [
      {
        name: "Spring Boot",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Hibernate",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg",
      },
    ],
  },
  {
    category: "Microservices & Cloud",
    tools: [
      {
        name: "REST APIs",
        img: "https://img.icons8.com/ios/50/api.png",
      },
      {
        name: "JWT",
        img: "https://ik.imagekit.io/pavanagulla19/jwt.jpg?updatedAt=1752929668715",
      },
      {
        name: "Spring Cloud",
        img: "https://ik.imagekit.io/pavanagulla19/spring-cloud.png?updatedAt=1752929738665",
      },
    ],
  },
  {
    category: "Databases",
    tools: [
      {
        name: "PostgreSQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    category: "DevOps & CI/CD",
    tools: [
      {
        name: "Docker",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "GitHub Actions",
        img: "https://img.icons8.com/ios-filled/50/github.png",
      },
      {
        name: "NGINX",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
    ],
  },
  {
    category: "Tools & Infra",
    tools: [
      {
        name: "Cloudflare",
        img: "https://img.icons8.com/ios-filled/50/cloudflare.png",
      },
      {
        name: "Grafana",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
      },
      {
        name: "VS Code",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "IntelliJ",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
    ],
  },
  {
    category: "Version Control",
    tools: [
      {
        name: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "GitLab",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      },
    ],
  },
];

const Process: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 bg-gradient-to-br from-[#f5f7fa] via-[#edf1f5] to-[#e3e9f0] overflow-hidden">
      {/* Decorative Thick Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e0f2fe]/30 via-[#fdf2f8]/40 to-[#f3e8ff]/30 blur-[100px] opacity-60 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
          Technical Skill Set
        </h2>

        {/* Unified Glassmorphic Container */}
        <motion.div
          className="bg-white/30 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-xl p-10 md:p-16 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-white/40 pb-2">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {group.tools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      className="w-20 h-20 md:w-24 md:h-24 bg-white/60 border border-gray-200 rounded-xl shadow-md flex flex-col items-center justify-center p-2 hover:scale-105 hover:shadow-xl transition-all duration-200"
                      whileHover={{ rotate: 1 }}
                    >
                      <img
                        src={tool.img}
                        alt={tool.name}
                        className="w-10 h-10 mb-1 object-contain"
                      />
                      <span className="text-xs text-center text-gray-800 font-medium">
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
