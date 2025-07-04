import React, { useRef, useEffect } from "react";
import Navbar from "../Components/Navbar"
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactmeRef = useRef(null);

  const refs = {
    home: homeRef,
    about: aboutRef,
    projects: projectRef,
    skills: skillsRef,
    contactme: contactmeRef,
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      <Navbar refs={refs} />
      <div ref={homeRef}>
        <Header />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactmeRef}>
        <ContactForm />
      </div>
     <Footer/>
    </div>
  );
};

export default HomePage;
