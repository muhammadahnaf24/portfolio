// Contact.jsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      text: "Email",
      subtext: "muhammadahnav@gmail.com",
      href: "mailto:muhammadahnav@gmail.com",
      color: "hover:text-red-600 dark:hover:text-red-400",
    },
    {
      icon: Linkedin,
      text: "LinkedIn",
      subtext: "Connect with me",
      href: "https://www.linkedin.com/in/muhammad-ahnaf-ardiansyah-378187281/",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: Github,
      text: "GitHub",
      subtext: "See my repositories",
      href: "https://github.com/muhammadahnaf24",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: MessageSquare,
      text: "Discord",
      subtext: "Let's chat",
      href: "https://discord.com/users/yourusername",
      color: "hover:text-indigo-600 dark:hover:text-indigo-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50 
                                   dark:from-gray-800 dark:to-gray-900"
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
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Im always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {socialLinks.map(({ icon: Icon, text, subtext, href, color }) => (
            <motion.a
              key={text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-6 rounded-xl bg-white 
                       dark:bg-gray-800/50 border border-gray-100 
                       dark:border-gray-700 shadow-lg backdrop-blur-sm 
                       transition-all ${color}`}
            >
              <Icon className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-1 dark:text-white">
                {text}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {subtext}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center px-6 py-3 rounded-full 
                        bg-blue-100 dark:bg-blue-900/30 text-blue-600 
                        dark:text-blue-400"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">
              Available for freelance projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
