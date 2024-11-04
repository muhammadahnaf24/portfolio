// src/components/About.jsx
import React from "react";

const About = () => {
  const skills = ["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js"];

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-gray-600">
              Hi! I'm a passionate frontend developer with 5 years of experience
              in creating modern web applications. I specialize in React,
              TypeScript, and modern CSS frameworks.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
