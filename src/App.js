import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // Membuat refs untuk semua section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Object untuk menyimpan semua refs
  const sectionRefs = {
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
  };

  // Fungsi scroll yang akan diteruskan ke Navbar
  const scrollToSection = (sectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref?.current) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const elementPosition = ref.current.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // Fungsi scroll untuk Hero section
  const scrollToAbout = () => {
    scrollToSection("about");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onNavigate={scrollToSection} />
      <Hero scrollToAbout={scrollToAbout} />
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
