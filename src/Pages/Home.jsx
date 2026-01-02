import { useState, useEffect } from "react";

import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import EducationExperience from "../components/Edu_Exp.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Skills from "../components/Skills.jsx";
import Portfolios from "../components/Portfolio.jsx";
function Home() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "education",
        "portfolio",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-mono bg-gray-900 text-gray-100 min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <EducationExperience />
        <Portfolios />
        <Contact />
      </main>
      <footer className="bg-gray-800 py-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Koushik Karmakar. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
