import React from "react";
import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
  return (
    <div className="text-xl font-semibold text-purple-500">
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Freelancer",
            "MERN Stack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default Type;
