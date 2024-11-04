// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frontend Developer & UI Designer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I craft beautiful and functional web experiences
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
