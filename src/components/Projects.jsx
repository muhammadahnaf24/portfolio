// src/components/Projects.jsx
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import taskImage from "../assets/task-management.webp";
import chatbotImage from "../assets/chatbot.webp";
import financeTrackerImage from "../assets/finance-tracker.webp";
import recipeImage from "../assets/recipe.webp";
import dashboardImage from "../assets/ecommerce-dashboard.webp";

const Projects = () => {
  const projects = [
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: taskImage,
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/muhammadahnaf24",
      demo: "https://demo-tasks.com",
      stars: 32,
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses",
      image: chatbotImage,
      technologies: ["React", "Python", "TensorFlow", "WebSocket"],
      github: "https://github.com/muhammadahnaf24",
      demo: "https://demo-aichat.com",
      stars: 78,
    },
    {
      title: "Personal Finance Tracker",
      description:
        "An app for managing income and expenses with data visualization, monthly reports, and categorized spending.",
      image: financeTrackerImage,
      technologies: ["React", "NodeJs", "MongoDB", "Chart.js"],
      github: "https://github.com/muhammadahnaf24",
      demo: "https://demo-aichat.com",
      stars: 90,
    },
    {
      title: "Recipe Sharing Platform",
      description:
        "A recipe-sharing app that allows users to search, share, and rate recipes.s",
      image: recipeImage,
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/muhammadahnaf24",
      demo: "https://demo-aichat.com",
      stars: 50,
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "An online store management dashboard that tracks inventory, orders, and sales analysis.",
      image: dashboardImage,
      technologies: ["React", "Express", "PostgreSQL"],
      github: "https://github.com/muhammadahnaf24",
      demo: "https://demo-aichat.com",
      stars: 74,
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
