// src/components/ProjectCard.jsx
import { Github, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ProjectCard = ({ project, index }) => {
  const techBadges = project.technologies.map((tech, i) => (
    <span
      key={i}
      className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 
                 text-blue-600 dark:text-blue-400 font-medium"
    >
      {tech}
    </span>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800/50 
                 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover object-top transition-transform duration-300 
                   group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      flex items-end"
        >
          <div className="p-4 text-white">
            <p className="font-medium">{project.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3
            className="font-bold text-xl dark:text-white group-hover:text-blue-600 
                       dark:group-hover:text-blue-400 transition-colors"
          >
            {project.title}
          </h3>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm">{project.stars}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">{techBadges}</div>

        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700
                     text-gray-700 dark:text-gray-300 hover:bg-gray-200 
                     dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 rounded-lg bg-blue-600 
                     text-white hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
