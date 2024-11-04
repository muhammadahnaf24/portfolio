// src/components/Projects.jsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-200 h-48"></div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2">Project {project}</h3>
        <p className="text-gray-600 mb-4">
          A brief description of the project and the technologies used.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <ProjectCard key={project} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
