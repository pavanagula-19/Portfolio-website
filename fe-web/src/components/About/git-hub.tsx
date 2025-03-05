import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC = () => {
  return (
    <div className="flex flex-col items-center pb-4">
      <h1 className="text-2xl font-bold text-purple-500 pb-5">
        Days I <span className="text-white">Code</span>
      </h1>
      <GitHubCalendar
        username="pavanagula-19"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={{
          light: ["#ebedf0", "#c084f5", "#9b59b6", "#6d36a8", "#482c7b"],
          dark: ["#1a1b27", "#6246ea", "#7c3aed", "#9333ea", "#6d28d9"],
        }}
      />
    </div>
  );
};

export default Github;
