// src/components/Contact.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Mail, text: "Email", href: "mailto:your.email@example.com" },
    {
      icon: Linkedin,
      text: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
    },
    { icon: Github, text: "GitHub", href: "https://github.com/yourusername" },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map(({ icon: Icon, text, href }) => (
            <a
              key={text}
              href={href}
              className="flex items-center text-gray-600 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-6 h-6 mr-2" />
              {text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
