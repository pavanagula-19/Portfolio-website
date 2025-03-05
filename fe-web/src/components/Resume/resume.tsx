import React, { useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import StarrySkySVG from "../particles";

// ✅ PDF URL
const RESUME_URL =
  "https://ik.imagekit.io/pavanagulla19/Resume/Pavan_Resume-2.pdf?updatedAt=1741159099389";

const Resume: React.FC = () => {
  useEffect(() => {
    // If you had logic here related to 'isOpen', you can keep it.
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white py-12 px-6 flex flex-col items-center relative">
      {/* Animated Background */}
      <StarrySkySVG />

      {/* Download Button */}
      <div className="flex justify-center mb-6">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded flex items-center gap-2"
        >
          <AiOutlineDownload /> Download CV
        </a>
      </div>

      {/* Static PDF Viewer */}
      <div className="w-full max-w-4xl h-[80vh] border border-gray-700 rounded-lg overflow-hidden bg-gray-800 shadow-lg">
        <iframe src={RESUME_URL} title="Resume PDF" className="w-full h-full" />
      </div>

      {/* Second Download Button */}
      <div className="flex justify-center mt-6">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded flex items-center gap-2"
        >
          <AiOutlineDownload /> Download CV
        </a>
      </div>
    </div>
  );
};

export default Resume;
