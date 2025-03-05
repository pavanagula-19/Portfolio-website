import React from "react";

const generateStars = (numStars: number) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * 800; // Random X position
    const y = Math.random() * 600; // Random Y position
    const radius = Math.random() * 0.9 + 0.3; // Smaller stars (0.3px - 1.2px)
    const opacity = Math.random() * 0.3 + 0.3; // Dimmer stars (0.3 - 0.6 opacity)

    stars.push(
      <circle key={i} cx={x} cy={y} r={radius} fill="white" opacity={opacity} />
    );
  }
  return stars;
};

const StarrySkySVG: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      {generateStars(150)} {/* Generates 150 tiny dim stars */}
    </svg>
  );
};

export default StarrySkySVG;
