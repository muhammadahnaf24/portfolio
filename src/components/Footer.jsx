// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
