import React from "react";

const About = () => {
  return (
    <div
      className="w-full h-[300px] bg-cover bg-center relative flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509440159596-0249088772ff')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        
        <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-4">
          About us
        </h2>

        <p className="text-gray-300 mb-6">
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis.
        </p>

        <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition">
          Read More
        </button>

      </div>
    </div>
  );
};

export default About;