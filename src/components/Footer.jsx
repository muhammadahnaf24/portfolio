// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-white py-8 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 dark:text-white">
        <p>© {new Date().getFullYear()} Muhammad Ahnaf. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
