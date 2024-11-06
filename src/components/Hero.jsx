import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import PropTypes from "prop-types";

const Hero = ({ onNavigate }) => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
              Hi, Im{" "}
              <span className="text-blue-600 dark:text-blue-400">Ahnaf</span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300">
              Full-Stack Developer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Building robust and scalable applications with modern web
            technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => onNavigate("projects")}
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={() => onNavigate("contact")}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400 cursor-pointer"
              onClick={() => onNavigate("about")}
            >
              <ArrowDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default Hero;
