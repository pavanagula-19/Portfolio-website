import React from "react";

interface PreProps {
  load: boolean;
}

const Pre: React.FC<PreProps> = ({ load }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-900 flex items-center justify-center transition-opacity duration-700 ${
        load ? "opacity-100 visible z-50" : "opacity-0 invisible -z-50"
      }`}
    >
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Pre;
