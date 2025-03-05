import React, { useEffect, useState } from "react";

const generateStars = (numStars: number, width: number, height: number) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * 1.2 + 0.3;
    const opacity = Math.random() * 0.4 + 0.2;

    stars.push(
      <circle key={i} cx={x} cy={y} r={radius} fill="white" opacity={opacity} />
    );
  }
  return stars;
};

const StarrySkySVG: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      width={dimensions.width}
      height={dimensions.height}
      xmlns="http://www.w3.org/2000/svg"
    >
      {generateStars(200, dimensions.width, dimensions.height)}
    </svg>
  );
};

export default StarrySkySVG;
