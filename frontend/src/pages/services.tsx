import React from "react";
import { Code, Monitor, Server } from "lucide-react";

const services = [
  {
    title: "Backend Development",
    description:
      "I specialize in scalable and secure backend systems using Java (Spring Boot, Spring Security, Spring Cloud) and Node.js. I build RESTful APIs, handle authentication (JWT, OAuth2, RBAC), and architect microservices with API gateways and service discovery.",
    icon: <Server className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Frontend Development",
    description:
      "I craft responsive and performant user interfaces using React and TypeScript. My focus is on building reusable components, managing state efficiently, and delivering intuitive UX across devices.",
    icon: <Monitor className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description:
      "I manage containerized applications using Docker and Kubernetes, configure CI/CD pipelines with GitHub Actions, and monitor systems using Prometheus, Grafana, and the ELK stack. I also handle DNS via Cloudflare and optimize deployments for reliability.",
    icon: <Code className="w-6 h-6 text-purple-600" />,
  },
];

const Services: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f9fc] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What I do?</h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            I’m a fullstack developer with strong expertise in Java, Node.js,
            and DevOps tooling. I build secure, scalable, and observable systems
            from backend APIs to cloud-native deployments.
          </p>

          {/* Technical Skills */}
          <div className="text-sm text-gray-700 space-y-2 bg-white rounded-2xl p-5 border border-gray-200 shadow-md">
            <p>
              <span className="font-semibold text-gray-900">Languages:</span>{" "}
              Java, TypeScript, SQL, Bash, C++
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Frameworks & Libraries:
              </span>{" "}
              Spring Boot, Spring MVC, Spring Security, Hibernate, React
              (TypeScript)
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Microservices & Cloud:
              </span>{" "}
              REST APIs, Spring Cloud (Config, Gateway, Eureka), API Gateway,
              JWT, RBAC
            </p>
            <p>
              <span className="font-semibold text-gray-900">Databases:</span>{" "}
              PostgreSQL, MySQL, MongoDB, Redis
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                DevOps & CI/CD:
              </span>{" "}
              Docker, Kubernetes, Minikube, GitHub Actions, NGINX, Maven, Gradle
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Infrastructure & Tools:
              </span>{" "}
              Cloudflare (DNS API), Prometheus, ELK Stack, Grafana, IntelliJ
              IDEA, VS Code
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Version Control:
              </span>{" "}
              Git, GitHub, GitLab
            </p>
          </div>

          <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg transition duration-200">
            Say Hello!
          </button>
        </div>

        {/* Right Cards */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-white border-l-4 border-purple-600 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
