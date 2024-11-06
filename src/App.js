import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // Create refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);

  // Store refs in an object
  const sectionRefs = {
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
    hero: heroRef,
  };

  // General scroll function for any section
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onNavigate={scrollToSection} />
      <section ref={heroRef} id="hero">
        {" "}
        <Hero scrollToAbout={() => scrollToSection("about")} />
      </section>

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
