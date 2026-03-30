import React from "react";
import Navbar from "./Navbar";
import hero from "../assets/Heropng.png";

const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
style={{ backgroundImage: `url(${hero})` }}    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <Navbar />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 max-w-2xl">
        
        <p className="text-orange-400 text-lg mb-2">
          Delicious Cafe
        </p>

        <h1 className="text-5xl text-white md:text-6xl italic leading-tight">
          Sweet Treats, <br /> Perfect Eats
        </h1>

        <div className="flex gap-6 mt-8">
          <button className="bg-orange-500 px-6 py-3 rounded-md">
            Shop Now
          </button>

          <button className="text-white">
            Learn More →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;