// src/components/Projects.jsx
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import todoImage from "../assets/todolist.webp";

const Projects = () => {
  const projects = [
    {
      title: "Todolist App",
      description:
        "A  simple todo list app built with React and Redux. Allows users to add, remove and edit tasks.",
      image: todoImage,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/muhammadahnaf24/todolist-app",
      demo: "https://todolist-app-dun-seven.vercel.app/",
      stars: 45,
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "/api/placeholder/800/600",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/yourusername/taskmanager",
      demo: "https://demo-tasks.com",
      stars: 32,
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses",
      image: "/api/placeholder/800/600",
      technologies: ["React", "Python", "TensorFlow", "WebSocket"],
      github: "https://github.com/yourusername/aichat",
      demo: "https://demo-aichat.com",
      stars: 78,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white 
                                    dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 
                       to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text 
                       text-transparent"
          >
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in full-stack development and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
