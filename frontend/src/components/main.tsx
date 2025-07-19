import React from "react";

const Main: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-6 py-12"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f9e6ff 50%, #e1f7f4 100%)",
      }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hello, I’m <br />
              Pavan Agulla
            </h1>
          </div>
          <p className="text-gray-600 text-base max-w-xl">
            I'm a <span className="font-semibold">Freelance</span> and{" "}
            <span className="font-semibold">Fullstack Developer</span> based in
            Telangana, India. I strive to build immersive and scalable web
            applications through clean architecture and user-centric
            experiences.
          </p>
          <button className="px-5 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition">
            Say Hello!
          </button>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div className="bg-white rounded-lg shadow-sm p-4 text-center">
              <h3 className="text-xl font-bold text-purple-700">5 Y.</h3>
              <p className="text-sm text-gray-500 mt-1">Experience</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center">
              <h3 className="text-xl font-bold text-purple-700">66+</h3>
              <p className="text-sm text-gray-500 mt-1">Project Completed</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 text-center">
              <h3 className="text-xl font-bold text-purple-700">20</h3>
              <p className="text-sm text-gray-500 mt-1">Happy Client</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/pavanagulla19/WhatsApp%20Image%202025-07-19%20at%2011.45.07%20AM%20(1).jpeg?updatedAt=1752905934366"
            alt="Pavan Agulla"
            className="w-[300px] md:w-[360px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
