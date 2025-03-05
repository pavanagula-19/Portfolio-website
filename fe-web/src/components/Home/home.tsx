import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./home2";
import Type from "./type";
import StarrySkySVG from "../particles";

const Home: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col">
      <StarrySkySVG />
      <div className="container mx-auto flex-1 px-6 py-16 flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left Content */}
          <div className="md:w-7/12 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">
              Hi There!{" "}
              <span role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="text-4xl font-bold">
              I'M <strong className="text-purple-500"> Pavan Agulla</strong>
            </h1>
            <div className="mt-6 text-left">
              <Type />
            </div>
          </div>

          <div className="md:w-5/12 flex justify-center mt-6 md:mt-0">
            <img
              src={homeLogo}
              alt="home pic"
              className="max-h-[450px] w-full md:max-w-sm"
            />
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
};

export default Home;
