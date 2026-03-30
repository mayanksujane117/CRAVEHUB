import React from "react";

const Offer = () => {
  return (
    <div
      className="w-full h-[350px] bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1608198093002-ad4e005484ec')",
      }}
    >
      {/* Overlay */}
      <div className="bg-white/80 p-8 rounded-lg max-w-xl">
        
        <h2 className="text-3xl md:text-4xl font-serif italic text-orange-800 mb-4">
          20% Off Your <br /> First Order
        </h2>

        <p className="text-gray-700 mb-6">
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum.
        </p>

        <button className="bg-orange-700 text-white px-6 py-3 rounded-md hover:bg-orange-800 transition">
          Learn More
        </button>

      </div>
    </div>
  );
};

export default Offer;