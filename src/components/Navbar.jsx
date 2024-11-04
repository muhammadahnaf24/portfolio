// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">John Doe</h1>
          <div className="space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
